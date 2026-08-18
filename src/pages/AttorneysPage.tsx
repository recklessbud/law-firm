import React from 'react';
import { AttorneysList } from '../components/AttorneysList';
import { AttorneySection } from '../components/AttorneySection';

interface AttorneysPageProps {
  onOpenContact: (practice?: string, attorney?: string) => void;
}

export const AttorneysPage: React.FC<AttorneysPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Banner */}
      <section className="bg-[#0B2238] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase mb-4">
              <span className="w-8 h-[2px] bg-[#187CE7]"></span>
              <span>Our Legal Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Experienced Inheritance & Probate Litigators
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              At Thomas Weaver P.C., our lawyers provide direct, partner-level advocacy with zero hand-offs. Connect directly with any member of our inheritance and estate legal team.
            </p>
          </div>
        </div>
      </section>

      {/* Managing Partner Spotlight */}
      <AttorneySection onContactClick={() => onOpenContact(undefined, 'Richard Alexander Weaver')} />

      {/* Full Team Grid */}
      <AttorneysList onConsultLawyer={(name) => onOpenContact(undefined, name)} />
    </div>
  );
};
