import React from 'react'
import  { useState } from 'react'
import {useNavigate} from "react-router-dom"

export default function Logout() {
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
          navigate('/logout');

         }
  return (
    <div >

         <button onClick={logoutHandler} className='logout'>Logout</button>
    </div>
  )
}
