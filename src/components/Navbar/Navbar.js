import React from 'react'
import './Navbar.scss'
import Logo from '../../img/logo.png'
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" />
      <ul className='nav-links'>
        <li>
          <a href='#' className='navbar__link'>Home</a>
        </li>
        <li>
          <a href='#'className='navbar__link'>About</a>
        </li>
        <li>
          <a href='#' className='navbar__link'>Tours</a>
        </li>
      </ul>

    </div>
  )
}
