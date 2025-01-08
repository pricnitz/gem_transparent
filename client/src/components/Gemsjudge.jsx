import React from 'react'
import '../css/style.css'
import gia_standard from '../assets/gia_standard.png'

function Gemsjudge() {
  return (
    <div className='gemsjudge'>
      <div className="banner">
        <div className="gemsjudge_body">
          <h2>The universal standard by which gems are judged</h2>
          <div className="gemsjudge_body_img"><img src={gia_standard} alt="gia_standard" /></div>


        </div>
      </div>
    </div>
  )
}

export default Gemsjudge