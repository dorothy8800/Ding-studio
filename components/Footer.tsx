import React from 'react';
import { SITE_CONFIG } from '../constants';
import { Instagram, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
              DING <span className="text-brand-neon">STUDIO</span>
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed max-w-sm font-light">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-6">
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-neon transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.socials.behance} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-8">문의처</h4>
            <div className="space-y-4">
              <div className="flex items-start group">
                <MapPin className="h-4 w-4 text-gray-600 mr-4 mt-1 group-hover:text-brand-neon transition-colors" />
                <span className="text-gray-500 text-sm font-light">{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-4 w-4 text-gray-600 mr-4 group-hover:text-brand-neon transition-colors" />
                <span className="text-gray-500 text-sm font-light">{SITE_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center group">
                <Mail className="h-4 w-4 text-gray-600 mr-4 group-hover:text-brand-neon transition-colors" />
                <span className="text-gray-500 text-sm font-light">{SITE_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-8">약관 및 정책</h4>
             <ul className="space-y-3 text-gray-500 text-sm font-light">
               <li className="hover:text-white cursor-pointer transition-colors">개인정보처리방침</li>
               <li className="hover:text-white cursor-pointer transition-colors">이용약관</li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-700 text-xs">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed by Ding Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;