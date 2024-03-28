import React, { useState } from 'react'
import left from './pics/left.png'
import right from './pics/right.png'


const imageObjects = [
    {
      url: 'https://mobirise.com/extensions/dinerm4/assets/images/face3.jpg',
      name:'Ben Stifler',
      profession:'Designer'
    },
    {
        url: 'https://mobirise.com/extensions/dinerm4/assets/images/face1.jpg',
        name:'Ann Grayson',
        profession:'Manager'
    },
    {
        url: 'https://mobirise.com/extensions/dinerm4/assets/images/face2.jpg',
        name:'Jane Brown',
        profession:'Client'
    },
  ];

function Fifteenth() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageObjects.length - 1 : prevIndex - 1));
    };
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === imageObjects.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    <div className='FifteenO'>
        <div className='FifteenB'>
        <h4 color='green'>REWARD</h4>
        <h1>Client review</h1>
      </div>
        <div className='FifteenF'>
      <img  className='Fifteenim' src={left} onClick={prevImage}/>
      <div className='FifteenM'>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque dapibus ipsum semper, amet luctus turpis porttitor.</h4>
        <img src={imageObjects[currentIndex].url}/>
        <h3>{imageObjects[currentIndex].name}</h3>
        <p>{imageObjects[currentIndex].profession}</p>
      </div>
      <img className='Fifteenim' src={right} onClick={nextImage}/>
      </div>
    </div>
  )
}

export default Fifteenth
