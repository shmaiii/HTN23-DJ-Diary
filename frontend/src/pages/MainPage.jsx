import React from 'react';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
const navigate = useNavigate();
  const handleLoginClick = () => {
    
    navigate('/journal');
  };

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={handleLoginClick}>Start</button>
    </div>
  );
};