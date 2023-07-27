import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

export default function Home() {
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
      <h1 className='home-con'>MediCure Applications which creates a knowledge about Ventilation and the uses.</h1>
      <p>
        <button onClick={logoutHandler}>Logout</button>
      </p>
    </div>
  )
}
