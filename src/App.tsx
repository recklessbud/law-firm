import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValuesSection } from './components/ValuesSection';
import { PracticeAreas } from './components/PracticeAreas';
import { AttorneysList } from './components/AttorneysList';
import { AttorneySection } from './components/AttorneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

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
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#187CE7] selection:text-white">
      {/* Fixed Sticky Header Navbar */}
      <Navbar onContactClick={() => handleOpenContact()} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Exact Hero Section from Reference Screenshot */}
        <Hero onContactClick={() => handleOpenContact()} />

        {/* Value, Communication, Results Detailed Pillars */}
        <ValuesSection />

        {/* Practice Areas */}
        <PracticeAreas onSelectPractice={(practice) => handleOpenContact(practice)} />

        {/* 6 Lawyers Team List with Email, Phone, Twitter */}
        <AttorneysList onConsultLawyer={(lawyerName) => handleOpenContact(undefined, lawyerName)} />

        {/* Lead Managing Partner Spotlight */}
        <AttorneySection onContactClick={() => handleOpenContact(undefined, 'David A. Thomas')} />

        {/* Direct Contact & Inquiry Section */}
        <ContactSection onRequestModal={() => handleOpenContact()} />
      </main>

      {/* Footer with Legal Disclaimers & Info */}
      <Footer />

      {/* Interactive Case Consultation Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseContact}
        defaultPractice={selectedPractice}
        defaultAttorney={selectedAttorney}
      />
    </div>
  );
};

export default App;