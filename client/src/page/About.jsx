import React from 'react'
import Sidebar from '../components/Sidebar'
import '../css/App.css';
import Hero from '../components/Hero';

const About = () => {
  return (
    <main className='pages' >
    <div className="left_sidebar_container">
    <Sidebar />
    </div>
    <div className="right_page_container" data-scroll-container>
      <Hero/>
   
    </div>
  </main>
  )
}

export default About