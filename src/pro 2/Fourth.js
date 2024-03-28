import React from 'react'
import play from './pics/play.png'

function Fourth() {
  return (
    <div className='FourO'>
      <div className='FourL'></div>
      <div className='FourM'>
        <h4>WHO ARE WE</h4>
        <h1>Best food traditions from the world</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.</p>
      <button> <img src={play} />READ MORE</button>
      </div>
      <div className='FourR'></div>
      
    </div>
  )
}

export default Fourth
