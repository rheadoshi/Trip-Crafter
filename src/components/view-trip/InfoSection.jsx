import React from 'react';

const InfoSection = (trip) => {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="bg-red-200 border border-red-400 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-black mb-4">
          {trip?.trip?.userSelection?.location}
        </h2>
        <p className="text-slate-800 text-lg">
          Here is a fun <span className="font-semibold">{trip?.trip?.userSelection?.budget?.toLowerCase()}</span> budget trip itinerary for 
          <span className="font-semibold"> {trip?.trip?.userSelection?.duration}</span> days for 
          <span className="font-semibold"> {trip?.trip?.userSelection?.travellers.toLowerCase()}</span>.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
