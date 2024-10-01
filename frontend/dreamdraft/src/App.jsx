// src/App.js
import React, {useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import BuildingPlanEditor from './drawingComponents/BuildingPlanEditor'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const token = localStorage.getItem('access_token');
  //   if (token) {
  //     setIsLoggedIn(true); // User is logged in if token exists
  //   }
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/BuildingPlanEditor" element={<BuildingPlanEditor/>} />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
};

export default App;
