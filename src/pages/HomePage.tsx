import React from 'react';
import { Hero } from '../components/Hero';
import { ValuesSection } from '../components/ValuesSection';
import { PracticeAreas } from '../components/PracticeAreas';
import { AttorneySection } from '../components/AttorneySection';
import { AttorneysList } from '../components/AttorneysList';
import { ContactSection } from '../components/ContactSection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  onOpenContact: (practice?: string, attorney?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContact }) => {
  return (
    <>
      {/* Hero Section */}
      <Hero onContactClick={() => onOpenContact()} />

      {/* Values (Value, Communication, Results) */}
      <ValuesSection />

      {/* Practice Areas Summary */}
      <section className="bg-[#f8fafc] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <div className="inline-flex items-center gap-2">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 bg-[#0B2238] hover:bg-[#187CE7] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Explore All 6 Practice Disciplines in Detail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <PracticeAreas onSelectPractice={(practice) => onOpenContact(practice)} />
      </section>

      {/* Lead Managing Partner Spotlight */}
      <AttorneySection onContactClick={() => onOpenContact(undefined, 'Richard Alexander Weaver')} />

      {/* Attorneys Team List */}
      <AttorneysList onConsultLawyer={(lawyerName) => onOpenContact(undefined, lawyerName)} />

      {/* Direct Contact & Case Evaluation Section */}
      <ContactSection onRequestModal={() => onOpenContact()} />
    </>
  );
};
