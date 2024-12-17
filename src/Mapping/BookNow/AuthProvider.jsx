import React, { createContext, useState, useEffect } from 'react';

// Create context
export const AuthContext = createContext();

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  // Initialize state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check localStorage to set the initial authentication state
  useEffect(() => {
    const storedAuthStatus = JSON.parse(
      localStorage.getItem('isAuthenticated')
    );
    if (storedAuthStatus) {
      setIsAuthenticated(storedAuthStatus);
    }
  }, []);

  // Login function
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', true); // Store in localStorage
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove from localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
