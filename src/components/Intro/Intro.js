import React from 'react'
import './Intro.css'
import bg from './../../assets/Profile_Img-removebg-preview.jpg';

// #FF6500

function Intro() {
  return (
    <section className='container'>

      <div className='info-section'>
        <span>HI THERE,</span>
        {/* <h1>I Am Deepak Maher</h1> */}
        <p id='info-name'>I Am <span> Devoloper</span></p>
        <p>I'm creative Web Developer based in Chh. Sambhaji nagar, and I'm very passionate and dedicated to my work.</p>
      </div>       
      <img src={bg} className="profile-section" alt='Profile_Img'></img>

    </section>
  )
}

export default Intro
