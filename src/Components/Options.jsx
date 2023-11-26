import React from 'react'
import { useState } from 'react'


const Options = ({handleFiltersChange}) => {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedGender, setSelectedGender] = useState('');

    const handleCompanyChange = (e) => {
        const company = e.target.value;
        setSelectedCompany(company);
        handleFiltersChange({ company, gender: selectedGender});
       
        
    };
    const handleGenderChange = (e) => {
        const gender = e.target.value;
        setSelectedGender(gender);
        handleFiltersChange({ company: selectedCompany, gender });
      };
      

  return (
    <div>
        <div>
    <p className='float-right pr-96 pt-12  '>
      
        Assign Multiple Lead to Team Leader: <select className="w-20 rounded-md border border-gray-400 bg-white px-3.5  " id="">
        <option value=""></option>
        <option value="">A</option>
        <option value="">B</option>
        <option value="t">C</option>
    </select>
    <button className='ml-4 bg-teal-500 text-white rounded-full 
        h-8 w-16 mr-72'>Submit</button>
    </p>
    </div>
    <div className='flex flex-row sm:flex-no-wrap justify-between m-6' 
>
    <ul className='pt-4 sm:pt-36 sm:pl-64'>
        Name: <select className="w-28 rounded-md border border-gray-400 bg-white px-3.5 " id="Mymudra">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>
        </select>
    </ul>

    <ul className='pt-4 sm:pt-36 sm:pl-20'>
        Car: <select className="w-28 rounded-md border border-gray-400 bg-white px-3.5 " id="Mymudra">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>
        </select>
    </ul>
    
    <ul className='pt-4 sm:pt-36 sm:pl-20'>
        Company: <select className="w-28 rounded-md border border-gray-400 bg-white px-3.5 "  value={selectedCompany} onChange={handleCompanyChange}  >
            <option value=""></option>
            <option value="Latz">Latz</option>
            <option value="Devpulse">Devpulse</option>
            <option value="Zoovu">Zoovu</option>
        </select>
    </ul>
    
    <ul className='pt-4 sm:pt-36 sm:pl-20 '>
        Email: <select className="w-28 rounded-md border border-gray-400 bg-white px-3.5 " id="">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>
        </select>
    </ul>
    
    <ul className='pt-4 sm:pt-36 sm:pl-20  '>
        Gender: <select className="w-32 rounded-md border border-gray-400 bg-white px-3.5" value={selectedGender} onChange={handleGenderChange}>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
           
        </select>
    </ul>
    
    <ul className='pt-4 sm:pt-36 sm:pl-20 '>
        Partner status: <select className="w-28 rounded-md border border-gray-400 bg-white px-3.5" id="">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>

        </select>
    </ul>
<button className='bg-teal-500 ml-2 p-4 pt-2 sm:ml-20 mt-4 rounded-full h-8 w-16 sm:w-auto text-white p-4'>Reset</button>

        </div>
       
        </div>
        
        
  )
}

export default Options