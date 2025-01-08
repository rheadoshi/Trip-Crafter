import React, {useState} from 'react';
import { Button } from '../ui/button';
import logo from '/src/assets/logo.png';
import { Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "../ui/dialog"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [openDialog,setOpenDialog] = useState(false)

  const login = useGoogleLogin({
    onSuccess: (response) => getUserProfile(response),
    onError: (error) => {
      console.log('Login Failed: ', error);
    }
  })
  const getUserProfile = (token) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token?.access_token}`,
      {
        headers:{
          Authorization:`Bearer ${token?.access_token}`,
          Accept: `Application/json`
        }
      }
    ).then((resp)=> {
      localStorage.setItem('user',JSON.stringify(resp.data))
      setOpenDialog(false)
      window.location.reload()
    })
  }

  //useEffect()
  return (
    <div className="bg-black text-white w-full h-24 flex items-center justify-between px-8">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto mr-4" />
        <h1 className="text-xl font-bold font-serif">Trip Crafter</h1>
      </div>
      {user?
      <div className='flex gap-2'>
        <Popover>
          <PopoverTrigger><img src={user.picture} className='rounded-full w-11 h-11'/></PopoverTrigger>
          <PopoverContent>
            <h2 className="cursor-pointer" onClick={()=>{
              googleLogout();
              localStorage.clear()
            }}>Logout</h2>
          </PopoverContent>
        </Popover>
        <a href="/my-trips">
          <Button className="bg-red-400 rounded-xl">My Trips</Button>
        </a>
        <a href="/create-trip">
          <Button className="bg-red-400 rounded-xl">Create Trip</Button>
        </a>
      </div>
      :
      <Button className="bg-red-400 rounded-xl" onClick={()=>setOpenDialog(true)}>Sign In</Button>
      }

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <h2>Sign In</h2>
              <p>Sign in using Google authentication</p>
              <Button onClick={login}>Sign In</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      
    </div>
  );
};

export default Header;
