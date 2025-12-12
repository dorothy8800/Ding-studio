import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-neon/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-neon text-sm font-medium mb-6 backdrop-blur-sm">
            Creative Digital Agency
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-white leading-tight mb-8"
        >
          상상을 현실로 만드는<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-purple">
            디지털 크리에이티브
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light"
        >
          딩 스튜디오는 브랜드의 고유한 가치를 찾아내어<br className="hidden md:block"/>
          감각적인 디자인과 기술로 세상과 연결합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-brand-neon text-brand-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
          >
            <span className="relative z-10 flex items-center">
              무료 상담 신청하기 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
          
          <button 
             onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-4 border border-white/20 text-white font-medium text-lg rounded-full hover:bg-white/5 hover:border-white/50 transition-all"
          >
            포트폴리오 보기
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;