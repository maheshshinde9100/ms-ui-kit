import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestingUI from './testing/TestingUI';
import DeveloperPage from './pages/DeveloperPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
          <Routes>
            <Route path="/" element={<TestingUI />} />
            <Route path="/developer" element={<DeveloperPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
