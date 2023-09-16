

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const saveUserCredentials = (user) => {
  localStorage.setItem('userCredentials', JSON.stringify(user));
};

const checkLocalStorage = () => {
  const storedCredentials = localStorage.getItem('userCredentials');
  if (storedCredentials) {
    console.log('User credentials are saved:', JSON.parse(storedCredentials));
  } else {
    console.log('User credentials are not saved.');
  }
};

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password: pass,
    };

    saveUserCredentials(user);
    checkLocalStorage();
    navigate('/mainPage');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
            <input 
                type="email" 
                placeholder="youremail@gmail.com" 
                id="email" 
                name="email" 
                value={email}  // Make the input controlled
                onChange={(e) => setEmail(e.target.value)}
            />
            
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                placeholder="**********" 
                id="password" 
                name="password" 
                value={pass}  // Make the input controlled
                onChange={(e) => setPass(e.target.value)}
            />
      <button type="submit">Log In</button>
    </form>
  );
};