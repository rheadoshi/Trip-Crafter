import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import InfoSection from '../InfoSection';
import { useParams } from 'react-router';
import Hotels from '../Hotels';
import Itenary from '../Itenary';

const ViewTrip = () => {
  const { tripId } = useParams()
  const [trip, setTrip] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (tripId) {
      getTripData();
    }
  }, [tripId]);

  const getTripData = async () => {
    try {
      const docRef = doc(db, 'AITrips', tripId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTrip(docSnap.data());
      } else {
        console.log('No data found. Please try again');
      }
    } catch (error) {
      console.error('Error fetching trip data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-xl font-semibold">Your page is loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 px-4">
      {trip ? (
        <>
          <InfoSection trip={trip} />
          <Hotels trip={trip} />
          <Itenary trip={trip} />
        </>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-xl font-semibold">No trip data found. Please try again.</h1>
        </div>
      )}
    </div>
  );
};

export default ViewTrip;
