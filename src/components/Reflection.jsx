import React from 'react';
import { Lightbulb, CheckCircle2, AlertTriangle, TrendingUp, HelpCircle } from 'lucide-react';
import { REFLECTION_DATA } from '../data/portfolioData';

const questionIcons = [
  Lightbulb,     // Nimalarni o'rgandim?
  TrendingUp,    // Qaysi ko'nikmalarim rivojlandi?
  AlertTriangle, // Qanday qiyinchiliklarga duch keldim?
  CheckCircle2   // Kelgusida nimalarni o'rganmoqchiman?
];

export default function Reflection() {
  return (
    <section id="refleksiya" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>O'z-o'zini baholash</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            O'z-o'zini baholash va refleksiya
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Ta'lim jarayonida olingan bilimlar tahlili, duch kelingan to'siqlar va ularni yengish orqali erishilgan xulosalar.
          </p>
        </div>

        {/* Reflection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REFLECTION_DATA.map((item, index) => {
            const Icon = questionIcons[index % questionIcons.length];
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-800/50 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {item.question}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pl-1 sm:pl-2">
                    {item.answer}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Talaba shaxsiy xulosasi</span>
                  <span>Modul: Axborot texnologiyalari</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
