import React from 'react'


function Twelth() {
  return (
    <div className='TwelthO'>
      <div className='TwelthL'>
        <h3>Ask a question</h3>
       <input type=' text' placeholder='Name'/>
       <input type='email' placeholder='Email'/>
       <input type='number' placeholder='Phone Number'/>
       <textarea rows={6} cols={6} placeholder='Your Message'/> 
       <button>SEND MESSAGE</button>
      </div>
      <iframe frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEIpgj38KyLFELm2bK9Y7krBkz1K-cMq8&amp;q=place_id:ChIJn6wOs6lZwokRLKy1iqRcoKw" allowfullscreen=""></iframe>
    </div>
  )
}

export default Twelth
