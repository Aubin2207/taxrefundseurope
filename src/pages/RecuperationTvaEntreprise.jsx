import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { usePageSEO } from '../hooks/usePageSEO'
import {
  IconOffice, IconSearch, IconCheck, IconShield,
  IconMoney, IconClipboard, IconBriefcase, IconArrowLeft,
  IconBuilding, IconGlobe, IconTarget
} from '../components/SvgIcons'

const FAQ_ITEMS = [
  {
    id: 'tva-1',
    q: "Une entreprise peut-elle récupérer la TVA payée dans un autre pays européen ?",
    a: "Oui. En vertu de la directive européenne 2008/9/CE (procédure TVA 8e et 9e Directive), une entreprise assujettie établie dans l'UE peut réclamer le remboursement de la TVA professionnelle supportée dans un autre État membre."
  },
  {
    id: 'tva-2',
    q: "Quelles sont les dépenses professionnelles ouvrant droit à récupération de TVA ?",
    a: "Les frais les plus fréquents sont : hébergement hôtelier et restauration pour déplacements professionnels, participation à des foires, salons et conférences, carburant et péages, location de véhicules utilitaires ou de stands, et honoraires de sous-traitance locale."
  },
  {
    id: 'tva-3',
    q: "Quelles sont les conditions de forme pour les factures ?",
    a: "La facture doit être libellée au nom exact de l'entreprise, comporter son numéro de TVA intracommunautaire, la date, le détail HT/TVA/TTC et être conforme aux mentions obligatoires du pays émetteur."
  },
  {
    id: 'tva-4',
    q: "Quels sont les seuils et délais pour déposer une demande de remboursement de TVA ?",
    a: "La demande doit être déposée par voie électronique au plus tard le 30 septembre de l'année civile suivant la période de facturation. Des seuils minimaux de TVA s'appliquent selon que la demande est trimestrielle ou annuelle."
  },
  {
    id: 'tva-5',
    q: "EuroTax Refund s'occupe-t-il de l'ensemble des démarches pour les entreprises ?",
    a: "Oui. Nous effectuons l'audit de vos factures, la vérification de conformité, la saisie et le dépôt des dossiers sur les portails fiscaux compétents, ainsi que le suivi des échanges jusqu'au virement des fonds."
  },
  {
    id: 'tva-6',
    q: "Comment fonctionne la rémunération d'EuroTax Refund pour les entreprises ?",
    a: "Nos honoraires sont 100 % indexés sur le résultat : vous ne réglez un pourcentage qu'une fois la TVA effectivement remboursée et créditée sur le compte bancaire de votre entreprise."
  }
]

const TVA_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://taxrefundseurope.netlify.app/recuperation-tva-entreprise#webpage',
      'url': 'https://taxrefundseurope.netlify.app/recuperation-tva-entreprise',
      'name': 'Récupération de TVA entreprise en Belgique et en Europe | EuroTax Refund',
      'description': "Récupérez la TVA professionnelle payée en Belgique et dans l'Union Européenne. Analyse gratuite de vos factures et démarches simplifiées pour votre entreprise.",
      'isPartOf': {
        '@id': 'https://taxrefundseurope.netlify.app/#website'
      },
      'inLanguage': 'fr-BE'
    }
  ]
}

