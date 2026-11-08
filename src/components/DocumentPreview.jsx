import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, FileText, Download } from 'lucide-react';
import { colors } from '../theme/colors';

const previewPages = [
  { id: 1, src: '/previews/page-1.jpg', title: 'Page 1 — Première de couverture & Introduction' },
  { id: 2, src: '/previews/page-2.jpg', title: 'Page 2 — Sommaire & Notions préliminaires' },
  { id: 3, src: '/previews/page-3.jpg', title: 'Page 3 — Travaux Dirigés & Exercices d’application' },
  { id: 4, src: '/previews/page-4.jpg', title: 'Page 4 — Planches d’observations & Schémas' },
];

export default function DocumentPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPage = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : previewPages.length - 1));
  };

  const nextPage = () => {
    setCurrentIndex((prev) => (prev < previewPages.length - 1 ? prev + 1 : 0));
  };

  const currentPage = previewPages[currentIndex];

  return (
    <section id="apercu" className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        
        {/* En-tête du visualiseur */}
        <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/70">
          <div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Visualisation interactive
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Feuilleter un extrait du recueil
            </h3>
            <p className="text-xs text-slate-600">
              Vérifiez la netteté et la fidélité de reproduction des pages numérisées
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              Page {currentPage.id} sur 119
            </span>
          </div>
        </div>

        {/* Zone d'affichage du document */}
        <div className="relative bg-slate-900/5 p-4 sm:p-8 flex items-center justify-center min-h-[480px]">
          {/* Bouton Page précédente */}
          <button
            type="button"
            onClick={prevPage}
            aria-label="Page précédente"
            className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/95 border border-slate-200 text-slate-800 flex items-center justify-center shadow-md hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Rendu de la page */}
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
            <div className="relative aspect-[3/4] bg-slate-100 flex items-center justify-center">
              <img
                src={currentPage.src}
                alt={currentPage.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col items-center justify-center p-6 text-center text-slate-500">
                <FileText className="w-12 h-12 text-slate-300 mb-2" />
                <p className="text-xs font-medium">Page en cours de traitement...</p>
              </div>
            </div>

            <div className="p-3 bg-white border-t border-slate-100 text-center">
              <p className="text-xs font-semibold text-slate-700">
                {currentPage.title}
              </p>
            </div>
          </div>

          {/* Bouton Page suivante */}
          <button
            type="button"
            onClick={nextPage}
            aria-label="Page suivante"
            className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/95 border border-slate-200 text-slate-800 flex items-center justify-center shadow-md hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Sélecteur de miniatures & Appel au téléchargement complet */}
        <div className="p-4 sm:p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            {previewPages.map((page, idx) => (
              <button
                key={page.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'text-white shadow-xs'
                    : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                }`}
                style={{
                  backgroundColor: currentIndex === idx ? colors.brand.primary : undefined,
                }}
              >
                Page {page.id}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs text-slate-500 hidden md:inline">
              + 115 autres pages dans l’archive complète
            </span>
            <a
              href="/TD-Microbiologie-2026-Operi.pdf"
              download="TD-Microbiologie-2026-Operi.pdf"
              className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-lg border border-emerald-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger les 119 pages</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

