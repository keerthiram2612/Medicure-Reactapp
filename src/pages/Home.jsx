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
       <div className="image-home">
        <h1 className='h1-ben'>Benefits</h1>
        <img className = "image-hm"src="https://hackster.imgix.net/uploads/attachments/1105626/OpenBuilds_Simple_Ventilator_Concept.spin.gif?auto=format%2Ccompress&gifq=35&w=400&h=300&fit=min" alt="" />
      <p>
      The low-cost, easy-to-build noninvasive ventilator performs<br/>
similarly to a high-quality commercial device, with its open-<br/>
source hardware description, which will allow for free<br/>
replication and use in LMICs, facilitating application of this life-<br/>
saving therapy to patients who otherwise could not be treated.</p><br/>
       </div>
    </div>
  )
}

