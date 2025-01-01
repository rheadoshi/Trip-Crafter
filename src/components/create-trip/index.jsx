import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { budgetOptions, travellerOptions } from "@/lib/utils";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { Button } from "../ui/button";
import { AI_PROMPT, generateTripPlan } from "@/service/AIModal";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "../ui/dialog"

const CreateTrip = () => {
  const [place, setPlace] = useState("");
  const [formData, setFormData] = useState({});
  const [openDialog,setOpenDialog] = useState(false)

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateTrip = async () => {
    //console.log(formData);
    const user = localStorage.getItem('user')
    if(!user){
       setOpenDialog(true)
       return;
    }
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location || "")
      .replace("{duration}", formData?.duration || "")
      .replace("{travellers}", formData?.travellers || "")
      .replace("{budget}", formData?.budget || "");

    const response = await generateTripPlan(FINAL_PROMPT);
    console.log(response ? response : "No response received");
  };

  useEffect(() => {
    //console.log(formData);
  }, [formData]);

const handleLocationSelect = (place) => {
    const location = place.formatted_address; 
    setPlace(location);
    handleInputChange("location", location);
  };

  return (
    <div className="p-8">
      <h1 className="font-extrabold text-2xl text-red-400">
        Tell us your preferences
      </h1>
      <p>
        Just provide us with some basic information, and we will generate a
        customized itinerary for you based on your preferences.
      </p>
      <div id="form" className="mt-16 p-4">
        <div className="text-xl font-bold">What is your destination?</div>
        <ReactGoogleAutocomplete
          className="w-full h-8"
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          inputAutocompleteValue={place}
          onPlaceSelected={handleLocationSelect}
        />

        <div className="text-xl font-bold">What is the duration for your trip?</div>
        <Input
          type="number"
          placeholder="Example: 3"
          onChange={(e) => {
            handleInputChange("duration", e.target.value);
          }}
        />

        <div className="text-xl font-bold">What is your budget?</div>
        <div className="flex justify-around mt-4">
          {budgetOptions.map((item) => (
            <div
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.budget === item.title ? "shadow-xl border-black" : ""}`}
              key={item.id}
              onClick={() => {
                handleInputChange("budget", item.title);
              }}
            >
              <h1 className="font-bold text-lg">{item.title}</h1>
              <h1 className="text-gray-600">{item.desc}</h1>
            </div>
          ))}
        </div>

        <div className="text-xl font-bold">Who are you travelling with?</div>
        <div className="flex justify-around mt-4">
          {travellerOptions.map((item) => (
            <div
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.travellers === item.title ? "shadow-xl border-black" : ""}`}
              key={item.id}
              onClick={() => {
                handleInputChange("travellers", item.title);
              }}
            >
              <h1 className="font-bold text-lg">{item.title}</h1>
              <h1 className="text-gray-600">{item.desc}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          className="bg-red-400 hover:bg-black"
          onClick={() => { generateTrip();}}
        >
          Generate Trip
        </Button>
      </div>
    </div>
  );
};

export default CreateTrip;
