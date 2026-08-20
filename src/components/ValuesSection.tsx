import React from 'react';
import { DollarSign, MessageSquare, CheckCircle2 } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  const pillars = [
    {
      title: 'Value',
      subtitle: 'Preserving Family Wealth & Fair Fee Structures',
      icon: DollarSign,
      description:
        'Inheritance should enrich future generations, not get consumed by unnecessary legal battles and administrative bloat. We provide transparent, predictable billing and strategic dispute resolution to safeguard your estate’s true value.',
    },
    {
      title: 'Communication',
      subtitle: 'Compassionate, Responsive & Direct Counsel',
      icon: MessageSquare,
      description:
        'Family and inheritance matters carry deep emotional significance. We listen attentively, keep executors and heirs clearly informed at every stage, and provide steady, compassionate legal guidance throughout the probate process.',
    },
    {
      title: 'Results',
      subtitle: 'Honoring Intent & Resolving Tough Disputes',
      icon: CheckCircle2,
      description:
        'Whether defending a contested will in probate court, holding a negligent trustee accountable, or negotiating amicable family settlements, our proven advocacy ensures your loved one’s true wishes are faithfully upheld.',
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
            The Three Pillars of Weaver Legal Consult & Associates
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Dedicated legal counsel protecting family legacies, inheritance rights, and estate assets.
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
