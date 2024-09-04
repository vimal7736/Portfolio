import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './contents/LandingPage';
import ProjectsPage from './contents/ProjectsPage';
import PortfolioPage from './contents/PortfolioPage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/PortfolioPage" element={<PortfolioPage/>} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}
