import React from 'react'
import { Link } from 'react-router-dom'
import { IconUser, IconGlobe, IconOffice, IconBank, IconRefresh, IconBolt, IconBriefcase, IconSearch, IconCheck } from './SvgIcons'

const SERVICES = [
  {
    icon: <IconUser size={24} />,
    title: 'Particuliers & Salariés',
    desc: 'Trop-perçu d\'impôt sur le revenu, crédits non réclamés, déductions oubliées — nous analysons tout pour maximiser votre remboursement.',
    features: ['Trop-perçu impôt sur le revenu', 'Crédits d\'impôt non réclamés', 'Déductions en double', 'Retenue à la source excessive'],
  },
  {
    icon: <IconGlobe size={24} />,
    title: 'Non-Résidents & Expatriés',
    desc: 'Vous avez travaillé ou vécu dans plusieurs pays ? Nous récupérons les impôts payés en France et dans toute l\'Union Européenne.',
    features: ['Remboursement multi-pays', 'Travailleurs frontaliers', 'Conventions fiscales bilatérales', 'Statut non-résident'],
  },
  {
    icon: <IconOffice size={24} />,
    title: 'Entreprises & PME',
    desc: 'TVA non remboursée, crédits d\'impôt innovation, suramortissements non utilisés — notre équipe dédiée entreprise récupère tout.',
    features: ['Remboursement de TVA', 'Crédit Impôt Innovation (CII)', 'Optimisation fiscale légale', 'Dossiers transfrontaliers'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background with image overlay (Hero Style) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pattern-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-brand-50/30"></div>
      </div>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-100">
            <IconBriefcase size={14} /> Nos services
          </div>
          <h2 className="font-sora text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Ce que nous <span className="text-brand-600">récupérons</span> pour vous
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Nos experts fiscaux couvrent toutes les situations — des plus simples aux plus
            complexes — en France et dans toute l'Union Européenne.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-100 rounded-4xl p-10 transition-all duration-500 relative overflow-hidden"
            >

              <div className="w-14 h-14 flex items-center justify-center bg-gold-50 text-gold-600 rounded-2xl group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 mb-8 border border-gold-100">
                {service.icon}
              </div>

              <h3 className="font-sora text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-700 transition-colors tracking-tight">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>

              <div className="space-y-3">
                {service.features.map((feat, j) => (
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-700" key={j}>
                    <div className="w-5 h-5 flex items-center justify-center bg-gold-50 text-gold-600 rounded-full border border-gold-100">
                      <IconCheck size={10} />
                    </div>
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 p-10 bg-slate-950 rounded-5xl relative overflow-hidden text-center md:text-left">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-brand-400">
                <IconSearch size={20} />
                <span className="font-bold uppercase tracking-widest text-xs">Analyse personnalisée</span>
              </div>
              <h3 className="font-sora text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                Pas sûr(e) de votre situation ?
              </h3>
              <p className="text-slate-400 font-medium">
                Obtenez une analyse gratuite de votre dossier sous 24h. Aucun frais si nous n'obtenons rien.
              </p>
            </div>

            <Link
              to="/form"
              className="px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all whitespace-nowrap"
            >
              Vérifier mon éligibilité gratuitement →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
