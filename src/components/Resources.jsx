import React from 'react';
import { BookOpen, ExternalLink, Bookmark, Globe, Code, Video, Search } from 'lucide-react';
import { RESOURCES_DATA } from '../data/portfolioData';

const getCategoryIcon = (category) => {
  if (category.toLowerCase().includes('kod') || category.toLowerCase().includes('versiya')) return Code;
  if (category.toLowerCase().includes('video')) return Video;
  if (category.toLowerCase().includes('qidiruv')) return Search;
  if (category.toLowerCase().includes('hujjat')) return BookOpen;
  return Globe;
};

export default function Resources() {
  return (
    <section id="manbalar" className="py-16 md:py-24 bg-white/40 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Foydali Resurslar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Foydalanilgan manbalar
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Ta'lim va amaliy ishlar davomida doimiy foydalaniladigan rasmiy platformalar, o'quv qo'llanmalari va dasturlash hujjatlari.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES_DATA.map((res, index) => {
            const Icon = getCategoryIcon(res.category);
            return (
              <a
                key={index}
                href={res.url}
                target="_blank"
                rel="noreferrer"
                className="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 hover:border-blue-500/60 hover:shadow-lg dark:hover:shadow-blue-950/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <Icon className="w-4 h-4 text-blue-500" />
                      <span>{res.category}</span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {res.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {res.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-semibold">
                  <span className="truncate max-w-[200px]">{res.url.replace(/^https?:\/\//, '')}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">Tashrif buyurish &rarr;</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
