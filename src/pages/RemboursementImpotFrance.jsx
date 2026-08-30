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
    id: 'fr-1',
    q: "Qu'est-ce qu'un trop-perçu d'impôt sur le revenu ?",
    a: "Un trop-perçu d'impôt correspond à la différence entre les sommes effectivement prélevées à la source au cours de l'année et l'impôt net réellement calculé par l'administration lors de la liquidation définitive de votre déclaration."
  },
  {
    id: 'fr-2',
    q: "Dans quels cas peut-on obtenir un remboursement d'impôt ?",
    a: "Les cas les plus fréquents concernent une baisse de revenus en cours d'année, l'omission de crédits ou réductions d'impôt (garde d'enfants, emploi à domicile, dons), la non-déduction de charges spécifiques (pensions, PER) ou un changement de situation familiale non régularisé."
  },
  {
    id: 'fr-3',
    q: "Comment savoir si j'ai payé trop d'impôts cette année ou les années passées ?",
    a: "En procédant à un examen détaillé de vos avis d'imposition et de vos relevés de prélèvement à la source. EuroTax Refund réalise ce diagnostic sans frais afin d'identifier si des déductions ou crédits ont été omis."
  },
  {
    id: 'fr-4',
    q: "Quels crédits ou déductions d'impôt peuvent être concernés ?",
    a: "Sont principalement concernés les crédits pour services à la personne, garde de jeunes enfants, dons d'intérêt général, investissements locatifs ouvrant droit à réduction, cotisations retraite déductibles et frais réels professionnels."
  },
  {
    id: 'fr-5',
    q: "Quels documents peuvent être nécessaires pour étudier mon dossier ?",
    a: "Vos derniers avis d'impôt sur le revenu (généralement des 2 à 3 dernières années) ainsi que les justificatifs des charges ou dépenses non déclarées (attestations fiscales, reçus de dons, relevés de cotisations)."
  },
  {
    id: 'fr-6',
    q: "Qui peut demander une analyse de sa déclaration fiscale ?",
    a: "Tout contribuable imposable ou non imposable en France : salariés, fonctionnaires, travailleurs indépendants, retraités et propriétaires bailleurs."
  },
  {
    id: 'fr-7',
    q: "Combien coûte l'accompagnement par EuroTax Refund ?",
    a: "L'analyse initiale est totalement gratuite. Si nous identifions un remboursement et que vous décidez de nous confier la réclamation, nous ne percevons une commission qu'au succès, sans avance de trésorerie de votre part."
  },
  {
    id: 'fr-8',
    q: "Quel est le délai légal pour déposer une réclamation fiscale en France ?",
    a: "En règle générale, le droit de réclamation s'exerce jusqu'au 31 décembre de la deuxième année qui suit celle de la mise en recouvrement de l'impôt (article R*196-1 du Livre des Procédures Fiscales)."
  }
]

const FRANCE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://taxrefundseurope.netlify.app/remboursement-impot-france#webpage',
      'url': 'https://taxrefundseurope.netlify.app/remboursement-impot-france',
      'name': "Remboursement d'impôt en France | EuroTax Refund",
      'description': "Récupérez vos impôts et trop-perçus fiscaux en France. Analyse gratuite en 24h pour salariés, particuliers et retraités. Sans frais si aucun remboursement obtenu.",
      'isPartOf': {
        '@id': 'https://taxrefundseurope.netlify.app/#website'
      },
      'inLanguage': 'fr-FR'
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://taxrefundseurope.netlify.app/remboursement-impot-france#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Accueil',
          'item': 'https://taxrefundseurope.netlify.app/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': "Remboursement d'impôt en France",
          'item': 'https://taxrefundseurope.netlify.app/remboursement-impot-france'
        }
      ]
    },
    {
      '@type': 'Service',
      '@id': 'https://taxrefundseurope.netlify.app/remboursement-impot-france#service',
      'name': "Remboursement d'impôt en France",
      'serviceType': 'Accompagnement et réclamation fiscale pour particuliers et salariés',
      'description': "Analyse et accompagnement pour la récupération des trop-perçus d'impôt sur le revenu et des crédits d'impôt en France.",
      'provider': {
        '@type': 'Organization',
        '@id': 'https://taxrefundseurope.netlify.app/#organization',
        'name': 'EuroTax Refund',
        'url': 'https://taxrefundseurope.netlify.app/'
      },
      'areaServed': {
        '@type': 'Country',
        'name': 'France'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://taxrefundseurope.netlify.app/remboursement-impot-france#faq',
      'mainEntity': FAQ_ITEMS.map(item => ({
        '@type': 'Question',
        'name': item.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.a
        }
      }))
    }
  ]
}

