import React from 'react'
import  left from './pics/left.png'
import right from './pics/right.png'

function Tenth() {
  return (
    <div>
      <div className='EighthB'>
        <h4>NEWS</h4>
        <h1>This is all about food</h1>
      </div>
      
      <div className='TenthM'>
    <img className='TenI'  src={left}/>
        <div className='TenthMc'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque dapibus ipsum semper, amet luctus turpis porttitor.</p>
     <img src='https://mobirise.com/extensions/dinerm4/assets/images/face3.jpg'/>
    <h5>Ben Stifler</h5>
     <p>Designer</p>
     </div>
    <img className='TenI' src={right}/>
      </div>
    </div>
  )
}

export default Tenth
