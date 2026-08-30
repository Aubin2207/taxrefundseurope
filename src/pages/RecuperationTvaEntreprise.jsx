import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { usePageSEO } from '../hooks/usePageSEO'
import {
  IconOffice, IconSearch, IconCheck, IconShield,
  IconMoney, IconClipboard, IconBriefcase, IconArrowLeft,
  IconBuilding, IconTarget
} from '../components/SvgIcons'

const FAQ_ITEMS = [
  {
    id: 'tva-1',
    q: "Une entreprise peut-elle récupérer de la TVA payée à l'étranger ?",
    a: "Oui. En vertu de la directive européenne 2008/9/CE, une entreprise établie dans un État membre de l'Union Européenne peut demander le remboursement de la TVA locale supportée dans un autre pays européen où elle n'est pas immatriculée, sous réserve du respect des conditions de déductibilité de cet État."
  },
  {
    id: 'tva-2',
    q: "Quelles dépenses professionnelles peuvent être concernées ?",
    a: "Sont principalement éligibles les frais de salons professionnels, foires et expositions, les hébergements d'équipes (selon le pays), les prestations de sous-traitance et de conseil, les frais de carburant et péages autoroutiers, ainsi que certains achats de matériel d'exploitation."
  },
  {
    id: 'tva-3',
    q: "La TVA est-elle récupérable dans tous les pays européens ?",
    a: "Le principe existe dans les 27 pays de l'Union Européenne ainsi que dans plusieurs pays tiers (Royaume-Uni, Suisse, Norvège sous conditions de réciprocité). Toutefois, les règles d'exclusion de certaines dépenses varient d'un pays à l'autre."
  },
  {
    id: 'tva-4',
    q: "Quels justificatifs et mentions sur facture sont indispensables ?",
    a: "Les factures doivent être libellées au nom exact de votre société et comporter les mentions obligatoires : numéros de TVA intracommunautaire du fournisseur et de votre entreprise, adresse complète, description des biens/services et montants HT, taux et TVA détaillée."
  },
  {
    id: 'tva-5',
    q: "Une PME ou TPE peut-elle demander une récupération de TVA ?",
    a: "Oui. Toute entreprise assujettie à la TVA (PME, TPE, ETI ou travailleur indépendant) peut introduire une demande de remboursement dès lors que le montant de TVA étrangère atteint les seuils légaux minimaux."
  },
  {
    id: 'tva-6',
    q: "Comment fonctionne l'analyse du dossier par EuroTax Refund ?",
    a: "Nos spécialistes réalisent un audit gratuit de vos pièces comptables, contrôlent la conformité des factures, calculent la TVA éligible par juridiction et préparent le dossier administratif de réclamation."
  },
  {
    id: 'tva-7',
    q: "Combien coûte l'accompagnement pour la récupération de TVA ?",
    a: "L'analyse préalable de vos factures est entièrement sans frais. Notre rémunération repose exclusivement sur une commission au succès calculée sur les sommes effectivement recouvrées pour le compte de votre entreprise."
  },
  {
    id: 'tva-8',
    q: "Quel est le délai de traitement pour un remboursement de TVA européenne ?",
    a: "La réglementation européenne prévoit un délai d'instruction moyen de 4 à 8 mois selon que l'administration fiscale étrangère sollicite ou non des pièces complémentaires. Nous assurons le suivi des échanges jusqu'au versement."
  }
]

