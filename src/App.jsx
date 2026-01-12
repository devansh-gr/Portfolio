// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Primary Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* SAFETY NET: If the URL is weird (case mismatch, index.html, etc), go Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    // Automatically uses the base path defined in vite.config.js
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;