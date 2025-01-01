import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-exp-1206",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const AI_PROMPT = `Generate a travel plan for {location} for {duration} days for {travellers} traveller with a {budget} budget. 
Give me a hotels options list with hotelName, hotelAddress, price, hotelImageURL, rating, and suggest itinerary with 
placeName, placeDetails, placeImageURL, ticketPricing, time travel for each location with each day plan and best time to visit in JSON format`;

export const generateTripPlan = async (prompt) => {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating trip plan:", error);
    return null;
  }
};
