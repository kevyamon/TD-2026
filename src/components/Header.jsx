import React from 'react';
import { ShieldCheck, GraduationCap } from 'lucide-react';
import { colors } from '../theme/colors';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Identité académique */}
        <div className="flex items-center space-x-3">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Pôle Scientifique • 2026
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight mt-0.5">
              Travaux Dirigés de Microbiologie
            </h1>
          </div>
        </div>

        {/* Badge & Statut de vérification */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Document Certifié Conforme (119 pages)</span>
          </div>
          <a
            href="#telechargement"
            className="text-xs font-semibold px-4 py-2 rounded-lg text-white shadow-xs hover:opacity-95 transition-all"
            style={{ backgroundColor: colors.brand.primary }}
          >
            Accéder au Recueil
          </a>
        </div>

      </div>
    </header>
  );
}

