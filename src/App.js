import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main, { Data } from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import SignUp from './Mapping/Users/SignUp';
import Login from './Mapping/Users/Login';
import Packages from './Mapping/Packages';
import { BookingProvider } from './Mapping/BookNow/BookingProvider';
import BookNow from './Mapping/BookNow/BookNow';
import AuthProvider, { AuthContext } from './Mapping/BookNow/AuthProvider'; // Import AuthContext

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  const handleLoginSuccess = (status) => {
    setIsLoggedIn(status); // Update login state based on successful login
  };

  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
          <AuthContext.Consumer>
            {({ login, logout }) => (
              <>
                <Navbar isLoggedIn={isLoggedIn} onLogout={logout} /> {/* Pass isLoggedIn to Navbar */}

                <Routes>
                  <Route path="/" element={<Home onLoginSuccess={handleLoginSuccess} />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/packages" element={<Packages />} />

                  {/* Pass filteredData and isLoggedIn to Main */}
                  <Route path="/main" element={<Main filteredData={Data} isLoggedIn={isLoggedIn} />} />

                  <Route path="/booknow" element={<BookNow />} />
                  <Route path="/signup" element={<SignUp />} />

                  {/* Pass onLoginSuccess to Login component */}
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
