const express = require('express')
const cors = require('cors'); 
const request = require('request'); // "Request" library

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

  // hard coded credentials
var client_id = '405cb5e4d9194595b89aba03e8e134ab'; // Your client id
var client_secret = 'a0bc4a1607584c8f87a10ffd7416510f'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    // var options = {
    //   url: 'https://api.spotify.com/v1/users/jmperezperez',
    //   headers: {
    //     'Authorization': 'Bearer ' + token
    //   },
    //   json: true
    // };
    // request.get(options, function(error, response, body) {
    //   console.log(body);
    // });
    console.log(token);
  }
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})