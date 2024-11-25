import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../css/Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
      <FaInstagram className='social-icons'/>
      <FaYoutube className='social-icons'/>
      <FaGithub className='social-icons'/>
    </div>
  )
}

export default Footer
