import React from 'react'
import './About.css'
import aboutMeImg from './../../assets/about_me.jpg'

function About() {
  return (
    <section id='About' className='about-section'>
      <h2 className='section-heading'>About me</h2>

      <div className='about-container'>

        <img src={aboutMeImg} id='about-img'></img>

        <div id='about-text'>
          <p>
          I am a dedicated final-year Computer Science student with a strong 
          focus on frontend web development. I am proficient in HTML, CSS, 
          JavaScript, and React.js, and I am continuously expanding my skills 
          by exploring backend development. Currently, my main focus is on 
          understanding the basics and learning new technologies like Firebase 
          for backend and database management, as well as Tailwind CSS to 
          enhance my styling skills.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About
