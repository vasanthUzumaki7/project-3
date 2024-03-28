import React from 'react'
import personcont from './pics/personcont.png'
import  ques from  './pics/ques.png'

function Seventh() {
  return (
    <div className='SeventhB'>
      <div className='SeventhM'>
        <h4>DELIVERY</h4>
        <h1>Choose what you want</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.</p>
      <button><img src={personcont} />ORDER ONLINE</button>
      </div>

      <img  className='Seventhimg' src='https://mobirise.com/extensions/dinerm4/assets/images/03.png'/>

      <div className='SeventhM' style={{alignItems:'flex-end'}}>
        <h4>REWARD</h4>
        <h1 style={{textAlign:'end'}}>Choose what you want</h1>
        <p style={{textAlign:'end'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.</p>
      <button><img src={ques} />LEARN MORE</button>
      </div>
    </div>
  )
}

export default Seventh
