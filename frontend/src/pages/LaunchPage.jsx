import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LaunchPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the '/login' route when the button is clicked
    navigate('/userProfile');
  };

  return (
    <div>
      <h1>Launch Page</h1>
      <button onClick={handleLoginClick}>Login with Spotify</button>
    </div>
  );
};