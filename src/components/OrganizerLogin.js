import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrganizerLogin.css';

const OrganizerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Ajouté
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Ajouté

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
    // Logique de soumission du formulaire ici
  };

  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  return (
    <div className="container">
      <h1>Inscription Organisateur</h1> {/* changé pour correspondre au formulaire */}
      <form onSubmit={handleSubmit}>
        <input 
          className="input-field"
          type="email" 
          placeholder="Adresse e-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <div className="password-container">
          <input 
            className="input-field"
            type={showPassword ? 'text' : 'password'} 
            placeholder="Mot de passe" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <span onClick={togglePassword} className="toggle-password">
            {showPassword ? '🙈' : '👁️'} 
          </span>
        </div>
        <div className="password-container">
          <input
            className="input-field"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span onClick={toggleConfirmPassword} className="toggle-password">
            {showConfirmPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <select className="input-field" value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Sélectionnez un rôle</option>
          <option value="security">Agent de sécurité</option>
          <option value="manager">Responsable des entrées</option>
          <option value="admin">Administrateur</option>
          <option value="agent">Agent de terrain</option>
          <option value="analyst">Analyste / Observateur</option>
        </select>
        <button className="submit-btn" type="submit">S'inscrire</button>
        <p className="login-link">
          Vous avez déjà un compte ? <a href="/organizer-login">Se connecter</a> {/* changé */}
        </p>
      </form>
    </div>
  );
};

export default OrganizerLogin;
