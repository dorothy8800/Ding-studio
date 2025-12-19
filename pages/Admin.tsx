import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Project } from '../types';
import { Plus, Trash2, ArrowLeft, Image as ImageIcon } from 'lucide-react';

const Admin: React.FC = () => {
  const { projects, addProject, deleteProject } = useAppContext();
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    description: '',
    category: 'Logo Design',
    imageUrl: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.description || !newProject.imageUrl) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    const project: Project = {
      id: Date.now().toString(),
      title: newProject.title!,
      description: newProject.description!,
      category: newProject.category as any,
      imageUrl: newProject.imageUrl!
    };

    addProject(project);
    setNewProject({ title: '', description: '', category: 'Logo Design', imageUrl: '' });
    alert('새로운 프로젝트가 등록되었습니다.');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-bold">관리자 대시보드</h1>
          </div>
          <div className="px-4 py-2 bg-brand-purple/20 text-brand-purple rounded-full text-sm font-medium border border-brand-purple/30">
            관리자 모드
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Create Form */}
          <div className="bg-brand-gray border border-white/10 rounded-2xl p-8 h-fit">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-brand-neon" />
              새 프로젝트 등록
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">프로젝트 제목</label>
                <input
                  type="text"
                  name="title"
                  value={newProject.title}
                  onChange={handleInputChange}
                  className="w-full bg-brand-black border border-white/10 rounded-lg p-3 text-white focus:border-brand-neon outline-none"
                  placeholder="예: 네온 테크 리브랜딩"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">카테고리</label>
                <select
                  name="category"
                  value={newProject.category}
                  onChange={handleInputChange}
                  className="w-full bg-brand-black border border-white/10 rounded-lg p-3 text-white focus:border-brand-neon outline-none"
                >
                  <option value="Logo Design">로고 디자인</option>
                  <option value="Web Development">웹 개발</option>
                  <option value="Branding">브랜딩</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">이미지 URL</label>
                <div className="flex gap-2">
                   <div className="bg-brand-black border border-white/10 rounded-lg p-3 flex-1 flex items-center">
                    <ImageIcon className="w-4 h-4 text-gray-500 mr-2"/>
                    <input
                      type="text"
                      name="imageUrl"
                      value={newProject.imageUrl}
                      onChange={handleInputChange}
                      className="bg-transparent text-white outline-none w-full text-sm"
                      placeholder="https://..."
                    />
                   </div>
                   <button 
                    type="button" 
                    onClick={() => setNewProject({...newProject, imageUrl: `https://picsum.photos/id/${Math.floor(Math.random()*200)}/800/600`})}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs hover:bg-white/10"
                   >
                     랜덤
                   </button>
                </div>
                {newProject.imageUrl && (
                  <div className="mt-2 relative rounded-lg overflow-hidden h-32 w-full">
                    <img src={newProject.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">설명</label>
                <textarea
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full bg-brand-black border border-white/10 rounded-lg p-3 text-white focus:border-brand-neon outline-none resize-none"
                  placeholder="프로젝트에 대한 간단한 설명..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-brand-neon text-brand-black font-bold rounded-lg hover:shadow-lg hover:shadow-brand-neon/20 transition-all"
              >
                등록하기
              </button>
            </form>
          </div>

          {/* List View */}
          <div>
             <h2 className="text-xl font-bold mb-6">등록된 프로젝트 ({projects.length})</h2>
             <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
               {projects.map((project) => (
                 <div key={project.id} className="bg-brand-gray/50 border border-white/5 p-4 rounded-xl flex items-center gap-4 group hover:border-white/20 transition-all">
                   <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-16 h-16 rounded-lg object-cover bg-brand-black"
                   />
                   <div className="flex-1 min-w-0">
                     <h3 className="font-bold text-white truncate">{project.title}</h3>
                     <p className="text-xs text-brand-neon mb-1">{project.category}</p>
                     <p className="text-xs text-gray-400 truncate">{project.description}</p>
                   </div>
                   <button
                    onClick={() => {
                      if(window.confirm('정말 삭제하시겠습니까?')) deleteProject(project.id);
                    }}
                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                   >
                     <Trash2 className="w-5 h-5" />
                   </button>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admin;