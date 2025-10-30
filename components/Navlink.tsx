import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const { t } = useLanguage();

    const NAV_LINKS = [
        { label: t.header.navLinks.home, path: '/' },
        { label: t.header.navLinks.products, path: '/products' },
        { label: t.header.navLinks.about, path: '/about' },
        { label: t.header.navLinks.contact, path: '/contact' },
        { label: t.header.navLinks.partnership, path: '/partnership' },
    ];

    return (
        <ul className="space-y-3">
            {NAV_LINKS.map(link => (
                <li key={link.path}>
                    <Link to={link.path} className="hover:text-white transition-colors duration-300">{link.label}</Link>
                </li>
            ))}
        </ul>)
};

export default Navbar;
