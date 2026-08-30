import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IconBuilding } from './SvgIcons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled
      ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-6'
      : 'bg-white/90 backdrop-blur-lg border-b border-transparent py-10'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-5 group">
          <img src="/images/logo.jpeg" alt="TAX REFUND Logo" className="h-20 w-auto object-contain mix-blend-multiply" />
          <div className="flex flex-col">
            <span className="font-sora text-3xl font-black tracking-tighter text-slate-950 uppercase leading-none">
              TAX <span className="text-brand-600">REFUND</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gold-500 ml-1 mt-1">
              EUROPE
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {[
              { label: 'Services', href: '/#services' },
              { label: 'Comment ça marche', href: '/#process' },
              { label: 'À propos', href: '/#overview' },
              { label: 'Témoignages', href: '/#testimonials' },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-bold rounded-full transition-all text-slate-600 hover:text-brand-600 hover:bg-brand-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            to="/form"
            className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold rounded-full shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5 transition-all"
          >
            Démarrer gratuitement →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors text-slate-900 hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current rounded-full transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current rounded-full transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current rounded-full transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-6 animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {[
              { label: 'Services', href: '/#services' },
              { label: 'Comment ça marche', href: '/#process' },
              { label: 'À propos', href: '/#overview' },
              { label: 'Témoignages', href: '/#testimonials' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-lg font-bold text-slate-900 border-b border-slate-50 last:border-0 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/form"
              className="mt-4 w-full py-4 bg-brand-600 text-white text-center font-bold rounded-2xl shadow-lg shadow-brand-600/20"
              onClick={() => setMenuOpen(false)}
            >
              Démarrer gratuitement →
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
