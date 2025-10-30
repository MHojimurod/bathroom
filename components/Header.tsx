
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import type { NavLink as NavLinkType } from '../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderNavLinks = (links: NavLinkType[], isMobile: boolean) => (
    <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'flex-row items-center space-x-8'}`}>
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `text-sm uppercase tracking-wider font-semibold transition-colors duration-300 ${
                isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold tracking-tight text-gray-900">
          <img src="/images/logo.webp" width="100" alt="" />
        </NavLink>
        
        <nav className="hidden md:block">
          {renderNavLinks(NAV_LINKS, false)}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <div className="container mx-auto px-6">
            {renderNavLinks(NAV_LINKS, true)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
