import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../logo.svg';
import { Header } from '../components/Header';

export const Playlist_Rating = () => {
	const navigate = useNavigate(); // Initialize navigate here

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="w-fill h-screen bg-green-100 p-4">
			<Header />
		</div>
	);
};
