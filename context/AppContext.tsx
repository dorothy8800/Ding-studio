import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Project } from '../types';
import { INITIAL_PROJECTS } from '../constants';

interface AppContextType {
  projects: Project[];
  addProject: (project: Project) => void;
  deleteProject: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);

  const addProject = (project: Project) => {
    setProjects((prev) => [project, ...prev]);
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <AppContext.Provider value={{ projects, addProject, deleteProject }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};