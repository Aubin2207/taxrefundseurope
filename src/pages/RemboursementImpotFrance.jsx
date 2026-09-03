import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { usePageSEO } from '../hooks/usePageSEO'
import {
  IconUser, IconSearch, IconCheck, IconShield,
  IconMoney, IconClipboard, IconBriefcase, IconArrowLeft,
  IconTarget
} from '../components/SvgIcons'

const FAQ_ITEMS = [
  {
    id: 'be-1',
    q: "Qu'est-ce qu'un trop-perçu fiscal sur le revenu en Belgique ?",
    a: "Un trop-perçu fiscal correspond à la différence positive entre le précompte professionnel retenu à la source tout au long de l'année sur vos revenus et l'impôt final des personnes physiques (IPP) réellement établi par le SPF Finances lors du calcul de votre avertissement-extrait de rôle."
  },
  {
    id: 'be-2',
    q: "Dans quels cas peut-on obtenir un remboursement d'impôt en Belgique ?",
    a: "Les cas les plus fréquents concernent une baisse ou interruption de revenus en cours d'année, des déductions fiscales omises (frais de garde d'enfants, épargne-pension, libéralités/dons, titres-services), des frais professionnels réels sous-estimés ou des changements de situation familiale non régularisés."
  },
  {
    id: 'be-3',
    q: "Comment savoir si j'ai payé trop d'impôts en Belgique ou en Europe ?",
    a: "En procédant à un examen détaillé de vos avertissements-extraits de rôle et de vos fiches de paie (fiches 281). EuroTax Refund réalise ce diagnostic sans frais afin d'identifier si des déductions, quotités exemptées ou crédits ont été omis."
  },
  {
    id: 'be-4',
    q: "Quelles déductions et avantages fiscaux belges peuvent être récupérés ?",
    a: "Sont principalement concernés les dépenses de garde d'enfants, l'épargne-pension, les dons déductibles, les investissements économiseurs d'énergie, les déductions pour prêts hypothécaires (chèque habitat/bonus logement selon les Régions) et les frais réels professionnels."
  },
  {
    id: 'be-5',
    q: "Quels documents sont nécessaires pour analyser mon dossier ?",
    a: "Vos derniers avertissements-extraits de rôle (généralement des 2 à 3 dernières années), vos fiches de rémunération (fiche 281.10/281.20) ainsi que les attestations fiscales des dépenses non imputées."
  },
  {
    id: 'be-6',
    q: "Qui peut faire appel aux services d'EuroTax Refund ?",
    a: "Tout contribuable imposable ou ayant perçu des revenus en Belgique et en Europe : salariés, fonctionnaires, indépendants, dirigeants d'entreprise, retraités et propriétaires bailleurs."
  },
  {
    id: 'be-7',
    q: "Combien coûte l'accompagnement d'EuroTax Refund ?",
    a: "L'analyse initiale et le calcul d'estimation sont 100% gratuits. Nous travaillons exclusivement au résultat : aucun honoraire n'est dû si aucun remboursement effectif n'est obtenu."
  },
  {
    id: 'be-8',
    q: "Quel est le délai légal pour déposer une réclamation fiscale en Belgique ?",
    a: "En Belgique, la réclamation fiscale auprès du conseiller général du SPF Finances peut être introduite dans un délai légal strict à compter de la date d'envoi de l'avertissement-extrait de rôle ou de l'événement ayant motivé le trop-perçu."
  }
]

const BELGIQUE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://taxrefundseurope.netlify.app/remboursement-impot-france#webpage',
      'url': 'https://taxrefundseurope.netlify.app/remboursement-impot-france',
      'name': "Remboursement d'impôt en Belgique et en Europe | EuroTax Refund",
      'description': "Récupérez vos impôts et trop-perçus fiscaux en Belgique et en Europe. Analyse gratuite en 24h pour salariés, particuliers et indépendants. Sans frais si aucun remboursement obtenu."
    }
  ]
}

