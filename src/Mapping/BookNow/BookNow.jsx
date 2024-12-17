import React from 'react';
import { useBooking } from './BookingProvider';
import './BookNow.css';

const BookNow = () => {
  const { bookings, removeBooking } = useBooking();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Bookings</h2>
      {bookings.length === 0 ? (
        <p className="empty-cart">No bookings yet!</p>
      ) : (
        <div className="cart-items">
          {bookings.map((booking) => (
            <div key={booking.id} className="cart-item">
              <img
                src={booking.imgSrc}
                alt={booking.destTitle}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{booking.destTitle}</h3>
                <p>{booking.description}</p>
                <p>
                  <strong>Location:</strong> {booking.location}
                </p>
                <p>
                  <strong>Fees:</strong> ${booking.fees}
                </p>
              </div>
              <button
                className="cart-item-remove-btn"
                onClick={() => removeBooking(booking.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookNow;
