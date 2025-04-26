import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import EasyCrowdLogo from '../assets/EasyCrowd.jpg';

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <header className="header">
                <img src={EasyCrowdLogo} alt="EasyCrowd Logo" className="logo" />
                <h1>Welcome to EasyCrowd</h1>
            </header>

            <div className="role-selection">
                <p>Select your role:</p>
                <div className="button-container">
                    <Link to="/spectator-login" className="button">Spectator</Link>
                    <Link to="/organizer-login" className="button">Organizer</Link>
                </div>
            </div>
            
            <footer className="footer">
                <p>&copy; 2025 EasyCrowd. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default WelcomePage;
