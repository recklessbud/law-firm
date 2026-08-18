import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Scale, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroSlide1 from '../assets/hero-building.jpg';
import heroSlide2 from '../assets/hero-slide-2.jpg';
import heroSlide3 from '../assets/hero-slide-3.jpg';

interface HeroProps {
  onContactClick?: () => void;
}

interface SlideData {
  id: number;
  image: string;
  headline: string[];
  subtitle: string;
  ctaText: string;
  secondaryText: string;
  secondaryLink: string;
  stats: {
    icon: React.ElementType;
    value: string;
    label: string;
  }[];
}

const slides: SlideData[] = [
  {
    id: 1,
    image: heroSlide1,
    headline: ['Value.', 'Communication.', 'Results.'],
    subtitle: 'TRUSTED BY FAMILIES, BENEFICIARIES, EXECUTORS, AND ESTATE OWNERS.',
    ctaText: 'CONTACT US',
    secondaryText: 'Inheritance Practice Areas',
    secondaryLink: '/practice-areas',
    stats: [
      { icon: Scale, value: '30+', label: 'Years in Probate & Estates' },
      { icon: ShieldCheck, value: '100%', label: 'Direct Attorney Access' },
      { icon: Award, value: '10M+', label: 'Family Assets Protected' },
    ],
  },
  {
    id: 2,
    image: heroSlide2,
    headline: ['Protecting.', 'Preserving.', 'Prevailing.'],
    subtitle: 'STRATEGIC ADVOCACY IN HIGH-STAKES WILL CONTESTS & INHERITANCE DISPUTES.',
    ctaText: 'REQUEST CASE REVIEW',
    secondaryText: 'Meet Our Attorneys',
    secondaryLink: '/attorneys',
    stats: [
      { icon: Scale, value: '100+', label: 'Will Contests Resolved' },
      { icon: ShieldCheck, value: 'Antwerp', label: '& International Practice' },
      { icon: Award, value: 'Direct', label: 'Partner Representation' },
    ],
  },
  {
    id: 3,
    image: heroSlide3,
    headline: ['Clarity.', 'Accountability.', 'Legacy.'],
    subtitle: 'SAFEGUARDING GENERATIONAL WEALTH THROUGH TRUST LITIGATION & ESTATE SETTLEMENT.',
    ctaText: 'EVALUATE YOUR ESTATE',
    secondaryText: 'About the Firm',
    secondaryLink: '/about',
    stats: [
      { icon: Scale, value: '100%', label: 'Fiduciary Accountability' },
      { icon: ShieldCheck, value: 'Strict', label: 'Client Confidentiality' },
      { icon: Award, value: '24hr', label: 'Rapid Response' },
    ],
  },
];

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  // Automatic slide cycle (every 6.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-slate-900"
    >
      {/* Slideshow Background Layer with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {slides.map((s, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={s.image}
                alt={`Hero slide background ${s.id}`}
                className={`w-full h-full object-cover object-center grayscale contrast-125 brightness-95 transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Left-to-Right Soft White Gradient for Razor-Sharp Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-50% to-white/40 lg:via-white/85 lg:to-transparent" />

              {/* Top and Bottom Fades */}
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </div>
          );
        })}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-16">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Main 3-Pillar Headline with smooth animation key */}
          <div key={`headline-${currentSlide}`} className="animate-fade-in">
            <h1 className="text-[2.75rem] leading-[1.08] sm:text-6xl sm:leading-[1.08] md:text-7xl md:leading-[1.05] lg:text-[5rem] lg:leading-[1.04] font-extrabold text-[#0B2238] tracking-tight mb-7">
              {slide.headline.map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="block hover:text-[#187CE7] transition-colors duration-300"
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subtitle / Tagline */}
            <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#1C3B5E] max-w-xl leading-relaxed mb-9">
              {slide.subtitle}
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2.5 bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold text-sm sm:text-[15px] tracking-wider uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-[0_4px_18px_rgba(24,124,231,0.35)] hover:shadow-[0_8px_25px_rgba(24,124,231,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <Link
              to={slide.secondaryLink}
              className="inline-flex items-center justify-center gap-2 bg-white/85 hover:bg-white text-[#0B2238] border border-slate-300/90 hover:border-[#0B2238] font-bold text-sm tracking-wider uppercase px-7 py-3.5 sm:py-4 rounded-full transition-all duration-300 backdrop-blur-xs hover:shadow-sm"
            >
              <span>{slide.secondaryText}</span>
            </Link>
          </div>

          {/* Trust Badges / Stats Strip */}
          <div
            key={`stats-${currentSlide}`}
            className="mt-14 sm:mt-16 pt-8 border-t border-slate-300/60 max-w-xl grid grid-cols-3 gap-4 sm:gap-6 animate-fade-in"
          >
            {slide.stats.map((st, sIdx) => {
              const Icon = st.icon;
              return (
                <div key={sIdx} className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-[#187CE7] mb-1">
                    <Icon className="w-4 h-4" />
                    <span className="font-extrabold text-lg sm:text-2xl text-[#0B2238]">
                      {st.value}
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-600 tracking-wide uppercase">
                    {st.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
