import React from 'react'
import location from './pics/location.png'

function Eighth() {
  return (
    <div >
      <div className='EighthB'>
        <h4>NEWS</h4>
        <h1>This is all about food</h1>
      </div>
     <div className='Eighthalign'>

      <div className='EighthM'>
      <div className='Eighthimg1'></div>
      <p><img src={location}/>THAI<img src={location}/>23,DECEMBER,2019</p>
        <h3>Thai food rules</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      <button>READ MORE <p>&rarr;</p></button>
      </div>

      <div className='EighthM'>
      <div className='Eighthimg2'></div>
      <p><img src={location}/>THAI<img src={location}/>23,DECEMBER,2019</p>
        <h3>Thai food rules</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      <button>READ MORE <p>&rarr;</p></button>
      </div>

      <div className='EighthM'>
      <div className='Eighthimg3'></div>
      <p><img src={location}/>THAI<img src={location}/>23,DECEMBER,2019</p>
        <h3>Thai food rules</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      <button>READ MORE <p>&rarr;</p></button>
      </div>

      </div>
    </div>
  )
}

export default Eighth
