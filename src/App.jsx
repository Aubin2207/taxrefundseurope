import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Overview from './components/Overview'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import FormPage from './components/Form'
import { Link } from 'react-router-dom'

function CtaBand() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] animate-float-reverse"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Prêt à récupérer vos impôts ?
        </h2>
        <p className="text-lg text-slate-400 mb-10 font-medium">
          Analyse gratuite en 24h — aucun frais si nous n'obtenons rien. Rejoignez plus de 12 000 clients satisfaits.
        </p>
        <Link
          to="/form"
          className="inline-flex px-10 py-5 bg-white hover:bg-slate-100 text-brand-600 font-black rounded-full shadow-2xl shadow-brand-500/20 hover:shadow-white/20 transition-all hover:-translate-y-1 hover:scale-105"
        >
          Démarrer ma demande gratuite →
        </Link>
      </div>
    </section>
  )
}

function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Overview />
      <Testimonials />
      <CtaBand />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
