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
      
        Assign Multiple Lead to Team Leader: <select className="w-20  " id="Mymudra">
        <option value=""></option>
        <option value="">A</option>
        <option value="">B</option>
        <option value="t">C</option>
    </select>
    <button className='ml-4 bg-teal-500 text-white rounded-full 
        h-8 w-16 mr-72'>Submit</button>
    </p>
    </div>
    <div className='' style={{ display: 'flex', flexDirection: 'row', }}>
    <ul className='pt-36 pl-20'>
        Name: <select className="w-28" id="Mymudra">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>
        </select>
    </ul>

    <ul className='pl-20 pt-36 border-black'>
        Car: <select className="w-28 border-black" id="Mymudra">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>
        </select>
    </ul>
    
    <ul className='pl-20 pt-36'>
        Company: <select className="w-28"  value={selectedCompany} onChange={handleCompanyChange} >
            <option value=""></option>
            <option value="Latz">Latz</option>
            <option value="Devpulse">Devpulse</option>
            <option value="Zoovu">Zoovu</option>
        </select>
    </ul>
    
    <ul className='pl-20 pt-36 '>
        Email: <select className="w-28" id="Mymudra">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>
        </select>
    </ul>
    
    <ul className='pl-20 pt-36'>
        Gender: <select className="w-32" value={selectedGender} onChange={handleGenderChange}>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
           
        </select>
    </ul>
    
    <ul className='pl-20 pt-36'>
        Partner status: <select className="w-28" id="Mymudra">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>

        </select>
    </ul>
<button className='bg-teal-500 ml-20 mt-4 rounded-full 
        h-8 w-16 text-white'>Reset</button>

        </div>
       
        </div>
        
        
  )
}

export default Options