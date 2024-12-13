import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillDetailsPage from './pages/SkillDetailsPage';
import ProjectShowcasePage from './pages/ProjectShowcasePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill-details" element={<SkillDetailsPage />} />
        <Route path="/project-showcase" element={<ProjectShowcasePage />} />
      </Routes>
    </Router>
  );
}

export default App;
