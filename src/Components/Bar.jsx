import React from 'react';

const Bar = () => {
  return (
    <div className=' xl:flex items-inline  sm:flex-col '>
    <div className="  sm:">
      <img src="LOGO.png" className="h-12 m-3 " />
      </div>
      
      <div className='mt-2 '>
      <input
        type="search"
        placeholder="Search here"
        className=" w-96  sm: ml-0 rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none sm:ml-0"
      />
      </div>
    
    </div>
  );
};

export default Bar;
