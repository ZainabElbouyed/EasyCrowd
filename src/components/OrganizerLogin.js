import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrganizerLogin.css';

const OrganizerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Ajout d'un state pour contrôler la visibilité du mot de passe

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission goes here
  };

  // Fonction pour basculer la visibilité du mot de passe
  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="container">
      <h1>Organizer Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          className="input-field"
          type="email" 
          placeholder="Email address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <div className="password-container">
          <input 
            className="input-field"
            type={showPassword ? 'text' : 'password'} // Change type en fonction de showPassword
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <span onClick={togglePassword} className="toggle-password">
            {showPassword ? '🙈' : '👁️'} {/* Affiche l'icône en fonction de showPassword */}
          </span>
        </div>
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select role</option>
          <option value="security">Security Officer</option>
          <option value="manager">Entrance Manager</option>
          <option value="admin">Administrator</option>
          <option value="agent">Field Agent</option>
          <option value="analyst">Analyst / Observer</option>
        </select>
        <button className="submit-btn" type="submit">Login</button>
        <p className="login-link">Forgot your password? <a href="/reset-password">Reset</a></p>
      </form>
    </div>
  );
};

export default OrganizerLogin;
