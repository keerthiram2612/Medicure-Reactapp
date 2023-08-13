import React, { useState } from 'react'
import Slider1 from './Slider1';
import {useNavigate} from 'react-router';
 


export default function Products() {
    const gotoProduct=()=>{
     navigate('/all');
    }
    const navigate = useNavigate();
  return (
    <div className='container-prod'>
      <h1 className='home-con '>Products</h1>
      <h2 className='home-con1'> 
      <div className="list-prod">
      <li onClick={gotoProduct}className='button3 cursor-pointer'>All</li>
        <li className='button3 cursor-pointer'>ICU</li>
        <li className='button3 cursor-pointer'>PICU</li>
        <li className='button3 cursor-pointer'>Transport</li>
        <li className='button3 cursor-pointer'>MRI suite</li>
        </div>
      <div className='image-home'>
        <p>A ventilator is a device that supports or recreates<br/>
          the process of breathing  by pumping air into the lungs<br/>
        . Sometimes, people refer to it as a vent or breathing <br/>
          machine.Doctors use ventilators if a person cannot <br/>
          breathe adequately on their own.<br/>

</p></div></h2>
      <p>
      </p>

      
    </div>
  )
}

