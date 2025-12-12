import React from 'react';
import { SITE_CONFIG } from '../constants';
import { Instagram, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              DING <span className="text-brand-neon">STUDIO</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={SITE_CONFIG.socials.behance} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-l-4 border-brand-neon pl-3">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-neon mr-3 mt-1" />
                <span className="text-gray-400">{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand-neon mr-3" />
                <span className="text-gray-400">{SITE_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-neon mr-3" />
                <span className="text-gray-400">{SITE_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Visual only for footer) */}
          <div>
             <h4 className="text-lg font-semibold text-white mb-6 border-l-4 border-brand-purple pl-3">Legal</h4>
             <ul className="space-y-2 text-gray-400">
               <li className="hover:text-white cursor-pointer transition-colors">개인정보처리방침</li>
               <li className="hover:text-white cursor-pointer transition-colors">이용약관</li>
               <li className="hover:text-white cursor-pointer transition-colors">프로젝트 의뢰 가이드</li>
             </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;