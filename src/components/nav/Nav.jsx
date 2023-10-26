import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {RiUserLine} from 'react-icons/ri'
import {MdWork} from 'react-icons/md'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]= useState ('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2/></a>
      <a href='#about' onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><RiUserLine/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href='#services' onClick={() => setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav