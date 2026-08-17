import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, MessageSquare, Check, Copy } from 'lucide-react';
import lawyer1 from '../assets/lawyer-1.jpg';
import lawyer2 from '../assets/lawyer-2.jpg';
import lawyer3 from '../assets/lawyer-3.jpg';
import lawyer4 from '../assets/lawyer-4.jpg';
import lawyer5 from '../assets/lawyer-5.jpg';
import lawyer6 from '../assets/lawyer-6.jpg';

export interface Lawyer {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
  displayPhone: string;
  twitter: string;
  twitterHandle: string;
  linkedin: string;
}

export const lawyersData: Lawyer[] = [
  {
    id: 'david-thomas',
    name: 'David A. Thomas',
    role: 'Managing Partner',
    focus: 'Securities Litigation & FINRA Defense',
    bio: 'Over 22 years representing broker-dealers, RIA firms, and financial advisors in complex regulatory proceedings and arbitrations.',
    image: lawyer1,
    email: 'dthomas@thomaslawllc.com',
    phone: '7203302805',
    displayPhone: '(720) 330-2805',
    twitter: 'https://twitter.com/ThomasLawDenver',
    twitterHandle: '@ThomasLawDenver',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'sarah-jenkins',
    name: 'Sarah M. Jenkins',
    role: 'Partner',
    focus: 'Commercial & Business Litigation',
    bio: 'Specializing in shareholder disputes, complex contract disputes, and partnership dissolutions across federal and state courts.',
    image: lawyer2,
    email: 'sjenkins@thomaslawllc.com',
    phone: '7203302806',
    displayPhone: '(720) 330-2806',
    twitter: 'https://twitter.com/SJenkinsLaw',
    twitterHandle: '@SJenkinsLaw',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'marcus-vance',
    name: 'Marcus T. Vance',
    role: 'Partner',
    focus: 'SEC Enforcement & Regulatory Defense',
    bio: 'Former regulatory enforcement counsel advising financial institutions and corporate officers in SEC and state division investigations.',
    image: lawyer3,
    email: 'mvance@thomaslawllc.com',
    phone: '7203302807',
    displayPhone: '(720) 330-2807',
    twitter: 'https://twitter.com/MarcusVanceLaw',
    twitterHandle: '@MarcusVanceLaw',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Senior Counsel',
    focus: 'Corporate Governance & Risk Management',
    bio: 'Providing strategic counsel to executive boards, private equity firms, and emerging growth enterprises on regulatory compliance.',
    image: lawyer4,
    email: 'erostova@thomaslawllc.com',
    phone: '7203302808',
    displayPhone: '(720) 330-2808',
    twitter: 'https://twitter.com/ElenaRostovaLaw',
    twitterHandle: '@ElenaRostovaLaw',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'jonathan-hayes',
    name: 'Jonathan D. Hayes',
    role: 'Partner',
    focus: 'White Collar Defense & Internal Investigations',
    bio: 'Defending corporate executives and business entities in civil enforcement, grand jury subpoenas, and internal compliance audits.',
    image: lawyer5,
    email: 'jhayes@thomaslawllc.com',
    phone: '7203302809',
    displayPhone: '(720) 330-2809',
    twitter: 'https://twitter.com/JHayesLitigation',
    twitterHandle: '@JHayesLitigation',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'amanda-chen',
    name: 'Amanda K. Chen',
    role: 'Senior Associate',
    focus: 'FINRA Arbitration & Broker-Dealer Defense',
    bio: 'Dedicated advocate with extensive trial preparation and arbitration experience representing securities professionals.',
    image: lawyer6,
    email: 'achen@thomaslawllc.com',
    phone: '7203302810',
    displayPhone: '(720) 330-2810',
    twitter: 'https://twitter.com/AmandaChenLaw',
    twitterHandle: '@AmandaChenLaw',
    linkedin: 'https://linkedin.com',
  },
];

interface AttorneysListProps {
  onConsultLawyer?: (lawyerName: string) => void;
}

export const AttorneysList: React.FC<AttorneysListProps> = ({ onConsultLawyer }) => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="attorneys" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase mb-3">
            <span className="w-8 h-[2px] bg-[#187CE7]"></span>
            <span>Legal Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2238] tracking-tight leading-tight">
            Our Attorneys & Counsel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Direct, senior-level access to proven securities and commercial litigators. Reach out to any member of our team directly.
          </p>
        </div>

        {/* 6 Lawyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyersData.map((lawyer) => (
            <div
              key={lawyer.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#187CE7]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo & Role Badge */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2238]/90 via-transparent to-transparent" />
                
                {/* Role Pill */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-md text-[#0B2238] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
                    {lawyer.role}
                  </span>
                </div>

                {/* Name overlaid on bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-extrabold tracking-tight">{lawyer.name}</h3>
                  <p className="text-xs font-semibold text-[#60a5fa] tracking-wide mt-0.5">
                    {lawyer.focus}
                  </p>
                </div>
              </div>

              {/* Bio & Contact details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {lawyer.bio}
                </p>

                {/* Direct Contacts List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-700 mb-6">
                  {/* Phone */}
                  <a
                    href={`tel:${lawyer.phone}`}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-blue-50/80 hover:text-[#187CE7] transition-colors group/link"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <Phone className="w-3.5 h-3.5 text-[#187CE7]" />
                      <span>{lawyer.displayPhone}</span>
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 group-hover/link:text-[#187CE7] uppercase">Call</span>
                  </a>

                  {/* Email */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-blue-50/80 transition-colors">
                    <a
                      href={`mailto:${lawyer.email}`}
                      className="flex items-center gap-2 font-medium hover:text-[#187CE7] truncate mr-2"
                      title={lawyer.email}
                    >
                      <Mail className="w-3.5 h-3.5 text-[#187CE7] flex-shrink-0" />
                      <span className="truncate">{lawyer.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={(e) => handleCopyEmail(lawyer.email, e)}
                      className="p-1 text-slate-400 hover:text-[#0B2238] transition-colors flex-shrink-0"
                      title="Copy email"
                    >
                      {copiedEmail === lawyer.email ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Twitter / X */}
                  <a
                    href={lawyer.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-blue-50/80 hover:text-[#187CE7] transition-colors group/link"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      {/* X / Twitter Custom SVG */}
                      <svg className="w-3.5 h-3.5 text-[#0B2238] group-hover/link:text-[#187CE7] fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>{lawyer.twitterHandle}</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover/link:text-[#187CE7]" />
                  </a>
                </div>

                {/* Direct Consultation Button */}
                <button
                  type="button"
                  onClick={() => onConsultLawyer?.(lawyer.name)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0B2238] hover:bg-[#187CE7] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Consult with {lawyer.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
