import React from 'react'
import delivery from './pics/deli.png'
import apple from  './pics/apple.png'
import earth from './pics/earth.png'
import people from './pics/people.png'



function Fifth() {
  return (
    <div className='FifthOV'>
      <div className='FifthO'>
       <div className='FifthL'>
        <img src='https://mobirise.com/extensions/dinerm4/assets/images/03.png'/>
        <img src={delivery} />
        <p>Fastest delivery on your door step</p>
       </div>

       <div className='FifthR'>

        <div>
        <img src={apple} />
        <p>A new look on the right food!</p>
        </div>
        <div>
        <img src={earth} />
        <p>The use of natural best quality products</p>
        </div>
        <div>
        <img src={people} />
        <p>World’s best Chef and Nutritionist!</p>
        </div>
    
       </div>
      </div>
    </div>
  )
}

export default Fifth
