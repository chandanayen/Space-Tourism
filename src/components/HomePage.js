import React from 'react'

const HomePage = () => {
  return (
    <div className='app'>
        <div className='container'>
       <img src='https://raw.githubusercontent.com/saifion33/space-tourism-website/8216ac3c8516ef52cd101c766f3b801389005d0c/assets/shared/logo.svg' alt='/'/>
       <hr/>
       <div className='header'>
      <a href='/'>00 HOME</a>
      <a href='/Destination'>01 DESTINATIONS</a>
      <a href='/Crew'>02 CREW</a>
      <a href='/Technology'>03 TECHNOLOGY</a>
     </div>
    </div>
       <div className='content'>
        <p className='content-head'>SO, YOU WANT TO TRAVEL TO</p>
       <h1 className='content-body'>SPACE</h1>
       <p className='content-para'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
       </div>
       <div  className='explore'>
      <a href='/Destination'> <button className='explore-button'>Explore</button></a> 
       </div>
    </div>
    
  )
}

export default HomePage