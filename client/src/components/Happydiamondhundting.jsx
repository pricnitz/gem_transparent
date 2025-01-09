import React from 'react'
import happydamondhunting from '../assets/tcp_image.png'
import '../css/style.css'
import { gsap } from 'gsap/gsap-core'
import ScrollTrigger from 'gsap'

gsap.registerPlugin(ScrollTrigger);

function Happydiamondhundting() {

    return (
        <div className='happydiamondhundting gray_banner'>
            <div className="banner">
                <div className="happydiamondhundting_body">
                    <div className='happydiamondhundting_body_img'><img src={happydamondhunting} alt="happydamondhunting" /></div>
                    <h2>Happy Diamond hunting!</h2>
                    <span className="hr_line"></span>
                    <p className='text_justify'><strong>Remember,</strong> achieving the perfect balance among these Four Cs (Clarity, Color, Cut, and Carat) will
                        guide your customers toward diamonds that combine beauty and value. Encourage them to explore
                        different combinations while considering their preferences and budget. And don’t forget to check
                        how each parameter influences the price!  </p>
                    <button className='happydiamondhundting_btn'>Search My Diamond</button>
                </div>
            </div>
        </div>
    )
}

export default Happydiamondhundting