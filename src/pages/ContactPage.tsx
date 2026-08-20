import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Send,
  CheckCircle2,
} from "lucide-react";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    practiceArea: "Inheritance Dispute / Will Contest",
    attorney: "Any Available Partner",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Case inquiry - ${formData.fullName || "New Inquiry"}`,
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Practice Area: ${formData.practiceArea}\n` +
        `Preferred Attorney: ${formData.attorney}\n\n` +
        `Message:\n${formData.message}`,
    );

    window.location.href = `mailto:weaver.ralexanderfirm@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Banner */}
      <section className="bg-[#0B2238] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#187CE7] uppercase mb-4">
              <span className="w-8 h-[2px] bg-[#187CE7]"></span>
              <span>Contact the Firm</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Connect With Our Attorneys
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Reach out for a confidential discussion regarding your will
              contest, probate administration, or estate dispute. We respond
              within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Office Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2238] mb-4">
                  Weaver Legal Consult & Associates
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Specialized legal practice focused exclusively on inheritance
                  disputes, trust litigation, and court-supervised probate
                  administration.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+233241234567"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#187CE7] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#187CE7] text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Phone
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#0B2238] group-hover:text-[#187CE7] transition-colors">
                      +4917616131203
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:weaver.ralexanderfirm@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#187CE7] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0B2238] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#187CE7] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Email
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#0B2238] group-hover:text-[#187CE7] transition-colors truncate">
                      weaver.ralexanderfirm@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0B2238] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#187CE7]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Office Location
                    </div>
                    <div className="text-sm font-bold text-[#0B2238]">
                      6C28+VV Antwerp, Belgium
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0B2238] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#187CE7]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Hours of Operation
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#0B2238]">
                      Monday – Friday: 8:00 AM – 3:00 PM
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Emergency probate injunction filings available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2238] mb-3">
                      Inquiry Received
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you,{" "}
                      <span className="font-semibold text-[#0B2238]">
                        {formData.fullName}
                      </span>
                      . An inheritance litigation attorney will review your
                      details and contact you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold px-8 py-3 rounded-full text-sm cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-extrabold text-[#0B2238]">
                        Confidential Case Assessment
                      </h3>
                      <p className="text-slate-600 text-sm mt-1">
                        Please fill out the form below. All inquiries are
                        strictly protected by attorney-client privilege.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                fullName: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187CE7] focus:ring-2 focus:ring-[#187CE7]/20 outline-none text-sm transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="123-456-7890"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187CE7] focus:ring-2 focus:ring-[#187CE7]/20 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187CE7] focus:ring-2 focus:ring-[#187CE7]/20 outline-none text-sm transition-all"
                          />
                        </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Preferred Attorney (Optional)
                        </label>
                        <select
                          value={formData.attorney}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              attorney: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187CE7] focus:ring-2 focus:ring-[#187CE7]/20 outline-none text-sm bg-white transition-all"
                        >
                          <option value="Any Available Partner">
                            Any Available Partner
                          </option>
                          <option value="Richard Alexander Weaver">
                            Richard Alexander Weaver (Senior Attorney)
                          </option>
                          <option value="Marcus T. Vance">
                            Marcus T. Vance (Senior Solicitor - Contested Wills)
                          </option>
                          <option value="Jonathan D. Hayes">
                            Jonathan D. Hayes (Barrister - Probate Litigation)
                          </option>
                          <option value="Amanda K. Chen">
                            Amanda K. Chen (Attorney - Estate Planning)
                          </option>
                        </select>
                      </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Brief Overview of Your Legal Matter
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Please describe the nature of the will, trust, estate assets, or dispute..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187CE7] focus:ring-2 focus:ring-[#187CE7]/20 outline-none text-sm transition-all resize-none"
                        ></textarea>
                      </div>

                      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Shield className="w-4 h-4 text-emerald-600" />
                          <span>100% Confidential & Secure</span>
                        </div>

                        <button
                          type="submit"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold px-9 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Case Inquiry</span>
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
