import React from 'react';
import {Link,NavLink}from 'react-router-dom'
const Bar = () => {
  return (

     
    
    <div className="flex items-center">
      <img src="LOGO.png" className="h-12 m-3" />
      <input type="search" placeholder="Search here" className="relative inline-flex w-96 items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none ml-96" />
     
        <li>
        <NavLink to="/Login" className={({isActive})=>
        `text-grey-600 bg-teal-60 ml-96 p-4 bg-red-600 rounded-full  ${isActive?
         "text-blue-600":"text-black"}`
      
      }>
        Login
        </NavLink>
          
          </li>
    
   </div>
  );
};

export default Bar;
