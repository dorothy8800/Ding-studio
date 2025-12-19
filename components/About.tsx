import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-neon"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-purple"></div>
             <img 
                src="https://picsum.photos/id/1/800/1000" 
                alt="Working Team" 
                className="w-full h-[500px] object-cover rounded-lg filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
             />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              우리는 브랜드의 <br/>
              <span className="text-brand-purple">가치를 완성합니다</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                <strong className="text-white">딩 스튜디오</strong>는 단순한 디자인 에이전시가 아닙니다. 
                우리는 클라이언트의 비즈니스를 깊이 이해하고, 가장 적합한 크리에이티브 솔루션을 제안하는 전략적 파트너입니다.
              </p>
              <p>
                2020년 설립 이후, 100개 이상의 스타트업 및 기업과 함께 성장해왔습니다. 
                우리의 목표는 명확합니다. 당신의 브랜드가 시장에서 독보적인 존재감을 드러내도록 돕는 것입니다.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10 mt-8">
                <div>
                  <h4 className="text-3xl font-bold text-brand-neon mb-1">100+</h4>
                  <span className="text-sm">완료된 프로젝트</span>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-brand-neon mb-1">98%</h4>
                  <span className="text-sm">고객 만족도</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;