import React from 'react'
import { Link } from 'react-router-dom'
import { IconBuilding, IconLock, IconFlagFr, IconFlagEu } from './SvgIcons'

export default function Footer() {
  const badges = [
    { icon: <IconLock size={12} />, label: 'SSL Sécurisé' },
    { icon: <IconFlagFr size={12} />, label: 'Agrée France' },
    { icon: <IconFlagEu size={12} />, label: 'Union Européenne' },
  ]

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="bg-white p-1 rounded-lg">
                <img src="/images/logo.jpeg" alt="TAX REFUND Logo" className="h-14 w-auto object-contain mix-blend-multiply" />
              </div>
              <span className="font-sora text-xl font-extrabold tracking-tight text-white">
                TAX <span className="text-brand-500">REFUND</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-10 text-slate-500 font-medium">
              Votre partenaire de confiance pour le remboursement fiscal en France et en Europe.
              Experts certifiés, résultats garantis sans frais si nous n'obtenons rien.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((b, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:bg-white/10 transition-colors">
                  {b.icon} {b.label}
                </span>
              ))}
            </div>
          </div>

          {[
            {
              title: 'Services',
              links: [
                'Particuliers & Salariés',
                'Non-Résidents',
                'Entreprises & PME',
                'Remboursement TVA',
                'Traitement Express',
              ]
            },
            {
              title: 'Société',
              links: [
                'À propos',
                'Comment ça marche',
                'Témoignages',
                'Blog fiscal',
                'FAQ',
              ]
            },
            {
              title: 'Contact',
              links: [
                'contact.taxrefunds@gmail.com',
                'Démarrer gratuitement',
                'Mentions légales',
                'Politique de confidentialité',
                'Cookies',
              ]
            }
          ].map((col) => (
            <div key={col.title}>
              <h5 className="font-sora text-sm font-black text-white uppercase tracking-[0.2em] mb-8">{col.title}</h5>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={link === 'contact.taxrefunds@gmail.com' ? `mailto:${link}` : '#'}
                      className="text-sm font-semibold hover:text-brand-400 transition-all inline-block text-slate-500"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
            © 2026 EuroTax Refund — Tous droits réservés
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="text-slate-700">Agrée France</span>
            <span className="text-slate-700">RGPD Conforme</span>
            <span className="text-slate-700">No Win No Fee</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
