import React from 'react'
import { Link } from 'react-router-dom'
import { IconSearch, IconCheck, IconTrophy, IconBuilding } from './SvgIcons'

const ITEMS = [
  {
    icon: <IconSearch size={20} />,
    title: 'Audit fiscal gratuit',
    desc: 'Analyse complète de votre situation sans aucun engagement.',
  },
  {
    icon: <IconCheck size={20} />,
    title: 'Suivi transparent',
    desc: 'Accès en temps réel à l\'avancement de votre dossier.',
  },
  {
    icon: <IconTrophy size={20} />,
    title: 'Commission au succès',
    desc: 'Vous ne payez rien si nous n\'obtenons pas votre remboursement.',
  },
]

const STATS = [
  { num: '98%', label: 'Taux de succès' },
  { num: '+12K', label: 'Dossiers traités' },
  { num: '0€', label: 'Frais si échec' },
  { num: '4.9/5', label: 'Avis clients' },
]

export default function Overview() {
  return (
    <section id="overview" className="py-24 bg-white relative overflow-hidden">
      {/* Background with image overlay (Hero Style) */}
      <div className="absolute inset-0 z-0 text-slate-100/10">
        <img
          src="/images/about-team.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/95 to-brand-50/40"></div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-50 text-gold-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-gold-100 italic">
              <IconBuilding size={14} /> À propos
            </div>

            <h2 className="font-sora text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
              Experts en remboursement fiscal <span className="text-brand-600">depuis 2015</span>
            </h2>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Chez EuroTax Refund, nous aidons particuliers et entreprises à récupérer
              les impôts indûment payés à l'État. Notre équipe d'experts analyse chaque
              dossier pour maximiser votre remboursement, en conformité avec la
              législation européenne et française.
            </p>

            <div className="space-y-6 mb-12">
              {ITEMS.map((item, i) => (
                <div className="flex gap-5 group" key={i}>
                  <div className="w-14 h-14 flex items-center justify-center bg-gold-50 text-gold-600 rounded-2xl group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 mb-8 border border-gold-100">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/form"
              className="px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all whitespace-nowrap"
            >
              Démarrer gratuitement →
            </Link>
          </div>

          {/* Right: Visuals */}
          <div className="space-y-8 animate-fadeInUp delay-200">
            <div className="relative group overflow-hidden rounded-5xl">
              <img
                src="/images/about-team.png"
                alt="Notre équipe d'experts"
                className="w-full h-[400px] object-cover filter grayscale brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              <div className="absolute bottom-8 right-8 bg-white px-6 py-3 rounded-2xl flex items-center gap-3 animate-float border border-slate-50">
                <div className="w-8 h-8 bg-gold-500 flex items-center justify-center rounded-full text-white">
                  <IconCheck size={16} />
                </div>
                <span className="font-bold text-slate-900 text-sm tracking-tight text-nowrap">Expert certifié</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-4xl text-center transition-all duration-300 ${i === 0
                    ? 'bg-brand-600 text-white col-span-2 md:col-span-1'
                    : 'bg-slate-50 text-slate-900 border border-slate-100'
                    }`}
                >
                  <div className={`font-sora text-3xl font-black mb-1 tracking-tight ${i === 0 ? 'text-white' : 'text-gold-600'}`}>{s.num}</div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${i === 0 ? 'text-brand-100' : 'text-slate-400'}`}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
