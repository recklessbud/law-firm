import React, { useState } from 'react';
import { Scale, Landmark, Scroll, Shield, Users, Briefcase, ChevronRight, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export interface PracticeDetail {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  overview: string;
  keyIssues: string[];
  howWeHelp: string[];
  caseScenario: string;
}

export const detailedPractices: PracticeDetail[] = [
  {
    id: 'will-contests',
    icon: Scale,
    title: 'Inheritance Disputes & Will Contests',
    subtitle: 'Challenging or Defending the Validity of Last Will and Testaments',
    overview:
      'When a loved one passes away and their final will does not reflect their true intentions, or was executed under suspicious circumstances, prompt legal action is vital. We aggressively prosecute and defend will contests in probate courts, ensuring rightful heirs receive their lawful inheritance.',
    keyIssues: [
      'Undue Influence: When a caretaker, relative, or advisor coerces the deceased into changing their will.',
      'Lack of Testamentary Capacity: When the decedent suffered from dementia, Alzheimer’s, or mental impairment at the time of signing.',
      'Fraudulent Execution & Forgery: Invalid signatures, omitted pages, or false representations made to the testator.',
      'Improper Execution & Witness Defects: Failure to meet strict statutory execution and notarization requirements.',
    ],
    howWeHelp: [
      'Subpoena medical records and psychiatric assessments to establish capacity timelines.',
      'Depose drafting attorneys, witnesses, and suspicious beneficiaries.',
      'Engage handwriting forensic examiners and estate valuation specialists.',
      'File immediate injunctive motions to freeze estate assets and prevent dissipation.',
    ],
    caseScenario:
      'We recently represented three disinherited siblings when a sudden deathbed will amendment left the entire family estate to an outside caretaker. Through medical forensic discovery, we proved undue influence and restored the original equal distribution.',
  },
  {
    id: 'trust-litigation',
    icon: Landmark,
    title: 'Trust Litigation & Fiduciary Accountability',
    subtitle: 'Holding Trustees Accountable & Protecting Beneficiary Interests',
    overview:
      'Trustees are bound by strict legal fiduciary duties to act solely in the best interests of the trust beneficiaries. When a trustee mismanages funds, refuses to provide an accounting, or engages in self-dealing, we step in to demand full transparency and enforce financial accountability.',
    keyIssues: [
      'Breach of Fiduciary Duty: Commingling trust assets with personal funds or making unauthorized investments.',
      'Failure to Provide Formal Accountings: Withholding annual financial ledgers, bank statements, or asset valuations.',
      'Refusal to Distribute Trust Assets: Unreasonable delays or arbitrary withholdings by hostile trustees.',
      'Trustee Removal Petitions: Seeking court removal and replacement of negligent or self-interested trustees.',
    ],
    howWeHelp: [
      'File court petitions compelling emergency formal accountings of all trust assets.',
      'Petition the court for immediate surcharge and trustee removal.',
      'Recover misappropriated funds and secure punitive remedies where applicable.',
      'Advise trustees on compliance to safeguard them against frivolous beneficiary lawsuits.',
    ],
    caseScenario:
      'Our team compelled a trustee who had withheld distributions for 4 years to provide full forensic accounting, resulting in court-ordered removal and immediate 200K asset distribution to rightful family beneficiaries.',
  },
  {
    id: 'probate-administration',
    icon: Scroll,
    title: 'Probate Administration & Estate Settlement',
    subtitle: 'Navigating Court-Supervised Estate Distribution with Ease',
    overview:
      'Serving as an executor or personal representative carries heavy legal and personal liability. We guide personal representatives, executors, and administrators through every step of probate court proceedings, ensuring compliant, timely, and dispute-free estate distribution.',
    keyIssues: [
      'Formal & Informal Probate Petitions: Filing probate pleadings, notifications, and publication of notices.',
      'Asset Inventorying & Appraisal: Cataloging real estate, securities, business interests, and valuable personal property.',
      'Creditor Resolution: Evaluating, negotiating, and resolving valid vs. fraudulent creditor claims against the estate.',
      'Final Distribution & Estate Closing: Distributing remaining assets to beneficiaries and obtaining judicial discharge.',
    ],
    howWeHelp: [
      'Handle all probate court filings, hearings, and required statutory notices.',
      'Protect executors against personal liability from disgruntled heirs or aggressive creditors.',
      'Coordinate with appraisers, CPAs, and real estate professionals for smooth liquidations.',
      'Expedite estate closure so beneficiaries receive their inheritances without years of delay.',
    ],
    caseScenario:
      'We efficiently administered a multi-jurisdictional estate involving European and international assets, resolving complex creditor claims and closing the estate within 9 months.',
  },
  {
    id: 'beneficiary-rights',
    icon: Users,
    title: 'Beneficiary Rights & Asset Recovery',
    subtitle: 'Enforcing Lawful Inheritance Shares & Reclaiming Diverted Wealth',
    overview:
      'Beneficiaries have clear legal rights under probate law, including the right to receive timely information, inspect estate records, and receive their full lawful distribution. We empower heirs and beneficiaries to assert their rights and reclaim estate assets wrongfully taken.',
    keyIssues: [
      'Omitted Heir & Surviving Spouse Rights: Enforcing elective shares, homestead rights, and pretermitted heir statutes.',
      'Lifetime Transfer Claws (Inter Vivos): Reversing suspicious property deeds or bank account title changes made before death.',
      'Beneficiary Designation Disputes: Contesting fraudulent changes to life insurance policies, 401(k)s, and IRA transfer-on-death designations.',
      'Estate Asset Recovery Actions: Suing third parties who wrongfully seized estate property.',
    ],
    howWeHelp: [
      'Investigate pre-death financial transactions and bank transfer histories.',
      'File discovery proceedings to uncover hidden bank accounts and assets.',
      'Represent disinherited spouses in asserting their statutory minimum elective share.',
      'Negotiate structured settlement agreements to preserve family relationships.',
    ],
    caseScenario:
      'When an estranged relative secretly changed the transfer-on-death beneficiary on a substantial brokerage account weeks prior to death, our litigation team successfully reversed the transfer and restored the funds to the estate.',
  },
  {
    id: 'estate-planning',
    icon: Shield,
    title: 'Comprehensive Estate Planning & Trusts',
    subtitle: 'Proactive Wealth Structuring to Prevent Future Family Disputes',
    overview:
      'The most effective way to protect your family from contentious inheritance litigation is a meticulously drafted estate plan. We create customized wills, living trusts, and powers of attorney designed to protect your wealth, minimize taxes, and prevent courtroom battles.',
    keyIssues: [
      'Revocable Living Trusts: Ensuring seamless private asset transfer without the cost and delays of probate court.',
      'Pour-Over Wills & Asset Alignment: Guaranteeing all assets are properly titled into the trust framework.',
      'Durable Financial & Healthcare Powers of Attorney: Appointing trusted fiduciaries for medical and financial decisions.',
      'Irrevocable Asset Protection Trusts: Safeguarding family wealth from creditors and future divorce claims.',
    ],
    howWeHelp: [
      'Design tailored multi-generational wealth preservation strategies.',
      'Include robust no-contest clauses and dispute-mitigation mechanisms.',
      'Ensure proper trust funding and beneficiary designation alignment.',
      'Review and update existing plans following life changes, marriages, or asset acquisitions.',
    ],
    caseScenario:
      'We designed an integrated trust plan for a family with substantial real estate and commercial holdings, ensuring zero probate delays and seamless management transitions across three generations.',
  },
  {
    id: 'business-succession',
    icon: Briefcase,
    title: 'Family Business Succession & Inheritance',
    subtitle: 'Protecting Enterprise Continuity and Equitably Distributing Business Wealth',
    overview:
      'Passing a family-owned business or commercial enterprise to the next generation requires careful legal balance between active heirs and non-active family members. We structure seamless ownership transitions that prevent inter-family conflict and ensure business continuity.',
    keyIssues: [
      'Buy-Sell Agreements & Transfer Restrictions: Preventing outside ownership and establishing clear valuation formulas.',
      'Equalizing Inheritances Among Children: Structuring life insurance and non-business assets for non-active heirs.',
      'Management Transition Agreements: Establishing voting trusts and leadership succession frameworks.',
      'Estate Tax Mitigation on Commercial Holdings: Implementing valuation discounts and gifting strategies.',
    ],
    howWeHelp: [
      'Draft ironclad shareholder and operating agreements with clear succession triggers.',
      'Structure ownership transfers that minimize gift and estate tax impacts.',
      'Facilitate structured family meetings to align expectations and avoid future litigation.',
      'Provide ongoing corporate counsel to the emerging generation of leadership.',
    ],
    caseScenario:
      'Structured a phased transition for a multi-million dollar manufacturing business, allowing the founder to retire while dividing wealth equitably between active operator children and non-operator heirs.',
  },
];

interface PracticeAreasPageProps {
  onContactClick?: (practiceTitle?: string) => void;
}

export const PracticeAreasPage: React.FC<PracticeAreasPageProps> = ({ onContactClick }) => {
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>('will-contests');

  const activePractice = detailedPractices.find((p) => p.id === selectedPracticeId) || detailedPractices[0];
  const ActiveIcon = activePractice.icon;

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Page Header Banner */}
      <section className="bg-[#0B2238] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2238] via-[#0B2238]/95 to-[#187CE7]/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase mb-4">
              <span className="w-8 h-[2px] bg-[#187CE7]"></span>
              <span>Our Practice Areas</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Inheritance, Probate & Trust Law
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Explore our core legal disciplines. We provide strategic,
              partner-level representation in high-stakes will contests,
              fiduciary disputes, probate administration, and family wealth
              preservation.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onContactClick?.(activePractice.title)}
                className="bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Request Case Evaluation
              </button>
              <a
                href="tel:+4917616131203"
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Call: 4917616131203
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Practice Areas Explorer */}
      <section className="py-16 sm:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Navigation Sidebar / Selector */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 px-3 py-2">
                  Select Practice Area
                </h3>
                {detailedPractices.map((practice) => {
                  const Icon = practice.icon;
                  const isSelected = selectedPracticeId === practice.id;
                  return (
                    <button
                      key={practice.id}
                      type="button"
                      onClick={() => setSelectedPracticeId(practice.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#0B2238] text-white shadow-md"
                          : "hover:bg-slate-100 text-[#0B2238]"
                      }`}
                    >
                      <div className="flex items-center gap-3 pr-2">
                        <Icon
                          className={`w-5 h-5 flex-shrink-0 ${isSelected ? "text-[#187CE7]" : "text-slate-500"}`}
                        />
                        <span className="text-xs sm:text-sm font-bold leading-snug">
                          {practice.title}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-[#187CE7]" : "text-slate-400"}`}
                      />
                    </button>
                  );
                })}

                <div className="pt-4 mt-4 border-t border-slate-100 p-3 bg-blue-50/60 rounded-xl">
                  <div className="text-xs font-bold text-[#0B2238] mb-1">
                    Unsure which practice applies?
                  </div>
                  <p className="text-[11px] text-slate-600 mb-3">
                    Speak directly with Richard Alexander Weaver for an initial
                    evaluation.
                  </p>
                  <button
                    type="button"
                    onClick={() => onContactClick?.()}
                    className="w-full bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold text-xs py-2.5 rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    Contact an Attorney
                  </button>
                </div>
              </div>
            </div>

            {/* Right Detailed Practice Overview */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
                {/* Header for Active Practice */}
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B2238] text-white flex items-center justify-center flex-shrink-0">
                    <ActiveIcon className="w-7 h-7 text-[#187CE7]" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2238] leading-tight">
                      {activePractice.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#187CE7] mt-1">
                      {activePractice.subtitle}
                    </p>
                  </div>
                </div>

                {/* Overview Text */}
                <div className="mb-10">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Practice Overview
                  </h3>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    {activePractice.overview}
                  </p>
                </div>

                {/* Key Legal Issues Handled */}
                <div className="mb-10">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#187CE7]" />
                    <span>Common Legal Issues Handled</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {activePractice.keyIssues.map((issue, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#187CE7] mt-1.5 flex-shrink-0"></span>
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How Thomas Weaver P.C. Helps */}
                <div className="mb-10">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>How Our Legal Team Protects You</span>
                  </h3>
                  <div className="space-y-3">
                    {activePractice.howWeHelp.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/40 border border-emerald-100 text-xs sm:text-sm text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Representative Case Scenario */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#187CE7] mb-2">
                    Representative Case Experience
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                    "{activePractice.caseScenario}"
                  </p>
                </div>

                {/* Bottom CTA for active practice */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-sm text-[#0B2238]">
                      Need representation in {activePractice.title}?
                    </div>
                    <div className="text-xs text-slate-500">
                      All inquiries are strictly confidential and protected by
                      privilege.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onContactClick?.(activePractice.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-full transition-all shadow-md cursor-pointer"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of all 6 summary cards at the bottom */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-[#0B2238]">
              All Inheritance Practice Areas
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Comprehensive advocacy across every probate and trust scenario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedPractices.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  onClick={() => {
                    setSelectedPracticeId(p.id);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#187CE7]/50 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white text-[#0B2238] group-hover:bg-[#187CE7] group-hover:text-white flex items-center justify-center mb-4 transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-[#0B2238] group-hover:text-[#187CE7] transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {p.overview}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-[#187CE7]">
                    <span>View In-Depth Details</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
