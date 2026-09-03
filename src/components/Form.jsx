import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import {
  IconBuilding, IconClipboard, IconUser, IconOffice,
  IconMail, IconLock, IconShield, IconTarget,
  IconArrowLeft, IconCheck, IconSearch, IconGlobe,
  IconBolt, IconBriefcase, IconPhone, IconHome, IconMoney
} from './SvgIcons'
import { usePageSEO } from '../hooks/usePageSEO'

// EmailJS Credentials
const SERVICE_ID = "service_ffblsdj".trim();
const TEMPLATE_ID = "template_7gghkw9".trim();
const PUBLIC_KEY = "xJxY0tK1wVAcSVPPu".trim();

// Global Init
emailjs.init(PUBLIC_KEY);

// Modal de confirmation
function StatusModal({ status, onClose }) {
  if (status === 'idle' || status === 'sending') return null;
  const isSuccess = status === 'success';

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 perspective-1000">
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-xl transition-all duration-500 animate-fadeIn"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-3xl md:rounded-[36px] p-8 md:p-12 max-w-md w-full relative z-10 border border-slate-100 transform text-center shadow-2xl animate-fadeInUp">
        <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center ${
          isSuccess ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
        }`}>
          {isSuccess ? <IconCheck size={40} strokeWidth={2.5} /> : <span className="text-4xl font-black">!</span>}
        </div>

        <h3 className="font-sora text-2xl font-black text-slate-900 mb-3 tracking-tight">
          {isSuccess ? 'Demande Transmise avec Succès !' : 'Erreur d’envoi'}
        </h3>

        <p className="text-slate-500 font-medium mb-8 leading-relaxed text-sm">
          {isSuccess
            ? 'Votre questionnaire a bien été transmis à nos experts EuroTax Refund. Vous recevrez une estimation détaillée sous 24h ouvrées.'
            : 'Un problème de connexion est survenu lors de l’envoi. Veuillez réessayer ou nous contacter par email.'}
        </p>

        <button
          onClick={onClose}
          className={`w-full py-4 rounded-2xl font-black text-white transition-all shadow-lg ${
            isSuccess
              ? 'bg-brand-600 hover:bg-brand-500 shadow-brand-600/25'
              : 'bg-slate-900 hover:bg-slate-800'
          }`}
        >
          {isSuccess ? 'Retour au site' : 'Réessayer'}
        </button>
      </div>
    </div>
  );
}

const FORM_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://taxrefundseurope.netlify.app/form#webpage',
      'url': 'https://taxrefundseurope.netlify.app/form',
      'name': 'Questionnaire de Remboursement Fiscal | EuroTax Refund',
      'description': 'Questionnaire d\'évaluation et de réclamation de trop-perçus fiscaux en Belgique, France et Europe. Diagnostic gratuit sous 24h.'
    }
  ]
}

export default function FormPage() {
  usePageSEO({
    title: 'Questionnaire de remboursement fiscal | EuroTax Refund',
    description: 'Remplissez notre questionnaire officiel pour récupérer vos trop-perçus fiscaux en Belgique, France et Europe. Analyse 100% gratuite sous 24h.',
    canonicalPath: '/form',
    schema: FORM_SCHEMA
  })

  const [step, setStep] = useState(1)
  const [status, setStatus] = useState('idle')

  // Form State
  const [formData, setFormData] = useState({
    // Type
    profileType: 'Particulier / Salarié',
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    residenceCountry: 'Belgique',
    fiscalNumber: '', // NISS / Numéro Fiscal / SIRET
    // Fiscal Situation
    taxCountry: 'Belgique',
    employmentStatus: 'Salarié(e) / Cadre',
    estimatedIncome: '',
    // Context Situations (checkboxes)
    taxExcess: false,
    jobChange: false,
    familyDeductions: false,
    crossBorder: false,
    vatRecovery: false,
    // Notes
    additionalNotes: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleProfileSelect = (p) => {
    setFormData({ ...formData, profileType: p })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const situations = []
    if (formData.taxExcess) situations.push('• Précompte / prélèvement fiscal potentiellement excessif')
    if (formData.jobChange) situations.push('• Changement d’employeur ou période d’inactivité en cours d’année')
    if (formData.familyDeductions) situations.push('• Charges de famille / déductions / crédits non imputés')
    if (formData.crossBorder) situations.push('• Revenus perçus à l’étranger / travailleurs frontaliers')
    if (formData.vatRecovery) situations.push('• Récupération de TVA professionnelle européenne')

    const fullReport = `
=========================================
NOUVELLE DEMANDE DE REMBOURSEMENT FISCAL
EUROTAX REFUND (Belgique & Europe)
=========================================

1. PROFIL DU DEMANDEUR
-----------------------------------------
• Type de profil : ${formData.profileType}
• Nom complet : ${formData.fullName}
• Email : ${formData.email}
• Téléphone : ${formData.phone}
• Adresse : ${formData.address}
• Code Postal & Ville : ${formData.postalCode} ${formData.city}
• Pays de résidence : ${formData.residenceCountry}
• Numéro Fiscal / NISS / TVA : ${formData.fiscalNumber || 'Non renseigné'}

2. SITUATION PROFESSIONNELLE & REVENUS
-----------------------------------------
• Pays de cotisation fiscale : ${formData.taxCountry}
• Statut professionnel : ${formData.employmentStatus}
• Revenus annuels bruts estimés : ${formData.estimatedIncome ? formData.estimatedIncome + ' €' : 'Non précisé'}

3. MOTIFS DU TROP-PERÇU DÉCLARÉS
-----------------------------------------
${situations.length > 0 ? situations.join('\n') : '• Audit général d’optimisation fiscale'}

4. COMMENTAIRES / PRÉCISIONS
-----------------------------------------
${formData.additionalNotes || 'Aucun commentaire additionnel.'}

=========================================
`.trim();

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      message: fullReport,
      address: `${formData.address}, ${formData.postalCode} ${formData.city} (${formData.residenceCountry})`,
      type: formData.profileType
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });
      if (result.status === 200 || result.text === 'OK') {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('EmailJS Error:', err)
      setStatus('error')
    }
  }

  const inputClasses = "w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-medium focus:bg-white focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 transition-all outline-none text-sm"
  const iconClasses = "absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-colors"

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row relative selection:bg-brand-500 selection:text-white">
      {/* Status Modal */}
      <StatusModal status={status} onClose={() => setStatus('idle')} />

      {/* LEFT PANEL: Branding & Trust */}
      <div className="lg:w-5/12 bg-slate-900 p-8 sm:p-14 lg:p-16 flex flex-col justify-between relative overflow-hidden border-r border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 mb-12 group">
            <div className="bg-white p-1 rounded-xl shadow-lg">
              <img src="/images/logo.jpeg" alt="TAX REFUND Logo" className="h-12 w-auto object-contain mix-blend-multiply" />
            </div>
            <span className="font-sora text-xl font-extrabold tracking-tight text-white">
              TAX <span className="text-brand-500">REFUND</span>
            </span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold rounded-full mb-6">
            <IconBolt size={14} /> Dossier d'analyse fiscale sous 24h
          </div>

          <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Récupérez vos <br />
            <span className="bg-gradient-to-r from-brand-400 to-gold-400 bg-clip-text text-transparent">
              trop-perçus fiscaux
            </span>
          </h1>

          <p className="text-slate-400 font-medium leading-relaxed mb-10 text-sm sm:text-base">
            Remplissez ce questionnaire en 2 minutes. Nos experts étudient votre dossier pour identifier vos montants récupérables en Belgique et en Europe.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: <IconShield size={20} className="text-brand-400" />,
                title: "100% Confidentiel & Sécurisé",
                desc: "Données protégées et traitées selon les normes européennes RGPD."
              },
              {
                icon: <IconCheck size={20} className="text-emerald-400" />,
                title: "Aucun frais si aucun résultat",
                desc: "Rémunération 100% au succès. Zéro risque financier pour vous."
              },
              {
                icon: <IconGlobe size={20} className="text-gold-400" />,
                title: "Expertise Belgique & Europe",
                desc: "Conventions bilatérales, précompte professionnel et TVA internationale."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.title}</h4>
                  <p className="text-slate-400 text-xs font-medium mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 pt-10 mt-10 border-t border-white/10 text-xs text-slate-500 font-medium">
          Besoin d'aide directe ? Contactez notre pôle fiscal à <a href="mailto:contact.taxrefunds@gmail.com" className="text-brand-400 hover:underline">contact.taxrefunds@gmail.com</a>
        </div>
      </div>

      {/* RIGHT PANEL: Multi-step Questionnaire Form */}
      <div className="lg:w-7/12 bg-white min-h-screen p-6 sm:p-12 lg:p-16 flex flex-col justify-center">
        <div className="max-w-2xl w-full mx-auto">
          {/* Header Step Counter */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black uppercase tracking-widest text-brand-600">
                Étape {step} sur 3
              </span>
              <span className="text-xs font-bold text-slate-400">
                {step === 1 && 'Informations Personnelles'}
                {step === 2 && 'Situation & Revenus'}
                {step === 3 && 'Contexte & Validation'}
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-600 transition-all duration-500 rounded-full"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* ================= STEP 1: PERSONAL INFORMATION ================= */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h2 className="font-sora text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    Vos Coordonnées Personnelles
                  </h2>
                  <p className="text-sm text-slate-500 font-medium">
                    Ces informations permettront à notre pôle fiscal de vous transmettre votre analyse chiffrée.
                  </p>
                </div>

                {/* Profile Type Toggle */}
                <div>
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Vous êtes :
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Particulier / Salarié', 'Expatrié / Frontalier', 'Entreprise (TVA)'].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => handleProfileSelect(p)}
                        className={`py-3 px-2 rounded-xl text-xs font-extrabold transition-all border ${
                          formData.profileType === p
                            ? 'bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-600/20'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Full Name */}
                <div className="relative">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Nom et Prénom *
                  </label>
                  <div className="relative">
                    <span className={iconClasses}><IconUser size={18} /></span>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Ex: Jean Dupont"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                      Adresse Email *
                    </label>
                    <div className="relative">
                      <span className={iconClasses}><IconMail size={18} /></span>
                      <input
                        type="email"
                        name="email"
                        placeholder="jean.dupont@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                      Numéro de Téléphone *
                    </label>
                    <div className="relative">
                      <span className={iconClasses}><IconPhone size={18} /></span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+32 ... ou +33 ..."
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>
                </div>

                {/* Address & City */}
                <div className="relative">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Adresse de Résidence *
                  </label>
                  <div className="relative">
                    <span className={iconClasses}><IconHome size={18} /></span>
                    <input
                      type="text"
                      name="address"
                      placeholder="Rue et numéro"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="relative col-span-1">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                      Code Postal *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Ex: 1000"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-600 text-sm outline-none"
                    />
                  </div>

                  <div className="relative col-span-2">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                      Ville *
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Ex: Bruxelles / Paris"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-600 text-sm outline-none"
                    />
                  </div>
                </div>

                {/* Next Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
                        alert('Veuillez renseigner tous les champs obligatoires (*)')
                        return
                      }
                      setStep(2)
                    }}
                    className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-black rounded-2xl transition-all shadow-lg shadow-brand-600/25 flex items-center justify-center gap-3 text-base cursor-pointer hover:scale-[1.01]"
                  >
                    <span>Continuer vers l'étape 2 (Situation Fiscale)</span>
                    <IconArrowLeft size={18} className="rotate-180" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 2: FISCAL SITUATION ================= */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h2 className="font-sora text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    Votre Situation Fiscale
                  </h2>
                  <p className="text-sm text-slate-500 font-medium">
                    Précisez les pays et les montants concernés par vos impôts payés.
                  </p>
                </div>

                {/* Country of Taxation */}
                <div>
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Pays où vous avez payé des impôts / cotisé ces 3 dernières années *
                  </label>
                  <div className="relative">
                    <span className={iconClasses}><IconGlobe size={18} /></span>
                    <select
                      name="taxCountry"
                      value={formData.taxCountry}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      <option value="Belgique">Belgique</option>
                      <option value="France">France</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Allemagne">Allemagne</option>
                      <option value="Suisse">Suisse</option>
                      <option value="Plusieurs pays d'Europe">Plusieurs pays d'Europe (Travailleur frontalier / Expatrié)</option>
                      <option value="Autre pays de l'Union Européenne">Autre pays de l'Union Européenne</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</div>
                  </div>
                </div>

                {/* Employment Status */}
                <div>
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Statut professionnel *
                  </label>
                  <div className="relative">
                    <span className={iconClasses}><IconBriefcase size={18} /></span>
                    <select
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      <option value="Salarié(e) / Fonctionnaire">Salarié(e) / Fonctionnaire</option>
                      <option value="Indépendant(e) / Profession libérale">Indépendant(e) / Profession libérale</option>
                      <option value="Dirigeant(e) d'entreprise / Gérant">Dirigeant(e) d'entreprise / Gérant</option>
                      <option value="Retraité(e)">Retraité(e)</option>
                      <option value="Demandeur d'emploi / En transition">Demandeur d'emploi / En transition</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</div>
                  </div>
                </div>

                {/* Fiscal Identifier (NISS / Fiscal Number) */}
                <div className="relative">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Numéro national / NISS (Belgique) ou Numéro Fiscal (Optionnel mais recommandé)
                  </label>
                  <div className="relative">
                    <span className={iconClasses}><IconTarget size={18} /></span>
                    <input
                      type="text"
                      name="fiscalNumber"
                      placeholder="Ex: 85.04.12-123.45 ou N° SIRET"
                      value={formData.fiscalNumber}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Estimated Annual Income */}
                <div className="relative">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Revenus annuels bruts approximatifs (€)
                  </label>
                  <div className="relative">
                    <span className={iconClasses}><IconMoney size={18} /></span>
                    <input
                      type="number"
                      name="estimatedIncome"
                      placeholder="Ex: 45000"
                      value={formData.estimatedIncome}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">€</div>
                  </div>
                </div>

                {/* Step navigation */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-all text-sm"
                  >
                    ← Retour
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-2/3 py-4 bg-brand-600 hover:bg-brand-500 text-white font-black rounded-2xl transition-all shadow-lg shadow-brand-600/25 flex items-center justify-center gap-3 text-sm cursor-pointer hover:scale-[1.01]"
                  >
                    <span>Étape 3 : Motifs & Envoi</span>
                    <IconArrowLeft size={16} className="rotate-180" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 3: CONTEXT & SUBMISSION ================= */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h2 className="font-sora text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    Motifs de Réclamation
                  </h2>
                  <p className="text-sm text-slate-500 font-medium">
                    Cochez les situations qui correspondent à votre profil ces 3 dernières années :
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      name: 'taxExcess',
                      label: 'Prélèvement d’impôt ou précompte professionnel excessif',
                      desc: 'Impôt retenu à la source supérieur au barème réel dû.'
                    },
                    {
                      name: 'jobChange',
                      label: 'Changement d’employeur ou interruption d’activité',
                      desc: 'Mois sans salaire, chômage partiel, congés sans solde, etc.'
                    },
                    {
                      name: 'familyDeductions',
                      label: 'Charges déductibles ou crédits d’impôt non déclarés',
                      desc: 'Garde d’enfants, dons, travaux énergétiques, charges de famille...'
                    },
                    {
                      name: 'crossBorder',
                      label: 'Revenus transfrontaliers / Travail à l’étranger',
                      desc: 'Salaires dans deux pays, double imposition à régulariser.'
                    },
                    {
                      name: 'vatRecovery',
                      label: 'TVA professionnelle non récupérée en Europe (Entreprises)',
                      desc: 'Frais de déplacements, salons, prestations transfrontalières.'
                    },
                  ].map((item) => (
                    <label
                      key={item.name}
                      className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                        formData[item.name]
                          ? 'border-brand-500 bg-brand-50/50 shadow-sm'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={formData[item.name]}
                        onChange={handleChange}
                        className="w-5 h-5 mt-0.5 rounded-lg text-brand-600 focus:ring-brand-500 border-slate-300"
                      />
                      <div>
                        <span className="font-bold text-slate-900 text-sm block">
                          {item.label}
                        </span>
                        <span className="text-xs text-slate-500 font-medium mt-0.5 block">
                          {item.desc}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Précisions ou commentaires supplémentaires (Optionnel)
                  </label>
                  <textarea
                    name="additionalNotes"
                    rows="3"
                    placeholder="Précisez ici vos questions ou votre contexte particulier..."
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-600 text-sm outline-none"
                  ></textarea>
                </div>

                {/* Step navigation & Submit */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-all text-sm"
                  >
                    ← Retour
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-2/3 py-5 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 text-base shadow-xl ${
                      status === 'sending'
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-brand-600 hover:bg-brand-500 shadow-brand-600/30 hover:scale-[1.01] cursor-pointer'
                    }`}
                  >
                    {status === 'sending' ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>ENVOI DU DOSSIER EN COURS...</span>
                      </div>
                    ) : (
                      <>
                        <span>Envoyer ma Demande Gratuite →</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-4">
                  <span className="text-xs text-slate-400 font-semibold flex items-center justify-center gap-1.5">
                    <IconLock size={12} /> Traitement confidentiel • Réponse chiffrée sous 24h par email
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
