import React from 'react'
import { GetPlaceDetails } from "@/service/GlobalAPI";
import { useEffect, useState } from "react";

const PlaceImage = (placeItem) => {
    const place = placeItem?.placeItem
    const [placeImage, setPlaceImage] = useState("");
    
      useEffect(() => {
        place && getPlacePhoto()
      }, [place]);
    
      const getPlacePhoto = async () => {
          const data = {
            textQuery: place.placeName,
          }
          const response = await GetPlaceDetails(data)
          const places = response?.data?.places
          const PHOTO_URL =`https://places.googleapis.com/v1/${places[0].photos[0].name}/media?key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}&maxHeightPx=600&maxWidthPx=600`
          setPlaceImage(PHOTO_URL)
        }
    
    return (
        <div>
            <img src={placeImage} alt={place.placeName}
                className="w-full h-48 object-cover mt-4 rounded-md"/>
        </div>
    )
}

export default PlaceImage