export default function RecuperationTvaEntreprise() {
  usePageSEO({
    title: "Récupération de TVA entreprise en Belgique et en Europe | EuroTax Refund",
    description: "Récupérez la TVA professionnelle payée en Belgique et dans l'Union Européenne. Analyse gratuite de vos factures et démarches simplifiées pour votre entreprise.",
    canonicalPath: "/recuperation-tva-entreprise",
    schema: TVA_SCHEMA
  })

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/hero-bg.webp"
            alt=""
            width="640"
            height="640"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/90 to-brand-50/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest">
            <Link to="/" className="hover:text-brand-600 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-brand-600">Récupération TVA Entreprise</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-100 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-dot"></span>
              <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">Fiscalité des Entreprises & PME</span>
            </div>

            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
              Récupération de TVA pour les <br />
              <span className="bg-gradient-to-r from-brand-600 to-gold-500 bg-clip-text text-transparent">
                entreprises en Belgique et en Europe
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium max-w-3xl">
              Les entreprises qui réalisent des déplacements, participent à des salons professionnels ou achètent des prestations dans l'Union Européenne supportent souvent de la TVA locale non déduite. EuroTax Refund accompagne les PME et entreprises pour identifier, justifier et récupérer les crédits et remboursements de TVA éligibles, sans avance de frais.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/form"
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5"
              >
                Démarrer ma demande →
              </Link>
              <a
                href="#tva-principe"
                className="px-8 py-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold rounded-full border border-slate-200 hover:border-slate-300 transition-all"
              >
                Comprendre le mécanisme
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 : PRINCIPE DE RÉCUPÉRATION */}
      <section id="tva-principe" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Règles fondamentales
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Qu'est-ce que la récupération de TVA professionnelle en Europe ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Toute entreprise établie en Belgique ou dans l'Union Européenne ayant supporté de la TVA sur des dépenses d'exploitation dans un autre État membre peut en demander la restitution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-50 text-brand-600 rounded-2xl mb-6">
                <IconMoney size={24} />
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-900 mb-4 tracking-tight">
                La directive européenne 2008/9/CE
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Ce cadre juridique européen garantit la neutralité de la TVA pour les entreprises. Les dépenses de représentation, transport et salons professionnels ne doivent pas grever la rentabilité des sociétés actives à l'international.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-gold-50 text-gold-600 rounded-2xl mb-6">
                <IconShield size={24} />
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-900 mb-4 tracking-tight">
                Accompagnement 100 % sécurisé
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Nous auditons vos pièces comptables pour valider leur conformité avec les exigences de chaque administration fiscale européenne avant tout dépôt officiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 : FAQ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              FAQ Entreprise
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Questions fréquentes sur la récupération de TVA en Belgique et en Europe
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              Optimisez votre trésorerie d'entreprise sans complexité administrative.
            </p>
          </div>

          <div className="space-y-4 mb-14">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={item.id}
                  className={`border rounded-3xl transition-all duration-300 bg-white overflow-hidden ${
                    isOpen ? 'border-brand-300 shadow-md shadow-brand-500/5' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-7 flex justify-between items-center gap-4 transition-colors group focus:outline-none rounded-3xl"
                  >
                    <span className="font-sora text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight">
                      {item.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all ${
                        isOpen ? 'bg-brand-600 text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-7 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-medium animate-fadeIn">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="p-8 sm:p-10 bg-slate-50 rounded-4xl border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-md">
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-1 tracking-tight">
                Votre entreprise a engagé des dépenses en Europe ?
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Vérifiez gratuitement le potentiel de récupération de TVA sur vos factures.
              </p>
            </div>
            <Link
              to="/form"
              className="px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold rounded-full transition-all whitespace-nowrap shadow-md shadow-brand-600/20 hover:shadow-brand-600/30"
            >
              Démarrer ma demande →
            </Link>
          </div>
        </div>
      </section>

      {/* MAILLAGE INTERNE */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Découvrez également nos autres domaines d'accompagnement
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/remboursement-impot-france"
              className="px-6 py-3 bg-white border border-slate-200 hover:border-brand-400 rounded-full text-sm font-bold text-slate-800 hover:text-brand-600 transition-all shadow-sm"
            >
              Remboursement d'impôt en Belgique et en Europe →
            </Link>
            <Link
              to="/remboursement-impot-expatrie"
              className="px-6 py-3 bg-white border border-slate-200 hover:border-brand-400 rounded-full text-sm font-bold text-slate-800 hover:text-brand-600 transition-all shadow-sm"
            >
              Remboursement impôt expatrié & non-résident →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND FINAL */}
      <section className="py-24 bg-slate-950 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Prêt à optimiser la trésorerie de votre entreprise grâce à la TVA ?
          </h2>
          <p className="text-lg text-slate-400 mb-10 font-medium max-w-2xl mx-auto">
            Audit gratuit de vos factures sous 24h. Aucun honoraire sans remboursement effectif obtenu pour votre entreprise.
          </p>
          <Link
            to="/form"
            className="inline-flex px-10 py-5 bg-white hover:bg-slate-100 text-brand-600 font-black rounded-full shadow-2xl shadow-brand-500/20 transition-all hover:-translate-y-1 hover:scale-105"
          >
            Démarrer ma demande de remboursement →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
