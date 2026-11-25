import React from 'react';
import { Mail, Send, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="aloqa" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner Card */}
        <div className="bg-linear-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-6">
              <Mail className="w-3.5 h-3.5" />
              <span>Bog'lanish va muloqot</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Aloqa va hamkorlik
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">
              Savollar, o'quv takliflari yoki amaliy loyihalar yuzasidan bevosita quyidagi havolalar orqali bog'lanishingiz mumkin.
            </p>

            {/* Direct Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* GitHub Link */}
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">GitHub Profil</div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    github.com/MONRO728
                  </div>
                </div>
              </a>

              {/* Email Direct mailto link */}
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Elektron pochta</div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {PROFILE_DATA.email}
                  </div>
                </div>
              </a>

              {/* Telegram */}
              <a
                href={PROFILE_DATA.telegram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Telegram muloqot</div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    @f0z1l_2005
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={PROFILE_DATA.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Instagram profil</div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    @f0z1l_2005
                  </div>
                </div>
              </a>

              {/* University / Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Joylashuv & Ta'lim</div>
                  <div className="text-sm font-bold text-white">
                    {PROFILE_DATA.location} • {PROFILE_DATA.university}
                  </div>
                </div>
              </div>
            </div>

            {/* Note about no backend */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Sayt to'liq xavfsiz frontend arxitekturasida yaratilgan bo'lib, to'g'ridan-to'g'ri havolalar orqali ishlaydi.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
