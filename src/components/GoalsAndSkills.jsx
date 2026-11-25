import React from 'react';
import { Target, GraduationCap, Rocket, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { GOALS_DATA, SKILLS_DATA } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Target: Target,
  Rocket: Rocket,
};

export default function GoalsAndSkills() {
  return (
    <section id="maqsadlar" className="py-16 md:py-24 bg-white/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>O'sish va Rejalar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Maqsad va Kompetensiyalar
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Ta'lim jarayonida shakllantirilayotgan amaliy ko'nikmalar, kelajakdagi kasbiy maqsadlar va shaxsiy rivojlanish rejasi.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {GOALS_DATA.map((goal, idx) => {
            const IconComponent = iconMap[goal.icon] || Target;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 border border-blue-100 dark:border-blue-800/50">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                    {goal.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {goal.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Bosqichma-bosqich bajarilmoqda</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-indigo-500" />
                <span>O'zlashtirilgan ko'nikmalar (Skills)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Ushbu ma'lumotlar o'quv dasturi va amaliy tajriba asosida shakllantirilgan.
              </p>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 self-start sm:self-auto">
              Tahrirlash: <code className="text-blue-600 dark:text-blue-400">src/data/portfolioData.js</code>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SKILLS_DATA.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70 rounded-xl p-5 hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-colors shadow-2xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white text-base">
                      {skill.name}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    {skill.level} ({skill.percent}%)
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                  {skill.description}
                </p>

                {/* Progress bar indicator */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-linear-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
