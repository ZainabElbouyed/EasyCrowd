// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import WelcomePage from './components/WelcomePage';
import SpectatorLogin from './components/SpectatorLogin';
import OrganizerLogin from './components/OrganizerLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/spectator-login" element={<SpectatorLogin />} />
        <Route path="/organizer-login" element={<OrganizerLogin />} />
      </Routes>
    </Router>
  );
}

export default App;


