import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {

  const showSidebar = () => {
    const sidebar = document.getElementsByClassName('nav-sidebar')[0]; // Access the first element with this class
    sidebar.style.display = 'flex'; // Update the display property
  };
  
  const closeSidebar = () => {
    const sidebar = document.getElementsByClassName('nav-sidebar')[0];
    sidebar.style.display = 'none';
    sidebar.style.color = 'black'
  };

  return (
    <nav className='navbar'>

      <div className='nav-main'>
        <Link activeClass='active' to='Intro' spy={true} smooth={true} duration={500} offset={-90} id='nav-home'>Home</Link>
      </div>

      <div className='nav-sub'>
        <Link activeClass='active' to='About' spy={true} smooth={true} duration={500} offset={-90}  id='nav-link'>About</Link>
        <Link activeClass='active' to='Project' spy={true} smooth={true} duration={500} offset={-90}  id='nav-link'>Project</Link>
        <Link activeClass='active' to='Resume' spy={true} smooth={true} duration={500} offset={-90}  id='nav-link' >Resume</Link>
        <Link activeClass='active' to='Contact' spy={true} smooth={true} duration={500} offset={-90}  id='nav-link'>Contact</Link>
      </div>

      <div className='nav-sidebar'>
        <button onClick={closeSidebar} id='nav-sidebar'><i className="fa-solid fa-xmark"></i></button>
        <Link activeClass='active' to='About' spy={true} smooth={true} duration={500} offset={-90}  id='sidebar-items' >About</Link>
        <Link activeClass='active' to='Project' spy={true} smooth={true} duration={500} offset={-90}  id='sidebar-items' >Project</Link>
        <Link activeClass='active' to='Resume' spy={true} smooth={true} duration={500} offset={-90}  id='sidebar-items' >Resume</Link>
        <Link activeClass='active' to='Contact' spy={true} smooth={true} duration={500} offset={-90}  id='sidebar-items' >Contact</Link>
      </div>

      <button onClick={showSidebar} id='nav-sidebar'><i className="fa-solid fa-bars"></i></button>
      
    </nav>   
  )
}
export default Navbar;