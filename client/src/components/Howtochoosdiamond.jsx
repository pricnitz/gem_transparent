import React from 'react'
import Diamond from '../assets/diamond.png'
import arrowdon from '../assets/icons8-down-arrow.png'

const Howtochoosdiamond = () => {
    return (
        <div className='howtochoosdiamond gray_banner'>
            
             <img className='howtochoosdiamondimg' src={arrowdon} alt="arrowdon" height={50} data-scroll data-scroll-speed="-0.8" />
            <div className="banner">
                <div className="howtochoosdiamon_body">
                    <div className="howtochoosdiamond_body_img">
                        <img src={Diamond} alt="Diamond" />
                    </div>
                    <h1>HOW TO CHOOSE MY DIAMOND </h1>
                    <h4>Unveiling Excellence in Every Facet</h4> <br />
                    <p>Choosing the perfect diamond involves considering the 4Cs, which are essential factors in <br />
                        determining a diamond’s quality and value. Let’s explore each of these components and more :</p>
                   
                </div>
            </div>

        </div>
    )
}

export default Howtochoosdiamond