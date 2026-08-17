import React from 'react';
import { DollarSign, MessageSquare, CheckCircle2 } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  const pillars = [
    {
      title: 'Value',
      subtitle: 'Cost-Effective, Strategic Representation',
      icon: DollarSign,
      description:
        'We believe high-caliber legal representation should be efficient and transparent. We eliminate large firm overhead, aligning our strategies directly with your financial and business objectives.',
    },
    {
      title: 'Communication',
      subtitle: 'Unfiltered, Responsive Partner Access',
      icon: MessageSquare,
      description:
        'You work directly with your lead attorney from day one. We prioritize prompt, clear, and actionable communication so you are always fully informed and empowered to make decisive moves.',
    },
    {
      title: 'Results',
      subtitle: 'Proven Track Record of Excellence',
      icon: CheckCircle2,
      description:
        'Whether in the courtroom, before regulatory authorities, or in high-stakes negotiations, our focus is unwavering: achieving the strongest possible outcome for your business and reputation.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase mb-3">
            <span>Our Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2238] tracking-tight">
            The Three Pillars of Thomas Law LLC
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A modernized legal practice built around what clients truly care about.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-[#187CE7]/40 hover:bg-white transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B2238] text-white flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#187CE7]" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0B2238] mb-1">
                  {pillar.title}.
                </h3>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#187CE7] mb-4">
                  {pillar.subtitle}
                </h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
