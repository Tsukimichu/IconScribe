import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/ICONS.png';
import googleLogo from '../assets/google-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../css/loginpage.css';

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
  
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
  
      console.log('Login response:', response.data);
  
      if (response.status === 200) {
        const { token, user: loggedInUser } = response.data;
  
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(loggedInUser));

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        console.log('Saved token:', token);

        setSuccessMessage('Login successful!');
  
        setTimeout(() => {
          if (loggedInUser.isAdmin) {
            navigate('/overview');
          } else {
            navigate('/dashboard');
          }
        }, 1000);
      }
    } catch (err) {
      const message = err.response?.data?.error || 'Login failed';
      setErrorMessage(message);
      console.error('Login error:', err);
    }
  };

  const token = localStorage.getItem('token');

  if (token) {
    try {
      const decoded = jwtDecode(token);
      console.log('Decoded token:', decoded);
    } catch (error) {
      console.error('Error decoding token:', error); 
    }
  }

  const handleGoogleLogin = () => {
    loginWithRedirect({
      connection: 'google-oauth2',
      redirectUri: window.location.origin + '/dashboard',
    });
  };

  return (
    <section className='center'>
      <div className="login-page">
        <div className="login-container">
          <img src={logo} className="Logo" alt="Logo" />

          {successMessage && (
            <div className="popup-message">
              <p>{successMessage}</p>
            </div>
          )}

          <form onSubmit={handleLogin}>
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

            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}

            <div className="signup-link">
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>

            <button type="submit" className="login-button">
              Log In
            </button>

            <div>
              <p> - - - - - - - - or - - - - - - - - </p>
            </div>

            {!isAuthenticated ? (
              <button
                type="button"
                className="social-button google"
                onClick={handleGoogleLogin}
              >
                <img src={googleLogo} alt="Google" />
                Continue with Google
              </button>
            ) : (
              <>
                <p>Welcome, {user.name}!</p>
                <button
                  className="login-button"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Logout
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
