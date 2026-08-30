import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconCheck } from './SvgIcons'

const FAQ_HOME_QUESTIONS = [
  {
    id: 'faq-h-1',
    q: "Comment savoir si j'ai droit à un remboursement d'impôt ?",
    a: "L'éligibilité à un remboursement fiscal dépend de votre situation individuelle : nature de vos revenus, impôts déjà prélevés, déductions ou crédits d'impôt non imputés, et éventuels trop-perçus lors du prélèvement à la source. Pour savoir si vous êtes concerné, nous vous invitons à transmettre votre dossier pour une analyse personnalisée sans engagement."
  },
  {
    id: 'faq-h-2',
    q: "Combien coûte l'analyse de ma situation fiscale ?",
    a: "L'étude initiale et l'estimation du montant potentiellement récupérable sont 100 % gratuites. EuroTax Refund applique le principe du résultat : aucuns frais ni honoraires ne sont facturés si aucun remboursement effectif n'est obtenu."
  },
  {
    id: 'faq-h-3',
    q: "Quels documents dois-je fournir pour démarrer ?",
    a: "Les pièces justificatives dépendent de votre profil fiscal (particulier, salarié, expatrié ou entreprise). Pour une première étude, vos avis d'imposition récents ou récapitulatifs de revenus suffisent. Si des pièces complémentaires sont nécessaires, elles vous seront précisées lors de l'instruction."
  },
  {
    id: 'faq-h-4',
    q: "Qui peut faire une demande auprès d'EuroTax Refund ?",
    a: "Notre accompagnement est ouvert aux particuliers et salariés, aux travailleurs frontaliers, aux expatriés et non-résidents, ainsi qu'aux entreprises (PME, TPE, indépendants) ayant cotisé ou payé de la TVA en France et dans l'Union Européenne."
  },
  {
    id: 'faq-h-5',
    q: "Puis-je faire une demande si j'ai travaillé dans plusieurs pays ?",
    a: "Oui. Les situations transfrontalières et internationales sont étudiées au regard des conventions fiscales bilatérales liant les pays concernés, afin de vérifier l'absence de double imposition et l'exactitude des retenues à la source opérées."
  },
  {
    id: 'faq-h-6',
    q: "Combien de temps faut-il pour obtenir un remboursement ?",
    a: "Le délai dépend de la complexité du dossier, du temps nécessaire au rassemblement des justificatifs et des délais de traitement propres à chaque administration fiscale concernée. Nous assurons un suivi continu de votre demande jusqu'au versement des sommes."
  }
]

export default function FaqHome() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-50 rounded-full blur-3xl -ml-36 -mt-36 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-50 rounded-full blur-3xl -mr-40 -mb-40 opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-100 italic">
            <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span> FAQ & Réponses
          </div>
          <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Questions fréquentes sur le <span className="text-brand-600">remboursement d'impôt</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Retrouvez les réponses claires aux interrogations principales sur vos droits fiscaux et notre fonctionnement.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4 mb-16" role="region" aria-label="Foire aux questions">
          {FAQ_HOME_QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.id}
                className={`border rounded-3xl transition-all duration-300 bg-white overflow-hidden ${isOpen ? 'border-brand-300 shadow-md shadow-brand-500/5' : 'border-slate-200 hover:border-slate-300'
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                  className="w-full text-left p-6 sm:p-7 flex justify-between items-center gap-4 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-3xl"
                >
                  <span className="font-sora text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight">
                    {item.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all ${isOpen ? 'bg-brand-600 text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600'
                      }`}
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-6 sm:px-7 pb-7 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-medium animate-fadeIn"
                  >
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Subtle Bottom CTA in FAQ */}
        <div className="p-8 sm:p-10 bg-slate-50 rounded-4xl border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-md">
            <h3 className="font-sora text-lg font-bold text-slate-900 mb-1 tracking-tight">
              Une question spécifique sur votre situation ?
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Nos spécialistes vous répondent gratuitement et étudient vos possibilités de remboursement.
            </p>
          </div>
          <Link
            to="/form"
            className="px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold rounded-full transition-all whitespace-nowrap shadow-md shadow-brand-600/20 hover:shadow-brand-600/30"
          >
            Vérifier mon éligibilité →
          </Link>
        </div>
      </div>
    </section>
  )
}
