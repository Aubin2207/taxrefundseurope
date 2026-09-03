import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconCheck, IconShield, IconBolt } from './SvgIcons'

export default function EligibilityModal({ isOpen, onClose }) {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    profile: '',
    country: '',
    situation: '',
  })

  if (!isOpen) return null

  const resetAndClose = () => {
    setStep(1)
    setAnswers({ profile: '', country: '', situation: '' })
    onClose()
  }

  const handleSelect = (key, val) => {
    const updated = { ...answers, [key]: val }
    setAnswers(updated)
    if (step < 3) {
      setStep(step + 1)
    } else {
      setStep(4) // Result step
    }
  }

  const handleFinalize = () => {
    resetAndClose()
    navigate('/form')
  }

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300"
        onClick={resetAndClose}
      ></div>

      {/* Modal Card */}
      <div className="bg-white rounded-3xl sm:rounded-[36px] shadow-2xl border border-slate-100 max-w-lg w-full p-6 sm:p-10 relative z-10 animate-fadeInUp">
        {/* Close button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors text-xl font-bold"
          aria-label="Fermer"
        >
          ✕
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full mb-4">
          <IconBolt size={14} className="text-brand-600" />
          Test d'éligibilité rapide (30 sec)
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full mb-6 overflow-hidden">
          <div
            className="bg-brand-600 h-full transition-all duration-300 rounded-full"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        {/* STEP 1: Profile */}
        {step === 1 && (
          <div>
            <h3 className="font-sora text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
              Quel est votre profil ?
            </h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">
              Sélectionnez votre situation actuelle.
            </p>

            <div className="space-y-3">
              {[
                { id: 'particulier', label: 'Particulier / Salarié', desc: 'Prélèvement à la source, crédits ou déductions' },
                { id: 'expatrie', label: 'Expatrié / Non-résident / Frontalier', desc: 'Revenus transfrontaliers ou départ à l’étranger' },
                { id: 'entreprise', label: 'Entreprise / Indépendant', desc: 'TVA européenne ou dépenses professionnelles' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect('profile', item.label)}
                  className="w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/40 transition-all group"
                >
                  <div className="font-bold text-slate-900 group-hover:text-brand-600 text-sm">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Zone / Country */}
        {step === 2 && (
          <div>
            <h3 className="font-sora text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
              Dans quel pays avez-vous cotisé ou payé des impôts ?
            </h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">
              Ces 3 dernières années.
            </p>

            <div className="space-y-3">
              {[
                'Belgique',
                'France',
                'Autre pays de l’Union Européenne (Luxembourg, Allemagne, etc.)',
                'Plusieurs pays d’Europe',
              ].map((c) => (
                <button
                  key={c}
                  onClick={() => handleSelect('country', c)}
                  className="w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/40 font-bold text-slate-800 hover:text-brand-600 text-sm transition-all"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Context / Situation */}
        {step === 3 && (
          <div>
            <h3 className="font-sora text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
              Avez-vous eu un changement de situation ?
            </h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">
              Changement d’employeur, période sans activité, charges de famille, départs à l’étranger...
            </p>

            <div className="space-y-3">
              {[
                { label: 'Oui, changement ou situation atypique', detail: 'Forte probabilité de trop-perçu fiscal' },
                { label: 'Je souhaite simplement vérifier mes droits', detail: 'Audit complet de conformité' },
              ].map((s) => (
                <button
                  key={s.label}
                  onClick={() => handleSelect('situation', s.label)}
                  className="w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/40 transition-all group"
                >
                  <div className="font-bold text-slate-900 group-hover:text-brand-600 text-sm">
                    {s.label}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {s.detail}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: High Probability Result */}
        {step === 4 && (
          <div className="text-center py-2">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconCheck size={32} />
            </div>

            <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-3 border border-emerald-200">
              Résultat : Forte éligibilité détectée
            </div>

            <h3 className="font-sora text-2xl font-extrabold text-slate-900 mb-3">
              Vous pouvez prétendre à un remboursement !
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
              D’après vos réponses ({answers.profile}, {answers.country}), votre dossier présente un potentiel élevé de récupération fiscale. Transmettez vos informations pour obtenir votre audit chiffré gratuit sous 24h.
            </p>

            <button
              onClick={handleFinalize}
              className="w-full py-4 px-6 bg-brand-600 hover:bg-brand-500 text-white font-black rounded-2xl transition-all shadow-lg shadow-brand-600/30 text-base mb-3 hover:scale-[1.02]"
            >
              Finaliser ma demande gratuite en 2 min →
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-semibold">
              <IconShield size={14} className="text-slate-400" />
              100% confidentiel • Aucun frais si aucun remboursement
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
