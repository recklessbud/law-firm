import React, { useState, useEffect } from "react";
import {
  X,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Shield,
  User,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPractice?: string;
  defaultAttorney?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultPractice = "",
  defaultAttorney = "",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    attorney: defaultAttorney || "Any Available Partner",
    practiceArea: defaultPractice || "Inheritance Dispute / Will Contest",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        practiceArea:
          defaultPractice ||
          prev.practiceArea ||
          "Inheritance Dispute / Will Contest",
        attorney: defaultAttorney || prev.attorney || "Any Available Partner",
      }));
    }
  }, [isOpen, defaultPractice, defaultAttorney]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Consultation request - ${formData.fullName || "New Inquiry"}`,
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Attorney: ${formData.attorney}\n` +
        `Practice Area: ${formData.practiceArea}\n\n` +
        `Message:\n${formData.message}`,
    );

    window.location.href = `mailto:weaver.ralexanderfirm@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      attorney: "Any Available Partner",
      practiceArea: "Inheritance Dispute / Will Contest",
      message: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-[#0B2238]/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#0B2238] hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2238] mb-3">
              Consultation Request Received
            </h3>
            <p className="text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
              Thank you,{" "}
              <span className="font-semibold text-[#0B2238]">
                {formData.fullName}
              </span>
              . An inheritance attorney from Thomas Law LLC will review your
              inquiry and contact you directly within 24 hours.
            </p>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={handleReset}
                className="bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold px-8 py-3 rounded-full text-sm transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-10">
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#187CE7] mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>Confidential Estate Inquiry</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2238] tracking-tight">
                Request an Inheritance Consultation
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                {defaultAttorney &&
                defaultAttorney !== "Any Available Partner" ? (
                  <span className="flex items-center gap-1 text-[#187CE7] font-semibold">
                    <User className="w-3.5 h-3.5" /> Direct inquiry with{" "}
                    {defaultAttorney}
                  </span>
                ) : (
                  "Speak directly with an experienced inheritance and probate litigation attorney."
                )}
              </p>
            </div>

            {/* Form */}
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
                      setFormData({ ...formData, fullName: e.target.value })
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
                    placeholder="720-000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
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
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187CE7] focus:ring-2 focus:ring-[#187CE7]/20 outline-none text-sm transition-all"
                  />
                </div>

                {/* <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Practice Area
                  </label>
                  <select
                    value={formData.practiceArea}
                    onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187CE7] focus:ring-2 focus:ring-[#187CE7]/20 outline-none text-sm bg-white transition-all"
                  >
                    <option value="Inheritance Dispute / Will Contest">Inheritance Dispute / Will Contest</option>
                    <option value="Trust Litigation & Fiduciary Claims">Trust Litigation & Fiduciary Claims</option>
                    <option value="Probate Administration & Estate Settlement">Probate Administration & Estate Settlement</option>
                    <option value="Estate Planning & Living Trusts">Estate Planning & Living Trusts</option>
                    <option value="Beneficiary Rights & Asset Recovery">Beneficiary Rights & Asset Recovery</option>
                    <option value="Other Inheritance Matter">Other Inheritance Matter</option>
                  </select>
                </div> */}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Select Attorney (Optional)
                  </label>
                  <select
                    value={formData.attorney}
                    onChange={(e) =>
                      setFormData({ ...formData, attorney: e.target.value })
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
                  Brief Overview of Your Estate / Inheritance Dispute
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Please describe the nature of the inheritance, estate assets, or probate dispute..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187CE7] focus:ring-2 focus:ring-[#187CE7]/20 outline-none text-sm transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>All communications are strictly confidential.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold px-8 py-3 rounded-full text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </button>
              </div>
            </form>

            {/* Quick Contact Footer Strip inside modal */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <a
                href="tel:4917616131203"
                className="flex items-center gap-1.5 hover:text-[#187CE7] font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#187CE7]" />
                <span>Direct: +4917616131203</span>
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#187CE7]" />
                <span>Antwerp, Belgium</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
