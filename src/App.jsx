import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Overview from './components/Overview'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import FormPage from './components/Form'
import RemboursementImpotFrance from './pages/RemboursementImpotFrance'
import RemboursementImpotExpatrie from './pages/RemboursementImpotExpatrie'
import RecuperationTvaEntreprise from './pages/RecuperationTvaEntreprise'
import { Link } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function CtaBand() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] animate-float-reverse"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Prêt à récupérer vos impôts et trop-perçus fiscaux ?
        </h2>
        <p className="text-lg text-slate-400 mb-10 font-medium">
          Analyse gratuite en 24h — aucun frais si nous n'obtenons rien. Diagnostic confidentiel et sans engagement.
        </p>
        <Link
          to="/form"
          className="inline-flex px-10 py-5 bg-white hover:bg-slate-100 text-brand-600 font-black rounded-full shadow-2xl shadow-brand-500/20 hover:shadow-white/20 transition-all hover:-translate-y-1 hover:scale-105"
        >
          Démarrer ma demande de remboursement →
        </Link>
      </div>
    </section>
  )
}

import FaqHome from './components/FaqHome'
import { usePageSEO } from './hooks/usePageSEO'

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://taxrefundseurope.netlify.app/#organization',
      'name': 'EuroTax Refund',
      'url': 'https://taxrefundseurope.netlify.app/',
      'logo': 'https://taxrefundseurope.netlify.app/images/logo.jpeg',
      'email': 'contact.taxrefunds@gmail.com',
      'description': "Accompagnement en remboursement fiscal et récupération d'impôts en Belgique et en Europe pour particuliers, expatriés et entreprises."
    },
    {
      '@type': 'WebSite',
      '@id': 'https://taxrefundseurope.netlify.app/#website',
      'name': 'EuroTax Refund',
      'url': 'https://taxrefundseurope.netlify.app/',
      'publisher': {
        '@id': 'https://taxrefundseurope.netlify.app/#organization'
      },
      'inLanguage': 'fr-BE'
    },
    {
      '@type': 'WebPage',
      '@id': 'https://taxrefundseurope.netlify.app/#webpage',
      'url': 'https://taxrefundseurope.netlify.app/',
      'name': 'EuroTax Refund | Récupérez vos trop-perçus fiscaux en Belgique et en Europe',
      'description': "EuroTax Refund vous aide à récupérer vos trop-perçus fiscaux payés en Belgique et en Europe. Analyse gratuite en 24h pour particuliers, expatriés et entreprises. Sans frais si nous n'obtenons rien.",
      'isPartOf': {
        '@id': 'https://taxrefundseurope.netlify.app/#website'
      },
      'inLanguage': 'fr-BE'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://taxrefundseurope.netlify.app/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "Comment savoir si j'ai droit à un remboursement d'impôt ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "L'éligibilité à un remboursement fiscal dépend de votre situation individuelle : nature de vos revenus, impôts déjà prélevés, déductions ou crédits d'impôt non imputés, et éventuels trop-perçus lors du prélèvement à la source. Pour savoir si vous êtes concerné, nous vous invitons à transmettre votre dossier pour une analyse personnalisée sans engagement."
          }
        },
        {
          '@type': 'Question',
          'name': "Combien coûte l'analyse de ma situation fiscale ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "L'étude initiale et l'estimation du montant potentiellement récupérable sont 100 % gratuites. EuroTax Refund applique le principe du résultat : aucuns frais ni honoraires ne sont facturés si aucun remboursement effectif n'est obtenu."
          }
        },
        {
          '@type': 'Question',
          'name': "Quels documents dois-je fournir pour démarrer ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Les pièces justificatives dépendent de votre profil fiscal (particulier, salarié, expatrié ou entreprise). Pour une première étude, vos avertissements-extraits de rôle récents ou récapitulatifs de revenus suffisent. Si des pièces complémentaires sont nécessaires, elles vous seront précisées lors de l'instruction."
          }
        },
        {
          '@type': 'Question',
          'name': "Qui peut faire une demande auprès d'EuroTax Refund ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Notre accompagnement est ouvert aux particuliers et salariés, aux travailleurs frontaliers, aux expatriés et non-résidents, ainsi qu'aux entreprises (PME, TPE, indépendants) ayant cotisé ou payé de la TVA en Belgique et dans l'Union Européenne."
          }
        },
        {
          '@type': 'Question',
          'name': "Puis-je faire une demande si j'ai travaillé dans plusieurs pays ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Oui. Les situations transfrontalières et internationales sont étudiées au regard des conventions fiscales bilatérales liant les pays concernés, afin de vérifier l'absence de double imposition et l'exactitude des retenues à la source opérées."
          }
        },
        {
          '@type': 'Question',
          'name': "Combien de temps faut-il pour obtenir un remboursement ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Le délai dépend de la complexité du dossier, du temps nécessaire au rassemblement des justificatifs et des délais de traitement propres à chaque administration fiscale concernée. Nous assurons un suivi continu de votre demande jusqu'au versement des sommes."
          }
        }
      ]
    }
  ]
}

function Home() {
  usePageSEO({
    title: 'EuroTax Refund | Récupérez vos trop-perçus et impôts en Belgique et en Europe',
    description: "EuroTax Refund vous aide à récupérer vos trop-perçus fiscaux payés en Belgique et en Europe. Analyse gratuite en 24h pour particuliers, expatriés et entreprises. Sans frais si nous n'obtenons rien.",
    canonicalPath: '/',
    schema: HOME_SCHEMA
  })

  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Overview />
      <Testimonials />
      <FaqHome />
      <CtaBand />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/remboursement-impot-france" element={<RemboursementImpotFrance />} />
        <Route path="/remboursement-impot-expatrie" element={<RemboursementImpotExpatrie />} />
        <Route path="/recuperation-tva-entreprise" element={<RecuperationTvaEntreprise />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
