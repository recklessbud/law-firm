import React from 'react';
import { Award, GraduationCap, Mail, Phone } from 'lucide-react';
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
                  alt="Managing Attorney - Thomas Law LLC"
                  className="w-full h-auto object-cover object-top aspect-[4/5] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B2238] via-[#0B2238]/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-extrabold tracking-wide">David A. Thomas</h3>
                  <p className="text-[#187CE7] font-semibold text-sm tracking-wider uppercase">
                    Managing Partner & Lead Trial Counsel
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Credentials Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase mb-3">
              <span className="w-8 h-[2px] bg-[#187CE7]"></span>
              <span>Leadership & Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2238] tracking-tight leading-tight mb-6">
              Experienced, aggressive advocacy in high-stakes disputes.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              For more than two decades, Thomas Law LLC has stood as a trusted legal partner for financial advisors, broker-dealers, commercial enterprises, and entrepreneurs facing regulatory enforcement or complex litigation.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Unlike oversized law firms where cases are passed down to inexperienced associates, Thomas Law LLC offers direct partner-level representation on every stage of your matter, ensuring agility, cost predictability, and rigorous strategic focus.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <Award className="w-5 h-5 text-[#187CE7] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B2238]">Bar Admissions</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Colorado, 10th Circuit, U.S. Supreme Court</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <GraduationCap className="w-5 h-5 text-[#187CE7] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B2238]">Education</h4>
                  <p className="text-xs text-slate-600 mt-0.5">J.D. with Honors, Law Review</p>
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
                <span>Schedule a Consultation</span>
              </button>

              <a
                href="tel:7203302805"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0B2238] font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4 text-[#187CE7]" />
                <span>Call 720.330.2805</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
