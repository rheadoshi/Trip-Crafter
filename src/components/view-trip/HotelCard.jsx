import React from 'react'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import { GetPlaceDetails } from '@/service/GlobalAPI'

const HotelCard = (hotelItem, index) => {
  //console.log(hotelItem?.hotelItem)
  const hotel = hotelItem?.hotelItem
  const [placeImage, setPlaceImage] = useState("");
  
  useEffect(() => {
    hotel && getPlacePhoto();
  }, [hotel]);
  
  const getPlacePhoto = async () => {
    const data = {
      textQuery: hotel.hotelName,
    }
    
    const response = await GetPlaceDetails(data)
    const places = response?.data?.places
    const PHOTO_URL =`https://places.googleapis.com/v1/${places[0].photos[0].name}/media?key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}&maxHeightPx=600&maxWidthPx=600`
    setPlaceImage(PHOTO_URL)
  }
  return (
      <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <Link to={`//www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel?.hotelName)}, ${encodeURIComponent(hotel?.hotelAddress)}`}
              target="_blank" rel="noopener noreferrer">
          
          <img src={placeImage} alt={`Image of ${hotel.hotelName}`}
            className="w-full h-48 object-cover" />
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
  )
}

export default HotelCard
