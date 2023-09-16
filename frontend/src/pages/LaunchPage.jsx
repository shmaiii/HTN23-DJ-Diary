import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LaunchPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the '/login' route when the button is clicked
    navigate('/login');
  };

  return (
    <div>
      <h1>Launch Page</h1>
      <button onClick={handleLoginClick}>Log In</button>
    </div>
  );
};