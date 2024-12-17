import React, { useState, useEffect, useContext } from 'react';
import './Main.css';
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useBooking } from '../../Mapping/BookNow/BookingProvider';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Mapping/BookNow/AuthProvider';
// import { useContext } from 'react';
// import { AuthContext } from '../../Mapping/BookNow/AuthProvider';
export const Data = [
  {
    id: 1,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410478/Maldives_lppmzs.jpg',
    destTitle: 'Maldives',
    location: 'Indian Ocean',
    grade: 'A+',
    fees: 2500,
    description:
      'A tropical paradise known for its stunning beaches and luxury resorts.',
  },
  {
    id: 2,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410482/Paris_bi4aqv.jpg',
    destTitle: 'Paris',
    location: 'France',
    grade: 'A',
    fees: 1500,
    description:
      'The city of love, famous for the Eiffel Tower and exquisite cuisine.',
  },
  {
    id: 3,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410440/Bali_ajqj4a.jpg',
    destTitle: 'Bali',
    location: 'Indonesia',
    grade: 'A',
    fees: 1800,
    description:
      'An Indonesian island known for its forested volcanic mountains and coral reefs.',
  },
  {
    id: 4,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410523/NewYork_rhdrfg.jpg',
    destTitle: 'NewYork',
    location: 'USA',
    grade: 'A',
    fees: 2000,
    description:
      'The Big Apple, offering iconic landmarks and endless entertainment.',
  },
  {
    id: 5,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410494/Tokyo_gblt2l.jpg',
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'A',
    fees: 2200,
    description:
      'A bustling metropolis blending traditional temples with cutting-edge technology.',
  },
  {
    id: 6,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410490/Santorini_zwn54s.jpg',
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'A+',
    fees: 2800,
    description:
      'A picturesque island known for its whitewashed buildings and stunning sunsets.',
  },
  {
    id: 7,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410463/Capetown_gkfhyx.jpg',
    destTitle: 'Cape Town',
    location: 'South Africa',
    grade: 'B+',
    fees: 1700,
    description:
      'A port city famous for its Table Mountain and vibrant waterfront.',
  },
  {
    id: 8,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410493/Sydney_Aus_kkbugf.jpg',
    destTitle: 'Sydney',
    location: 'Australia',
    grade: 'A',
    fees: 2500,
    description: 'Home to the iconic Sydney Opera House and Harbour Bridge.',
  },
  {
    id: 9,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410473/Machu_kbj3sp.jpg',
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'A+',
    fees: 3000,
    description: 'An ancient Incan citadel set high in the Andes Mountains.',
  },
  {
    id: 10,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410504/UAE_Dubai_w9m9g6.jpg',
    destTitle: 'Dubai',
    location: 'UAE',
    grade: 'A',
    fees: 2000,
    description: 'A city known for luxury shopping, ultramodern architecture.',
  },
  {
    id: 11,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410488/Rome_Italy_dcoq4g.jpg',
    destTitle: 'Rome',
    location: 'Italy',
    grade: 'A',
    fees: 1800,
    description:
      'A historic city filled with iconic landmarks like the Colosseum and Vatican City.',
  },
  {
    id: 12,
    imgSrc:
      'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410461/Barcelona_qtpatx.jpg',
    destTitle: 'Barcelona',
    location: 'Spain',
    grade: 'A',
    fees: 1900,
    description:
      'A city known for its art, architecture, and vibrant cultural scene.',
  },
];

const Main = ({ filteredData = [] }) => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isBooking, setIsBooking] = useState(false); // Manage booking modal state
  const { addBooking } = useBooking(); // Access addBooking from context
  const navigate = useNavigate(); // Initialize navigate
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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

      {filteredData.length === 0 ? (
        <div className="noData">
          <p>No destinations available.</p>
        </div>
      ) : (
        <div className="seeContent grid">
          {filteredData.map((destination) => (
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
export default Main;
