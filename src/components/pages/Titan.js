import React from 'react';
import { Link } from 'react-router-dom';


const Titan = () => {
  return (
    <div>
      <div className='app-destination'>
        <div className='container'>
          <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/shared/logo.svg' alt='/' />
          <div className='header'>
            <a href='/'>00 HOME</a>
            <a href='/'>01 DESTINATIONS</a>
            <a href='/'>02 CREW</a>
            <a href='/'>03 TECHNOLOGY</a>
          </div>
        </div>
        <h1 className='destination'><span>01</span> PICK YOUR DESTINATION</h1>

        <div>
          <div className='header-destination'>
            <Link to={'/pages/Moon'}>MOON</Link>
            <Link to={'/pages/Mars'}>MARS</Link>
            <Link to={'/pages/Europa'}>EUROPA</Link>
            <Link to={'/pages/Titan'}>TITAN</Link>
          </div>
        </div>
        <div className='moon-destination'>
          <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/destination/image-titan.png' className='moon-img-des' alt='/' />
          <div className='div-des'>
            <h1 className='moon-des'>Titan</h1>
            <p className='moon-des-para'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p><br />
            <hr />
            <div className='moon-des-dis'>
              <h3>AVG. DISTANCE</h3>
              <h3>EVENTSOURCE. TRAVEL TIME</h3>
            </div>
            <div className='moon-des-dis-day'>
              <h3 className='kilos'>1.6 BIL. KM</h3>
              <h3 className='days'>7 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Titan