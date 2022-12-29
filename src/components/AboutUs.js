import React from 'react'
import Image from '../assets/Mask Group.png'
import '../styles/AboutUs.css'

const AboutUs = () => {
  return (
    <div className='AboutUs-div'>
        <div className='us-image'>
            <img src={Image} alt="img" />
        </div>  
        <div className='div-with-text'>
            <h2><span className='purple'>Build</span> a whole new world</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum<br/>
            sed rhoncus. Nam euismod auctor ipsum.</p>
        </div>
    </div>
  )
}

export default AboutUs
