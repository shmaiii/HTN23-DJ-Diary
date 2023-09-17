import React from 'react';
import { useNavigate } from 'react-router-dom';
import dj from '../logo.svg';
import axios from 'axios';
import arrow from '../arrow.svg';
import step1 from '../step1.svg';
import step2 from '../step2.svg';
import step3 from '../step3.svg';

export const LaunchPage = () => {

	const navigate = useNavigate();
	const clientId = '405cb5e4d9194595b89aba03e8e134ab';
	const params = new URLSearchParams(window.location.search);
	const code = params.get('code');
	const redirect_uri = 'http://localhost:3000/mainPage';

	const handleLoginClick = async () => {
		// Navigate to the '/login' route when the button is clicked
		//navigate('/userProfile');
		await authenticate();
		// post the accessToken to the server
		const accessToken = {
			accessToken: localStorage.getItem('accessToken'),
		};
		await axios
			.post('http://localhost:3001/api/setAccessToken', accessToken)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

		navigate('/dashboard');
	};

	async function authenticate() {
		if (!code) {
			redirectToAuthCodeFlow(clientId);
		} else {
			try {
				let accessToken = localStorage.getItem('accessToken');
				if (accessToken === null) {
					accessToken = await getAccessToken(clientId, code);
				} else {
					accessToken = localStorage.getItem('accessToken');
				}
			} catch (error) {
				console.log(error);
			}
		}
	}

	async function redirectToAuthCodeFlow(clientId) {
		const verifier = generateCodeVerifier(128);
		const challenge = await generateCodeChallenge(verifier);

		localStorage.setItem('verifier', verifier);

		const params = new URLSearchParams();
		params.append('client_id', clientId);
		params.append('response_type', 'code');
		params.append('redirect_uri', redirect_uri);
		params.append(
			'scope',
			'user-read-private user-read-email user-library-read user-top-read user-read-recently-played'
		);
		params.append('code_challenge_method', 'S256');
		params.append('code_challenge', challenge);
		console.log(`https://accounts.spotify.com/authorize?${params.toString()}`);
		window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
	}

	function generateCodeVerifier(length) {
		let text = '';
		let possible =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (let i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}

	async function generateCodeChallenge(codeVerifier) {
		const data = new TextEncoder().encode(codeVerifier);
		const digest = await window.crypto.subtle.digest('SHA-256', data);
		return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
			.replace(/\+/g, '-')
			.replace(/\//g, '_')
			.replace(/=+$/, '');
	}

	async function getAccessToken(clientId, code) {
		const verifier = localStorage.getItem('verifier');

		const params = new URLSearchParams();
		params.append('client_id', clientId);
		params.append('grant_type', 'authorization_code');
		params.append('code', code);
		params.append('redirect_uri', redirect_uri);
		params.append('code_verifier', verifier);

		const result = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: params,
		});

		const { access_token } = await result.json();
		console.log(access_token);
		if (access_token) {
			localStorage.setItem('accessToken', access_token);
		}
		return access_token;
	}

	return (
		<div className="h-screen w-fill bg-green-100 overflow-auto relative">
			{/* Absolute positioned DJ image */}
			<img src={dj} alt="DJ Diary Logo" className="absolute right-32 top-60" />

			{/* Content */}
			<div className="ml-40 mr-72 mt-64 text-amber-500 text-7xl font-bold font-['Raleway']">
				DJ Diary
			</div>
			<div className="mr-72 ml-40 mt-8 text-black text-2xl font-normal font-['Montserrat']">
				Journal Your Day, Let AI Play Your Way.
			</div>
			<button
				className="ml-40 mt-8 px-10 transform hover:scale-110 hover:duration-150 ease-in-out ml-20 px-14 py-3 text-black text-xl font-medium font-['Raleway'] bg-emerald-400 rounded-[5px] border px-3 border-emerald-400 py-1"
				onClick={handleLoginClick}
			>
				Login with Spotify
			</button>

			<div className="animate-bounce mt-40 flex justify-center items-center">
				<img src={arrow} alt="down Arrow for tutorial" />
			</div>
			<div className="text-center text-black text-sm font-normal font-['Montserrat']">
				<p>Scroll to see how it works</p>
			</div>

			<div className="flex justify-center items-center mt-40">
				<img src={step1} alt="Step 1 Info" />
			</div>

			<div className="flex justify-center items-center mt-10">
				<img src={arrow} alt="arrow" />
			</div>

			<div className="flex justify-center items-center mt-10">
				<img src={step2} alt="Step 2 Info" />
			</div>

			<div className="flex justify-center items-center mt-10">
				<img src={arrow} alt="arrow" />
			</div>

			<div className="flex justify-center items-center mt-10 mb-20">
				<img src={step3} alt="Step 3 Info" />
			</div>
		</div>
	);
};
