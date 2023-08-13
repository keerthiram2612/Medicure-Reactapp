import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import Slider from './Slider';


export default function Home() {
const gotoProduct=()=>{
 navigate('/product');
}
const [logout,setLogout] = useState(false);
const navigate = useNavigate();

 React.useEffect(()=>{
 
   if(!localStorage.getItem('auth')) navigate("/login") ;
  },[logout]);

  const logoutHandler = e =>{
    e.preventDefault();
   localStorage.removeItem('auth');
   setLogout(true)
  }
   
  return (
    <div className='container'>

      <h1 className='home-con '>MediCure Applications which creates a knowledge about Ventilation and the uses during the pandemic situations.</h1>
      <h2 className='home-con1'>The Right ventilator for your environment
      <div className='content'>
        <p>Find the right ventilator to suit your clinical care Our devices offer <br/>
           advanced  features to care for even the most complex patients,and <br/>
           different levels of mobility for use on the go or where space is limited.</p></div></h2>
      <p>
      </p>
  
      <button onClick={gotoProduct} className = "btn">next</button>
      <div className='cont-img'>
        <p>ventilation used during the panademic situations</p>
         <Slider/>
      
         
      </div>
      
    </div>
  )
}

