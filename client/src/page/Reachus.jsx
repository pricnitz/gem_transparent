import React from 'react'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'

const Reachus = () => {
  return (
    <main className='pages' >
      <div className="left_sidebar_container">
        <Sidebar />
      </div>
      <div className="right_page_container" data-scroll-container>
        <Hero />
        <Hero />
        <Hero />
      </div>
    </main>
  )
}

export default Reachus