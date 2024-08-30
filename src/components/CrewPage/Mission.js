import React from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
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
            <h3 className='crew-comm'>MISSION SPECIALIST</h3>
            <h1 className='crew-head'>MARK SHUTTLEWORTH</h1>
            <p className='crew-para'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
            </div>
            <div>
                <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/crew/image-mark-shuttleworth.png' className='crew-img' alt='/'/>
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

export default Mission;