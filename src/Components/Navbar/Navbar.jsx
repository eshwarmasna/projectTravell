import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { AuthContext } from '../../Mapping/BookNow/AuthProvider';

const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  const toggleNavbar = () => {
    setIsNavbarActive((prevState) => !prevState);
  };

  return (
    <section className="navBarSection">
      <header className="header">
        {/* Logo Section */}
        <div className="logoDiv">
          <Link to="/" className="logo">
            <MdOutlineTravelExplore className="logoIcon" />
            <h2 className="logoText">Travel.</h2>
          </Link>
        </div>

        {/* Navbar Menu */}
        <div className={`navBar ${isNavbarActive ? 'activeNavbar' : ''}`}>
          <ul className="navLists">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/packages" className="navLink">
                Packages
              </Link>
            </li>
            <li className="navItem">
              <a href="#about" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#contact" className="navLink">
                Contact Us
              </a>
            </li>
            <Link to="/booknow" className="btn">
              MY BOOKINGS
            </Link>

            {/* Conditionally render login or logout */}
            {isAuthenticated ? (
              <button onClick={logout} className="btn logout-btn">
                LOGOUT
              </button>
            ) : (
              <>
                <Link to="/login" className="btn">
                  LOGIN
                </Link>
                <Link to="/signup" className="btn">
                  SIGNUP
                </Link>
              </>
            )}
          </ul>

          <div className="closeNavbar" onClick={toggleNavbar}>
            <AiFillCloseCircle className="closeIcon" />
          </div>
        </div>
        <div className="toggleNavbar" onClick={toggleNavbar}>
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
