import React from 'react';
import { Logo } from './Logo';
import { ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071726] text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/90 p-2.5 rounded-xl inline-block">
              <Logo />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Dedicated, partner-level advocacy protecting family legacies,
              resolving complex inheritance disputes, and guiding families
              through probate and trust administration.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs">
              <span className="text-white font-semibold">Direct Call:</span>
              <a
                href="tel:7203302805"
                className="text-[#187CE7] hover:underline font-bold"
              >
                0241234567
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#attorneys"
                  className="hover:text-white transition-colors"
                >
                  Our Attorneys
                </a>
              </li>
              <li>
                <a
                  href="#practice-areas"
                  className="hover:text-white transition-colors"
                >
                  Practice Areas
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Inheritance Focus
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#practice-areas"
                  className="hover:text-white transition-colors"
                >
                  Will Contests
                </a>
              </li>
              <li>
                <a
                  href="#practice-areas"
                  className="hover:text-white transition-colors"
                >
                  Trust Litigation
                </a>
              </li>
              <li>
                <a
                  href="#practice-areas"
                  className="hover:text-white transition-colors"
                >
                  Probate Administration
                </a>
              </li>
              <li>
                <a
                  href="#practice-areas"
                  className="hover:text-white transition-colors"
                >
                  Beneficiary Rights
                </a>
              </li>
              <li>
                <a
                  href="#practice-areas"
                  className="hover:text-white transition-colors"
                >
                  Estate & Wealth Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Disclaimer */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Office
            </h4>
            <address className="not-italic space-y-2 text-xs text-slate-400">
              <p>Richard Weaver P.C</p>
              <p>6C28+VV Antwerp, Belgium</p>
              <p className="pt-2">Phone: 0241234567</p>
            </address>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Richard Weaver P.C. All rights reserved.
            Attorney Advertising.
          </p>

          <p className="text-[11px] max-w-xl text-center md:text-right text-slate-500">
            The information provided on this website does not constitute legal
            advice and is intended for informational purposes only. No
            attorney-client relationship is formed until a formal representation
            agreement is signed.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors flex-shrink-0"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
