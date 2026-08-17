import React from 'react';
import { ArrowRight, ShieldCheck, Scale, Award } from 'lucide-react';
import heroBuildingImg from '../assets/hero-building.jpg';

interface HeroProps {
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-gradient-to-r from-white via-white/95 to-slate-100/30"
    >
      {/* Background Architectural Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={heroBuildingImg}
            alt="Modern architectural glass skyscraper representing Thomas Law LLC corporate litigation strength"
            className="w-full h-full object-cover object-[75%_center] lg:object-[right_center] grayscale contrast-125 brightness-105 opacity-90 lg:opacity-100 transition-all duration-700"
          />

          {/* Left-to-Right Clean Gradient Overlay for Absolute Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-45% to-transparent lg:via-white/70 lg:to-transparent" />
          
          {/* Top subtle fade from navbar */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
          
          {/* Bottom subtle edge */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-16">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Main 3-Pillar Headline */}
          <h1 className="text-[2.75rem] leading-[1.08] sm:text-6xl sm:leading-[1.08] md:text-7xl md:leading-[1.05] lg:text-[5rem] lg:leading-[1.04] font-extrabold text-[#0B2238] tracking-tight mb-7 animate-fade-in">
            <span className="block hover:text-[#187CE7] transition-colors duration-300">
              Value.
            </span>
            <span className="block hover:text-[#187CE7] transition-colors duration-300">
              Communication.
            </span>
            <span className="block hover:text-[#187CE7] transition-colors duration-300">
              Results.
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#1C3B5E] max-w-xl leading-relaxed mb-9">
            TRUSTED BY FAMILIES, BENEFICIARIES, EXECUTORS, AND ESTATE OWNERS.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2.5 bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold text-sm sm:text-[15px] tracking-wider uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-[0_4px_18px_rgba(24,124,231,0.35)] hover:shadow-[0_8px_25px_rgba(24,124,231,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="#practice-areas"
              className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-[#0B2238] border border-slate-300/80 hover:border-[#0B2238] font-bold text-sm tracking-wider uppercase px-7 py-3.5 sm:py-4 rounded-full transition-all duration-300 backdrop-blur-xs hover:shadow-sm"
            >
              <span>Inheritance Practice Areas</span>
            </a>
          </div>

          {/* Trust Badges / Stats Strip */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-300/60 max-w-xl grid grid-cols-3 gap-4 sm:gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-[#187CE7] mb-1">
                <Scale className="w-4 h-4" />
                <span className="font-extrabold text-lg sm:text-2xl text-[#0B2238]">10+</span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-600 tracking-wide uppercase">
                Years in Probate & Estates
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-[#187CE7] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-extrabold text-lg sm:text-2xl text-[#0B2238]">100%</span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-600 tracking-wide uppercase">
                Direct Attorney Access
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-[#187CE7] mb-1">
                <Award className="w-4 h-4" />
                <span className="font-extrabold text-lg sm:text-2xl text-[#0B2238]">$100K+</span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-600 tracking-wide uppercase">
                Family Assets Protected
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
