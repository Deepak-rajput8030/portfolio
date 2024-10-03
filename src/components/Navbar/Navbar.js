import React from 'react'
import './Navbar.css'


function Navbar() {

  const showSidebar = () => {
    const sidebar = document.getElementsByClassName('nav-sidebar')[0]; // Access the first element with this class
    sidebar.style.display = 'flex'; // Update the display property
  };
  

  const closeSidebar = () => {
    const sidebar = document.getElementsByClassName('nav-sidebar')[0];
    sidebar.style.display = 'none';
  };

  return (
    <nav className='navbar'>
      <div className='nav-main'>
        <a id='nav-home' href='#'>Home</a>
      </div>

      <div className='nav-sub'>
        <a id='nav-link' href='#'>About</a>
        <a id='nav-link' href='#'>Project</a>
        <a id='nav-link' href='#'>Resume</a>
        <a id='nav-link' href='#'>Contact</a>
      </div>
      <div className='nav-sidebar'>
        <button onClick={closeSidebar} id='nav-sidebar'><i className="fa-solid fa-xmark"></i></button>
        <a id='sidebar-items' href='#'>About</a>
        <a id='sidebar-items' href='#'>Project</a>
        <a id='sidebar-items' href='#'>Resume</a>
        <a id='sidebar-items' href='#'>Contact</a>
      </div>
      
      <button onClick={showSidebar} id='nav-sidebar'><i class="fa-solid fa-bars"></i></button>
      
    </nav>
    
  )
}

export default Navbar;