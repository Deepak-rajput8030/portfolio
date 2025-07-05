import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section id='Footer' className='footer-section'>
      <h1> <i className="fa-regular fa-copyright"></i> 
          {currentYear} Deepak Maher. All Rights Reserved.
      </h1>
    </section>
  )
}

export default Footer
