// src/components/SpectatorLogin.js
import React, { useState } from 'react';
import './SpectatorLogin.css';

function SpectatorLogin() {
    const [formDataSpectator, setFormDataSpectator] = useState({
        firstName: '',
        lastName: '',
        country: '',
        ticketNumber: '',
        seatNumber: '',
        entryGate: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      });      
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const countries = [
    "Maroc", "France", "Allemagne", "Espagne", "Italie",
    "Canada", "États-Unis", "Japon", "Chine", "Brésil",
    "Australie", "Inde", "Royaume-Uni"
  ];

  const handleChange = (e) => {
    setFormDataSpectator({ ...formDataSpectator, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire soumises :", formDataSpectator);
    // Vous pouvez envoyer les données à votre serveur ici
  };

  // Bascule de la visibilité du mot de passe
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="container">
      <h1>Inscription Spectateur</h1>
      <form onSubmit={handleSubmit}>
        <input className="input-field" type="text" name="firstName" placeholder="Prénom" onChange={handleChange} required />
        <input className="input-field" type="text" name="lastName" placeholder="Nom" onChange={handleChange} required />
        <select className="input-field" name="country" onChange={handleChange} required>
          <option value="">Sélectionnez un pays</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
        <input className="input-field" type="text" name="ticketNumber" placeholder="Numéro de billet" onChange={handleChange} required />
        <input className="input-field" type="text" name="seatNumber" placeholder="Numéro de siège" onChange={handleChange} required />
        <input className="input-field" type="text" name="entryGate" placeholder="Porte d'entrée" onChange={handleChange} required />
        <input className="input-field" type="tel" name="phoneNumber" placeholder="Numéro de téléphone" onChange={handleChange} required />

        {/* Champ mot de passe avec visibilité basculable */}
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Créer un mot de passe"
            onChange={handleChange}
            required
          />
          <span onClick={togglePassword} className="toggle-password">
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        {/* Champ confirmation du mot de passe avec visibilité basculable */}
        <div className="password-container">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirmer le mot de passe"
            onChange={handleChange}
            required
          />
          <span onClick={toggleConfirmPassword} className="toggle-password">
            {showConfirmPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button className="submit-btn" type="submit">S'inscrire</button>
        <p className="login-link">Vous avez déjà un compte ? <a href="/spectator-login">Se connecter</a></p>
      </form>
    </div>
  );
}

export default SpectatorLogin;
