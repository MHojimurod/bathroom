
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { FacebookIcon, InstagramIcon, PinterestIcon, LinkedinIcon } from './IconComponents';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <FacebookIcon />, url: '#' },
    { name: 'Instagram', icon: <InstagramIcon />, url: '#' },
    { name: 'Pinterest', icon: <PinterestIcon />, url: '#' },
    { name: 'LinkedIn', icon: <LinkedinIcon />, url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-3xl font-bold tracking-tight text-white">
              AURA
            </Link>
            <p className="mt-2 text-gray-400 max-w-xs">Premium bathroom and sanitary ware for the modern home.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-100 uppercase tracking-wider">Navigation</h2>
              <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-white transition-colors duration-300">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-100 uppercase tracking-wider">Legal</h2>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a></li>
              </ul>
            </div>
             <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-100 uppercase tracking-wider">Connect</h2>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a key={social.name} href={social.url} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aura Bathware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