export default function RemboursementImpotFrance() {
  usePageSEO({
    title: "Remboursement d'impôt en France | EuroTax Refund",
    description: "Récupérez vos impôts et trop-perçus fiscaux en France. Analyse gratuite en 24h pour salariés, particuliers et retraités. Sans frais si aucun remboursement obtenu.",
    canonicalPath: "/remboursement-impot-france",
    schema: FRANCE_SCHEMA
  })

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-white">
        {/* Background Overlay */}
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest">
            <Link to="/" className="hover:text-brand-600 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-brand-600">Remboursement d'impôt France</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-100 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-dot"></span>
              <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">Guide & Service Fiscal France</span>
            </div>

            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
              Remboursement d'impôt en France : <br />
              <span className="bg-gradient-to-r from-brand-600 to-gold-500 bg-clip-text text-transparent">
                récupérez les sommes
              </span> auxquelles vous avez droit
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium max-w-3xl">
              Chaque année en France, de nombreux contribuables versent un montant d'impôt supérieur à ce qu'ils devraient réellement payer. Trop-perçus lors du prélèvement à la source, crédits d'impôt oubliés, charges déductibles non imputées : EuroTax Refund vous aide à analyser vos déclarations et à réclamer vos remboursements légitimes, sans aucun frais si aucun résultat n'est obtenu.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/form"
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5"
              >
                Vérifier mon éligibilité gratuitement →
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
              Le remboursement d'impôt (ou restitution fiscale) intervient lorsque les sommes déjà prélevées au titre de l'impôt sur le revenu sont supérieures à l'impôt net réellement dû pour une année fiscale donnée.
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
                Avec l'instauration du prélèvement à la source, l'impôt est collecté chaque mois sur la base d'un taux moyen estimé. Si vos revenus ont diminué, si votre situation familiale a changé ou si des dépenses ouvrant droit à avantage fiscal ont été engagées, un écart en votre faveur peut survenir.
              </p>
              <p className="text-slate-500 text-xs font-medium">
                Cet excédent donne droit à une restitution directe par virement bancaire une fois la déclaration rectifiée ou régularisée.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-gold-50 text-gold-600 rounded-2xl mb-6">
                <IconTarget size={24} />
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-900 mb-4 tracking-tight">
                Déductions, réductions et crédits d'impôt
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Il est important de distinguer : les déductions (qui réduisent le revenu brut imposable), les réductions d'impôt (qui diminuent l'impôt dû jusqu'à concurrence de zéro) et les <strong>crédits d'impôt</strong> (qui sont remboursés par l'État même si vous ne payez pas d'impôt).
              </p>
              <p className="text-slate-500 text-xs font-medium">
                De nombreux contribuables n'imputent pas la totalité des crédits auxquels ils sont éligibles.
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
              L'éligibilité à un remboursement dépend de votre situation individuelle et de l'exactitude de vos déclarations passées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Prélèvement à la source excessif",
                desc: "Taux de prélèvement non ajusté suite à une baisse de revenus, un congé, une période de chômage ou une cessation d'activité."
              },
              {
                title: "Crédits d'impôt non déclarés",
                desc: "Emploi à domicile, garde d'enfants, dons aux associations, travaux de rénovation énergétique ou investissements spécifiques omis."
              },
              {
                title: "Charges déductibles oubliées",
                desc: "Pensions alimentaires versées, cotisations d'épargne retraite (PER), frais réels de transport et restauration non optimisés."
              },
              {
                title: "Changements de situation",
                desc: "Mariage, PACS, naissance d'un enfant, séparation ou départ en retraite n'ayant pas été pris en compte rétroactivement."
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

      {/* SECTION 3 : TYPES DE SOMMES RÉCUPÉRABLES */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-white/5 px-3 py-1 rounded-full inline-block mb-4 border border-white/10">
              Sommes concernées
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Quels types de montants fiscaux peuvent être récupérés ?
            </h2>
            <p className="text-slate-400 leading-relaxed font-medium">
              Une réclamation fiscale peut porter sur différentes composantes de votre avis d'imposition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="font-sora text-xl font-bold text-white mb-4 tracking-tight">
                Trop-perçu d'impôt sur le revenu
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Remboursement de la différence entre le montant d'impôt retenu à la source et le montant réel déterminé après application du barème progressif.
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-400 font-bold">
                <IconCheck size={16} /> Restitution directe
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="font-sora text-xl font-bold text-white mb-4 tracking-tight">
                Crédits d'impôt remboursables
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Versements liés à des dépenses éligibles au crédit d'impôt qui excèdent le montant de votre impôt dû ou pour les foyers non imposables.
              </p>
              <div className="flex items-center gap-2 text-xs text-gold-400 font-bold">
                <IconCheck size={16} /> Remboursement même si 0€ d'impôt
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="font-sora text-xl font-bold text-white mb-4 tracking-tight">
                Régularisation des prélèvements indus
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Correction d'erreurs de calcul, de double imposition ou d'assiette erronée sur les revenus du patrimoine et revenus de capitaux mobiliers.
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-400 font-bold">
                <IconCheck size={16} /> Rectification officielle
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : MÉTHODE EUROTAX */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Notre méthode
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Comment EuroTax Refund analyse votre situation fiscale ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Une démarche structurée, transparente et encadrée par des spécialistes de la fiscalité.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-brand-300 transition-all">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                1
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Diagnostic gratuit et confidentiel
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vous nous transmettez vos informations via notre formulaire sécurisé. Nos experts réalisent une analyse complète de vos déclarations récentes.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-brand-300 transition-all">
              <div className="w-12 h-12 bg-gold-50 text-gold-600 rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                2
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Calcul précis des montants récupérables
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nous identifions les déductions, crédits ou taux erronés et calculons précisément la somme pouvant faire l'objet d'une demande de régularisation.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-brand-300 transition-all">
              <div className="w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                3
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Préparation et accompagnement du dossier
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nous constituons le dossier justificatif complet et vous guidons jusqu'au versement effectif de votre remboursement sur votre compte bancaire.
              </p>
            </div>
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
              Qui peut faire une demande de remboursement d'impôt en France ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Notre service s'adresse à tout contribuable ayant déclaré des revenus ou payé des impôts en France.
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
                Vérification des frais réels, heures supplémentaires exonérées, indemnités spécifiques et crédits d'impôt pour services à la personne.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-gold-50 text-gold-600 rounded-xl flex items-center justify-center mb-6">
                <IconBriefcase size={20} />
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Indépendants & professions libérales
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Régularisation des acomptes contemporains de prélèvement à la source et vérification de la déductibilité des charges d'exploitation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-slate-950 text-white rounded-xl flex items-center justify-center mb-6">
                <IconClipboard size={20} />
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Retraités et bailleurs
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Contrôle de l'abattement spécial pour personnes âgées, des revenus fonciers (déficit foncier) et de la CSG déductible.
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
              Questions fréquentes sur le remboursement d'impôt en France
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              Retrouvez les réponses aux interrogations les plus courantes de nos clients.
            </p>
          </div>

          <div className="space-y-4 mb-14" role="region" aria-label="Questions fréquentes sur le remboursement d'impôt en France">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={item.id}
                  className={`border rounded-3xl transition-all duration-300 bg-white overflow-hidden ${isOpen ? 'border-brand-300 shadow-md shadow-brand-500/5' : 'border-slate-200 hover:border-slate-300'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
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

          {/* CTA discret */}
          <div className="p-8 sm:p-10 bg-slate-50 rounded-4xl border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-md">
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-1 tracking-tight">
                Vous pensez avoir payé trop d'impôt en France ?
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Vérifiez vos droits sans aucun risque financier. Analyse gratuite sous 24h.
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

      {/* MAILLAGE INTERNE VERS AUTRES SERVICES */}
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
            Prêt à vérifier votre éligibilité au remboursement d'impôt ?
          </h2>
          <p className="text-lg text-slate-400 mb-10 font-medium max-w-2xl mx-auto">
            Étude gratuite en 24h — sans aucun engagement financier si aucun remboursement n'est obtenu.
          </p>
          <Link
            to="/form"
            className="inline-flex px-10 py-5 bg-white hover:bg-slate-100 text-brand-600 font-black rounded-full shadow-2xl shadow-brand-500/20 transition-all hover:-translate-y-1 hover:scale-105"
          >
            Vérifier mon éligibilité gratuitement →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
