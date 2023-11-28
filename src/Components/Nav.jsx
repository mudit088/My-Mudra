import React from 'react';
import {Link,NavLink}from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <nav className="bg-teal-500 text-white p-4 flex items-center justify-between m-4">
      <div className=" pl-20 text-18px">
        <ul className="space-x-4  sm:space-x-8 flex flex-col justify-center items-center sm:flex-row    ">
          <li>
            <a href="/" className="flex items-center pr-6 p-1 ">
              Home Page
            </a>
          </li>
          <li className="relative group">
            <a href="#" className="flex items-center p-1   pr-6">
              Customer Management
            </a>
          </li>
          <li>
            <a href="/rejection-manager" className="flex items-center p-1  pr-6">
              Rejection Manager
            </a>
          </li>
          <li>
            <a href="/loan-book" className="flex items-center p-1  pr-6">
              Loan Book
            </a>
          </li>
          <li>
            <a href="/login-book" className="flex items-center p-1  pr-6">
              Login Book
            </a>
          </li>
          <li>
            <a href="/dashboard" className="flex items-center p-1  pr-6">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/post-management" className="flex items-center p-1  pr-6">
              Post Management
            </a>
          </li>
          <li>
            <a href="/masters" className="flex items-center p-1  pr-6">
              Masters
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div className='flex items-center justify-center'>
     <ul >
     <NavLink to="/Login" className={({isActive})=>
      ` p-2 m-2 bg-teal-500 rounded-full   ${isActive?
       "text-blue-600 bg-teal-100" : "text-black"}` 
    }>Login
      </NavLink>
      </ul>
       <ul>
     <NavLink to="/" className={({isActive})=>
      ` m-2 p-2 bg-teal-500 rounded-full ${isActive?
       "text-blue-600 bg-teal-100" : "text-black"}` 
    }>CRM
      </NavLink>
     </ul>
     </div>
  
     </>);
 
};

export default Nav;
