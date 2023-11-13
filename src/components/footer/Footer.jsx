import React from 'react'
import './footer.css'
import {AiFillFacebook} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JUAN ARENAS</a>
      <ul className='permalinks'>
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#experience">Experience</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#portafolio">Portafolio</a></li>
         <li><a href="#testimonials">Testimonials</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/juancamilo.arenasangulo/"><AiFillFacebook/></a>
        <a href="https://www.linkedin.com/in/jkarenas/"><AiFillLinkedin/></a>
      </div>

      <div className='footer_socials'>
        <small>&copy; Juan Arenas Portafolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer