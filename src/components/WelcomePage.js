import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import EasyCrowdLogo from '../assets/EasyCrowd.jpg';

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <header className="header">
                <img src={EasyCrowdLogo} alt="Logo EasyCrowd" className="logo" />
                <h1>Bienvenue sur EasyCrowd</h1>
            </header>

            <div className="role-selection">
                <p>Sélectionnez votre rôle :</p>
                <div className="button-container">
                    <Link to="/spectator-login" className="button">Spectateur</Link>
                    <Link to="/organizer-login" className="button">Organisateur</Link>
                </div>
            </div>
            
            <footer className="footer">
                <p>&copy; 2025 EasyCrowd. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default WelcomePage;
