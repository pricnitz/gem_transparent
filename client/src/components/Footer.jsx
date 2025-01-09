import React from 'react'
import footerbannerimg from '../assets/footer_img.png'
import logo from '../assets/logo/Logo Transparency - D.png'
import '../css/style.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <img className='footerbannerimg' src={footerbannerimg} alt="footerbannerimg" />
            <div className="banner">
                <div className="footer_body">

                    <div className='footer_body_inner'>
                        <div className='footer_header'>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className='footer_para'>
                            <div className='footer_para_inner'><p>Home</p><p>How to choose my diamond</p></div>
                            <div className='footer_para_inner'><p>About Us</p><Link to='Terms Condition'>Terms Condition And Policies</Link></div>
                            <div className='footer_para_inner'><p>Reach Us</p></div>

                            <div className='footer_para_inner'><input type="text" placeholder='Enter Your Email' /> <button >Suscribe</button> </div>
                        </div>
                        <div></div>
                    </div>
                    <br />
                    <span className="hr_line"></span>
                    <div className='footer_bottom'>
                        <p>Ethical & Environmental Commitment </p>
                        <p>Privacy and Security </p>
                        <p>Customer Support </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
