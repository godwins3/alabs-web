import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login_section.css";

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onButtonClick = async () => {
    // Reset any previous error messages
    setEmailError('');
    setPasswordError('');

    // Validate email
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    }

    try {
      // Make HTTP POST request to the login API endpoint
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Parse response
      const data = await response.json();

      // Handle successful login
      if (response.ok) {
        // Redirect the user to the dashboard or home page upon successful login
        navigate('/administration/dashboard');
      } else {
        // Handle login failure
        // For now, display error message received from the server
        setEmailError(data.message);
        setPasswordError(data.message);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error occurred during login:', error);
      // Display a generic error message to the user
      setEmailError('An error occurred during login. Please try again.');
      setPasswordError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="johndoe@email.com"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password' type
          placeholder="Enter your password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
        <span onClick={togglePasswordVisibility} className="togglePassword">
          {showPassword ? 'Hide' : 'Show'}
        </span>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  );
};

export default Login;
