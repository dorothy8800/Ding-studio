import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_CONFIG, NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHome) {
      // If not on home page, we would typically navigate to home then scroll
      // For this SPA demo, we assume main content is on Home route
      window.location.href = `/${id}`;
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <div className="flex items-center gap-2">
              <Rocket className="h-8 w-8 text-brand-neon" />
              <span className="font-bold text-2xl tracking-tighter text-white">
                DING <span className="text-brand-neon">STUDIO</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-brand-neon transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </button>
              ))}
              <Link 
                to="/admin" 
                className="bg-brand-gray text-white border border-white/10 hover:border-brand-neon/50 px-4 py-2 rounded-full text-xs font-bold transition-all"
              >
                ADMIN
              </Link>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {link.name}
              </button>
            ))}
             <Link 
                to="/admin" 
                onClick={() => setIsOpen(false)}
                className="text-brand-neon block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                관리자 페이지
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;