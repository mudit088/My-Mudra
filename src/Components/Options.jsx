import React from 'react'
import { useState } from 'react'
import Filters from './Filters'


const Options = () => {
    const[search,setSearch]=useState()

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
        Load Source: <select className="w-28" id="Mymudra">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>
        </select>
    </ul>

    <ul className='pl-20 pt-36 border-black'>
        Loan Type: <select className="w-28 border-black" id="Mymudra">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>
        </select>
    </ul>
    
    <ul className='pl-20 pt-36'>
        Status wise: <select className="w-28" id="Mymudra">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>
        </select>
    </ul>
    
    <ul className='pl-20 pt-36 ' >

        Duration Wise: <select  className="w-28" id="Mymudra">
            <option value=""></option>
            <option value="">Nortan</option>
            <option value="">Mudit</option>
            <option value="t">Lacy</option>
        </select>
    </ul>
    
    <ul className='pl-20 pt-36'>
        Team Lead Wise: <select className="w-32" id="Mymudra">
            <option value=""></option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="t">C</option>
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