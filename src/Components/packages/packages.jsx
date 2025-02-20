import React, { useState, useEffect, useContext } from 'react';
// import './Main.css';
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useBooking } from '../../Mapping/BookNow/BookingProvider';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Mapping/BookNow/AuthProvider';
import { Data } from '../Main/Main';

const Package = ({ filteredData = [] }) => {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [isBooking, setIsBooking] = useState(false); // Manage booking modal state
    const { addBooking } = useBooking(); // Access addBooking from context
    const navigate = useNavigate(); // Initialize navigate
    const { isAuthenticated } = useContext(AuthContext);
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
    // {console.log(Data)}
  
    // const handleDetailsClick = (destination) => {
    //   setSelectedDestination(destination);
    // };
  
    const handleCloseDetails = () => {
      setSelectedDestination(null);
    };
  
    const handleBookNow = (destination) => {
      setSelectedDestination(destination);
      setIsBooking(true); // Open booking modal
    };
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
    console.log('Is Logged In:', isLoggedIn);
    const confirmBooking = () => {
      if (!isAuthenticated) {
        alert('Please login to proceed with the booking.');
        navigate('/login');
      } else if (selectedDestination) {
        addBooking(selectedDestination); // Add to bookings
        alert(`Booking successful for ${selectedDestination.destTitle}!`);
        setIsBooking(false); // Close modal
        navigate('/booknow'); // Redirect to BookNow page
      } else {
        console.error('No destination selected for booking.');
      }
    };
  
    return (
      <section className="main container section">
        <div className="secTitle">
          <h3 className="title">Most Visited Destinations</h3>
        </div>
  
        {Data.length === 0 ? (
          <div className="noData">
            <p>No destinations available.</p>
          </div>
        ) : (
          <div className="seeContent grid">
            {Data.map((destination) => (
              <div
                key={destination.id}
                className="singleDestination"
                data-aos="fade-up"
              >
                <div className="imageDiv">
                  <img src={destination.imgSrc} alt={destination.destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destination.destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{destination.location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{destination.grade}</span>
                    </div>
                    <div className="price">
                      <h5>${destination.fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{destination.description}</p>
                  </div>
                  <button
                    className="btn flex"
                    onClick={() => handleBookNow(destination)}
                  >
                    BOOK NOW <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
  
        {selectedDestination && !isBooking && (
          <div className="detailsModal">
            <div className="detailsContent">
              <button className="closeButton" onClick={handleCloseDetails}>
                Close
              </button>
              <div className="detailsImage">
                <img
                  src={selectedDestination.imgSrc}
                  alt={selectedDestination.destTitle}
                />
              </div>
              <h2>{selectedDestination.destTitle}</h2>
              <p>{selectedDestination.description}</p>
              <p>
                <strong>Location:</strong> {selectedDestination.location}
              </p>
              <p>
                <strong>Grade:</strong> {selectedDestination.grade}
              </p>
              <p>
                <strong>Fees:</strong> ${selectedDestination.fees}
              </p>
            </div>
          </div>
        )}
  
        {isBooking && (
          <div className="detailsModal">
            <div className="detailsContent">
              <h2>Confirm Your Booking</h2>
              <p>
                You are booking a trip to{' '}
                <strong>{selectedDestination.destTitle}</strong> for{' '}
                <strong>${selectedDestination.fees}</strong>.
              </p>
              <p>Location: {selectedDestination.location}</p>
              <div className="modalActions">
                <button className="btn" onClick={confirmBooking}>
                  Confirm
                </button>
                <button
                  className="btn cancel"
                  onClick={() => setIsBooking(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };
  export default Package;