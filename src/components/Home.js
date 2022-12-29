import React from 'react'
import '../styles/Home.css'
import robot from '../assets/Image.png'
const Home = () => {
  return (
    <div className='home-div'>
      <div className='text-cont'>
        <h1><span className='purple'>Explore</span> the fascinating<br/> world of VR</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum<br/> 
        sed rhoncus. Nam euismod auctor ipsum. Etiam interdum nulla neque, eu <br/>
        elementum arcu fermentum vel.</p>
        <button className='btn'>Click here</button>
      </div>
      <div className='image-div'>
        <img src={robot} alt="robot-img"/>
      </div>
    </div>
     )
}

export default Home
