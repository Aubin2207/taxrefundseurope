import React from 'react'
import { Link } from 'react-router-dom'
import { IconEuro, IconCheck } from './SvgIcons'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Background with image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/85 to-brand-50/40"></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] animate-float-reverse"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-100 rounded-full mb-8">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-dot"></span>
            <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">Plateforme agréée – France & Europe</span>
          </div>

          <h1 className="font-sora text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
            Récupérez vos <br />
            <span className="bg-gradient-to-r from-brand-600 to-gold-500 bg-clip-text text-transparent">impôts payés</span> <br />
            à l'État
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl font-medium">
            Obtenez un remboursement intégral de vos impôts allant jusqu'à <span className="text-brand-600 font-bold">800 000 euros</span> pour les particuliers et jusqu'à <span className="text-brand-600 font-bold">20 millions d'euros</span> pour les entreprises.
            <br /> Analyse gratuite — <span className="text-brand-600 font-bold">sans frais si on ne récupère rien.</span>
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link to="/form" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all">
              Démarrer ma demande →
            </Link>
            <a href="#process" className="px-8 py-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold rounded-full border border-slate-200 hover:border-slate-300 transition-all">
              Comment ça marche
            </a>
          </div>

          {/* Metrics */}
          <div className="flex gap-12 pt-10 border-t border-slate-100">
            {[
              { val: '98%', label: 'Taux de succès' },
              { val: '+12K', label: 'Dossiers traités' },
              { val: '0€', label: 'Frais si échec' }
            ].map(m => (
              <div key={m.label}>
                <div className="font-sora text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">{m.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual Panel */}
        <div className="hidden lg:flex flex-col gap-6 animate-fadeInUp delay-200">
          <div className="bg-white border border-slate-100 rounded-4xl p-8 relative overflow-hidden group hover:border-brand-100 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-2xl -mr-16 -mt-16"></div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-50 rounded-2xl border border-brand-100">
                <IconEuro size={24} className="text-brand-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 mb-0.5 tracking-tight">Remboursement estimé</div>
                <div className="text-xs text-slate-500 font-medium">Analyse de votre dossier en cours…</div>
              </div>
            </div>

            <div className="font-sora text-5xl font-extrabold text-slate-900 mb-4 tracking-tighter">
              <span className="text-brand-600">4 820,00 €</span>
            </div>

            <div className="flex justify-between text-xs font-bold mb-3">
              <span className="text-slate-400">Progression</span>
              <span className="text-brand-600">78% récupéré</span>
            </div>
            <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
              <div className="h-full bg-brand-600 rounded-full relative overflow-hidden w-[78%]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-4xl p-8 hover:border-brand-100 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-brand-50 rounded-lg text-brand-600">
                <IconCheck size={18} />
              </div>
              <span className="font-bold text-slate-900 tracking-tight">Suivi en temps réel</span>
            </div>

            <div className="space-y-4">
              {[
                { s: 'Dossier soumis', d: true },
                { s: 'Vérification expert', d: true },
                { s: 'Demande déposée au fisc', d: true },
                { s: 'Remboursement en cours', d: false }
              ].map((step, i) => (
                <div key={i} className={`flex items-center gap-4 text-sm font-bold ${step.d ? 'text-slate-700' : 'text-slate-300'}`}>
                  <div className={`w-2 h-2 rounded-full ${step.d ? 'bg-brand-500' : 'bg-slate-200'}`}></div>
                  {step.s}
                </div>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div className="flex items-center gap-6 px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl">
            <div className="flex gap-1 text-amber-500 text-sm">★★★★★</div>
            <div className="text-xs text-slate-500 font-bold">
              <strong className="text-slate-900">4.9/5</strong> — basé sur +1 200 avis clients
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
