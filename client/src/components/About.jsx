import React from 'react'
import '../css/style.css'
import diamond_diagram from '../assets/diamond_diagram.png'

const About = () => {
    return (
        <div className='about'>
            <div className="banner">
                <div className="about_body" data-scroll data-scroll-speed="0.5">
                    <h1 data-scroll data-scroll-speed="1">TRANSPARENCY REDEFINE, <br /> DISTINCTION DELEVERY </h1>
                    <img src={diamond_diagram} alt="Diamond_diagram" />
                    <div className='about_body_para text_justify'>
                        <div className="about_body_card" >
                        <p>Welcome to TransparentGems ! Founded by the passionate Graduate Gemologist Ivanoé Miller,
                            who graduated from the Gemological Institute of America, our establishment is the culmination of a
                            decade’s expertise in the gem and jewelry industry</p>
                        </div>
                       
                        <span className="line"></span>
                        <div className="about_body_card" >
                        <p>At TransparentGems, we uphold absolute
                            transparency, unmatched quality, and trustworthy service. Our ethos is built upon five pillars that
                            stand out as our commitment to you: </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About