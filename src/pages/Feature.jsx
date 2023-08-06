
import emergency from './emergency.png';
import React, { useEffect } from 'react';
import Home from './Home';
import { useNavigate } from 'react-router';


export default function Feature() {

  const gotoResources=()=>{
    navigate('/')
   }
   const navigate = useNavigate();

    const handleEmergencyCall = () => {
        // Save emergency call flag in local storage
        localStorage.setItem('emergencyCall', 'true');
      };
      useEffect(() => {
        const emergencyCallFlag = localStorage.getItem('emergencyCall');
        if (emergencyCallFlag === 'true') {
          // Replace this with actual emergency call logic (e.g., calling an API)
          // For demonstration purposes, we'll show an alert
          alert('Emergency services have been called!');
    
          // Clear the emergency call flag from local storage
          localStorage.removeItem('emergencyCall');
        }
      }, []);
  return (
    <div>
      <h1>Welcome to Our Hospital</h1>
      
      <img
        src={emergency}
        alt="Emergency Icon"
        onClick={handleEmergencyCall}
        style={{ cursor: 'pointer' }}
        
      />
       <button onClick={gotoResources}className='button1'>Prev</button>
    </div>
  )
}
