import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestingUI from './testing/TestingUI';
import DeveloperPage from './pages/DeveloperPage';

function App() {
  return (
    <Router>
      <div className="dark:bg-gray-950 min-h-screen">
        <Routes>
          <Route path="/" element={<TestingUI />} />
          <Route path="/developer" element={<DeveloperPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
