import React from 'react'
import { Link } from 'react-router-dom'

const Destination = () => {
    return (
        <div className='app-destination'>
            <div className='container'>
                <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/shared/logo.svg' alt='/' />
                <div className='header'>
                    <a href='/'>00 HOME</a>
                    <a href='/Destination'>01 DESTINATIONS</a>
                    <a href='/Crew'>02 CREW</a>
                    <a href='/Technology'>03 TECHNOLOGY</a>
                </div>
            </div>
            <div>
              <h1 className='destination'><span>01</span> PICK YOUR DESTINATION</h1>
                {/*<img/>*/}
                <div className='header-destination'>
                <Link to={'/pages/Moon'}>MOON</Link>
                <Link to={'/pages/Mars'}>MARS</Link>
                <Link to={'/pages/Europa'}>EUROPA</Link>
                <Link to={'/pages/Titan'}>TITAN</Link>
                </div>
            </div>
            <div className='moon-destination'>
                <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/destination/image-moon.png'  className='moon-img-des' alt='/'/>
                <div className='div-des'>
                    <h1 className='moon-des'>Moon</h1>
                    <p className='moon-des-para'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p><br />
                    <hr />
                    <div className='moon-des-dis'>
                        <h3>AVG. DISTANCE</h3>
                        <h3>EVENTSOURCE. TRAVEL TIME</h3>
                    </div>
                    <div className='moon-des-dis-day'>
                        <h3 className='kilos'>384,400 KM</h3>
                        <h3 className='days'>3 DAYS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination