import { GetPlaceDetails } from '@/service/GlobalAPI';
import React, { useEffect, useState } from 'react'

const PlaceItem = (trip,index) => {
    const [placeImage, setPlaceImage] = useState("");
    
      useEffect(() => {
        if (trip?.place?.userSelection?.location) {
          getPlacePhoto();
        }
      }, [trip]);
    
      const getPlacePhoto = async () => {
          const data = {
            textQuery: trip?.place?.userSelection?.location || trip?.place?.userSelection?.destination,
          }
          const response = await GetPlaceDetails(data)
          const places = response?.data?.places
          // console.log(places[0].photos[0].name)
          const PHOTO_URL =`https://places.googleapis.com/v1/${places[0].photos[0].name}/media?key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}&maxHeightPx=600&maxWidthPx=600`
          setPlaceImage(PHOTO_URL)
        }
    
    //console.log('')
  return (
    <div className='hover:scale-105 transition-all'>
      <a href={`/view-trip/${trip?.place?.id}`}>
      <img src={placeImage} alt="place" className="object-cover rounded-xl"/>
      <div>
        <h2 className='font-bold'>{trip?.place?.userSelection?.location || trip?.place?.userSelection?.destination }</h2>
        <h2 className='text-sm text-gray-500'>
            {trip?.place?.userSelection?.duration} days with {' '}
            {trip?.place?.userSelection?.travellers} in a {' '}
            {trip?.place?.userSelection?.budget} Budget
        </h2>
      </div>
      </a>
    </div>
  )
}

export default PlaceItem
