
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TelegramIcon } from './IconComponents';
import { useLanguage } from '../context/LanguageContext';
import Navbar from './Navlink';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const socialLinks = [
    { name: 'Telegram', icon: <TelegramIcon />, url: 'https://t.me/CasaBellauz' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com/casabellauz/' },
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://facebook.com/casabellauz/' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-3xl font-bold tracking-tight text-white">
              <img src="/images/logo-white.png" width="200" alt="" />
            </Link>
            <p className="mt-2 text-gray-400 max-w-xs">
              {t.footer.slogan}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-100 uppercase tracking-wider">
                {t.footer.navigation}
              </h2>
              <Navbar />
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-100 uppercase tracking-wider">
                {t.footer.socialMedia}
              </h2>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a target="_blank" key={social.name} href={social.url} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Casabella. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
