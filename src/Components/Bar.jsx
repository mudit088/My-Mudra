import React from 'react';
import Login from './Login';

const Bar = (log) => {
  return (
    <>
     <Login/>
    
    <div className="flex items-center">
      <img src="LOGO.png" className="h-12 m-3" />
      <input type="search" placeholder="Search here" className="relative inline-flex w-96 items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none ml-96" />
      <button type="button" className='pl-96' >
        Sign in / Sign Up
        <li>
          <a href='#'></a></li></button>
    </div>
    </>
  );
};

export default Bar;
