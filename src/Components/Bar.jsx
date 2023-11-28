import React from 'react';

const Bar = () => {
  return (
    <div className=' flex items-inline  flex-col  sm:flex-row'>
    <div className="  ml-0">
      <img src="LOGO.png" className='h-12 m-3 ml-24  sm:ml-6 mt-4  ' />
      </div>
      
      <div className='mt-4 ml-10 sm:ml-96 '>
      <input
        type="search"
        placeholder="Search here"
        className=" w-72  sm:m-auto ml-0 rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none  justify-center items-center"
      />
      </div>
    
    </div>
  );
};

export default Bar;
