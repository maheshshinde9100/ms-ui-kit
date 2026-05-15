import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestingUI from './testing/TestingUI';
import DeveloperPage from './pages/DeveloperPage';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './components';
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
             <BackToTop />
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
