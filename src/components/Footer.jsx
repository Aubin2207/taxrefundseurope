import React from 'react'
import { Link } from 'react-router-dom'
import { IconBuilding, IconLock, IconFlagBe, IconFlagEu } from './SvgIcons'

export default function Footer() {
  const badges = [
    { icon: <IconLock size={12} />, label: 'SSL Sécurisé' },
    { icon: <IconFlagBe size={12} />, label: 'Agrée Belgique' },
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
              Votre partenaire de confiance pour le remboursement fiscal en Belgique et en Europe.
              Accompagnement d'experts, sans aucun frais si nous n'obtenons rien.
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
                { label: 'Particuliers & Salariés', href: '/remboursement-impot-france' },
                { label: 'Expatriés & Non-Résidents', href: '/remboursement-impot-expatrie' },
                { label: 'Entreprises & PME', href: '/recuperation-tva-entreprise' },
                { label: 'Remboursement TVA Europe', href: '/recuperation-tva-entreprise' },
                { label: 'Traitement Express', href: '/#process' },
              ]
            },
            {
              title: 'Société',
              links: [
                { label: 'À propos', href: '/#overview' },
                { label: 'Comment ça marche', href: '/#process' },
                { label: 'Témoignages', href: '/#testimonials' },
                { label: 'Solutions fiscales', href: '/#services' },
                { label: 'Audit sans engagement', href: '/#overview' },
              ]
            },
            {
              title: 'Contact',
              links: [
                { label: 'contact.taxrefunds@gmail.com', href: 'mailto:contact.taxrefunds@gmail.com' },
                { label: 'Démarrer ma demande', href: '/form' },
                { label: 'Mentions légales', href: 'mailto:contact.taxrefunds@gmail.com?subject=Mentions%20l%C3%A9gales' },
                { label: 'Politique de confidentialité', href: 'mailto:contact.taxrefunds@gmail.com?subject=Politique%20de%20confidentialit%C3%A9' },
                { label: 'Cookies & Données', href: 'mailto:contact.taxrefunds@gmail.com?subject=Cookies' },
              ]
            }
          ].map((col) => (
            <div key={col.title}>
              <h5 className="font-sora text-sm font-black text-white uppercase tracking-[0.2em] mb-8">{col.title}</h5>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('mailto:') || link.href.startsWith('/#') ? (
                      <a
                        href={link.href}
                        className="text-sm font-semibold hover:text-brand-400 transition-all inline-block text-slate-500"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm font-semibold hover:text-brand-400 transition-all inline-block text-slate-500"
                      >
                        {link.label}
                      </Link>
                    )}
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
