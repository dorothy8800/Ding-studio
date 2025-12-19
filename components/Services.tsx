import React from 'react';
import { SERVICES } from '../constants';
import { PenTool, Monitor, Package, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  PenTool: <PenTool className="h-8 w-8" />,
  Monitor: <Monitor className="h-8 w-8" />,
  Package: <Package className="h-8 w-8" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Subtle purple gradient at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-purple/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">전문 분야</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            브랜드의 품격을 높이는<br/>
            최적의 크리에이티브 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-brand-gray border border-white/5 p-10 hover:border-brand-purple/50 transition-all duration-500 group flex flex-col"
            >
              <div className="mb-8 p-4 bg-brand-black w-fit rounded-full text-gray-400 group-hover:text-brand-neon group-hover:scale-110 transition-all duration-500 border border-white/5">
                {iconMap[service.iconName]}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-neon transition-colors">{service.title}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed h-20 text-sm">{service.description}</p>
              
              <div className="mt-auto">
                <div className="mb-8 pt-6 border-t border-white/5">
                    <span className="text-2xl font-semibold text-white tracking-tight">{service.price}</span>
                </div>
                <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-sm">
                        <Check className="h-4 w-4 text-brand-purple mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;