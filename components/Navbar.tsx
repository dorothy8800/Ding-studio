import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SITE_CONFIG, NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (!isHome) {
      navigate('/');
      // 메인 페이지로 이동 후 해당 섹션으로 스크롤하기 위해 약간의 지연 시간을 둠
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-neon to-brand-purple flex items-center justify-center">
                 <Rocket className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-xl tracking-widest text-white uppercase">
                Ding<span className="text-brand-neon">.</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-400 hover:text-brand-neon transition-colors px-3 py-2 text-sm font-medium tracking-wide"
                >
                  {link.name}
                </button>
              ))}
              <Link 
                to="/admin" 
                className="ml-4 text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
              >
                관리자
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
        <div className="md:hidden bg-brand-black border-b border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium w-full text-left border-b border-white/5 last:border-0"
              >
                {link.name}
              </button>
            ))}
             <Link 
                to="/admin" 
                onClick={() => setIsOpen(false)}
                className="text-brand-neon block px-3 py-4 rounded-md text-sm font-bold w-full text-left uppercase tracking-widest"
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