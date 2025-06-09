
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import React from 'react';
import { NavLink } from "react-router";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-green-50 text-neutral-content rounded p-10 mx-auto">
            <a className="btn btn-ghost text-xl flex"><img src="/logo.png" alt="logo" className='w-30'/></a>

  <nav className="grid grid-flow-col gap-4 text-black">
    <NavLink to={'/'} className="link link-hover">Home</NavLink>
    <NavLink to={'/terms'} className="link link-hover">Terms & Conditions</NavLink>
    <NavLink to={'/about'} className="link link-hover">About Us</NavLink>
   
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.facebook.com/farhat.songi.5' target='_blank'>
      <FaFacebook size={25} color="blue"/> 
      </a>
      <a href='https://github.com/Zareen08' target='_blank'>
      <FaGithub size={25} color="black"/>
      </a>
      <a href='https://www.linkedin.com/in/farhat-zareen-0021371b0/' target='_blank'>
      <FaLinkedin size={25} color="navy"/>
      </a>
    </div>
  </nav>
  
</footer>
        </div>
    );
};

export default Footer;