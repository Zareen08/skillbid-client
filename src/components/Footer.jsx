import React from 'react';
import { NavLink } from 'react-router'; 
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f5f4fa] text-[#5f5a7c] rounded-t-lg py-10 px-6 md:px-20 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <a href="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="logo" className="w-28 h-auto" />
          <span className="text-2xl font-extrabold text-[#bbb5dd]">SkillBid</span>
        </a>

       
        <nav className="flex space-x-8 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-[#bbb5dd] underline' : 'hover:text-[#bbb5dd] transition'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/terms"
            className={({ isActive }) =>
              isActive ? 'text-[#bbb5dd] underline' : 'hover:text-[#bbb5dd] transition'
            }
          >
            Terms & Conditions
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-[#bbb5dd] underline' : 'hover:text-[#bbb5dd] transition'
            }
          >
            About Us
          </NavLink>
        </nav>

        
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.facebook.com/farhat.songi.5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#3b5998] transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/Zareen08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#333] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/farhat-zareen-0021371b0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0077b5] transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-[#8884b3]">
        © {new Date().getFullYear()} SkillBid. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
