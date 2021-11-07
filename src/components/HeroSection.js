import '../App.css'
import React from 'react'
import Button from './Button'
import './css/HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
           <video src='/video/ElectricCar.mp4' autoPlay loop muted></video> 
           <h1>Mobile GPS tracker and Camera install</h1>
           <p>What are you waiting for?</p>
           <div className="hero-btns">
               <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'
               >
                   Learn More
                </Button>
               <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                   Contact Us
                </Button>
           </div>
        </div>
    )
}

export default HeroSection

