import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../logo.svg';

export const Header = () => {
	const navigate = useNavigate(); // Initialize navigate here

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="flex justify-between items-center mb-4">
			{/* Logo and DJ Diary text */}
			<div className="flex items-center">
				<img className="w-14 h-12" src={logo} alt="Logo" />
				<div className="pl-2 text-amber-500 text-3xl font-bold font-['Raleway']">
					DJ Diary
				</div>
			</div>
			{/* Home and Logout buttons */}
			<div className="flex space-x-2">
				<button
					className="text-amber-500 text-sm font-medium font-['Raleway'] bg-white rounded-[5px] border px-3 border-amber-500 py-1"
					onClick={() => navigate('/mainPage')}
				>
					Home
				</button>
				<button
					className="text-black text-sm font-medium font-['Raleway'] bg-white rounded-[5px] border px-3 border-black py-1"
					onClick={() => navigate('/')}
				>
					Logout
				</button>
			</div>
		</div>
	);
};
