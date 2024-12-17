import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    }

    const newUser = { email, password };

    // Retrieve the current users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email already exists
    const isEmailTaken = existingUsers.some((user) => user.email === email);
    if (isEmailTaken) {
      setErrorMessage('Email is already registered. Please log in.');
      return;
    }

    // Add the new user to the list
    existingUsers.push(newUser);

    // Update the users in localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    setSuccessMessage('Account created successfully! You can now log in.');
    setErrorMessage('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    setTimeout(() => navigate('/login'), 1500); // Redirect to login after success
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">
          Sign Up
        </button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
