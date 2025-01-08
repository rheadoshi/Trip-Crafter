import React from 'react';
import HotelCard from './HotelCard';

const Hotels = (trip) => {
  const tripData = trip?.trip?.tripData ? JSON.parse(trip.trip.tripData) : null;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Hotel Recommendations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {console.log(tripData)} */}
        {tripData?.hotelOptions?.map((hotel, index) => (
            <HotelCard hotelItem = {hotel} index ={index}/>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
