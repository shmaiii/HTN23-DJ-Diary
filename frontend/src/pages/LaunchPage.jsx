import React from 'react';
import { useNavigate } from 'react-router-dom';
import dj from '../logo.svg';

export const LaunchPage = () => {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		// Navigate to the '/login' route when the button is clicked
		navigate('/userProfile');
	};

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
				className="ml-40 mt-8 px-6 transform hover:scale-110 hover:duration-150 ease-in-out ml-20 px-14 py-2 text-black text-xl font-medium font-['Raleway'] bg-emerald-400 rounded-[5px] border px-3 border-emerald-400 py-1"
				onClick={() => navigate('/userProfile')}
			>
				Login with Spotify
			</button>
		</div>
	);
};

// <div class="relative h-32 w-32 ...">
//   <div class="w-[1440px] h-[1024px] relative bg-green-100"></div>

//    <div class="absolute inset-x-50 top-16 h-16 ...">
//    <button onClick={handleLoginClick}>Login with Spotify</button>

//      </div>
//      <h1>Launch Page</h1>

//  </div>
