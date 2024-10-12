import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div className='contact-section'>
      <h2 className='section-heading'>Contact</h2>
      
      <div className="contact-container">

      <form className='contact-form'> 
      
        <input type='text' placeholder='Full Name'/>
        <input type='email' placeholder='Email Address' />
        <textarea type='text' placeholder='Message' ></textarea>
        <button> <i class="fa-regular fa-paper-plane"></i> Send Message</button>
      
      </form>

      </div>
    </div>
  )
}

export default Contact
