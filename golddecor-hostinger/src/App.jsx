import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import HomePage from '@/pages/HomePage';
import MaterialCatalog from '@/pages/MaterialCatalog';
import ContactPage from '@/pages/ContactPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<MaterialCatalog />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FloatingActionButtons />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;