import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { usePageSEO } from '../hooks/usePageSEO'
import {
  IconGlobe, IconSearch, IconCheck, IconShield,
  IconMoney, IconClipboard, IconBriefcase, IconArrowLeft,
  IconBuilding, IconTarget
} from '../components/SvgIcons'

const FAQ_ITEMS = [
  {
    id: 'exp-1',
    q: "Un expatrié peut-il récupérer des impôts payés en France ?",
    a: "Oui. Si vous avez quitté la France en cours d'année, si vous percevez des revenus de source française (loyers, pensions, dividendes) ou si vos retenues à la source ont été calculées sur des bases forfaitaires excessives, une réclamation fiscale peut permettre d'obtenir une restitution."
  },
  {
    id: 'exp-2',
    q: "Qu'est-ce qu'un non-résident fiscal au sens de la loi ?",
    a: "Un contribuable est qualifié de non-résident fiscal français s'il n'a pas en France son foyer d'habitation permanent, son lieu de séjour principal, ni le centre de ses intérêts économiques principaux. Ce statut modifie les règles de territorialité et d'imposition de ses revenus."
  },
  {
    id: 'exp-3',
    q: "Que se passe-t-il lorsque l'on travaille dans plusieurs pays ?",
    a: "Percevoir des rémunérations dans plusieurs pays nécessite de ventiler les jours travaillés et d'appliquer les conventions bilatérales pour éviter que le même revenu ne soit taxé deux fois. Des crédits d'impôt pour impôt étranger ou des exonérations doivent être demandés."
  },
  {
    id: 'exp-4',
    q: "Les conventions fiscales bilatérales donnent-elles automatiquement droit à un remboursement ?",
    a: "Non. Les conventions fiscales bilatérales fixent la règle de répartition du droit d'imposer entre les deux États. Le remboursement n'est pas automatique : il intervient uniquement si l'impôt prélevé par l'un des États est supérieur à ce que prévoit la convention."
  },
  {
    id: 'exp-5',
    q: "Un travailleur frontalier peut-il demander une analyse de sa situation fiscale ?",
    a: "Absolument. Les frontaliers (Suisse, Belgique, Luxembourg, Allemagne, etc.) sont soumis à des régimes particuliers souvent complexes. Une analyse permet de contrôler si les abattements cantonaux ou régionaux et les règles de compensation ont été correctement appliqués."
  },
  {
    id: 'exp-6',
    q: "Quels documents peuvent être nécessaires pour étudier mon dossier international ?",
    a: "Vos avis d'imposition français et étrangers, vos certificats de retenue à la source, vos contrats de travail ou fiches de paie transfrontalières, ainsi que vos justificatifs de résidence fiscale dans votre pays d'accueil."
  },
  {
    id: 'exp-7',
    q: "Qu'est-ce que l'option pour le taux moyen pour les non-résidents ?",
    a: "Les non-résidents percevant des revenus de source française sont par défaut imposés à un taux forfaitaire minimum (20 % ou 30 %). L'option pour le taux moyen permet de demander à être imposé au taux réel résultant de l'ensemble de vos revenus mondiaux s'il est plus avantageux."
  },
  {
    id: 'exp-8',
    q: "Combien coûte l'accompagnement d'EuroTax Refund pour un expatrié ?",
    a: "L'analyse initiale de votre situation et l'estimation des montants récupérables sont entièrement gratuites. Nos honoraires ne s'appliquent qu'en pourcentage des sommes effectivement restituées par l'administration fiscale."
  }
]

