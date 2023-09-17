import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const LaunchPage = () => {
  const navigate = useNavigate();
  const clientId = "405cb5e4d9194595b89aba03e8e134ab";
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const redirect_uri = "http://localhost:3000/dashboard"

  const handleLoginClick = async () => {
    // Navigate to the '/login' route when the button is clicked
    //navigate('/userProfile');
    await authenticate();
    // post the accessToken to the server
    const accessToken = {
      "accessToken" : localStorage.getItem('accessToken')
    }
    await axios.post('http://localhost:3001/api/setAccessToken', accessToken)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

    navigate('/dashboard');
  };

  async function authenticate() {
    if (!code) {
      redirectToAuthCodeFlow(clientId);
    } else {
      try {
        let accessToken = localStorage.getItem("accessToken")
        if (accessToken === null) {
            accessToken = await getAccessToken(clientId, code);
        } else { 
            accessToken = localStorage.getItem("accessToken") }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", redirect_uri);
    params.append("scope", "user-read-private user-read-email user-library-read user-top-read user-read-recently-played");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);
    console.log(`https://accounts.spotify.com/authorize?${params.toString()}`)
    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  }

  function generateCodeVerifier(length) {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest("SHA-256", data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", redirect_uri);
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    const { access_token } = await result.json();
    console.log(access_token)
    if (access_token) { localStorage.setItem("accessToken", access_token) }
    return access_token;
  }

  return (
    <div>
      <h1>Launch Page</h1>
      <button onClick={handleLoginClick}>Login with Spotify</button>
    </div>
  );
};