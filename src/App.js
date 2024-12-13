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
        <Route path="/huda-portfolio" element={<HomePage />} />
        <Route path="/huda-portfolio/skill-details" element={<SkillDetailsPage />} />
        <Route path="/huda-portfolio/project-showcase" element={<ProjectShowcasePage />} />
      </Routes>
    </Router>
  );
}

export default App;
