import React from 'react'
import './Contact.css';

function Contact() {
  const input = document.getElementById('input');

  function messageSend(e){
    e.preventDefault();
    alert("Message Sent")
  }

  return (
    <div className='contact-section'>
      <h2 className='section-heading'>Contact</h2>
      
      <div className="contact-container">

      <form className='contact-form' onSubmit={(e) => messageSend(e)}> 
      
        <input id='input' type='text' required placeholder='Full Name'/>
        <input id='input' type='email'required placeholder='Email Address' />
        <textarea id='input' type='text' required placeholder='Message' ></textarea>
        <button type='submit'> <i className="fa-regular fa-paper-plane"></i> Send Message</button>
      
      </form>

      </div>
    </div>
  )
}

export default Contact
