import React from 'react'
import happydamondhunting from '../assets/diamond_hunting_image.png'
import '../css/style.css'
import { useEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import ScrollTrigger from 'gsap'

gsap.registerPlugin(ScrollTrigger);

function Happydiamondhundting() {
    useEffect(() => {
        gsap.fromTo(".happydiamondhundting",
            { opacity: 0, scale: 0.5, },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                y: 30,
                scrollTrigger: {
                    
                    duration: 1,
                    ease: "linear",
                    trigger: ".happydiamondhundting_body_img",
                    start: "top bottom", // Start the animation when the box reaches the bottom of the viewport
                    end: "bottom top", // End the animation when the box leaves the viewport
                    scrub: true, // Sync the animation to the scroll
                }
            }
        );


    }, []);

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