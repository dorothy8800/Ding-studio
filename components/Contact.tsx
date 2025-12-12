import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    type: '프로젝트 의뢰',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/xdkqprqe", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', type: '프로젝트 의뢰', message: '' });
        // 5초 후 상태 초기화
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gray/20 skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-dark border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Project</h2>
            <p className="text-gray-400">
              새로운 프로젝트를 시작할 준비가 되셨나요? <br/>
              간단한 정보를 남겨주시면 담당자가 24시간 이내에 연락드립니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">이름 / 회사명</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-colors disabled:opacity-50"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-colors disabled:opacity-50"
                  placeholder="example@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-2">문의 유형</label>
              <div className="relative">
                <select
                  id="type"
                  name="type"
                  value={formState.type}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-colors disabled:opacity-50"
                >
                  <option>프로젝트 의뢰</option>
                  <option>견적 문의</option>
                  <option>기타 문의</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">문의 내용</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formState.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-colors resize-none disabled:opacity-50"
                placeholder="프로젝트에 대해 자세히 설명해주세요."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center bg-gradient-to-r from-brand-purple to-brand-neon text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-brand-neon/25 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  전송 중...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  문의하기
                </>
              )}
            </button>
            
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
                <p className="text-green-400 font-medium">
                  문의가 성공적으로 접수되었습니다. <br/>
                  담당자가 확인 후 곧 연락드리겠습니다!
                </p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
                <p className="text-red-400 font-medium">
                  전송 중 오류가 발생했습니다. <br/>
                  이메일(contact@dingstudio.kr)로 직접 연락 부탁드립니다.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;