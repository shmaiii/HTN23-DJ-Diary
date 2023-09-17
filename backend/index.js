import express from "express";
import cors from "cors";
import request from "request"; // "Request" library
import axios from "axios";
import { classifyJournal } from "./cohere.js";

import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());

app.use(cors());
app.use(cookieParser());

// hard coded credentials
var CLIENT_ID = "405cb5e4d9194595b89aba03e8e134ab"; // Your client id
var CLIENT_SECRET = "a0bc4a1607584c8f87a10ffd7416510f"; // Your secret
var REDIRECT_URI = "http://localhost:3001/callback";
var accessToken =
  'BQCtXjKVSsmGRhxTJkJ8XFYg-tH7Fdmrd9CsBIzYwDdrgeog5fE-Dt_vThwO5va0NQysw2JYDGrrD1ZKmXCP4PUhHaUqIUENEIRthcmuuCvuNFmKpTi_CugjzKCj0GnDGsMPQ9BqgDhGWFXQepTcjaFkJeOQqjPYgJn0zjzjy5dmQRqu_uaa12C6kN0cEZDdg8z1Dcb4p-4Ke9vzJ8_jNdXRcfYZCUCRODj7zt3bYq8nD_JWgd6G3W18fAksaaLXL2EeUhaZ3Tddg0eznMit9bli9bONOfkPwlY';
var userID;


var authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " + new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
};


// //get userId
// var options = {
//   url: "https://api.spotify.com/v1/me",
//   headers: {
//     Authorization:
//       `Bearer ${accessToken}`
//   },
//   json: true,
// };

// request.get(options, function (error, response, body) {
//   userID = body.id;
//   console.log(userID)
// });

// APIS

app.get("/", (req, res) => {
  res.send('<a href="/api/login">Login with Spotify</a>');
});

var corsOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.get("/api/login", cors(corsOption), (request, response) => {
  
  let scope =
    "user-read-private user-read-email user-library-read user-top-read user-read-recently-played playlist-modify-public playlist-modify-private";
  response.redirect(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      CLIENT_ID +
      "&scope=" +
      encodeURIComponent(scope) +
      "&redirect_uri=" +
      encodeURIComponent(REDIRECT_URI)
  );
});

app.get("/callback", (req, res) => {
  let code = req.query.code || null;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: REDIRECT_URI,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let access_token = body.access_token;
      console.log("Access Token:", access_token);
      accessToken = access_token
      res.send("Success! Check console for the access token.");
    } else {
      res.send("Failed to retrieve access token. Check console for details.");
      console.error(body);
    }
  });

  //get userId
var options = {
  url: "https://api.spotify.com/v1/me",
  headers: {
    Authorization:
      `Bearer ${accessToken}`
  },
  json: true,
};

request.get(options, function (error, response, body) {
  userID = body.id;
  console.log(userID)
});

});


app.post('api/setAccessToken', (req, res) => {
  console.log('Setting access token')
  accessToken = req.body.accessToken
  console.log(accessToken)
})

app.post("/api/createJournal/", async (req, res) => {
  try {
    // classify moods
    console.log(req.body)
    const body = req.body.journal;
    const classificationResult = await classifyJournal(body);
    const label = classificationResult.prediction;
    console.log(label);

    // Get the top tracks

    const favouriteTrackIDs = await getTopTracks();
    const recTracks = await getRecommendationsBasedOnMood(
      label,
      favouriteTrackIDs
    );
    console.log(recTracks);
    const newPlaylist = await createPlaylist(recTracks, label)
    const data = {
      playlistUrl: newPlaylist,
      mood: label
    }

    res.send(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Prolly something wrong with cohere",
      error: err,
    });
  }
});

async function getTopTracks() {
  let favouriteTrackIDs = "";

  const response = await axios.get(
    "https://api.spotify.com/v1/me/top/tracks?limit=3",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`, //+ token
      },
    }
  );

  for (let i = 1; i < response.data.items.length; i++) {
    console.log(response.data.items[i].id);
    favouriteTrackIDs += `${response.data.items[i].id}%2C`;
  }

  if (favouriteTrackIDs.endsWith("%2C")) {
    favouriteTrackIDs = favouriteTrackIDs.slice(0, -3);
  }

  console.log(favouriteTrackIDs);
  return favouriteTrackIDs;
}

async function getRecommendationsBasedOnMood(mood, favouriteTrackIDs) {
  const recDetails = getRecDetails(mood);
  let queryString = `seed_tracks=` + favouriteTrackIDs + "&";
  for (const key in recDetails) {
    if (recDetails.hasOwnProperty(key)) {
      const value = recDetails[key];
      queryString += `${key}=${value}&`;
    }
  }

  if (queryString.endsWith("&")) {
    queryString = queryString.slice(0, -1);
  }

  const response = await axios.get(
    "https://api.spotify.com/v1/recommendations?" + queryString,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`, //+ token
      },
    }
  );

  //console.log(response.data)
  return response.data.tracks;
}

async function createPlaylist(tracks, mood) {
  var playlistLink;
  var playlistId;
  const requestData = {
    "name": `17/09/23 - ${mood}`, 
    "description": "These songs are for you!",
    "public": true
  }
  var uris = [];
  for (const track of tracks) {
    uris.push(track.uri);
  }

  // create playlist
  await axios.post(`https://api.spotify.com/v1/users/${userID}/playlists`, requestData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    console.log(response)
    playlistLink = response.data.external_urls.spotify
    playlistId = response.data.id
  })

  const addTracksBody = {
    "uris": uris,
    "position": 0
  }
  // add tracks
  await axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, addTracksBody, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  })

  return playlistLink
}

function getRecDetails(mood) {
  if (mood === "happy") {
    return {
      min_valence: 0.8,
      min_energy: 0.8,
      min_danceability: 0.7,
    };
  } else if (mood === "hyped") {
    return {
      min_valence: 0.85,
      min_energy: 0.85,
      min_danceability: 0.85,
      min_loudness: 0.7,
    };
  } else if (mood === "sad") {
    return {
      max_valence: 0.25,
      max_danceability: 0.3,
    };
  } else if (mood === "angry") {
    return {
      max_valence: 0.4,
      min_energy: 0.5,
      min_loudness: 0.5,
    };
  } else if (mood === "tired") {
    return {
      max_valence: 0.4,
      max_energy: 0.25,
      max_loudness: 0.4,
    };
  } else {
    return {
      target_danceability: 0.5,
      target_loudness: 0.5,
      target_energy: 0.5,
    };
  }
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
