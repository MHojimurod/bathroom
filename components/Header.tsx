import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

interface NavLinkItem {
  label: string;
  path: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage(); // get current translations

  const navLinks: NavLinkItem[] = [
    { label: t.header.navLinks.home, path: '/' },
    { label: t.header.navLinks.products, path: '/products' },
    { label: t.header.navLinks.about, path: '/about' },
    { label: t.header.navLinks.contact, path: '/contact' },
    { label: t.header.navLinks.partnership, path: '/partnership' },
  ];

  const renderNavLinks = (links: NavLinkItem[], isMobile: boolean) => (
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
          <img src="/images/logo.webp" width="100" alt="Logo" />
        </NavLink>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {renderNavLinks(navLinks, false)}
          <LanguageSelector />
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center">
          <LanguageSelector />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none ml-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <div className="container mx-auto px-6">{renderNavLinks(navLinks, true)}</div>
        </div>
      )}
    </header>
  );
};

export default Header;
