import React, { useState } from 'react'
import Slider1 from './Slider1';
 


export default function Products() {
  return (
    <div className='container'>
      <h1 className='home-con '>MediCure Applications which creates a knowledge about Ventilation and the uses during the pandemic situations.</h1>
      <h2 className='home-con1'> 
      <li className='button3'>All</li>
        <li className='button3'>ICU</li>
        <li className='button3'>PICU/NICU</li>
        <li className='button3'>Transport</li>
        <li className='button3'>MRI suite</li>
      <div className='content'>
        <p>A ventilator is a device that supports or recreates the process of breathing<br/>
         by pumping air into the lungs. Sometimes, people refer to it as a <br/>
         vent or breathing machine.Doctors use ventilators if a person cannot breathe<br/>
         adequately on their own. This may be because they are undergoing general<br/>
          anesthesia or have an illness that affects their breathing.

</p></div></h2>
      <p>
      </p>
  
      
      <div className='cont-img'>
        <p>ventilation used during the panademic situations</p>
         <Slider1/>
      
         
      </div>
      
    </div>
  )
}

