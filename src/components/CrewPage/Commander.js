import React from 'react';
import { Link } from 'react-router-dom';

const Crew = () => {
  return (
    <div>
      <div className='app-crew'>
        <div className='container'>
          <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/shared/logo.svg' alt='/' />
          <div className='header'>
            <a href='/'>00 HOME</a>
            <a href='/'>01 DESTINATIONS</a>
            <a href='/'>02 CREW</a>
            <a href='/'>03 TECHNOLOGY</a>
          </div>
        </div>
        <h1 className='destination'><span>02</span> MEET YOUR CREW</h1>

        <div className='crew'>
            <div className='crew-matt'>
            <h3 className='crew-comm'>COMMANDER</h3>
            <h1 className='crew-head'>DOUGLAS HURLEY</h1>
            <p className='crew-para'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
            <div>
                <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/crew/image-douglas-hurley.png' className='crew-img' alt='/'/>
            </div>
        </div>
        <div>
         <Link to={'/Crewpage/Commander'}><p className='dot'></p></Link>
           <Link to={'/Crewpage/Mission'}> <p className='dot'></p></Link>
           <Link to={'/Crewpage/Pilot'}><p className='dot'></p></Link>
           <Link to={'/Crewpage/Flight'}><p className='dot'></p></Link>
           
        </div>
      </div>
    </div>
  )
}

export default Crew;