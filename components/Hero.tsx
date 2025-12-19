import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {/* Soft luxurious glows instead of sharp neon blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-neon/10 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-2 px-6 rounded-full bg-white/5 border border-white/10 text-brand-neon text-xs tracking-[0.2em] font-medium mb-8 backdrop-blur-sm uppercase">
            딩 스튜디오 크리에이티브
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tight"
        >
          브랜드의 본질에 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-purple-400 to-brand-purple">
            감각을 더하다
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
        >
          탁월한 통찰력과 독보적인 디자인으로<br className="hidden md:block"/>
          당신의 비즈니스가 빛나는 순간을 만듭니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              프로젝트 시작 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
             onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-10 py-4 border border-white/20 text-white font-medium text-sm tracking-widest uppercase rounded-full hover:bg-white/5 hover:border-brand-neon/50 transition-all"
          >
            포트폴리오 보기
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;