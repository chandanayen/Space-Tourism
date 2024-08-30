import React from 'react';
import { Link } from 'react-router-dom';

const Pilot = () => {
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
            <h3 className='crew-comm'>PILOT</h3>
            <h1 className='crew-head'>VICTOR GLOVER</h1>
            <p className='crew-para'>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
            </div>
            <div>
                <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/crew/image-victor-glover.png' className='crew-img' alt='/'/>
            </div>
        </div>
        <div>
            <Link to={'/Crewpage/Commander'}><button className='dot'></button></Link>
            <Link to={'/CrewPage/Mission'}><button className='dot'></button></Link>
            <Link to={'/CrewPage/Pilot'}><button className='dot'></button></Link>
            <Link to={'/CrewPage/Flight'}><button className='dot'></button></Link>
           
        </div>
      </div>
    </div>
  )
}

export default Pilot;