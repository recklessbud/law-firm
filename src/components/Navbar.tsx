import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'PRACTICE AREAS', path: '/practice-areas' },
    { label: 'ATTORNEYS', path: '/attorneys' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT US', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] py-3 sm:py-4 border-b border-slate-100'
          : 'bg-white py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links & CTA */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs xl:text-[13px] font-bold tracking-wider uppercase transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#0B2238] font-extrabold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#0B2238] after:rounded-full'
                      : 'text-[#0B2238] hover:text-[#187CE7]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Direct Phone Call Button */}
            <a
              href="tel:+233241234567"
              className="inline-flex items-center justify-center bg-[#187CE7] hover:bg-[#0f6bd3] text-white text-xs xl:text-[13px] font-bold tracking-wider px-6 py-2.5 rounded-full transition-all duration-200 shadow-[0_3px_12px_rgba(24,124,231,0.25)] hover:shadow-[0_4px_16px_rgba(24,124,231,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="tabular-nums">0241234567</span>
            </a>
          </nav>

          {/* Mobile Menu & Quick Phone Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+233241234567"
              className="inline-flex items-center gap-1.5 bg-[#187CE7] hover:bg-[#0f6bd3] text-white text-xs font-bold px-3.5 py-2 rounded-full transition-colors"
              aria-label="Call Thomas Weaver P.C."
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">0241234567</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0B2238] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#187CE7]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg animate-slide-down shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'bg-slate-50 text-[#187CE7] border-l-4 border-[#187CE7]'
                      : 'text-[#0B2238] hover:bg-slate-50 hover:text-[#187CE7]'
                  }`
                }
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40" />
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:+233241234567"
                className="w-full flex items-center justify-center gap-2 bg-[#187CE7] hover:bg-[#0f6bd3] text-white font-bold text-sm py-3 rounded-full transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call 0241234567</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick?.();
                }}
                className="w-full flex items-center justify-center gap-2 border-2 border-[#0B2238] text-[#0B2238] hover:bg-[#0B2238] hover:text-white font-bold text-sm py-2.5 rounded-full transition-all"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
