import { db } from '@/service/firebaseConfig'
import { collection, getDocs, query, where } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router'
import PlaceItem from './PlaceItem'

const MyTrips = () => {

    const navigation = useNavigation()
    const [userTrips,setUserTrips] = useState([])
    useEffect(()=>{
        getUserTrips()
    },[])

    const getUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'))
        
        if(!user){
            navigation('/')
            return;
        }
        const q = query(collection(db,'AITrips'),where('userEmail','==',user.email))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>{
            setUserTrips(prevVal=>[...prevVal,doc.data()])
        })
    }


  return (
    <div className='py-8 sm:px-8 md:px-16 lg:px-20'>
      <h1 className='text-2xl font-extrabold'>My Trips</h1>
      <div className=' py-4 grid grid-cols-2 md:grid-cols-3 gap-5'>
        {userTrips.map((trip,index)=>{
            return (
                <PlaceItem place={trip} index={index}/>
            )
        })}
      </div>
    </div>
  )
}

export default MyTrips;
