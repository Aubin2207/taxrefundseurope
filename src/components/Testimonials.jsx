import React from 'react'
import { IconStar } from './SvgIcons'

const testimonials = [
  {
    name: 'Marie D.',
    category: 'Particulier',
    quote: 'J\'ai récupéré mon crédit d\'impôt rapidement, merci EuroTax ! Un service vraiment professionnel.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
    stars: 5,
  },
  {
    name: 'Antoine V.',
    category: 'Expatrié',
    quote: 'Service clair et efficace, je recommande à tous les expatriés. Remboursement reçu en 3 semaines.',
    photo: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
    stars: 5,
  },
  {
    name: 'Sophie L.',
    category: 'Salariée',
    quote: 'Une équipe à l\'écoute et un remboursement conforme à mes attentes. Je suis très satisfaite.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
    stars: 5,
  },
  {
    name: 'Karim B.',
    category: 'Travailleur frontalier',
    quote: 'Situation fiscale complexe, EuroTax m\'a tout simplifié. Résultat au-delà de mes espérances.',
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
    stars: 5,
  },
  {
    name: 'Céline R.',
    category: 'Particulier',
    quote: 'Remboursement rapide et sans frais cachés, très professionnels. Je recommande vivement.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
    stars: 5,
  },
  {
    name: 'TechSolutions SAS',
    category: 'Entreprise (SAS)',
    quote: 'Notre PME a obtenu un remboursement de TVA conséquent grâce à EuroTax. Professionnels et réactifs.',
    photo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
    initials: 'TS',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background with image overlay (Hero Style) */}
      <div className="absolute inset-0 z-0 text-slate-100/10">
        <img
          src="/images/hero-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.05] grayscale rotate-180"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-brand-50/40"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-50 text-gold-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-gold-100 italic">
            <IconStar size={14} className="text-amber-500" /> Témoignages
          </div>
          <h2 className="font-sora text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Ils nous ont fait <span className="text-brand-600">confiance</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Plus de 12 000 clients satisfaits. Voici ce qu'ils disent de notre service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-100 rounded-4xl p-10 transition-all duration-500 relative"
            >
              {/* Quote marks decor */}
              <div className="absolute top-10 right-10 text-8xl font-black text-brand-500/5 select-none pointer-events-none transition-transform group-hover:-translate-y-2">“</div>

              <div className="flex items-center gap-4 mb-8 relative z-10">
                {t.photo ? (
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 transition-transform"
                  />
                ) : (
                  <div className="w-14 h-14 bg-brand-600 rounded-full flex items-center justify-center text-white font-black text-lg transition-transform">
                    {t.initials}
                  </div>
                )}
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <IconStar key={j} size={12} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <h4 className="font-sora text-sm font-bold text-slate-900 tracking-tight">{t.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                    {t.category}
                  </p>
                </div>
              </div>

              <blockquote className="text-slate-600 italic leading-relaxed relative z-10 pl-6 border-l-2 border-brand-200">
                "{t.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
