import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestingUI from './testing/TestingUI';
import DeveloperPage from './pages/DeveloperPage';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './components';

function App() {
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
