import React, { useState } from 'react';
import { Menu, X, LayoutGrid, Monitor } from 'lucide-react';
import { NAV_ITEMS } from '@/core/constants/navigation.constants';
import type { ViewMode } from '@/core/types/navigation.types';

interface NavbarProps {
  activeSection: string;
  viewMode: ViewMode;
  onToggleViewMode: () => void;
  onNavigate: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  viewMode,
  onToggleViewMode,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 md:px-16 py-6 sm:py-8 flex items-center justify-between pointer-events-auto transition-all duration-300">
      {/* Brand Monogram HE */}
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('#hero');
        }}
        className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
        aria-label="Harun Erdogan Home"
      >
        <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider text-white group-hover:text-cyan-300 transition-colors">
          HE
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden sm:flex items-center gap-8 md:gap-12" aria-label="Main Navigation">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`text-xs md:text-sm font-semibold tracking-[0.25em] transition-all duration-200 relative py-1 ${
                isActive
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full animate-fade-in" />
              )}
            </a>
          );
        })}

        {/* View Mode Switcher (Card Mockup Mode vs Single Continuous Page) */}
        <button
          onClick={onToggleViewMode}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/80 bg-[#162a33]/80 hover:bg-[#1e3844] text-[11px] font-mono-tech tracking-wider text-slate-300 hover:text-white transition-all shadow-sm"
          title={`Switch to ${viewMode === 'immersive' ? 'Presentation Card' : 'Continuous'} Mode`}
        >
          {viewMode === 'immersive' ? (
            <>
              <LayoutGrid className="w-3.5 h-3.5 text-cyan-400" />
              <span>CARD VIEW</span>
            </>
          ) : (
            <>
              <Monitor className="w-3.5 h-3.5 text-cyan-400" />
              <span>PAGE VIEW</span>
            </>
          )}
        </button>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="flex items-center gap-3 sm:hidden">
        <button
          onClick={onToggleViewMode}
          className="p-2 rounded-md border border-slate-700 bg-[#172c35] text-slate-300"
          aria-label="Toggle View Mode"
        >
          {viewMode === 'immersive' ? (
            <LayoutGrid className="w-4 h-4 text-cyan-400" />
          ) : (
            <Monitor className="w-4 h-4 text-cyan-400" />
          )}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-[#152730]/95 backdrop-blur-xl border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-sm font-semibold tracking-[0.2em] text-slate-200 hover:text-white py-2 border-b border-slate-800/60"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
