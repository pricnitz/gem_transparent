import React from 'react'
import core_value_icon from '../assets/core_value_icon.png'
import our_mission_icon from '../assets/our_mission_icon.png'

const Abouttwo = () => {
    return (
        <div className='about gray_banner' id='about'>
            <div className="banner">
                <div className="about_body">
                    <div className='about_body_para_two text_justify'>
                        <div className='about_body_card' >
                            <div className='about_body_card_heading'> <img src={core_value_icon} alt="core_value_icon" /> <h2>Core Value </h2> </div>
                        <p>TransparentGems embodies a commitment to integrity and perfection. Our partner in India, experts
                            in the art of cutting natural rough diamonds, holds the title of Sightholder from De Beers Group and
                            is a Certified Member of the Responsible Jewelry Council (RJC). Through this partnership, we offer
                            an exclusive and wide selection of GIA-certified diamonds. </p>
                        </div>
                        <span className="line"></span>
                        <div className="about_body_card">
                            <div className='about_body_card_heading'> <img src={our_mission_icon} alt="our_mission_icon" /> <h2>Our Mission </h2> </div>
                        <p>To bridge the gap between availability and affordability. We provide a large selection of certified
                            diamonds at unbeatable prices, enabling our professional clientele to access the finest diamonds
                            without compromise. </p>

                        </div>
                       
                    </div>

                    <span className="hr_line"></span>

                    <div className="about_body_two_card_cards">
                        <div className="about_body_two_card">
                            <h3>Reliability: </h3>
                            <p>Trust, the core of our vision in the field </p>
                            <span className="hr_line"></span>
                        </div>
                        <div className="about_body_two_card">
                            <h3>Accessibility: </h3>
                            <p>On hand, reactive and dedicated to satisfying your requirements with  
                            efficiency </p>
                            <span className="hr_line"></span>
                        </div>
                        <div className="about_body_two_card">
                            <h3>Transparency: </h3>
                            <p>Clear and honest view of our industry</p>
                            <span className="hr_line"></span>
                        </div>
                        <div className="about_body_two_card">
                            <h3>Competitiveness: </h3>
                            <p>We are committed to providing the best market prices </p>
                            <span className="hr_line"></span>
                        </div>
                        <div className="about_body_two_card">
                            <h3>Consistency: </h3>
                            <p>A constant, qualitative and large selection always within reach</p>
                            <span className="hr_line"></span>
                        </div>
                       

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Abouttwo