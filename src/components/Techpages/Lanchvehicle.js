import React from 'react'
import { Link } from 'react-router-dom'



const Lanchvehicle = () => {
    return (
        <div className='app-technology'>
            <div className='container'>
                <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/shared/logo.svg' alt='/' />
                <div className='header'>
                    <a href='/'>00 HOME</a>
                    <a href='/'>01 DESTINATIONS</a>
                    <a href='/'>02 CREW</a>
                    <a href='/'>03 TECHNOLOGY</a>
                </div>
            </div>
            <div>
                <h1 className='destination'><span>03</span> SPACE LAUNCH 101 </h1>
                {/*<img/>*/}
                <div className='tech'>
                <div className='technology-num'>
                    <p  className='technology-num1'><Link to={'/Techpages/Lanchvehicle'}>1</Link></p> <br/>
                    <p className='technology-num1'><Link to={'/Techpages/SpacePort'}> 2</Link></p><br/>
                    <p className='technology-num1'><Link to={'/Techpages/Capsule'}>3</Link></p> 
                    </div>
                    <div className='technology-para'>
                        <h4 className='technology-head'>THE TERMINOLOGY...</h4>
                        <h1 className='technology-heading'>LAUNCH VEHICLE</h1>
                        <p className='tech-para'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                    <div className='technology-img'>
                        <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/technology/image-launch-vehicle-landscape.jpg' className='image' alt='/' />
                    </div>
                </div>
                 <div>
           
            
        </div>
            </div>

        </div>
    )
}

export default Lanchvehicle