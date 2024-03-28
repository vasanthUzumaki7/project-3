import React from 'react'
import facebook from './pics/facebook.png'
import instagram from  './pics/instagram.png'
import twitter from './pics/twitter.png'
import youtube from './pics/youtube.png'

function Fourteenth() {
  return (
    <div className='FourteenthO'>
        <div className='FourteenthL'>
            <table>
                <tr>
                    <td>About us</td>
                    <td>Menu</td>
                    <td>Blog</td>
                    <td>Gallery</td>
                    <td>Help</td>
                    <td>Contact</td>
                </tr>
                <tr>
                    <td colSpan={5}>© Copyright 2019 Mobirise - All Rights Reserved</td>
                </tr>
            </table>
        </div>
      <div className='FourteenthR'>
        <img src={facebook} />
        <img src={instagram} />
        <img src={twitter} />
        <img src={youtube} />
      </div>
    </div>
  )
}

export default Fourteenth
