import React from 'react';
import './Nav.css';
import Logo from '../../Assets/logo.png';
import Blue_Ball from '../../Assets/Blue.png';

const Nav = ({ onNavigate }) => {
  return (
    <div className='NavBar'>
      <img className='Logo' src={Logo} alt="Logo" />

      <ul>
        <li onClick={() => onNavigate('About Us')}>About Us</li>
        <li onClick={() => onNavigate('Our Services')}>Our Services</li>
        <li onClick={() => onNavigate('Work with Us')}>Work with Us</li>
        <li onClick={() => onNavigate('BLOG')}>BLOG</li>
      </ul>

      <div className="ball">
        <img src={Blue_Ball} alt="Get In Touch" />
        <span>Get In Touch</span>
      </div>
    </div>
  );
};

export default Nav;
