import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import {
  IconBuilding, IconClipboard, IconUser, IconOffice,
  IconMail, IconLock, IconShield, IconTarget,
  IconArrowLeft, IconCheck, IconSearch, IconGlobe,
  IconTrophy, IconBolt, IconBriefcase, IconPhone, IconHome, IconMoney
} from './SvgIcons'

// EmailJS Credentials
const SERVICE_ID = "service_ffblsdj".trim();
const TEMPLATE_ID = "template_7gghkw9".trim();
const PUBLIC_KEY = "xJxY0tK1wVAcSVPPu".trim();

// Global Init
emailjs.init(PUBLIC_KEY);

// Premium Modal Component
function StatusModal({ status, onClose }) {
  if (status === 'idle' || status === 'sending') return null;
  const isSuccess = status === 'success';

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 perspective-1000">
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-2xl transition-all duration-500 animate-fadeIn"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-[40px] p-10 md:p-14 max-w-md w-full relative z-10 border border-slate-100 transform text-center">
        <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl flex items-center justify-center ${isSuccess
          ? 'bg-gold-500/10 text-gold-500'
          : 'bg-red-500/10 text-red-600'
          }`}>
          {isSuccess ? <IconCheck size={48} strokeWidth={2.5} /> : <span className="text-5xl font-black">!</span>}
        </div>

        <h3 className="font-sora text-3xl font-black text-slate-900 mb-4 tracking-tight">
          {isSuccess ? 'Succès Élite' : 'Erreur de Protocole'}
        </h3>

        <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg">
          {isSuccess
            ? 'Votre dossier est maintenant entre les mains de nos meilleurs experts fiscaux.'
            : 'Un problème technique a ralenti le processus. Veuillez réessayer.'}
        </p>

        <button
          onClick={onClose}
          className={`w-full py-5 rounded-2xl font-black text-white transition-all ${isSuccess
            ? 'bg-brand-600 hover:bg-brand-500'
            : 'bg-slate-900 hover:bg-slate-800'
            }`}
        >
          {isSuccess ? 'Fermer la session' : 'Réessayer'}
        </button>
      </div>
    </div>
  );
}

export default function FormPage() {
  const [type, setType] = useState('Particulier')
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    fiscalId: '',
    fiscalNumber: '',
    propertyIncome: '',
    foreignIncome: 'Non',
    revenue: '',
    email: '',
    phone: '',
    address: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const fullReport = `
      RAPPORT DE DEMANDE TAX REFUND
      ---------------------------------
      PROFIL : ${type.toUpperCase()}
      NOM : ${formData.name}
      EMAIL : ${formData.email}
      TEL : ${formData.phone}
      ADRESSE : ${formData.address}
      
      DÉTAILS FISCAUX :
      ${type === 'Entreprise'
        ? `• SIRET / TVA : ${formData.fiscalId}
• CHIFFRE D'AFFAIRES : ${formData.revenue} €`
        : `• NUMÉRO FISCAL : ${formData.fiscalNumber}
• REVENUS FONCIERS : ${formData.propertyIncome || '0'} €
• TOTAL REVENUS DÉCLARÉS : ${formData.revenue || '0'} €`
      }
      • REVENUS À L'ÉTRANGER : ${formData.foreignIncome}
      ---------------------------------
    `.replace(/^[ ]+/gm, '');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: fullReport,
      address: formData.address,
      type: type
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });
      if (result.status === 200 || result.text === 'OK') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Failed:', error);
      setStatus('error');
    }
  }

  const inputClasses = "w-full bg-white border border-slate-200 rounded-2xl pl-14 pr-7 py-5 focus:border-brand-600 transition-all outline-none font-bold text-slate-900 placeholder:text-slate-300";
  const iconClasses = "absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-600 transition-colors";

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col lg:flex-row overflow-hidden selection:bg-brand-100">
      <StatusModal status={status} onClose={() => setStatus('idle')} />

      {/* LEFT PANEL: Context & Trust (Matching Screenshot) */}
      <div className="lg:w-1/2 min-h-[450px] lg:min-h-screen relative overflow-hidden bg-slate-950 flex flex-col justify-center px-10 md:px-20 lg:px-24 py-20">
        {/* Background Image with strong overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/form-bg.png"
            alt="Bureau"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/80 via-slate-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 animate-fadeInLeft">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-400 mb-6 block drop-shadow-sm">
            PROTOCOLE D’ADHÉSION ELITE
          </span>
          <h1 className="font-sora text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-14">
            Optimisez votre <br />
            <span className="text-brand-500">Avenir</span> Fiscal
          </h1>

          <div className="space-y-10 max-w-md">
            {[
              {
                icon: <IconShield size={20} />,
                title: 'SÉCURITÉ DE RANG MILITAIRE',
                text: 'Cryptage asymétrique et protection multi-couches pour chacun de vos mouvements.'
              },
              {
                icon: <IconBolt size={20} />,
                title: 'PROCESSUS ÉPURE EN 3 MINUTES',
                text: 'Un onboarding fluide, sans friction, conçu pour les esprits les plus pressés.'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center rounded-2xl group-hover:bg-brand-600 transition-all duration-500 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-white mb-2 text-xs uppercase tracking-widest">{item.title}</h4>
                  <p className="text-slate-400 text-[13px] font-medium leading-relaxed opacity-80">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-white/5">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
              SESSION D’OUVERTURE SÉCURISÉE TAX REFUND™
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Form (Matching Screenshot) */}
      <div className="lg:w-1/2 min-h-screen bg-white flex flex-col items-center justify-center px-6 sm:px-12 py-20 relative">
        <div className="max-w-xl w-full text-center">

          <div className="mb-14 flex justify-center">
            <img src="/images/logo.jpeg" alt="TAX REFUND" className="h-24 w-auto object-contain mix-blend-multiply" />
          </div>

          <h2 className="font-sora text-5xl font-extrabold text-slate-950 mb-4 tracking-tight animate-fadeInUp delay-100">
            Démarrer ma Demande
          </h2>
          <p className="text-slate-400 font-medium italic mb-12 animate-fadeInUp delay-200">
            Initiez votre ascension vers l’excellence fiscale dès maintenant.
          </p>

          {/* Progress Bar (Matching Screenshot) */}
          <div className="flex items-center justify-end gap-4 mb-16 max-w-md mx-auto">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">ÉTAPE 1/1</span>
            <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand-600 w-full animate-progressFill"></div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-2 md:p-6 lg:bg-transparent">
            <form className="space-y-10" onSubmit={handleSubmit}>

              {/* Profile Select */}
              <div className="flex gap-4 p-2 bg-slate-50 rounded-3xl border border-slate-100 mb-4">
                {['Particulier', 'Entreprise'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setType(opt)}
                    className={`flex-1 py-4 rounded-2xl font-black transition-all ${type === opt
                      ? 'bg-white text-brand-600 border border-slate-200'
                      : 'text-slate-300 hover:text-slate-500'
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="grid gap-8">
                {/* Full name */}
                <div className="relative group animate-fadeInUp delay-300 text-left">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6 mb-3 block">NOM COMPLET DE RÉFÉRENCE</label>
                  <div className="relative">
                    <span className={iconClasses}><IconUser size={20} /></span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jean Müller-Dupont"
                      className={inputClasses}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Email */}
                  <div className="relative group animate-fadeInUp delay-400 text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6 mb-3 block">CANAL EMAIL</label>
                    <div className="relative">
                      <span className={iconClasses}><IconMail size={20} /></span>
                      <input
                        type="email"
                        name="email"
                        placeholder="jean@nova.com"
                        className={inputClasses}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative group animate-fadeInUp delay-500 text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6 mb-3 block">TÉLÉPHONE MOBILE</label>
                    <div className="relative">
                      <span className={iconClasses}><IconPhone size={20} /></span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+33 6 ..."
                        className={inputClasses}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="relative group animate-fadeInUp delay-500 text-left">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6 mb-3 block">ADRESSE DE RÉSIDENCE</label>
                  <div className="relative">
                    <span className={iconClasses}><IconHome size={20} /></span>
                    <input
                      type="text"
                      name="address"
                      placeholder="Numéro, Rue, Ville"
                      className={inputClasses}
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Fiscal Details - Row 1 */}
                  <div className="relative group animate-fadeInUp delay-600 text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6 mb-3 block">
                      {type === 'Entreprise' ? 'NUMÉRO SIRET / TVA' : 'NUMÉRO FISCAL (13 CHIFFRES)'}
                    </label>
                    <div className="relative">
                      <span className={iconClasses}><IconTarget size={20} /></span>
                      <input
                        type="text"
                        name={type === 'Entreprise' ? 'fiscalId' : 'fiscalNumber'}
                        placeholder={type === 'Entreprise' ? '123 456 789 00012' : '01 23 456 789 012'}
                        className={inputClasses}
                        value={type === 'Entreprise' ? formData.fiscalId : formData.fiscalNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="relative group animate-fadeInUp delay-700 text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6 mb-3 block">
                      {type === 'Entreprise' ? 'CHIFFRE D’AFFAIRES ANNUEL' : 'REVENUS FONCIERS ANNUELS'}
                    </label>
                    <div className="relative">
                      <span className={iconClasses}><IconBuilding size={20} /></span>
                      <input
                        type="number"
                        name={type === 'Entreprise' ? 'revenue' : 'propertyIncome'}
                        placeholder="Ex: 15000"
                        className={inputClasses}
                        value={type === 'Entreprise' ? formData.revenue : formData.propertyIncome}
                        onChange={handleChange}
                        required
                      />
                      <div className="absolute right-7 top-1/2 -translate-y-1/2 font-black text-slate-200">€</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Fiscal Details - Row 2 */}
                  <div className="relative group animate-fadeInUp delay-[800ms] text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6 mb-3 block">REVENUS PERÇUS À L’ÉTRANGER ?</label>
                    <div className="relative">
                      <span className={iconClasses}><IconGlobe size={20} /></span>
                      <select
                        name="foreignIncome"
                        className={`${inputClasses} appearance-none cursor-pointer`}
                        value={formData.foreignIncome}
                        onChange={handleChange}
                      >
                        <option value="Non">Non, uniquement en France</option>
                        <option value="Oui">Oui, revenus internationaux</option>
                      </select>
                      <div className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">▼</div>
                    </div>
                  </div>

                  <div className="relative group animate-fadeInUp delay-[900ms] text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6 mb-3 block">
                      {type === 'Entreprise' ? 'BÉNÉFICE DÉCLARÉ' : 'TOTAL REVENUS DÉCLARÉS'}
                    </label>
                    <div className="relative">
                      <span className={iconClasses}><IconMoney size={20} /></span>
                      <input
                        type="number"
                        name="revenue"
                        placeholder="Ex: 55000"
                        className={inputClasses}
                        value={formData.revenue}
                        onChange={handleChange}
                        required={type === 'Particulier'}
                      />
                      <div className="absolute right-7 top-1/2 -translate-y-1/2 font-black text-slate-200">€</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button (Matching Screenshot) */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-6 text-white font-black rounded-3xl transition-all flex items-center justify-center gap-4 group text-lg ${status === 'sending'
                    ? 'bg-slate-300 cursor-not-allowed'
                    : 'bg-[#0f172a] hover:bg-black'
                    }`}
                >
                  {status === 'sending' ? (
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>CRYPTAGE EN COURS...</span>
                    </div>
                  ) : (
                    <>
                      <span>Poursuivre la Demande</span>
                      <IconArrowLeft size={20} className="rotate-180 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
                <div className="mt-12 text-center">
                  <p className="text-[11px] font-bold text-slate-400">
                    Déjà membre du registre Tax Refund ? <Link to="/" className="text-brand-600 underline decoration-brand-200 decoration-2 underline-offset-4">Retourner à l’accueil</Link>
                  </p>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
