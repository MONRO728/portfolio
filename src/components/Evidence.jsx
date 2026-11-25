import React, { useState } from 'react';
import { Calendar, FileCheck2, ExternalLink, Tag, BookOpen, CheckCircle, Info } from 'lucide-react';
import { EVIDENCE_DATA } from '../data/portfolioData';

export default function Evidence() {
  const [activeType, setActiveType] = useState('Barchasi');

  const types = ['Barchasi', ...new Set(EVIDENCE_DATA.map(e => e.type))];

  const filteredEvidence = activeType === 'Barchasi'
    ? EVIDENCE_DATA
    : EVIDENCE_DATA.filter(e => e.type === activeType);

  return (
    <section id="dalillar" className="py-16 md:py-24 bg-slate-50/60 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>O'quv dalillari (Portfolio Evidence)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            O'quv dalillari va amaliy ishlanmalar
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Universitet o'quv dasturi doirasida bajarilgan amaliy ishlar, mustaqil izlanishlar, taqdimotlar va test natijalari.
          </p>
        </div>

        {/* Notice for ease of edit */}
        <div className="mb-8 p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50 flex items-start gap-3 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
            <span className="font-semibold">O'quv dalillari haqida:</span> Quyida keltirilgan dalillar topshiriq talabiga ko'ra 6 ta asosiy yo'nalishni (Amaliy topshiriq, Mustaqil ish, Taqdimot, Test natijasi, Dasturiy loyiha, O'quv materiallari) to'liq qamrab olgan bo'lib, barcha ma'lumotlar va havolalarni <code className="bg-blue-100 dark:bg-blue-900/60 px-1 py-0.5 rounded">src/data/portfolioData.js</code> orqali o'zgartirishingiz mumkin.
          </div>
        </div>

        {/* Evidence Category Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeType === type
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Evidence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvidence.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-400/60 transition-all shadow-xs hover:shadow-md"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/60">
                    <Tag className="w-3 h-3" />
                    {item.type}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                {/* Evidence Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Learning Outcome */}
                <div className="mb-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/60">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-blue-500" />
                    Kutilgan natija (Outcome):
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {item.outcome}
                  </p>
                </div>

                {/* Short Reflection */}
                <div className="mb-4">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    Qisqa refleksiya va xulosa:
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                    "{item.reflection}"
                  </p>
                </div>
              </div>

              {/* Status and Action Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{item.status}</span>
                </span>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                >
                  <span>{item.linkText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
