import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const startApp = () => {
  const container = document.getElementById('root');

  if (!container) {
    console.error("Fatal Error: Root container not found in DOM.");
    return;
  }

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Ding Studio Application mounted successfully.");
  } catch (error) {
    console.error("Failed to render application:", error);
    container.innerHTML = `<div style="padding: 20px; color: white;">애플리케이션 실행 중 오류가 발생했습니다.</div>`;
  }
};

// DOM 로드 완료 후 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}