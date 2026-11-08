import React from 'react';
import { Download, Eye, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { colors } from '../theme/colors';

export default function HeroWelcome({ onDownload, documentSize = '38,4 Mo' }) {
  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#047857', '#059669', '#10b981', '#f59e0b']
    });
  };

  const handleDownloadClick = () => {
    triggerCelebration();
    if (onDownload) {
      onDownload();
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-14 px-4 sm:px-6 lg:px-8">
      {/* Fond décoratif subtil */}
      <div className="absolute inset-0 -z-10 bg-radial from-emerald-50/50 via-slate-50 to-slate-50" />
      
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Titre Principal animé */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4 animate-fade-in-up">
          Bienvenue, <span style={{ color: colors.brand.primary }}>Monsieur Operi</span>
        </h2>

        {/* Première phrase avec animation d'apparition douce */}
        <p className="text-base sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in-up animate-delay-100">
          Recueil complet des Travaux Dirigés de Microbiologie, soigneusement numérisé et optimisé pour accompagner votre programme d’enseignement.
        </p>

        {/* Carte de transmission animée avec survol */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-left shadow-xs mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200 card-animated">
          <div className="flex items-center space-x-3 mb-4 border-b border-slate-100 pb-3">
            <div 
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0"
              style={{ backgroundColor: colors.brand.primary }}
            >
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Message de transmission</p>
              <p className="text-xs text-slate-500">Document préparé à votre demande</p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-2">
            « Monsieur le Professeur, afin de faciliter l’accès aux 119 pages du fascicule sans les contraintes de transferts volumineux par messagerie, cet espace vous permet de récupérer directement le document officiel en haute fidélité. »
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 text-emerald-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              119 pages vérifiées et ordonnées
            </span>
            <span className="font-semibold text-slate-600">
              Format PDF haute résolution • {documentSize}
            </span>
          </div>
        </div>

        {/* Boutons d'Action Principaux */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
          <a
            href="/TD-Microbiologie-2026-Operi.pdf"
            download="TD-Microbiologie-2026-Operi.pdf"
            onClick={handleDownloadClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <Download className="w-5 h-5" />
            <span>Télécharger le Recueil Complet</span>
          </a>

          <a
            href="#apercu"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <Eye className="w-5 h-5 text-slate-600" />
            <span>Feuilleter l’Aperçu en Ligne</span>
          </a>
        </div>

      </div>
    </section>
  );
}
