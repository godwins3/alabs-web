import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import logo from './logo.svg';
import su_admin_login from './Pages/AdminLogin';
import home from './Pages/home';
import Login from './components/Login/login_section';


const App = () => {
  // State to manage authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    // Update authentication status
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Update authentication status
    setIsAuthenticated(false);
  };

  // PrivateRoute component to handle protected routes
  const PrivateRoute = ({ element, ...rest }) => {
    return isAuthenticated ? element : < Navigate to='/admin/login' />;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< PrivateRoute element={< home /> } />} />
          <Route path= '/login' element={<su_admin_login onLogin={handleLogin} />} />
          <Route path = '/admin/login' element={<Login onLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;