const EXPAT_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://taxrefundseurope.netlify.app/remboursement-impot-expatrie#webpage',
      'url': 'https://taxrefundseurope.netlify.app/remboursement-impot-expatrie',
      'name': "Remboursement d'impôt expatrié et non-résident | EuroTax Refund",
      'description': "Récupérez vos impôts payés en France et en Europe si vous êtes expatrié ou non-résident. Analyse de conventions fiscales et accompagnement sans avance de frais.",
      'isPartOf': {
        '@id': 'https://taxrefundseurope.netlify.app/#website'
      },
      'inLanguage': 'fr-FR'
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://taxrefundseurope.netlify.app/remboursement-impot-expatrie#breadcrumb',
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
          'name': "Expatriés & Non-Résidents",
          'item': 'https://taxrefundseurope.netlify.app/remboursement-impot-expatrie'
        }
      ]
    },
    {
      '@type': 'Service',
      '@id': 'https://taxrefundseurope.netlify.app/remboursement-impot-expatrie#service',
      'name': "Remboursement d'impôt pour expatriés et non-résidents",
      'serviceType': 'Fiscalité internationale et transfrontalière',
      'description': "Étude des conventions fiscales bilatérales, élimination des doubles impositions et régularisation des retenues à la source pour expatriés, non-résidents et travailleurs frontaliers.",
      'provider': {
        '@type': 'Organization',
        '@id': 'https://taxrefundseurope.netlify.app/#organization',
        'name': 'EuroTax Refund',
        'url': 'https://taxrefundseurope.netlify.app/'
      },
      'areaServed': [
        {
          '@type': 'Country',
          'name': 'France'
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Union Européenne'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://taxrefundseurope.netlify.app/remboursement-impot-expatrie#faq',
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

export default function RemboursementImpotExpatrie() {
  usePageSEO({
    title: "Remboursement d'impôt expatrié et non-résident | EuroTax Refund",
    description: "Récupérez vos impôts payés en France et en Europe si vous êtes expatrié ou non-résident. Analyse de conventions fiscales et accompagnement sans avance de frais.",
    canonicalPath: "/remboursement-impot-expatrie",
    schema: EXPAT_SCHEMA
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
            <span className="text-brand-600">Expatriés & Non-Résidents</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-100 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-dot"></span>
              <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">Fiscalité Internationale & Transfrontalière</span>
            </div>

            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
              Remboursement d'impôt pour <br />
              <span className="bg-gradient-to-r from-brand-600 to-gold-500 bg-clip-text text-transparent">
                expatriés et non-résidents
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium max-w-3xl">
              Travailler à l'étranger, vivre hors de France ou percevoir des revenus dans plusieurs pays entraîne souvent des prélèvements fiscaux excessifs ou des situations de double imposition. EuroTax Refund vous accompagne pour étudier vos déclarations et faire valoir les conventions fiscales bilatérales afin de réclamer la restitution des sommes trop-perçues.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/form"
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5"
              >
                Vérifier ma situation fiscale →
              </Link>
              <a
                href="#expatriation"
                className="px-8 py-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold rounded-full border border-slate-200 hover:border-slate-300 transition-all"
              >
                Comprendre les enjeux
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 : POURQUOI UN TROP-PERÇU CHEZ L'EXPATRIÉ */}
      <section id="expatriation" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Contexte fiscal international
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Pourquoi un expatrié ou non-résident peut-il avoir un trop-perçu fiscal ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Les règles fiscales applicables aux contribuables mobiles sont complexes et donnent fréquemment lieu à des erreurs d'assiette ou de prélèvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-50 text-brand-600 rounded-2xl mb-6">
                <IconGlobe size={24} />
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-900 mb-4 tracking-tight">
                La complexité de la double imposition
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Lorsqu'un contribuable perçoit des revenus dans un pays et réside dans un autre, les deux administrations fiscales peuvent chercher à taxer ces flux. Sans l'application stricte des mécanismes d'élimination de la double imposition (crédit d'impôt étranger ou méthode de l'exonération), des impôts sont indûment payés en double.
              </p>
              <p className="text-slate-500 text-xs font-medium">
                Notre mission consiste à recalculer l'impôt dû en appliquant les accords fiscaux applicables.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-gold-50 text-gold-600 rounded-2xl mb-6">
                <IconShield size={24} />
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-900 mb-4 tracking-tight">
                Le rôle des conventions fiscales bilatérales
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                La France a signé plus de 120 conventions fiscales bilatérales. Ces traités définissent la répartition du pouvoir d'imposition selon la nature du revenu (salaires, dividendes, retraites, plus-values immobilières). Une retenue à la source appliquée par défaut peut ainsi être contestée et remboursée.
              </p>
              <p className="text-slate-500 text-xs font-medium">
                L'éligibilité dépend de la convention spécifique liant les deux États concernés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 : SITUATIONS FRÉQUENTES */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Cas d'usage
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Situations fréquentes des non-résidents et travailleurs frontaliers
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Découvrez les contextes dans lesquels un trop-perçu fiscal est le plus régulièrement constaté.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Travailleurs frontaliers",
                desc: "Résidents en France travaillant en Suisse, Belgique, Luxembourg ou Allemagne avec des règles fiscales spécifiques par canton ou région."
              },
              {
                title: "Départ ou retour d'expatriation",
                desc: "Année de transition avec changement de résidence fiscale en cours d'année civile et prorata de prélèvement non ajusté."
              },
              {
                title: "Revenus locatifs en France",
                desc: "Non-résidents propriétaires de biens immobiliers loués en France soumis au taux minimum sans option pour le taux moyen."
              },
              {
                title: "Pensions et retraites",
                desc: "Retraités résidant à l'étranger percevant des pensions de source française soumises à une retenue à la source parfois excessive."
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

      {/* SECTION 3 : COMMENT ANALYSER UNE SITUATION INTERNATIONALE */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-white/5 px-3 py-1 rounded-full inline-block mb-4 border border-white/10">
              Diagnostic d'experts
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Comment analyser une situation fiscale internationale ?
            </h2>
            <p className="text-slate-400 leading-relaxed font-medium">
              Une analyse rigoureuse nécessite de croiser les législations locales avec les traités internationaux.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="font-sora text-xl font-bold text-white mb-4 tracking-tight">
                Détermination de la résidence fiscale
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Examen des critères légaux (foyer d'habitation permanent, centre des intérêts économiques et séjour principal) pour fixer l'État de résidence fiscale principal.
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-400 font-bold">
                <IconCheck size={16} /> Étape préalable indispensable
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="font-sora text-xl font-bold text-white mb-4 tracking-tight">
                Contrôle des retenues à la source
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Vérification des taux appliqués par les employeurs ou établissements payeurs pour détecter les prélèvements forfaitaires excessifs.
              </p>
              <div className="flex items-center gap-2 text-xs text-gold-400 font-bold">
                <IconCheck size={16} /> Détection des trop-perçus
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="font-sora text-xl font-bold text-white mb-4 tracking-tight">
                Application du régime du taux moyen
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Comparaison chiffrée entre le taux forfaitaire standard et le taux moyen mondial réel afin d'opter pour la formule la plus favorable.
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-400 font-bold">
                <IconCheck size={16} /> Optimisation légale
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : ACCOMPAGNEMENT EUROTAX */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Démarche étape par étape
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Comment fonctionne l'accompagnement EuroTax Refund ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Une assistance personnalisée pour surmonter la barrière de la fiscalité transfrontalière.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-brand-300 transition-all">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                1
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Diagnostic gratuit de votre dossier transfrontalier
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Renseignez votre parcours professionnel et vos pays de revenus. Nos fiscalistes examinent les conventions applicables sans aucun frais initial.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-brand-300 transition-all">
              <div className="w-12 h-12 bg-gold-50 text-gold-600 rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                2
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Calcul des droits à restitution fiscale
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nous chiffrons précisément les montants indûment prélevés et validons la faisabilité juridique de la demande de restitution.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-brand-300 transition-all">
              <div className="w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                3
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Préparation du dossier de régularisation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nous rassemblons les pièces justificatives internationales et vous guidons pour obtenir le versement effectif de votre remboursement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 : QUI PEUT DEMANDER */}
      <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-4 border border-brand-100">
              Bénéficiaires
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Qui peut demander une analyse de sa situation fiscale internationale ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Tout contribuable ayant un lien fiscal entre la France et un ou plusieurs pays étrangers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                <IconUser size={20} />
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Expatriés français dans le monde
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Français établis à l'étranger conservant des intérêts économiques, des biens immobiliers ou des comptes en France.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-gold-50 text-gold-600 rounded-xl flex items-center justify-center mb-6">
                <IconBriefcase size={20} />
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Ressortissants étrangers en France
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Salariés, cadres et consultants internationaux ayant effectué une mission professionnelle en France.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 bg-slate-950 text-white rounded-xl flex items-center justify-center mb-6">
                <IconGlobe size={20} />
              </div>
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Frontaliers et résidents européens
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Contribuables soumis à des conventions régionales transfrontalières spécifiques au sein de l'Union Européenne.
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
              FAQ internationale
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Questions fréquentes sur les impôts des expatriés et non-résidents
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              Comprendre vos droits fiscaux transfrontaliers en toute clarté.
            </p>
          </div>

          <div className="space-y-4 mb-14" role="region" aria-label="Questions fréquentes sur les impôts des expatriés et non-résidents">
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
                Une interrogation sur votre résidence fiscale ou vos revenus étrangers ?
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Obtenez un premier avis gratuit par nos spécialistes en fiscalité internationale.
              </p>
            </div>
            <Link
              to="/form"
              className="px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold rounded-full transition-all whitespace-nowrap shadow-md shadow-brand-600/20 hover:shadow-brand-600/30"
            >
              Vérifier ma situation fiscale →
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
              Remboursement d'impôt en France (résidents) →
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
            Prêt à faire analyser votre situation fiscale internationale ?
          </h2>
          <p className="text-lg text-slate-400 mb-10 font-medium max-w-2xl mx-auto">
            Diagnostic gratuit sous 24h par nos spécialistes de la fiscalité transfrontalière. Aucun frais si aucun remboursement n'est obtenu.
          </p>
          <Link
            to="/form"
            className="inline-flex px-10 py-5 bg-white hover:bg-slate-100 text-brand-600 font-black rounded-full shadow-2xl shadow-brand-500/20 transition-all hover:-translate-y-1 hover:scale-105"
          >
            Vérifier ma situation fiscale →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