const TVA_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://taxrefundseurope.netlify.app/recuperation-tva-entreprise#webpage',
      'url': 'https://taxrefundseurope.netlify.app/recuperation-tva-entreprise',
      'name': 'Récupération de TVA entreprise en Europe | EuroTax Refund',
      'description': "Récupérez la TVA professionnelle payée en France et dans l'Union Européenne. Analyse gratuite de vos factures et démarches simplifiées pour votre entreprise.",
      'isPartOf': {
        '@id': 'https://taxrefundseurope.netlify.app/#website'
      },
      'inLanguage': 'fr-FR'
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://taxrefundseurope.netlify.app/recuperation-tva-entreprise#breadcrumb',
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
          'name': 'Récupération TVA Entreprise',
          'item': 'https://taxrefundseurope.netlify.app/recuperation-tva-entreprise'
        }
      ]
    },
    {
      '@type': 'Service',
      '@id': 'https://taxrefundseurope.netlify.app/recuperation-tva-entreprise#service',
      'name': 'Récupération de TVA pour les entreprises en France et en Europe',
      'serviceType': 'Remboursement de TVA intracommunautaire et professionnelle',
      'description': "Audit des factures professionnelles et gestion des demandes de remboursement de TVA supportée dans l'Union Européenne (Directive 2008/9/CE).",
      'provider': {
        '@type': 'Organization',
        '@id': 'https://taxrefundseurope.netlify.app/#organization',
        'name': 'EuroTax Refund',
        'url': 'https://taxrefundseurope.netlify.app/'
      },
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': 'Union Européenne'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://taxrefundseurope.netlify.app/recuperation-tva-entreprise#faq',
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

export default function RecuperationTvaEntreprise() {
  usePageSEO({
    title: "Récupération de TVA entreprise en Europe | EuroTax Refund",
    description: "Récupérez la TVA professionnelle payée en France et dans l'Union Européenne. Analyse gratuite de vos factures et démarches simplifiées pour votre entreprise.",
    canonicalPath: "/recuperation-tva-entreprise",
    schema: TVA_SCHEMA
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
                entreprises en France et en Europe
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
                Vérifier mon éligibilité entreprise →
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
              Qu'est-ce que la récupération de TVA professionnelle ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              La taxe sur la valeur ajoutée étant un impôt sur la consommation finale, les entreprises assujetties ont le droit de déduire la TVA ayant grevé leurs dépenses d'exploitation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-50 text-brand-600 rounded-2xl mb-6">
                <IconMoney size={24} />
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-900 mb-4 tracking-tight">
                Le principe de déductibilité de la TVA
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Une entreprise collecte la TVA sur ses ventes et déduit celle payée sur ses achats professionnels. Lorsque la TVA déductible est supérieure à la TVA collectée, l'entreprise dégage un <strong>crédit de TVA</strong> auprès du Trésor public.
              </p>
              <p className="text-slate-500 text-xs font-medium">
                Ce crédit peut soit être imputé sur les déclarations futures, soit faire l'objet d'un remboursement direct sur le compte bancaire de la société.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-gold-50 text-gold-600 rounded-2xl mb-6">
                <IconOffice size={24} />
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-900 mb-4 tracking-tight">
                La TVA supportée à l'étranger (Union Européenne)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Si votre entreprise n'est pas immatriculée à la TVA dans le pays européen où la dépense a eu lieu, cette TVA ne peut pas être déduite sur votre déclaration locale ordinaire. Elle doit faire l'objet d'une demande spécifique de remboursement transfrontalier via la directive européenne 2008/9/CE.
              </p>
              <p className="text-slate-500 text-xs font-medium">
                De nombreuses entreprises négligent cette opportunité et traitent ces montants comme une charge nette.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 : SITUATIONS ÉLIGIBLES */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Opportunités d'optimisation
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Dans quelles situations une entreprise peut-elle récupérer de la TVA ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              L'éligibilité dépend de la nature des opérations réalisées et de la conformité des pièces comptables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Salons & congrès européens",
                desc: "Frais d'inscription, location de stand, hébergement d'équipes et prestations événementielles supportés dans un autre État de l'UE."
              },
              {
                title: "Missions & déplacements professionnels",
                desc: "Frais de restauration d'affaires, carburant, péages et transports engagés lors de missions commerciales à l'international."
              },
              {
                title: "Activités d'exportation",
                desc: "Entreprises réalisant des livraisons intracommunautaires ou exportations exonérées, générant un crédit de TVA structurel."
              },
              {
                title: "Investissements matériels",
                desc: "Acquisition de machines, outils industriels ou prestations informatiques ayant généré un volume important de taxe déductible."
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

      {/* SECTION 3 : DÉPENSES CONCERNÉES */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-white/5 px-3 py-1 rounded-full inline-block mb-4 border border-white/10">
              Typologie des frais
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Quelles sont les dépenses professionnelles concernées ?
            </h2>
            <p className="text-slate-400 leading-relaxed font-medium">
              Chaque pays européen applique ses propres conditions de déductibilité selon la catégorie de dépense.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="font-sora text-xl font-bold text-white mb-4 tracking-tight">
                Événements & salons internationaux
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Location d'emplacements, aménagement de stands, prestations techniques, hôtesses et billets d'accès lors des foires et expositions en Europe.
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-400 font-bold">
                <IconCheck size={16} /> Récupérable dans la majorité des pays de l'UE
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="font-sora text-xl font-bold text-white mb-4 tracking-tight">
                Prestations & sous-traitance
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Services de conseil, marketing, maintenance sur site, formation ou études techniques facturés avec de la TVA locale par des prestataires européens.
              </p>
              <div className="flex items-center gap-2 text-xs text-gold-400 font-bold">
                <IconCheck size={16} /> Analyse de la conformité des factures
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="font-sora text-xl font-bold text-white mb-4 tracking-tight">
                Déplacements & logistique
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Carburant (gazole, électricité), péages autoroutiers, parkings professionnels et restauration commerciale selon les règles de déduction de l'État émetteur.
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-400 font-bold">
                <IconCheck size={16} /> Éligibilité selon barèmes locaux
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : MÉTHODE ET ACCOMPAGNEMENT */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Processus entreprise
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Comment fonctionne l'analyse et la demande avec EuroTax Refund ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Une prise en charge complète pour décharger vos équipes comptables de démarches chronophages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-brand-300 transition-all">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                1
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Audit des factures & contrôle de conformité
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nous examinons vos justificatifs de dépenses pour vérifier les mentions légales requises (numéros de TVA intracommunautaire, montants HT/TTC).
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-brand-300 transition-all">
              <div className="w-12 h-12 bg-gold-50 text-gold-600 rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                2
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Calcul de la TVA récupérable par pays
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nous ventilons les montants déductibles par État membre et appliquons les règles d'exclusion spécifiques à chaque juridiction fiscale.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-brand-300 transition-all">
              <div className="w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                3
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Préparation et suivi du remboursement
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nous préparons le dossier complet et suivons son instruction jusqu'au versement direct des fonds sur le compte bancaire de votre entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 : ENTREPRISES ÉLIGIBLES */}
      <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Structures concernées
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Quelles entreprises sont éligibles à la récupération de TVA en Europe ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Le service est accessible aux professionnels assujettis à la TVA quel que soit leur secteur d'activité.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                <IconBuilding size={20} />
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                PME, TPE & ETI françaises
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Sociétés développant des flux commerciaux ou des partenariats en Europe souhaitant optimiser leur trésorerie sans alourdir leur service comptable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-gold-50 text-gold-600 rounded-xl flex items-center justify-center mb-6">
                <IconOffice size={20} />
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Sociétés étrangères opérant en France
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Entreprises européennes ou internationales ayant supporté de la TVA française lors de projets ou missions temporaires sur le sol français.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-slate-950 text-white rounded-xl flex items-center justify-center mb-6">
                <IconBriefcase size={20} />
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Professions libérales & consultants
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Experts et prestataires indépendants réalisant des missions régulières dans plusieurs pays membres de l'Union Européenne.
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
              FAQ TVA professionnelle
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Questions fréquentes sur la récupération de TVA pour les entreprises
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              Tout ce que vous devez savoir pour récupérer la TVA de votre entreprise.
            </p>
          </div>

          <div className="space-y-4 mb-14" role="region" aria-label="Questions fréquentes sur la récupération de TVA pour les entreprises">
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
              Vérifier mon éligibilité entreprise →
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
              to="/remboursement-impot-france"
              className="px-6 py-3 bg-white border border-slate-200 hover:border-brand-400 rounded-full text-sm font-bold text-slate-800 hover:text-brand-600 transition-all shadow-sm"
            >
              Remboursement d'impôt en France →
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
            Vérifier mon éligibilité entreprise →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
