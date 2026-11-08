import React, { useState } from 'react';
import { Download, FileCheck, Check, Clock, HardDrive, Bookmark } from 'lucide-react';
import confetti from 'canvas-confetti';
import { colors } from '../theme/colors';

export default function DownloadSection({ documentSize = '36 Mo' }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#047857', '#059669', '#10b981', '#f59e0b']
    });
    setTimeout(() => setDownloaded(false), 8000);
  };

  return (
    <section id="telechargement" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden card-animated animate-fade-in-up">
        
        {/* Bandeau d'accent en haut */}
        <div 
          className="absolute top-0 left-0 right-0 h-2"
          style={{ backgroundColor: colors.brand.primary }}
        />

        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 mb-4 border border-emerald-200">
            <Download className="w-7 h-7" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Téléchargement Direct du Recueil
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            Fichier unique et consolidé, immédiatement consultable et imprimable
          </p>
        </div>

        {/* Fiche descriptive du fichier */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200/70">
              <FileCheck className="w-5 h-5 text-emerald-700 shrink-0" />
              <div>
                <span className="text-slate-500 font-medium block">Nom du document</span>
                <span className="font-bold text-slate-900">TD-Microbiologie-2026-Operi.pdf</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200/70">
              <HardDrive className="w-5 h-5 text-emerald-700 shrink-0" />
              <div>
                <span className="text-slate-500 font-medium block">Poids optimisé</span>
                <span className="font-bold text-slate-900">{documentSize} (au lieu de 761 Mo)</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200/70">
              <Clock className="w-5 h-5 text-emerald-700 shrink-0" />
              <div>
                <span className="text-slate-500 font-medium block">Temps estimé</span>
                <span className="font-bold text-slate-900">Moins de 3 secondes</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200/70">
              <Bookmark className="w-5 h-5 text-emerald-700 shrink-0" />
              <div>
                <span className="text-slate-500 font-medium block">Pagination</span>
                <span className="font-bold text-slate-900">119 pages numérotées</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton de Téléchargement Principal */}
        <div className="text-center">
          <a
            href="/TD-Microbiologie-2026-Operi.pdf"
            download="TD-Microbiologie-2026-Operi.pdf"
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-5 rounded-2xl text-white font-extrabold text-lg shadow-md hover:shadow-xl transition-all transform active:scale-98 cursor-pointer"
            style={{ backgroundColor: colors.brand.primary }}
          >
            {downloaded ? (
              <>
                <Check className="w-6 h-6 text-white" />
                <span>Téléchargement Lancé !</span>
              </>
            ) : (
              <>
                <Download className="w-6 h-6 text-white" />
                <span>Télécharger le Fascicule (PDF)</span>
              </>
            )}
          </a>

          <p className="text-xs text-slate-500 mt-4">
            Lien permanent et sécurisé • Aucun compte requis
          </p>
        </div>

      </div>
    </section>
  );
}

