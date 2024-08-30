import React from 'react';
import { Link } from 'react-router-dom';


const Mars = () => {
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
          <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/destination/image-mars.png' className='moon-img-des' alt='/' />
          <div className='div-des'>
            <h1 className='moon-des'>Mars</h1>
            <p className='moon-des-para'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p><br />
            <hr />
            <div className='moon-des-dis'>
              <h3>AVG. DISTANCE</h3>
              <h3>EVENTSOURCE. TRAVEL TIME</h3>
            </div>
            <div className='moon-des-dis-day'>
              <h3 className='kilos'>225 MIL. KM</h3>
              <h3 className='days'>9 MONTHS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mars