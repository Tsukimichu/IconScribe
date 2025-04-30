import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/ICONS.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword || !number) {
      setErrorMessage('All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', {
        name: username,
        email,
        number,
        password,
      });

      if (response.status === 201) {
        setSuccessMessage('Account created successfully!');
        setErrorMessage('');

        
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
      
    } catch (err) {
      const message = err.response?.data?.error || 'Error creating account';
      setErrorMessage(message);
      setSuccessMessage('');
    }
  };

  return (
    <>
    <div className='signup-page'>
    <div className="signup-container">
      <img src={logo} className="lOgo" alt="Logo" />

      

      <form onSubmit={handleSignup}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="tel"
            placeholder="Phone No."
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      <div className="login-link">
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    </div>
    </div>
    </>
  );
};

export default Signup;
