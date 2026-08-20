import React from 'react';
import { ShieldCheck, Scale, HeartHandshake, ArrowRight } from 'lucide-react';
import heroBuildingImg from '../assets/contact-section-image.jpg';

interface AboutPageProps {
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Banner */}
      <section className="bg-[#0B2238] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase mb-4">
              <span className="w-8 h-[2px] bg-[#187CE7]"></span>
              <span>About Weaver Legal Consult & Associates</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Protecting Family Wealth & Honoring Legacies
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Founded on the pillars of Value, Communication, and Results,
              Weaver Legal Consult & Associates. brings over three decades of
              courtroom and estate administration experience to families and
              beneficiaries.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase">
                <span className="w-8 h-[2px] bg-[#187CE7]"></span>
                <span>Our Heritage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2238] tracking-tight leading-tight">
                A modern boutique firm built for high-stakes probate &
                inheritance disputes.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Large institutional law firms often delegate sensitive
                inheritance matters to junior associates while billing
                exorbitant hourly fees. Weaver Legal Consult & Associates was
                established with a singular vision: to deliver direct,
                partner-level advocacy with transparent pricing and
                compassionate family support.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Based out of Antwerp, Belgium and serving clients with
                international and domestic estate interests, we have recovered
                tens of millions of dollars for disinherited heirs, protected
                vulnerable elders from financial exploitation, and successfully
                defended valid wills in probate courts.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-extrabold text-[#0B2238]">
                    30+
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase mt-0.5">
                    Years Experience
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-extrabold text-[#0B2238]">
                    100K+
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase mt-0.5">
                    Estate Assets Protected
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={heroBuildingImg}
                  alt="Thomas Weaver P.C. Corporate Office"
                  className="w-full h-full object-cover grayscale contrast-125 aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Choose Us */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#0B2238]">
              Why Clients Choose Our Firm
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Unmatched commitment during life’s most difficult transitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#0B2238] text-[#187CE7] flex items-center justify-center mb-6">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2238] mb-3">
                Trial-Tested Litigators
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We prepare every estate dispute with rigorous courtroom trial
                discipline, giving our clients immense leverage in settlement
                discussions.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#0B2238] text-[#187CE7] flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2238] mb-3">
                Compassionate Mediation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Where possible, we employ creative dispute mediation techniques
                to resolve sibling and family disputes without irreparable harm
                to relationships.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#0B2238] text-[#187CE7] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2238] mb-3">
                Absolute Confidentiality
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Family inheritance matters demand privacy. We maintain stringent
                privacy protocols and discreet legal strategies.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold text-sm tracking-wider uppercase px-9 py-4 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Schedule an Initial Case Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
