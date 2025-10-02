import React, { useState, useEffect } from 'react';

interface HeaderProps {
  language: 'en' | 'es';
  onLanguageChange: (lang: 'en' | 'es') => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks1 = [
    { label: language === 'en' ? 'HOME' : 'INICIO', href: '#' },
    { label: language === 'en' ? 'OUR PLACE' : 'NUESTRO LUGAR', href: '#' },
  ];
  
  const navLinks2 = [
    { label: language === 'en' ? 'MENU' : 'MENÚ', href: '#' },
    { label: language === 'en' ? 'BAR' : 'BARRA', href: '#' },
    { label: language === 'en' ? 'CONTACT' : 'CONTACTO', href: '#' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#323232]' : 'bg-transparent'}`}>
      <div className="relative container mx-auto px-4 z-10">
        <div className="flex justify-center items-start pt-4">
          <div className="absolute left-4 top-10 flex flex-col items-start gap-4">
             <nav className="hidden md:flex items-center space-x-6">
              {navLinks1.map((link) => (
                <a key={link.label} href={link.href} className="font-oswald text-xs font-bold text-white hover:text-[#FFD756] tracking-wider transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="relative hidden md:block">
              <input 
                type="search" 
                placeholder={language === 'en' ? 'Search...' : 'Buscar...'} 
                className="bg-black bg-opacity-80 text-white rounded-md py-2 pl-8 pr-3 w-64 focus:outline-none focus:ring-2 focus:ring-[#AE9A64]" 
              />
              <i className="fa fa-search absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          
          <a href="#" className="mt-2">
            <img src="https://static.wixstatic.com/media/a9827a_12b833c77c9d4e209be718a584e25a80~mv2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a9827a_12b833c77c9d4e209be718a584e25a80~mv2.png" alt="Mariscos Sol Del Mar Logo" className="h-28 md:h-36 w-auto transition-transform hover:scale-105" />
          </a>

          <div className="absolute right-4 top-10 flex flex-col items-end gap-4">
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks2.map((link) => (
                <a key={link.label} href={link.href} className="font-oswald text-xs font-bold text-white hover:text-[#FFD756] tracking-wider transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="bg-black bg-opacity-80 rounded-md p-1 flex items-center text-sm">
              <button 
                onClick={() => onLanguageChange('en')}
                className={`font-poppins font-bold py-1 px-3 transition-colors ${
                  language === 'en' ? 'text-[#FFD756]' : 'text-white hover:text-[#FFD756]'
                }`}
              >
                EN
              </button>
              <span className="text-gray-500">|</span>
              <button 
                onClick={() => onLanguageChange('es')}
                className={`font-poppins font-bold py-1 px-3 transition-colors ${
                  language === 'es' ? 'text-[#FFD756]' : 'text-white hover:text-[#FFD756]'
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#008AFC] py-2">
        <p className="text-center font-oswald text-sm font-bold text-white tracking-wide">
          10007 Long Beach Blvd. Lynwood, CA. 90262
        </p>
      </div>
    </header>
  );
};

export default Header;