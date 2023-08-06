import React from 'react'
import Slider from './Slider'
import Slider1 from './Slider1'

export default function Products() {
  return (
    <div className='product'>
      <h1>Products for ventilator</h1>
    
    <Slider1/>
    
        <li className='button3'>All</li>
        <li className='button3'>ICU</li>
        <li className='button3'>PICU/NICU</li>
        <li className='button3'>Transport</li>
        <li className='button3'>MRI suite</li>
    
      
      </div>
     
  )
}
