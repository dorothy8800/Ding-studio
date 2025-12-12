import React from 'react';
import { SERVICES } from '../constants';
import { PenTool, Monitor, Package, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  PenTool: <PenTool className="h-10 w-10" />,
  Monitor: <Monitor className="h-10 w-10" />,
  Package: <Package className="h-10 w-10" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            브랜드 성장에 필요한 핵심 서비스를 제공합니다. <br />
            기획부터 디자인, 개발까지 원스톱으로 경험하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-brand-gray/50 border border-white/5 rounded-2xl p-8 hover:border-brand-neon/30 hover:bg-brand-gray transition-all group"
            >
              <div className="mb-6 p-4 bg-brand-black rounded-xl inline-block text-brand-neon group-hover:text-white group-hover:bg-brand-neon transition-colors">
                {iconMap[service.iconName]}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed h-20">{service.description}</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-white">{service.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-brand-purple mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;