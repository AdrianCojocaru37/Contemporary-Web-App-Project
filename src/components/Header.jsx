import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
    <Navbar/>
    <div className='name'>
        <h1>Unleash Your Code <span> Unleash Your</span> Potential</h1>
        <p className='details'>Freelance coder offers specialised coding services on a project basis and tailored solutions to meet your development needs.</p>
        <div className='header-btns'>
            <a href='#' className='cv-btn'>Hire Me</a>
            <a href='#' className='cv-btn1'>Download Application</a>

        </div>
    </div>
    <div className='arrow'></div>
    
    </div>
  )
}

export default Header;