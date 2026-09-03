import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconUser, IconGlobe, IconOffice, IconBank, IconRefresh, IconBolt, IconBriefcase, IconSearch, IconCheck } from './SvgIcons'
import EligibilityModal from './EligibilityModal'

const SERVICES = [
  {
    icon: <IconUser size={24} />,
    title: 'Particuliers & Salariés',
    link: '/remboursement-impot-france',
    desc: 'Vérification et réclamation de votre trop-perçu d\'impôt sur le revenu, déductions oubliées, régularisation de prélèvement à la source excessif et crédits d\'impôt non appliqués.',
    features: ['Trop-perçu impôt sur le revenu', 'Crédits d\'impôt non réclamés', 'Déductions en double', 'Retenue à la source excessive'],
  },
  {
    icon: <IconGlobe size={24} />,
    title: 'Expatriés & Non-Résidents',
    link: '/remboursement-impot-expatrie',
    desc: 'Accompagnement dédié aux non-résidents, expatriés et travailleurs frontaliers pour faire valoir les conventions fiscales bilatérales et récupérer les impôts payés en France et en Europe.',
    features: ['Remboursement fiscal multi-pays', 'Travailleurs frontaliers', 'Conventions fiscales bilatérales', 'Statut non-résident'],
  },
  {
    icon: <IconOffice size={24} />,
    title: 'Entreprises & PME',
    link: '/recuperation-tva-entreprise',
    desc: 'Récupération et remboursement de TVA en France et en Europe, optimisation légale des crédits d\'impôt (CII) et régularisation des trop-perçus fiscaux pour les entreprises.',
    features: ['Remboursement de TVA', 'Crédit Impôt Innovation (CII)', 'Optimisation fiscale légale', 'Dossiers transfrontaliers'],
  },
]

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Eligibility Modal */}
      <EligibilityModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100 rounded-full blur-3xl -mr-48 -mt-48 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100 rounded-full blur-3xl -ml-48 -mb-48 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-100 italic">
            <IconBriefcase size={14} /> Solutions fiscales
          </div>
          <h2 className="font-sora text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Nos services de <span className="text-brand-600">remboursement fiscal</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Particuliers, expatriés ou entreprises : bénéficiez d'une expertise pointue pour maximiser votre récupération d'impôts en toute conformité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group bg-white border border-slate-100 rounded-4xl p-10 hover:border-brand-200 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-brand-50 text-brand-600 rounded-2xl mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="font-sora text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-brand-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                  {s.desc}
                </p>
                <div className="space-y-3 pt-6 border-t border-slate-50">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                      <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link
                  to={s.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 group-hover:translate-x-1 transition-all"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner inside services */}
        <div className="bg-slate-950 rounded-4xl p-12 relative overflow-hidden text-center md:text-left">
          {/* Decorative background orb */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-brand-400">
                <IconSearch size={20} />
                <span className="font-bold uppercase tracking-widest text-xs">Analyse personnalisée</span>
              </div>
              <p className="font-sora text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                Vous souhaitez vérifier votre éligibilité ?
              </p>
              <p className="text-slate-400 font-medium">
                Obtenez une analyse gratuite de votre dossier sous 24h. Aucun frais si nous n'obtenons rien.
              </p>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all whitespace-nowrap shadow-lg shadow-brand-600/30 hover:scale-105 cursor-pointer"
            >
              Vérifier mon éligibilité gratuitement →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
