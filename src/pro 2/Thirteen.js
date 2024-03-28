import React from 'react'
import clock  from './pics/clock.png'
import personcont from './pics/personcont.png'
import location from './pics/location.png'

function Thirteen() {
  return (
    <div className='ThirteenO'>
      <div className='ThirteenL'>
      <table>
        <tr>
        <th><img src={location}/></th>
         <th>570 8th Ave  New York, NY 10018, US</th>
        </tr>
        <tr>
        <th><img src={personcont}/></th>
         <th style={{color:'green'}}>(850) 435-4155</th>
        </tr>
        <tr>
        <th><img src={clock}/></th>
         <th>Monday – Friday 10.00 AM – 11.00 PM</th>
        </tr>
      </table>
      </div>
    
      <div className='ThirteenM'>
        <img src='https://mobirise.com/extensions/dinerm4/assets/images/logo2.png'/>
        <p>Lorem ipsum dolor sit consectetur adipiscing. Donec ullamcorper neque dapibus.</p>
      </div>
      
      <div className='ThirteenR'>
        <h3>Instagram Feed</h3>
        <section>
        <img src='https://mobirise.com/extensions/dinerm4/assets/images/01.jpg'/>
        <img src='https://mobirise.com/extensions/dinerm4/assets/images/02.jpg'/>
        <img src='https://mobirise.com/extensions/dinerm4/assets/images/03.jpg'/>
        </section>
      </div>
    </div>
  )
}

export default Thirteen
