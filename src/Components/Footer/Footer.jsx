import React, { useEffect } from 'react';
import './Footer.css';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <footer className="footer">
      <div className="videoDiv">
        <video
          className="backgroundVideo"
          src="https://res.cloudinary.com/dpwqeejhq/video/upload/v1734410529/video2_nnkdoh.mp4"
          loop
          autoPlay
          muted
        />
      </div>

      <div className="footerContent">
        <div className="logoSection" data-aos="fade-up">
          <h1>Travel...</h1>
          <p>Your gateway to exploring the world.</p>
          <p>something cool..</p>
        </div>

        <div className="socialIcons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </div>

        <form className="inputSection" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter Email Address"
            aria-label="Email Address"
            required
          />
          <button className="btn" type="submit">
            Send
          </button>
        </form>

        <div className="agencySection">
          <h3>Our Agency</h3>
          <div className="agencyLinks">
            <a href="#services">SERVICES</a>
            <a href="#insurance">INSURANCE</a>
            <a href="#tourism">TOURISM</a>
            <a href="#payment">PAYMENT</a>
          </div>
        </div>

        <div className="partnersSection">
          <h3>Our Partners</h3>
          <div className="partnersList">
            <span className="partnerItem">Bookings</span>
            <span className="partnerItem">RentCars</span>
            <span className="partnerItem">HostelWorld</span>
            <span className="partnerItem">Trivago</span>
            <span className="partnerItem">Tripadvisor</span>
          </div>
        </div>
      </div>
      <div className="copyrightSection">
        <p>&copy; 2024 All Rights Reserved by Masna.Eshwar.</p>
      </div>
    </footer>
  );
};

export default Footer;
