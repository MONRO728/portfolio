import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Laptop, Code2, Award } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="bosh-sahifa" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Background soft glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-violet-500/10 dark:bg-violet-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Universitet o'quv topshirig'i portfoliosi</span>
            </div>

            {/* Title / Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5">
              Salom, men <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{PROFILE_DATA.name}</span>
            </h1>

            {/* Nickname badge */}
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
              <span>Taxallus:</span>
              <span className="font-mono text-blue-600 dark:text-blue-400">@{PROFILE_DATA.nickname}</span>
            </div>

            {/* Role / subtitle */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 mb-4 flex items-center gap-2">
              <Laptop className="w-5 h-5 text-blue-600 dark:text-blue-400 inline" />
              <span>{PROFILE_DATA.role}</span>
            </p>

            {/* Bio description */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {PROFILE_DATA.bio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#loyihalar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 active:scale-98 transition-all font-semibold text-sm shadow-md shadow-blue-500/20 group"
              >
                <span>Portfolio bilan tanishish</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850 active:scale-98 transition-all font-semibold text-sm shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub profilim</span>
              </a>
            </div>

            {/* Quick badges under CTAs */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-500" /> {PROFILE_DATA.university}
              </span>
              <span className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-indigo-500" /> React + Vite + Tailwind CSS
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" /> 100% Frontend (No backend)
              </span>
            </div>
          </div>

          {/* Right Visual / Illustration Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative back layers */}
              <div className="absolute -inset-1.5 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl blur-md opacity-20 dark:opacity-30"></div>
              
              {/* Main Card */}
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
                {/* Header inside card */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                      F
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">{PROFILE_DATA.name}</h3>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">@{PROFILE_DATA.nickname}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                    Faol
                  </span>
                </div>

                {/* Simulated code / student badge view */}
                <div className="my-6 bg-slate-50 dark:bg-slate-950/70 rounded-xl p-4 font-mono text-xs text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 mb-3 text-slate-400">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
                    <span className="ml-2 text-[10px] text-slate-400 font-sans">student_profile.json</span>
                  </div>
                  <p><span className="text-blue-500">"status"</span>: <span className="text-emerald-600 dark:text-emerald-400">"Talaba"</span>,</p>
                  <p><span className="text-blue-500">"focus"</span>: <span className="text-amber-600 dark:text-amber-400">"Veb va IT texnologiyalar"</span>,</p>
                  <p><span className="text-blue-500">"target"</span>: <span className="text-indigo-600 dark:text-indigo-400">"Amaliy portfolioni to'ldirish"</span>,</p>
                  <p><span className="text-blue-500">"verified"</span>: <span className="text-emerald-600 dark:text-emerald-400">true</span></p>
                </div>

                {/* Achievements row */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60">
                    <span className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-500" />
                      Amaliy ishlar holati
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">Tayyor</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60">
                    <span className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      GitHub hisob
                    </span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">@MONRO728</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Small statistics counter section */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {PROFILE_DATA.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs border border-slate-200/70 dark:border-slate-800/70 rounded-2xl p-4 sm:p-5 text-center hover:border-blue-400/50 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
