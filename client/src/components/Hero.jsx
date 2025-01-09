import React from 'react'
import '../css/style.css'
import point from '../assets/circle-solid.svg'

const Hero = () => {
  return (
    <div className='hero_section'>
        <div className="banner">
           <div className="hero_body">
           <h1  data-scroll data-scroll-speed="0.5"> Where Brilliance Meets Transparency</h1>
            <div className='list' data-scroll data-scroll-speed="0.5">
                <p>Reliability</p>
                <img src={point} alt="" />
                <p>Transparency</p>
                <img src={point} alt="" />
                <p>Competitiveness</p>
                <img src={point} alt="" />
                <p>Consistency</p>
                <img src={point} alt="" />
                <p>Accessibility</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Hero