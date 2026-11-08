import React from 'react';
import { ArrowUp, GraduationCap } from 'lucide-react';
import { colors } from '../theme/colors';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: colors.brand.primary }}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Fascicule de Travaux Dirigés de Microbiologie
              </p>
              <p className="text-xs text-slate-400">
                Préparé spécialement pour Monsieur Operi • Année Universitaire 2026
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            Projet conçu et déployé avec la rigueur méthodologique et technique senior.
          </p>
          <p>
            Usage exclusivement réservé aux besoins pédagogiques du cours.
          </p>
        </div>
      </div>
    </footer>
  );
}

