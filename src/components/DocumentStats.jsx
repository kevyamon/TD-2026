import React from 'react';
import { BookOpen, Layers, Zap, Smartphone } from 'lucide-react';
import { colors } from '../theme/colors';

const stats = [
  {
    icon: BookOpen,
    title: '119 Pages Numérisées',
    description: 'Recueil complet comprenant l’ensemble des chapitres, énoncés d’exercices et planches d’étude.',
    delayClass: 'animate-delay-100',
  },
  {
    icon: Layers,
    title: 'Netteté Haute Définition',
    description: 'Traitement d’image préservant la clarté des légendes, des formules et des schémas de microbiologie.',
    delayClass: 'animate-delay-200',
  },
  {
    icon: Zap,
    title: 'Poids Optimisé (38,4 Mo)',
    description: 'Fichier allégé pour un téléchargement instantané, remplaçant le fichier brut de 761 Mo.',
    delayClass: 'animate-delay-300',
  },
  {
    icon: Smartphone,
    title: 'Compatibilité Universelle',
    description: 'Format PDF standardisé lisible sur ordinateur portable, tablette tactile et téléphone portable.',
    delayClass: 'animate-delay-400',
  },
];

export default function DocumentStats() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-10 animate-fade-in-up">
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          Caractéristiques Techniques du Recueil
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Un travail rigoureux de calibrage pour une expérience de lecture optimale
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              className={`bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-400 card-animated animate-fade-in-up ${item.delayClass} flex flex-col justify-between`}
            >
              <div>
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white mb-4 shadow-xs"
                  style={{ backgroundColor: colors.brand.primary }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
