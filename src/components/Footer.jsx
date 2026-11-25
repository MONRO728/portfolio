import React from 'react';
import { GraduationCap, ArrowUp, Heart, Send } from 'lucide-react';
import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                {PROFILE_DATA.name} | O'quv Portfoliosi
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Universitet ta'lim topshirig'i doirasida tayyorlangan
              </div>
            </div>
          </div>

          {/* Quick links & Made with */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href={PROFILE_DATA.telegram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-500 flex items-center gap-1 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>
            <span>•</span>
            <a
              href={PROFILE_DATA.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-rose-500 flex items-center gap-1 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Yuqoriga qaytish"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors border border-slate-200/60 dark:border-slate-700 flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
          >
            <span>Yuqoriga</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 text-center text-xs text-slate-400 flex items-center justify-center gap-1">
          <span>&copy; {new Date().getFullYear()} {PROFILE_DATA.name}. Barcha huquqlar himoyalangan.</span>
        </div>
      </div>
    </footer>
  );
}
