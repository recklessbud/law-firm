import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 select-none no-underline ${className}`}
    >
      {/* Brand Geometric Monogram Icon */}
      <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          {/* Outer Square Border / Accent */}
          <rect width="44" height="44" rx="3" fill="#0B2238" />

          {/* Left Bright Blue Accent Bar */}
          <rect x="4" y="16" width="10" height="12" rx="1.5" fill="#187CE7" />

          {/* Stylized White 'T' / Monogram Character Structure */}
          <path d="M8 10H36V16H25V36H19V16H8V10Z" fill="white" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex items-baseline tracking-tight">
        <span className="font-extrabold text-xl sm:text-2xl tracking-wide text-[#0B2238] uppercase">
          Richard Weaver
        </span>
        <span className="font-semibold text-xs sm:text-sm text-[#0B2238] ml-1.5 tracking-wider uppercase opacity-90">
          P.C.
        </span>
      </div>
    </Link>
  );
};
