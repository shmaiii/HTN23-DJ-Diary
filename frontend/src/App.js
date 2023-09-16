import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { LaunchPage } from './pages/LaunchPage';
import { MainPage } from './pages/MainPage';
import { Journal } from './pages/Journal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </Router>
  );
}

export default App;