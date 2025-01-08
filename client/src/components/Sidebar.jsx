import React from 'react'
import '../css/leftsidebar.css'
import logo from '../assets/logo.png'
import magnifineglass from '../assets/magnifying-glass-solid.svg'
import UserDetailsForm from './UserDetailsForm'
import { useState } from 'react';


function Sidebar() {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const showModalForm = () => {
    setShowModal(true);
  };

  const hideModalForm = () => {
    setShowModal(false);
  };
  return (
   
    <nav  className='left_sidebar'>
        <div className='nav_list'>
            <img src={logo} alt="" />
            <p className='nav_link'><a href="#home">Home</a> <span className='nave_line'></span></p>
            <p className='nav_link'><a href="#about">About Us</a> <span className='nave_line'></span></p>
            <p className='nav_link'><a href="#services">How to choose my diamond</a> <span className='nave_line'></span></p>
            <p className='nav_link'><a href="#contact">Reach Us <img src={magnifineglass} alt="magnifineglass" /> </a><span className='nave_line'></span></p>
            <p className='nav_link'> <button onClick={showModalForm}>Sign Up</button><span className='nave_line'></span></p>
        </div>
        {showModal && (
        <div className="modal-overlay">
          <UserDetailsForm hideModalForm={hideModalForm} />

        </div>
      )}
    </nav>

  )
}

export default Sidebar