import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => (
  <div className='app__navbar'>
    <div className='app__navbar-logo'>
      <a href="/"><img src={images.gericht} alt="app logo" /></a>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='p__opensans'>Login / Register</a>
    <div/>
    <a href="/" className='p__opensans'>Book a Table</a>
    </div>
  </div>

);

export default Navbar;
