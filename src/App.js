import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import ServicesPage from './components/Pages/ServicesPage';
import ProjectsPage from './components/Pages/ProjectsPage';
import ContactPage from './components/Pages/ContactPage';
import BlogPage from './components/Pages/BlogPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;