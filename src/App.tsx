import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { AttorneysPage } from './pages/AttorneysPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState('');
  const [selectedAttorney, setSelectedAttorney] = useState('');

  const handleOpenContact = (practice?: string, attorney?: string) => {
    setSelectedPractice(practice || '');
    setSelectedAttorney(attorney || '');
    setIsModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#187CE7] selection:text-white">
        {/* Fixed Sticky Header Navbar */}
        <Navbar onContactClick={() => handleOpenContact()} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenContact={handleOpenContact} />} />
            <Route
              path="/practice-areas"
              element={<PracticeAreasPage onContactClick={(p) => handleOpenContact(p)} />}
            />
            <Route
              path="/attorneys"
              element={<AttorneysPage onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenContact={() => handleOpenContact()} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenContact={handleOpenContact} />} />
          </Routes>
        </main>

        {/* Global Legal Footer */}
        <Footer />

        {/* Interactive Case Consultation Modal */}
        <ContactModal
          isOpen={isModalOpen}
          onClose={handleCloseContact}
          defaultPractice={selectedPractice}
          defaultAttorney={selectedAttorney}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;