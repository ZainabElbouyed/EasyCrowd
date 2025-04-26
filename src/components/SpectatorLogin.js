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
    "Morocco", "France", "Germany", "Spain", "Italy",
    "Canada", "United States", "Japan", "China", "Brazil",
    "Australia", "India", "United Kingdom"
  ];

  const handleChange = (e) => {
    setFormDataSpectator({ ...formDataSpectator, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formDataSpectator);
    // You can send data to your server here
  };

  // Toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="container">
      <h1>Spectator Registration</h1>
      <form onSubmit={handleSubmit}>
        <input className="input-field" type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input className="input-field" type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <select className="input-field" name="country" onChange={handleChange} required>
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
        <input className="input-field" type="text" name="ticketNumber" placeholder="Ticket Number" onChange={handleChange} required />
        <input className="input-field" type="text" name="seatNumber" placeholder="Seat Number" onChange={handleChange} required />
        <input className="input-field" type="text" name="entryGate" placeholder="Entry Gate" onChange={handleChange} required />
        <input className="input-field" type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />

        {/* Password input with toggle visibility */}
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Create Password"
            onChange={handleChange}
            required
          />
          <span onClick={togglePassword} className="toggle-password">
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        {/* Confirm Password input with toggle visibility */}
        <div className="password-container">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
          <span onClick={toggleConfirmPassword} className="toggle-password">
            {showConfirmPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button className="submit-btn" type="submit">Register</button>
        <p className="login-link">Already have an account? <a href="/spectator-login">Login</a></p>
      </form>
    </div>
  );
}

export default SpectatorLogin;
