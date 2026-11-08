import React from 'react';
import { GraduationCap } from 'lucide-react';
import { colors } from '../theme/colors';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Identité académique épurée */}
        <div className="flex items-center space-x-3">
          <div 
            className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-xs"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">
              Travaux Dirigés de Microbiologie
            </h1>
          </div>
        </div>

        {/* Action directe */}
        <div className="flex items-center space-x-3">
          <a
            href="#telechargement"
            className="text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg text-white shadow-xs hover:opacity-95 transition-all"
            style={{ backgroundColor: colors.brand.primary }}
          >
            Accéder au Recueil
          </a>
        </div>

      </div>
    </header>
  );
}
