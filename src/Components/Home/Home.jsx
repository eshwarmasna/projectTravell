import React, { useEffect, useState } from 'react';
import './Home.css';
import Main from '../Main/Main';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { Data } from '../Main/Main'; // Import the destination data
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchPrice, setSearchPrice] = useState(5000);
  const [searchDate, setSearchDate] = useState('');
  const [destinations, setDestinations] = useState(Data); // Initially show all destinations

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleFilter = () => {
    const filtered = Data.filter(
      (destination) =>
        destination.destTitle
          .toLowerCase()
          .includes(searchLocation.toLowerCase()) &&
        destination.fees <= searchPrice
    );

    console.log('Search Location:', searchLocation);
    console.log('Filtered Destinations:', filtered);

    setDestinations(filtered);
  };

  return (
    <div>
      <section className="home">
        <div className="overlay"></div>
        <video
          src="https://res.cloudinary.com/dpwqeejhq/video/upload/v1734410598/video1_gulecj.mp4 "
          muted
          autoPlay
          loop
          type="video/mp4"
        ></video>
        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText" data-aos="fade-up">
              Our Packages
            </span>
            <h1 className="homeTitle" data-aos="fade-up">
              Search Your Holiday
            </h1>
          </div>
          <div className="cardDiv grid" data-aos="fade-up">
            <div className="destinationInput">
              <label htmlFor="city">Search Your Destination:</label>
              <div className="inputWrapper">
                <input
                  type="text"
                  id="city"
                  placeholder="Enter name here..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <GrLocation className="icon" />
              </div>
            </div>
            <div className="dateInput">
              <label htmlFor="date">Select Your Date:</label>
              <div className="inputWrapper">
                <input
                  type="date"
                  id="date"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                />
                <HiFilter className="icon" />
              </div>
            </div>
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price:</label>
                <h3 className="total">${searchPrice}</h3>
              </div>
              <div className="inputWrapper">
                <input
                  type="range"
                  max="5000"
                  min="1000"
                  id="price"
                  value={searchPrice}
                  onChange={(e) => setSearchPrice(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
          {/* Button to trigger filter */}
          <button className="filterButton" onClick={handleFilter}>
            Filter Destinations
          </button>
        </div>
      </section>

      <Main filteredData={destinations} />
    </div>
  );
};

export default Home;
