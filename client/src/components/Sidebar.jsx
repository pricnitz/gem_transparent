import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo/Logo Transparency - D.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import '../css/Sidebar.css';

gsap.registerPlugin(ScrollTrigger);

function Sidebar() {
  const navigate = useNavigate();
  

  const navigateTo = (path) => {
    navigate(path); 
  };

  useEffect(() => {
    const createScrollTrigger = (triggerClass, linkId) => {
      ScrollTrigger.create({
        trigger: triggerClass,
        start: "top center",
        end: "bottom center",
        onEnter: () => gsap.to(`.nav_link`, { color: "white", duration: 0.3 }),
        onLeave: () => gsap.to(`.nav_link`, { color: "", duration: 0.3 }),
        onEnterBack: () => gsap.to(`.nav_link`, { color: "white", duration: 0.1 }),
        onLeaveBack: () => gsap.to(`.nav_link`, { color: "", duration: 0.1 }),
      });
    };

    createScrollTrigger(".hero", "home_btn");
    createScrollTrigger(".overview", "about_btn");
    createScrollTrigger(".howtochoosdiamondAccordoin", "services_btn");
    createScrollTrigger(".reachus", "contact_btn");
  }, []);

  return (
    <nav className='left_sidebar'>
      <div className='nav_list' >
        <img src={logo} alt="Logo" />
        <NavLink className='nav_link' to={'/'}>Home</NavLink>
        <NavLink className='nav_link' to={'/about'}>About Us</NavLink>
        <NavLink className='nav_link' to={'/about'}>How to choose diamond</NavLink>
        <NavLink className='nav_link' to={'/about'}>Reach Us <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} /></NavLink>
      </div>
    </nav>
  );
}

export default Sidebar;
