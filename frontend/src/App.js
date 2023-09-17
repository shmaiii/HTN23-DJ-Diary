import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { LaunchPage } from './pages/LaunchPage';
import { MainPage } from './pages/MainPage';
import { Journal } from './pages/Journal';
import { UserProfile } from './pages/UserProfile';
import { Playlist_Generating } from './pages/Playlist_Generating';
import { Playlist_Complete } from './pages/Playlist_Complete';
import { Playlist_Rating } from './pages/Playlist_Rating';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LaunchPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/mainPage" element={<MainPage />} />
				<Route path="/journal" element={<Journal />} />
				<Route path="/userProfile" element={<UserProfile />} />
				<Route path="/playlist_generating" element={<Playlist_Generating />} />
				<Route path="/playlist_complete" element={<Playlist_Complete />} />
				<Route path="/playlist_rating" element={<Playlist_Rating />} />
			</Routes>
		</Router>
	);
}

export default App;
