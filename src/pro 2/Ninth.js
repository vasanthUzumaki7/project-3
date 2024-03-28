import React, { useState } from 'react'
import play from './pics/play.png'

function Ninth() {
  const [style,myStyle]=useState({
    display:'none'
  })
    
  

  function  playclick(){
    if(style.display==='none'){
      myStyle({
        display:'block',
        
      })
    }
    else if(style.display==='block'){
      myStyle({
        display:'none',
        
      })
    }
    else{
      myStyle({
        display:'none'
      })
    }
  }

  function stop(){
    if(style.display==='block'){
      myStyle({
        display:'none',
      })
    }
    else{
      myStyle({
        display:'none'
      })
    }
  }

    
  return (
    <div className='NinthO'>
       <div className='EighthB'>
        <h4>Latest</h4>
        <h1>Watch Video</h1>
      </div>
      <div className='NinthM'>
        <img src={play} onClick={playclick} />
      </div>
      <div className='playdiv' style={style}>
      <iframe width="1100" height="600" src="https://www.youtube.com/embed/mjjkHg5FOhk?si=j2gmC6i5Uw69eJ5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <button onClick={stop} style={style}>&#x2715;</button>
    </div>
  )
}

export default Ninth
