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
    <div>
     home
     
    </div>
  )
}
