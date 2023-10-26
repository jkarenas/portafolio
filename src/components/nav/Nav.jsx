import React from 'react';
import './nav.css';
import { BiHomeAlt2 } from 'react-icons/bi';
import { RiUserLine } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (newNav) => {
    setActiveNav(newNav);
  };

  return (
    <nav>
      <button onClick={() => handleNavClick('#')} className={activeNav === '#' ? 'active' : ''}>
        <BiHomeAlt2 />
      </button>
      <button onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <RiUserLine />
      </button>
      <button onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <MdWork />
      </button>
      <button onClick={() => handleNavClick('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <MdOutlineMiscellaneousServices />
      </button>
      <button onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <AiOutlineMessage />
      </button>
    </nav>
  );
};

export default Nav;
