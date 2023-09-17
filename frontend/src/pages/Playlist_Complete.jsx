import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate
import logo from "../logo.svg";
import { Header } from "../components/Header";
import { Typography } from "@mui/material";

export const Playlist_Complete = () => {
  const navigate = useNavigate(); // Initialize navigate here
  const location = useLocation();
  const url = location.state.url;
  const mood = location.state.mood;
  // const {Url} = useParams();
  // console.log(Url)
  // const spotify = location.state;
  // const url = spotify.url;
  const uri = url.split("playlist/")[1];
  const srcLink =
    "https://open.spotify.com/embed/playlist/" + uri + "?utm_source=generator";

  const bigDivStyle = {
    flex: "1",
    width: "1209px",
    height: "700px",
    left: "115px",
    top: "123px",
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #FFC107", // Replace with the desired border color
    padding: "40px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-fill h-screen bg-green-100 p-4">
      <Header />
      <div style={bigDivStyle}>
        <h1
          style={{ fontWeight: "bold", fontSize: "2rem", marginBottom: "10px" }}
        >
          Your playlist is ready!
        </h1>
        <h3>You can add/remove songs from this playlist in Spotify</h3>
        <iframe
          style={{ borderRadius: 12, margin: 16 }}
          src={srcLink}
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <div
          style={{
            padding: "10px",
            justifyContent: "center",
			display: "flex",
            alignItems: "center",
			textAlign: 'center'
          }}
        >
          <p>
            <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              Based on this entry,
            </span>{" "}
            we determined that your mood is ...
          </p><bt />
          <div
            style={{
              backgroundColor: "pink",
              padding: "10px",
              display: "inline-block",
            }}
          >
            <p>{mood}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
