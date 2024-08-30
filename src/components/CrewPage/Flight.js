import React from 'react';
import { Link } from 'react-router-dom';

const Flight = () => {
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
            <h3 className='crew-comm'>FLIGHT ENGINEER</h3>
            <h1 className='crew-head'>ANOUSHEH ANSARI</h1>
            <p className='crew-para'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
            </div>
            <div>
                <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/crew/image-anousheh-ansari.png' className='crew-img' alt='/'/>
            </div>
        </div>
        <div>
            <Link to={'/CrewPage/Commander'}><button className='dot'></button></Link>
            <Link to={'/CrewPage/Mission'}><button className='dot'></button></Link>
            <Link to={'/CrewPage/Pilot'}><button className='dot'></button></Link>
            <Link to={'/CrewPage/Flight'}><button className='dot'></button></Link>
           
        </div>
      </div>
    </div>
  )
}

export default Flight;