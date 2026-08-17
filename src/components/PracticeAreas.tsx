import React from 'react';
import { Scroll, Scale, ChevronRight, Landmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const practices = [
  {
    icon: Scale,
    title: 'Inheritance Disputes & Will Contests',
    description:
      'Challenging and defending wills against allegations of undue influence, lack of testamentary capacity, fraudulent execution, and elder financial exploitation in probate court.',
  },
  {
    icon: Landmark,
    title: 'Trust Litigation & Fiduciary Accountability',
    description:
      'Holding trustees and executors accountable for breaches of fiduciary duty, asset misappropriation, failure to account, and improper distribution of family trust funds.',
  },
  {
    icon: Scroll,
    title: 'Probate Administration & Estate Settlement',
    description:
      'Guiding executors, administrators, and personal representatives smoothly through formal probate proceedings, creditor resolution, inventorying, and timely asset distributions.',
  },
];

interface PracticeAreasProps {
  onSelectPractice?: (practice: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPractice }) => {
  return (
    <section id="practice-areas" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase mb-3">
              <span className="w-8 h-[2px] bg-[#187CE7]"></span>
              <span>Inheritance & Estate Practice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2238] tracking-tight leading-tight">
              Protecting family legacies, inheritance rights, and estate assets.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              From complex probate courtroom battles to proactive generational wealth planning, our firm provides strategic advocacy during life’s most pivotal transitions.
            </p>
          </div>

          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#187CE7] hover:text-[#0f6bd3] transition-colors py-2 group flex-shrink-0"
          >
            <span>View All 6 Practice Disciplines</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 sm:p-9 rounded-2xl border border-slate-200/90 hover:border-[#187CE7]/50 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(11,34,56,0.08)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-slate-100 text-[#0B2238] flex items-center justify-center mb-6 group-hover:bg-[#187CE7] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B2238] mb-3 group-hover:text-[#187CE7] transition-colors leading-snug">
                    {practice.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {practice.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100 mt-auto">
                  <button
                    type="button"
                    onClick={() => onSelectPractice?.(practice.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2238] group-hover:text-[#187CE7] transition-colors cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <Link
                    to="/practice-areas"
                    className="text-[11px] font-semibold text-slate-400 hover:text-[#187CE7] transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
