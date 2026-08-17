import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ChevronUp, Phone, Mail, MapPin } from 'lucide-react';

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
              Dedicated, partner-level advocacy protecting family legacies, resolving complex inheritance disputes, and guiding families through probate and trust administration.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#187CE7]" />
                <span className="text-white font-semibold">Direct Call:</span>
                <a href="tel:+233241234567" className="text-[#187CE7] hover:underline font-bold">
                  0241234567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#187CE7]" />
                <span className="text-white font-semibold">Email:</span>
                <a href="mailto:weaver.ralexanderfirm@gmail.com" className="text-[#187CE7] hover:underline">
                  weaver.ralexanderfirm@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="hover:text-white transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/attorneys" className="hover:text-white transition-colors">
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
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
                <Link to="/practice-areas" className="hover:text-white transition-colors">
                  Will Contests
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="hover:text-white transition-colors">
                  Trust Litigation
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="hover:text-white transition-colors">
                  Probate Administration
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="hover:text-white transition-colors">
                  Beneficiary Rights
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="hover:text-white transition-colors">
                  Estate Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Disclaimer */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Office
            </h4>
            <address className="not-italic space-y-2 text-xs text-slate-400">
              <p className="text-white font-semibold">Richard Weaver P.C.</p>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#187CE7] flex-shrink-0 mt-0.5" />
                <span>6C28+VV Antwerp, Belgium</span>
              </p>
              <p className="pt-1">Phone: 0241234567</p>
            </address>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Richard Weaver P.C. All rights reserved. Attorney Advertising.
          </p>

          <p className="text-[11px] max-w-xl text-center md:text-right text-slate-500">
            The information provided on this website does not constitute legal advice and is intended for informational purposes only. No attorney-client relationship is formed until a formal representation agreement is signed.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors flex-shrink-0 cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
