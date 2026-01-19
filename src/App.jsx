import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import LegalDocs from './components/LegalDocs';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#121212] font-sans selection:bg-red-500/30">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <FeatureGrid />
            <FaqSection />
          </main>
        } />
        <Route path="/privacy" element={<LegalDocs activeTab="privacy" />} />
        <Route path="/terms" element={<LegalDocs activeTab="terms" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
