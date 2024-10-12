import React from 'react'
import './About.css'
import aboutMeImg from './../../assets/about_me.jpg'

function About() {
  return (
    <section className='about-section'>
      <h2 className='section-heading'>About me</h2>

      <div className='about-container'>

        <img src={aboutMeImg} id='about-img'></img>

        <div id='about-text'>
          <p>I am a dedicated final-year Computer Science student with a strong focus on frontend web development. Proficient in HTML, CSS, JavaScript, and React.js, you're continuously expanding your skills by exploring and Learning Backend. </p>
        </div>

      </div>

    </section>
  )
}

export default About
