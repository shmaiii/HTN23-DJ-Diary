import React from "react";
import { useState, useEffect } from "react";

export const UserProfile = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");

  const clientId = "405cb5e4d9194595b89aba03e8e134ab";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    authenticate(code);
  }, []);

  async function authenticate(code) {
    if (!code) {
      redirectToAuthCodeFlow(clientId);
    } else {
      try {
        let accessToken = localStorage.getItem("accessToken")
        if (accessToken === null) {
            accessToken = await getAccessToken(clientId, code);
        } else { 
            accessToken = localStorage.getItem("accessToken") }
        const profile = await fetchProfile(accessToken);
        console.log(profile);
        populate(profile);
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
    params.append("redirect_uri", "http://localhost:3000/userProfile");
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

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
    params.append("redirect_uri", "http://localhost:3000/userProfile");
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

  async function fetchProfile(token) {
    // TODO: Call Web API
    const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    return await result.json();
  }

  function populate(profile) {
    setDisplayName(profile.display_name);
    setId(profile.id);
    setEmail(profile.email);
  }

  return (
    <div>
      <h1>Display your Spotify profile data</h1>

      <section id="profile">
        <h2>Logged in as {displayName}</h2>
        <span id="avatar"></span>
        <ul>
          <li>User ID: {id}</li>
          <li>Email: {email}</li>
        </ul>
      </section>
    </div>
  );
};