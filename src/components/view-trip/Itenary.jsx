import React from "react";
import PlaceImage from "./PlaceImage";

const Itenary = (trip) => {
  const tripData = trip?.trip?.tripData ? JSON.parse(trip.trip.tripData) : null;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Itinerary</h1>

      {tripData?.itinerary && Object.keys(tripData.itinerary).map((dayKey, dayIndex) => (
        <div key={dayIndex} className="mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">{dayKey}</h2>
          {tripData.itinerary[dayKey].map((placeItem, placeIndex) => (
            <div key={placeIndex} className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 border-l-4 border-red-400">
              <div className="p-4">
                <h3 className="text-xl font-semibold text-red-400">{placeItem.placeName}</h3>
                <p className="text-gray-700">{placeItem.placeDetails}</p>

                <PlaceImage placeItem ={placeItem}/>
                

                <div className="mt-4">
                  <p className="text-gray-800">
                    <strong>Ticket Pricing:</strong> {placeItem.ticketPricing}
                  </p>
                  <p className="text-gray-800">
                    <strong>Best Time to Visit:</strong> {placeItem.bestTimeToVisit}
                  </p>
                  <p className="text-gray-800">
                    <strong>Time to Travel:</strong> {placeItem.timeToTravel}
                  </p>

                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(placeItem.placeName)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Itenary;
