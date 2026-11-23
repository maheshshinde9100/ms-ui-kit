import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestingUI from './testing/TestingUI';
import DeveloperPage from './pages/DeveloperPage';
import { UIProvider } from './components';

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
  return (
    <UIProvider plugins={[DemoPlugin]}>
      <Router>
        <div className="min-h-screen bg-paper text-ink transition-colors duration-300">
          <Routes>
            <Route path="/" element={<TestingUI />} />
            <Route path="/developer" element={<DeveloperPage />} />
          </Routes>
        </div>
      </Router>
    </UIProvider>
  );
}

export default App;