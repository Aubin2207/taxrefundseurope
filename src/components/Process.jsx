import React from 'react'
import { IconClipboard, IconSearch, IconUpload, IconMoney, IconGear } from './SvgIcons'

const STEPS = [
  {
    num: '01',
    icon: <IconClipboard size={22} />,
    title: 'Remplissez le formulaire',
    desc: 'Renseignez vos informations fiscales en quelques minutes. 100% sécurisé.',
  },
  {
    num: '02',
    icon: <IconSearch size={22} />,
    title: 'Analyse d\'expert',
    desc: 'Nos experts certifiés étudient votre dossier et identifient tous les remboursements possibles.',
  },
  {
    num: '03',
    icon: <IconUpload size={22} />,
    title: 'Dépôt de la demande',
    desc: 'Nous déposons officiellement votre dossier auprès des administrations fiscales concernées.',
  },
  {
    num: '04',
    icon: <IconMoney size={22} />,
    title: 'Remboursement reçu',
    desc: 'Vous recevez votre remboursement. Nous ne percevons une commission qu\'en cas de succès.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Background with image overlay (Hero Style) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/form-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.06] grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-brand-50/40"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img src="/images/pattern-bg.png" alt="" className="w-full h-full object-cover filter sepia hue-rotate-[100deg] saturate-[2]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-950 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6 italic">
            <IconGear size={14} className="text-gold-500" /> Comment ça marche
          </div>
          <h2 className="font-sora text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Simple, rapide, <span className="text-brand-600">transparent</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            De votre premier clic au remboursement, nous vous accompagnons à chaque étape.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-brand-100 via-brand-500 to-brand-100 rounded-full opacity-30"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {STEPS.map((step, i) => (
              <div className="flex flex-col items-center text-center group" key={i}>
                <div className="w-22 h-22 mb-8 relative">
                  <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center font-sora text-2xl font-black text-slate-300 shadow-xl group-hover:bg-brand-600 group-hover:text-white group-hover:border-transparent group-hover:scale-110 transition-all duration-500 relative z-20">
                    {step.num}
                  </div>
                  {/* Decorative pulse ring */}
                  <div className="absolute inset-0 bg-gold-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="mb-4 transition-transform group-hover:scale-110 duration-500 text-gold-500">
                  {step.icon}
                </div>

                <h4 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight group-hover:text-brand-700 transition-colors">
                  {step.title}
                </h4>

                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
