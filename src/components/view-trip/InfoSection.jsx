import { GetPlaceDetails } from "@/service/GlobalAPI";
import React, { useEffect, useState } from "react";

const InfoSection = (trip) => {
  const [placeImage, setPlaceImage] = useState("");

  useEffect(() => {
    if (trip?.trip?.userSelection?.location) {
      getPlacePhoto();
    }
  }, [trip]);

  const getPlacePhoto = async () => {
      const data = {
        textQuery: trip?.trip?.userSelection?.location,
      }
      const response = await GetPlaceDetails(data)
      const places = response?.data?.places
      // console.log(places[0].photos[0].name)
      const PHOTO_URL =`https://places.googleapis.com/v1/${places[0].photos[0].name}/media?key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}&maxHeightPx=600&maxWidthPx=600`
      setPlaceImage(PHOTO_URL)
    }

  return (
    <div className="container mx-auto py-6 px-4">
      <img src={placeImage} alt="placeImage" className="h-[340px] w-full object-cover py-2"/>

      <div className="bg-red-200 my-auto border border-red-400 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-black mb-4">
          {trip?.trip?.userSelection?.location}
        </h2>
        <p className="text-slate-800 text-lg">
          Here is a fun{" "}
          <span className="font-semibold">
            {trip?.trip?.userSelection?.budget?.toLowerCase()}
          </span>{" "}
          budget trip itinerary for{" "}
          <span className="font-semibold">
            {trip?.trip?.userSelection?.duration}
          </span>{" "}
          days for{" "}
          <span className="font-semibold">
            {trip?.trip?.userSelection?.travellers.toLowerCase()}
          </span>
          .
        </p>
      </div>
    </div>
  )
};

export default InfoSection;