export default function RemboursementImpotFrance() {
  usePageSEO({
    title: "Remboursement d'impôt en Belgique et en Europe | EuroTax Refund",
    description: "Récupérez vos impôts et trop-perçus fiscaux en Belgique et en Europe. Analyse gratuite en 24h pour salariés, particuliers et indépendants. Sans frais si aucun remboursement obtenu.",
    canonicalPath: "/remboursement-impot-france",
    schema: BELGIQUE_SCHEMA
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
            <span className="text-brand-600">Remboursement d'impôt Belgique & Europe</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-100 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-dot"></span>
              <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">Guide & Service Fiscal Belgique & Europe</span>
            </div>

            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
              Remboursement d'impôt en Belgique et en Europe : <br />
              <span className="bg-gradient-to-r from-brand-600 to-gold-500 bg-clip-text text-transparent">
                récupérez vos trop-perçus
              </span> fiscaux légitimes
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium max-w-3xl">
              Chaque année en Belgique et en Europe, de nombreux contribuables versent un montant d'impôt supérieur à ce qu'ils devraient réellement payer. Précompte professionnel excessif, déductions oubliées, charges de famille non imputées : EuroTax Refund vous aide à analyser vos déclarations et à réclamer vos remboursements légitimes, sans aucun frais si aucun résultat n'est obtenu.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/form"
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5"
              >
                Démarrer ma demande →
              </Link>
              <a
                href="#comprendre"
                className="px-8 py-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold rounded-full border border-slate-200 hover:border-slate-300 transition-all"
              >
                Comprendre le fonctionnement
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 : COMPRENDRE LE REMBOURSEMENT */}
      <section id="comprendre" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Fondamentaux fiscaux
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Qu'est-ce qu'un remboursement d'impôt sur le revenu ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Le remboursement d'impôt (ou restitution fiscale) intervient lorsque les sommes déjà prélevées au titre de l'impôt sur le revenu sont supérieures à l'impôt net réellement dû selon la législation belge et européenne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-50 text-brand-600 rounded-2xl mb-6">
                <IconMoney size={24} />
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-900 mb-4 tracking-tight">
                Le mécanisme du trop-perçu fiscal
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Le précompte professionnel est retenu chaque mois sur vos rémunérations. Si vos revenus ont varié, si votre situation familiale a évolué ou si vous avez engagé des dépenses fiscalement déductibles, un solde en votre faveur apparaît lors de la régularisation.
              </p>
              <p className="text-slate-500 text-xs font-medium">
                Cet excédent donne droit à un remboursement direct par virement bancaire sur votre compte.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-gold-50 text-gold-600 rounded-2xl mb-6">
                <IconTarget size={24} />
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-900 mb-4 tracking-tight">
                Déductions, quotités exemptées et réductions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Il est essentiel de valoriser toutes les déductions régionales et fédérales : épargne-pension, frais de garde d'enfants, dons et charges familiales.
              </p>
              <p className="text-slate-500 text-xs font-medium">
                De nombreux contribuables n'imputent pas l'ensemble des avantages fiscaux auxquels ils sont légalement éligibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 : SITUATIONS D'ÉLIGIBILITÉ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Situations fréquentes
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Dans quels cas pouvez-vous avoir droit à une restitution d'impôt ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              L'éligibilité à un remboursement dépend de votre situation individuelle et de l'exactitude de vos déclarations passées en Belgique et en Europe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Précompte professionnel excessif",
                desc: "Retenues mensuelles non ajustées suite à une baisse de rémunération, un temps partiel ou une période d'interruption."
              },
              {
                title: "Déductions fiscales non déclarées",
                desc: "Frais de garde d'enfants, dons aux associations reconnues, titres-services ou investissements énergétiques omis."
              },
              {
                title: "Charges déductibles oubliées",
                desc: "Rentes alimentaires versées, cotisations d'épargne-pension et frais professionnels réels forfaitaires non optimisés."
              },
              {
                title: "Changements de situation",
                desc: "Mariage, cohabitation légale, naissance, séparation ou départ en retraite n'ayant pas été rétroactivement pris en compte."
              }
            ].map((card, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-brand-200 transition-all">
                <div className="w-10 h-10 flex items-center justify-center bg-brand-600 text-white font-bold rounded-xl mb-6">
                  0{i + 1}
                </div>
                <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 : QUI PEUT FAIRE UNE DEMANDE */}
      <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Profils concernés
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Qui peut faire une demande de remboursement d'impôt en Belgique et en Europe ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Notre service s'adresse à tout contribuable ayant déclaré des revenus ou payé des impôts en Belgique et dans l'Union Européenne.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                <IconUser size={20} />
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Salariés et fonctionnaires
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Vérification du précompte professionnel, frais réels de déplacement et déductions familiales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-gold-50 text-gold-600 rounded-xl flex items-center justify-center mb-6">
                <IconBriefcase size={20} />
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Indépendants & Dirigeants
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Optimisation des versements anticipés et déductibilité des charges professionnelles et cotisations sociales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-slate-950 text-white rounded-xl flex items-center justify-center mb-6">
                <IconClipboard size={20} />
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Retraités et propriétaires
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Contrôle du précompte sur pensions, revenus immobiliers et déductions d'intérêts d'emprunt.
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
              Questions fréquentes
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Questions fréquentes sur le remboursement d'impôt en Belgique et en Europe
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              Retrouvez les réponses aux interrogations les plus courantes de nos clients.
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
                Vous pensez avoir payé trop d'impôt en Belgique ou en Europe ?
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Vérifiez vos droits sans aucun risque financier. Analyse gratuite sous 24h.
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
              to="/remboursement-impot-expatrie"
              className="px-6 py-3 bg-white border border-slate-200 hover:border-brand-400 rounded-full text-sm font-bold text-slate-800 hover:text-brand-600 transition-all shadow-sm"
            >
              Remboursement impôt expatrié & non-résident →
            </Link>
            <Link
              to="/recuperation-tva-entreprise"
              className="px-6 py-3 bg-white border border-slate-200 hover:border-brand-400 rounded-full text-sm font-bold text-slate-800 hover:text-brand-600 transition-all shadow-sm"
            >
              Récupération de TVA entreprise en Europe →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND FINAL */}
      <section className="py-24 bg-slate-950 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Prêt à récupérer votre trop-perçu fiscal ?
          </h2>
          <p className="text-lg text-slate-400 mb-10 font-medium max-w-2xl mx-auto">
            Étude gratuite en 24h — sans aucun honoraire si aucun remboursement n'est obtenu.
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
