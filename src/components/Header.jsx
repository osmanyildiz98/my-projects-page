import React from 'react'
import "../css/Header.css"
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaSignInAlt } from "react-icons/fa";


function Header() {
  return (
    <div className='header-container'>
      <h1>MY PROJECTS</h1>
      <div className='header-icons-container'>
        <CgProfile className='header-icons'/>
        <FaBell className='header-icons'/>
        <FaSignInAlt className='header-icons'/>
      </div>
    </div>
  )
}

export default Header
