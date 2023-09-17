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
    <div class="h-screen bg-green-100">
  <div class="h-1/2 left-1/4 top-1/4 absolute text-amber-500 text-8xl font-bold font-['Raleway']">DJ Diary</div>
  <div class="w-[696px] h-[46px] left-1/3 top-1/2 absolute text-black text-2xl font-normal font-['Montserrat']">Journal Your Day, Let AI Play Your Way.</div>
  <img class="w-[271px] h-[231px] left-[937px] top-[313px] absolute" src="https://via.placeholder.com/271x231" />
  <div class="w-[696px] h-[46px] left-1/4 top-1/2 absolute text-black text-2xl font-normal font-['Montserrat']">
  <button onClick={handleLoginClick} class="left-[205px] top-[334px] bg-emerald-400 hover:drop-shadow-lg text-black py-2 px-4 rounded">Login with Spotify</button>
  </div>
  
  <div class="w-[245px] h-[29px] left-[607px] top-[906px] absolute text-center text-black text-2xl font-normal font-['Montserrat']">See how it works</div>
  <div class="w-1/8 h-[218px] left-[348px] top-[1014px] absolute bg-white rounded-[10px]"></div>
  <div class="w-[800px] h-[218px] left-[348px] top-[1014px] absolute bg-white rounded-[10px]"></div>
  <div class="w-[800px] h-[218px] left-[348px] top-[1358px] absolute bg-white rounded-[10px]"></div>
  <div class="w-[800px] h-[218px] left-[348px] top-[1702px] absolute bg-white rounded-[10px]"></div>
  <div class="w-[696px] h-[46px] left-[488px] top-[1077px] absolute text-amber-500 text-[40px] font-bold font-['Raleway']">Write a journal entry</div>
  <div class="w-[696px] h-[46px] left-[488px] top-[1421px] absolute text-amber-500 text-[40px] font-bold font-['Raleway']">Customized playlist</div>
  <div class="w-[696px] h-[46px] left-[488px] top-[1765px] absolute text-amber-500 text-[40px] font-bold font-['Raleway']">Save and review!</div>
  <div class="w-[533px] h-[29px] left-[490px] top-[1129px] absolute text-amber-500 text-2xl font-normal font-['Montserrat']">Tell DJ Diary about your day or whatever’s on your mind!</div>
  <div class="w-[533px] h-[29px] left-[490px] top-[1473px] absolute text-amber-500 text-2xl font-normal font-['Montserrat']">DJ Diary provides you with a playlist catered<br/>to your mood.</div>
  <div class="w-[533px] h-[29px] left-[490px] top-[1817px] absolute text-amber-500 text-xl font-normal font-['Montserrat']">The playlist is automatically saved to your<br/>Spotify library and you can rate your enjoyment of it!</div>
  <div class="w-[65px] h-[65px] left-[410px] top-[1082px] absolute">
  </div>
  <div class="w-[65px] h-[65px] left-[402px] top-[1775px] absolute">
  </div>
  <div class="w-[65px] h-[65px] left-[402px] top-[1427px] absolute">
  </div>
  <div class="w-[60px] h-[56.47px] left-[830px] top-[1752px] absolute">
  </div>
  <div class="w-[52.13px] h-[52px] left-[886px] top-[1415px] absolute">
  </div>
  <div class="w-[45.97px] h-[46.99px] left-[892px] top-[1077px] absolute">
  </div>
</div>

    
    // <div class="relative h-32 w-32 ...">
    //   <div class="w-[1440px] h-[1024px] relative bg-green-100"></div>
      
    //    <div class="absolute inset-x-50 top-16 h-16 ...">
    //    <button onClick={handleLoginClick}>Login with Spotify</button>
        
    //      </div>
    //      <h1>Launch Page</h1>
        
    //  </div>
  );
};

