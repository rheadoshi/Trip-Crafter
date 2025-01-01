import React from 'react';
import { Button } from '../ui/button';
import logo from '/public/logo.png';

const Header = () => {
  return (
    <div className="bg-black text-white w-full h-24 flex items-center justify-between px-8">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto mr-4" />
        <h1 className="text-xl font-bold font-serif">Trip Crafter</h1>
      </div>
      <Button className="bg-red-400 rounded-xl">Sign In</Button>
    </div>
  );
};

export default Header;
