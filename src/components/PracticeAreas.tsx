import React from 'react';
import { Briefcase, TrendingUp, ShieldAlert, FileText, ChevronRight } from 'lucide-react';

const practices = [
  {
    icon: TrendingUp,
    title: 'Securities Litigation & FINRA Arbitration',
    description:
      'Aggressive and strategic defense for broker-dealers, registered representatives, RIA firms, and financial professionals facing regulatory inquiries, customer disputes, and FINRA arbitration.',
  },
  {
    icon: Briefcase,
    title: 'Commercial & Business Litigation',
    description:
      'Resolving complex business disputes, breach of contract, shareholder disagreements, partnership dissolutions, and fiduciary claims in state and federal courts.',
  },
  {
    icon: ShieldAlert,
    title: 'Regulatory Defense & Enforcement',
    description:
      'Representing firms and individuals before the SEC, FINRA, state securities divisions, and administrative bodies to protect professional licenses and business reputations.',
  },
  {
    icon: FileText,
    title: 'Corporate Counsel & Risk Management',
    description:
      'Proactive compliance counseling, contract negotiation, and dispute mitigation designed to protect business owners and prevent costly litigation before it starts.',
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
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase mb-3">
            <span className="w-8 h-[2px] bg-[#187CE7]"></span>
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2238] tracking-tight leading-tight">
            Focused legal counsel for high-stakes business & securities matters.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We deliver sophisticated legal representation tailored to securities industry leaders, commercial litigants, and growing enterprises.
          </p>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 hover:border-[#187CE7]/50 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(11,34,56,0.08)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-slate-100 text-[#0B2238] flex items-center justify-center mb-6 group-hover:bg-[#187CE7] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B2238] mb-3 group-hover:text-[#187CE7] transition-colors">
                    {practice.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {practice.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPractice?.(practice.title)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2238] group-hover:text-[#187CE7] transition-colors self-start mt-auto"
                >
                  <span>Learn more about this practice</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
