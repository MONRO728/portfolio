import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, Filter, RefreshCw, FolderGit2, AlertCircle } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { FALLBACK_REPOS, PROFILE_DATA } from '../data/portfolioData';

export default function Projects() {
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('Barchasi');
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(null);

  const fetchGithubRepos = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.github.com/users/MONRO728/repos?sort=updated&per_page=100');
      if (!response.ok) {
        throw new Error(`GitHub API HTTP status: ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        // Filter out fork repositories if any, or show all public repos
        const mapped = data.map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language || 'Turli xil',
          html_url: repo.html_url,
          homepage: repo.homepage,
          stargazers_count: repo.stargazers_count,
          updated_at: repo.updated_at
        }));
        setRepos(mapped);
        setIsUsingFallback(false);
      } else {
        setRepos(FALLBACK_REPOS);
        setIsUsingFallback(true);
      }
    } catch (err) {
      console.warn('GitHub API so\'rovi xatolikka uchradi, fallback ma\'lumotlar qo\'llandi:', err);
      setRepos(FALLBACK_REPOS);
      setIsUsingFallback(true);
    } finally {
      setLoading(false);
      setLastRefreshed(new Date().toLocaleTimeString('uz-UZ'));
    }
  };

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  // Calculate unique languages
  const languages = ['Barchasi', ...new Set(repos.map(r => r.language).filter(Boolean))];

  const filteredRepos = selectedLanguage === 'Barchasi'
    ? repos
    : repos.filter(r => r.language === selectedLanguage);

  return (
    <section id="loyihalar" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>GitHub Repozitoriylari</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
              Bajarilgan ishlar va loyihalar
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl">
              GitHub profilimdagi ochiq manbali repozitoriylar ro'yxati. Ma'lumotlar bevosita GitHub API orqali yuklanadi.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchGithubRepos}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer disabled:opacity-50"
              title="Ma'lumotlarni yangilash"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-blue-500' : ''}`} />
              <span>Yangilash</span>
            </button>
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub'da ochish</span>
            </a>
          </div>
        </div>

        {/* Fallback Info Alert (if API limit reached or offline) */}
        {isUsingFallback && (
          <div className="mb-8 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-start sm:items-center justify-between gap-3 text-xs text-amber-800 dark:text-amber-300">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
              <span>
                GitHub API cheklovi yoki oflayn holat: Loyihalar oldindan tayyorlangan zaxira (fallback) ma'lumotlar asosida ko'rsatilmoqda. Barcha havolalar haqiqiy.
              </span>
            </div>
            {lastRefreshed && (
              <span className="hidden md:inline-block text-slate-500 dark:text-slate-400 text-[11px]">
                Oxirgi urinish: {lastRefreshed}
              </span>
            )}
          </div>
        )}

        {/* Language Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium">
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" /> Saralash:
          </span>
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3.5 py-1.5 rounded-lg shrink-0 transition-all cursor-pointer ${
                selectedLanguage === lang
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id || repo.name}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-blue-950/20 transition-all duration-200 group"
            >
              <div>
                {/* Card Top bar */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {repo.language || 'Dastur'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500/30" />
                      {repo.stargazers_count || 0}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 truncate">
                  {repo.name}
                </h3>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-5 leading-relaxed">
                  {repo.description || "Ushbu repozitoriy uchun qo'shimcha tavsif kiritilmagan. Kod va fayllar GitHub orqali ko'rish mumkin."}
                </p>
              </div>

              {/* Bottom links */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Kodni ko'rish</span>
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Jonli sayt</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if filter yields zero */}
        {filteredRepos.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Tanlangan dasturlash tilida loyihalar topilmadi.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
