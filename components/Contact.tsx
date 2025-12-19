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
    <section id="contact" className="py-32 bg-brand-dark relative overflow-hidden">
        {/* Purple accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-brand-purple/50"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">프로젝트 문의</h2>
          <p className="text-gray-500 font-light">
            새로운 비즈니스의 시작, 딩 스튜디오와 함께하세요.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">성함 / 회사명</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-white/20 px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-brand-neon transition-colors rounded-none"
                  placeholder="성함 또는 회사명"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-white/20 px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-brand-neon transition-colors rounded-none"
                  placeholder="이메일 주소"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="type" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">문의 유형</label>
              <div className="relative">
                <select
                  id="type"
                  name="type"
                  value={formState.type}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-gray border-b border-white/20 px-4 py-4 text-white appearance-none focus:outline-none focus:border-brand-neon transition-colors rounded-none"
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

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">문의 내용</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formState.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full bg-transparent border-b border-white/20 px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-brand-neon transition-colors resize-none rounded-none"
                placeholder="프로젝트 내용을 자유롭게 작성해주세요."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center bg-brand-purple hover:bg-brand-neon text-white font-bold py-5 mt-4 transition-all uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  전송 중...
                </>
              ) : (
                <>
                  문의하기
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
            
            {status === 'success' && (
              <div className="p-4 bg-green-900/20 border border-green-500/30 text-center">
                <p className="text-green-400 font-medium">
                  문의가 접수되었습니다.
                </p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-900/20 border border-red-500/30 text-center">
                <p className="text-red-400 font-medium">
                  전송 실패. 이메일로 연락주세요.
                </p>
              </div>
            )}
        </form>
      </div>
    </section>
  );
};

export default Contact;