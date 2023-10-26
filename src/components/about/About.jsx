import React from 'react'
import './about.css'
import ME from '../../assets/foto perfil 3.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {MdFolderCopy} from 'react-icons/md'
import {FaReact} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiAdobepremierepro} from 'react-icons/si'
import {BsGit} from "react-icons/bs"
import {SiRedux} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about img' />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <BsFillAwardFill className='about__icon'/>       
              <h5>Experience</h5>
              <small>3+ Years in IT world + Fluent in english and spanish</small>
            </article>
           
            <article className='about__card'>
              <FiUsers className='about__icon'/>       
              <h5>Main stack</h5>
              <small>
                <FaReact className='about__icon'/>,
                <IoLogoCss3 className='about__icon'/>
                <SiJavascript className='about__icon'/>
                <AiFillHtml5 className='about__icon'/>
                </small>
            </article>
           
            <article className='about__card'>
              <MdFolderCopy className='about__icon'/>       
              <h5>Other skills</h5>
              <small> 
                <SiAdobephotoshop className='about__icon'/>
                <SiAdobeillustrator className='about__icon'/>
                <SiAdobepremierepro className='about__icon'/>
                <BsGit className='about__icon'/>
                <SiRedux className='about__icon'/>
                <SiTailwindcss className='about__icon'/>
              </small>
            </article>
          </div>

        <p>
          
As a full-stack web developer, I apply my expertise in JavaScript, Node.js, React, Redux, UX/UI Design, and SQL with a creative approach. I excel in problem-solving, strong communication in both Spanish and English, and quick adaptability to different environments. My rapid learning ability is complemented by experience in graphic design, allowing me to craft exceptional web experiences that merge art and technology seamlessly.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About