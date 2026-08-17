import React from 'react';
import { Award, GraduationCap, Mail, Phone, HeartHandshake, ShieldCheck } from 'lucide-react';
import attorneyImg from '../assets/attorney.jpg';

interface AttorneySectionProps {
  onContactClick?: () => void;
}

export const AttorneySection: React.FC<AttorneySectionProps> = ({ onContactClick }) => {
  return (
    <section id="attorney" className="py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Attorney Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-[#187CE7]/10 rounded-3xl transform -rotate-1 hidden sm:block"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src={attorneyImg}
                  alt="David A. Thomas - Managing Partner specializing in Inheritance & Probate Law"
                  className="w-full h-auto object-cover object-top aspect-[4/5] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B2238] via-[#0B2238]/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-extrabold tracking-wide">Kwadwo Agyeman-Badu</h3>
                  <p className="text-[#187CE7] font-semibold text-sm tracking-wider uppercase">
                    Managing Partner & Lead Probate Litigator
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Credentials Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase mb-3">
              <span className="w-8 h-[2px] bg-[#187CE7]"></span>
              <span>Leadership & Advocacy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2238] tracking-tight leading-tight mb-6">
              Protecting family rights and resolving complex inheritance disputes.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              When family dynamics, substantial wealth, and estate distribution intersect, disputes can threaten both financial security and generational bonds. For over two decades, David A. Thomas has represented beneficiaries, executors, and families navigating contentious probate and trust matters.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Whether defending against invalid will modifications, recovering misappropriated family estate funds, or negotiating private non-court settlements, our firm combines courtroom trial tenacity with the utmost discretion and sensitivity.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <ShieldCheck className="w-5 h-5 text-[#187CE7] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B2238]">Probate Trial Experience</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Over 150+ estate & trust disputes successfully litigated</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <HeartHandshake className="w-5 h-5 text-[#187CE7] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B2238]">Family Mediation & Resolution</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Focus on swift resolution and preserving family legacy</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <Award className="w-5 h-5 text-[#187CE7] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B2238]">Admissions & Honors</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Ghana Bar Association, International Bar Association</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <GraduationCap className="w-5 h-5 text-[#187CE7] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B2238]">Education</h4>
                  <p className="text-xs text-slate-600 mt-0.5">J.D. with Honors, Estate & Trust Law Specialization</p>
                </div>
              </div>
            </div>

            {/* Direct Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Request Case Evaluation</span>
              </button>

              <a
                href="tel:+233241234567"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0B2238] font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4 text-[#187CE7]" />
                <span>Call 0241234567</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
