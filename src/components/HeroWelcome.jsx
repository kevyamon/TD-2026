import React from 'react';
import { Download, Eye, Award, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { colors } from '../theme/colors';

export default function HeroWelcome({ onDownload, documentSize = '36 Mo' }) {
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
    <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Fond décoratif subtil aux motifs géométriques scientifiques */}
      <div className="absolute inset-0 -z-10 bg-radial from-emerald-50/50 via-slate-50 to-slate-50" />
      
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Badge d'accueil académique */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-900 text-xs font-semibold mb-6 shadow-xs">
          <Award className="w-4 h-4 text-amber-700" />
          <span>Espace Pédagogique Dédié • Année Universitaire 2026</span>
        </div>

        {/* Titre Principal */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
          Bienvenue, <span style={{ color: colors.brand.primary }}>Monsieur Operi</span>
        </h2>

        <p className="text-base sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
          Recueil complet des Travaux Dirigés de Microbiologie, soigneusement numérisé et optimisé pour accompagner votre programme d’enseignement.
        </p>

        {/* Lettre d'accompagnement respectueuse */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-left shadow-xs mb-10 max-w-3xl mx-auto">
          <div className="flex items-center space-x-3 mb-4 border-b border-slate-100 pb-3">
            <div 
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/TD-Microbiologie-2026-Operi.pdf"
            download="TD-Microbiologie-2026-Operi.pdf"
            onClick={handleDownloadClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform active:scale-98"
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

