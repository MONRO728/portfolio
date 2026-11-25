import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, GraduationCap } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { PROFILE_DATA } from '../data/portfolioData';

const navItems = [
  { name: "Bosh sahifa", href: "#bosh-sahifa" },
  { name: "Maqsad va ko'nikmalar", href: "#maqsadlar" },
  { name: "Loyihalar", href: "#loyihalar" },
  { name: "O'quv dalillari", href: "#dalillar" },
  { name: "Refleksiya", href: "#refleksiya" },
  { name: "Manbalar", href: "#manbalar" },
  { name: "Aloqa", href: "#aloqa" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Student Brand */}
          <a href="#bosh-sahifa" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform duration-200 border border-blue-600/20 dark:border-blue-400/30">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                {PROFILE_DATA.nickname} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">({PROFILE_DATA.name.split(' ')[1] || PROFILE_DATA.name})</span>
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline -mt-0.5">
                Raqamli O'quv Portfoliosi
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Yorug' rejimga o'tish" : "Tungi rejimga o'tish"}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/60 dark:border-slate-700"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Quick GitHub Button */}
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 py-1"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profil</span>
              </a>
              <span className="text-xs text-slate-400">v1.0 • O'quv ishi</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
