import React, { useState } from 'react'

function Navf() {

    const[active,setActive]=useState('navi')
    function toggleview(){
        if(active==='navi'){
            setActive('navt')
        }else{
            setActive('navi')
        }
    }
  return (
    <>
    <div>
    <div className='nava'>
       <div className='logo1'>
        <img src='https://mobirise.com/extensions/dinerm4/assets/images/logo2.png'/>
        <p>Dinerm4</p>
       </div>

     <div className='navo' >

     <div class="navb">
            <a href="#" class="home">HOME </a>
     </div>

     <div class="navb">
            <a href="#" class="home">LIVE DEMO &#11206;</a>
            <div class="navb-list">
              <a href="#" >THAI FOOD DEMO</a>
              <a href="#">PIZZA BAR DEMO</a>
              <a href="#">SUSHI CAFE DEMO</a>
            </div>
     </div>

     <div class="navb">
          <a href="#" class="home">LIVE DEMO BLOCKS &#11206;</a>
            <div class="navb-list">
              <a href="#">HEADERS/FEATURES/PRICING</a>
              <a href="#">CONTET/SHOP/ACCORDIONS</a>
              <a href="#">GALLERY/TEAM/TESTIMONIALS</a>
            </div>
    </div>

    <button>BUY NOW</button>
 </div>


  <div className='togmen' >
    <div className='tog'></div>
    <div className='tog'></div>
    <div className='tog'></div>
  </div>
  </div>
  </div>

    </>
  )
}

export default Navf
