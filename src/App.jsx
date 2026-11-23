import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestingUI from './testing/TestingUI';
import DeveloperPage from './pages/DeveloperPage';
import { UIProvider, CustomCursor } from './components';
import { Landing } from './pages/LandingPage';

const DemoPlugin = {
  name: 'demo',
  install(api) {
    api.extendTheme({
      colors: {
        brand: '#7C3AED',
      },
    });
  },
};

function App() {
  const [cursorStyle] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ms-ui-cursor-style') || 'default';
    }
    return 'default';
  });


  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <div className="min-h-screen bg-paper text-ink transition-colors duration-300">
            <Routes>
              <Route path="/" element={<TestingUI />} />
              <Route path="/developer" element={<DeveloperPage />} />
            </Routes>
          </div>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;