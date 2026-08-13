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
    <UIProvider plugins={[DemoPlugin]}>
      <CustomCursor style={cursorStyle} />
      <Router>
        <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/components" element={<TestingUI />} />
            <Route path="/developer" element={<DeveloperPage />} />
          </Routes>
        </div>
      </Router>
    </UIProvider>
  );
}

export default App;