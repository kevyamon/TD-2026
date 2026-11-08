import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { colors } from '../theme/colors';

export default function DedicationCard() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs card-animated animate-fade-in-up animate-delay-300 relative overflow-hidden">
        
        {/* Liseré subtil latéral */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ backgroundColor: colors.brand.primary }}
        />

        <div className="flex items-center space-x-3 mb-5">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Remerciements & Dédicace
            </h3>
            <p className="text-xs text-slate-500">
              Un mot personnel pour Monsieur Operi
            </p>
          </div>
        </div>

        <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed pl-1">
          <p>
            Monsieur le Professeur,
          </p>
          <p>
            Je tiens à vous remercier très sincèrement pour votre soutien constant, vos précieux conseils et la qualité de la formation que vous nous dispensez au quotidien.
          </p>
          <p>
            Votre rigueur scientifique et votre écoute attentive sont une source d’apprentissage inestimable pour notre parcours en microbiologie.
          </p>
          <p>
            C’est un réel plaisir d’avoir pu apporter cette modeste contribution à travers la numérisation de ce document de Travaux Dirigés pour faciliter votre travail cette année.
          </p>
          <p className="font-semibold text-slate-800 pt-2 text-right">
            Avec tout mon respect et ma gratitude.
          </p>
        </div>

      </div>
    </section>
  );
}
