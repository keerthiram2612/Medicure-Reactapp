import React from 'react'
import { useNavigate } from 'react-router'

export default function Health
() {
    const gotoResources=()=>{
     navigate('/resources')
    }
     const navigate = useNavigate();
  return (
    <div className='resources-container'>
        <ul>
       <li>
          <a className='health' href="https://www.who.int/emergencies/disease-outbreak-news/item/2020/DON210" target="_blank" rel="noopener noreferrer">World Health Organization - COVID-19 Updates</a>
          <img className="source1"src="https://r-graph-gallery.com/img/graph/288-animated-barplot-transition.gif" alt="" />
          <p className='contentWHO'>Globally, as of 1:56pm CEST, 2 August 2023, there have been 768,983,095 <br/>
          confirmed cases of COVID-19, including 6,953,743 deaths, reported to WHO. <br/>
          As of 29 July 2023, a total of 13,492,099,754 vaccine doses have been<br/>
           administered.</p>
        </li>
        </ul>
        <button onClick={gotoResources}className='button2'>Prev</button>
    </div>
  )
}
