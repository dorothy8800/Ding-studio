import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioGrid: React.FC = () => {
  const { projects } = useAppContext();
  const [filter, setFilter] = useState<string>('All');
  
  const categories = [
    { label: '전체', value: 'All' },
    { label: '로고 디자인', value: 'Logo Design' },
    { label: '웹 개발', value: 'Web Development' },
    { label: '브랜딩', value: 'Branding' }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // 카테고리 영문명을 한국어로 변환하는 헬퍼 함수
  const getCategoryLabel = (value: string) => {
    const cat = categories.find(c => c.value === value);
    return cat ? cat.label : value;
  };

  return (
    <section id="portfolio" className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">포트폴리오</h2>
            <p className="text-gray-500 text-lg">딩 스튜디오의 감각이 담긴 프로젝트</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 text-sm transition-all duration-300 ${
                  filter === cat.value
                    ? 'text-brand-neon border-b border-brand-neon font-bold' 
                    : 'text-gray-500 hover:text-white border-b border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-brand-gray"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-8 backdrop-blur-[2px]">
                  <span className="text-brand-neon text-xs font-bold uppercase tracking-widest mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {getCategoryLabel(project.category)}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-brand-purple mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;