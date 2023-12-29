import React, { useState } from 'react';

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className=' ml-96  items-center  justify-center bg-teal-500 p-2 rounded-lg m-4 '>Open</button>
      {modal && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className=' bg-teal-50 p-24 rounded-lg rounded-lg '>
            <div className='flex justify-end'>
              <button onClick={toggleModal} className='bg-red-200 mb-10'>Close</button>
            </div>
           Name <input type="text" placeholder='Enter your name' className='p-2'/><br />
            Email<input type="email" placeholder='Enter your Email' className='p-2'/><br />
            Number<input type='Number' placeholder='Number' className='p-2'></input>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
