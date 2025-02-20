// App.jsx
import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main, { Data } from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import SignUp from './Mapping/Users/SignUp';
import Login from './Mapping/Users/Login';
// import Packages from './Mapping/Packages';
import { BookingProvider } from './Mapping/BookNow/BookingProvider';
import BookNow from './Mapping/BookNow/BookNow';
import AuthProvider, { AuthContext } from './Mapping/BookNow/AuthProvider';
import Package from './Components/packages/packages';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
          <AuthContext.Consumer>
            {({ login, logout, isAuthenticated }) => ( // Access isAuthenticated
              <>
                <Navbar isLoggedIn={isLoggedIn} onLogout={logout} />

                <Routes>
                  <Route path="/" element={<Home onLoginSuccess={handleLoginSuccess} />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/packages" element={<Package />} /> {/* Redirect to /main */}
                  <Route path="/main" element={isAuthenticated ? <Main filteredData={Data} isLoggedIn={isLoggedIn} /> : <Navigate to="/login" />} />{/* Conditionally render Main or redirect if not authenticated */}
                  <Route path="/booknow" element={isAuthenticated ? <BookNow /> : <Navigate to="/login" />} /> {/* Protect BookNow route */}
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login onLogin={login} />} />
                </Routes>

                <About />
                <Footer />
              </>
            )}
          </AuthContext.Consumer>
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;


