import React, { createContext, useContext, useState } from 'react';

// Create the context
const BookingContext = createContext();

// Custom hook to use the booking context
export const useBooking = () => useContext(BookingContext);

// BookingProvider to manage bookings
export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  // Add a booking to the list (avoid duplicates)
  const addBooking = (destination) => {
    if (!bookings.find((booking) => booking.id === destination.id)) {
      setBookings((prev) => [...prev, destination]);
    }
  };

  // Remove a booking by ID
  const removeBooking = (id) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  };

  // Provide both addBooking and removeBooking
  return (
    <BookingContext.Provider value={{ bookings, addBooking, removeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
