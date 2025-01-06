import React from 'react';
import { Link } from 'react-router-dom';

const Hotels = (trip) => {
  const tripData = trip?.trip?.tripData ? JSON.parse(trip.trip.tripData) : null;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Hotel Recommendations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {console.log(tripData)} */}
        {tripData?.hotelOptions?.map((hotel, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Link
              to={`//www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                hotel?.hotelName
              )}, ${encodeURIComponent(hotel?.hotelAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={hotel.hotelImageURL}
                alt={`Image of ${hotel.hotelName}`}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hotel.hotelName}</h2>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Address:</strong> {hotel.hotelAddress}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Price:</strong> {hotel.price}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Rating:</strong> {hotel.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
