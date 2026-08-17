import React from 'react';
import { Phone, MapPin, Clock, Shield } from 'lucide-react';

interface ContactSectionProps {
  onRequestModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestModal }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0B2238] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase mb-4">
              <span className="w-8 h-[2px] bg-[#187CE7]"></span>
              <span>Direct Communication</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Ready to discuss your legal matter?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Speak directly with David A. Thomas to evaluate your securities dispute, regulatory inquiry, or commercial litigation.
            </p>

            <div className="space-y-4">
              <a
                href="tel:7203302805"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#187CE7] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Direct Phone</div>
                  <div className="text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-[#187CE7] transition-colors">
                    720.330.2805
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#187CE7]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Office Location</div>
                  <div className="text-sm font-semibold text-white">
                    Denver Tech Center & Downtown Denver, CO
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#187CE7]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Availability</div>
                  <div className="text-sm font-semibold text-white">
                    Monday – Friday: 8:00 AM – 6:00 PM (Emergency consultations upon request)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-6">
            <div className="bg-white text-[#0B2238] rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#0B2238]">Start Your Case Evaluation</h3>
                <p className="text-sm text-slate-600 mt-2">
                  Submit an initial inquiry and our principal attorney will review the circumstances.
                </p>
              </div>

              <button
                type="button"
                onClick={onRequestModal}
                className="w-full bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold text-base py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 uppercase tracking-wider mb-4 cursor-pointer"
              >
                Open Consultation Form
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Protected by Attorney-Client Privilege consideration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
