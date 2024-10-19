import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('Deepak_Maher_8030', 'template_841lbcw', form.current, {
        publicKey: 'D62tRhk5bJw7nhOif',
      })
      .then(() => {
        e.target.reset();
        alert('Message Sent !')
        console.log('SUCCESS!');
      },(error) => {
          console.log('FAILED...', error.text);
      },
      );
  };
 

  return (
    <div id='Contact' className='contact-section'>
      <h2 className='section-heading'>Contact</h2>
      
      <div className="contact-container">

      <form className='contact-form' ref={form} onSubmit={sendEmail}> 
      
        <input type='text' required placeholder='your Name' name="from_name"/>
        <input type='email'required placeholder='Email Address' name="from_email" />
        <textarea type='text' required placeholder='Message' name="message"></textarea>
        <button type='submit' value="Send"> <i className="fa-regular fa-paper-plane"></i> Send Message</button>
      
      </form>

      </div>
    </div>
  )
}

export default Contact
