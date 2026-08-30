import { useEffect } from 'react'

/**
 * Hook personnalisé pour mettre à jour les balises SEO (title, description, canonical, Open Graph, Twitter)
 * de manière dynamique pour chaque route SPA.
 */
const SITE_ORIGIN = 'https://taxrefundseurope.netlify.app'

export function usePageSEO({ title, description, canonicalPath, ogImage, schema }) {
  useEffect(() => {
    const fullCanonical = `${SITE_ORIGIN}${canonicalPath || window.location.pathname}`
    const defaultImage = `${SITE_ORIGIN}/images/hero-bg.webp`
    const imageToUse = ogImage || defaultImage

    // Sauvegarde des valeurs précédentes
    const prevTitle = document.title
    const metaDesc = document.querySelector('meta[name="description"]')
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : ''
    const metaCanonical = document.querySelector('link[rel="canonical"]')
    const prevCanonical = metaCanonical ? metaCanonical.getAttribute('href') : ''

    const ogTitle = document.querySelector('meta[property="og:title"]')
    const prevOgTitle = ogTitle ? ogTitle.getAttribute('content') : ''
    const ogDesc = document.querySelector('meta[property="og:description"]')
    const prevOgDesc = ogDesc ? ogDesc.getAttribute('content') : ''
    const ogUrl = document.querySelector('meta[property="og:url"]')
    const prevOgUrl = ogUrl ? ogUrl.getAttribute('content') : ''

    const twTitle = document.querySelector('meta[name="twitter:title"]')
    const prevTwTitle = twTitle ? twTitle.getAttribute('content') : ''
    const twDesc = document.querySelector('meta[name="twitter:description"]')
    const prevTwDesc = twDesc ? twDesc.getAttribute('content') : ''

    // Application des nouvelles balises
    document.title = title
    if (metaDesc) metaDesc.setAttribute('content', description)
    if (metaCanonical) metaCanonical.setAttribute('href', fullCanonical)
    if (ogTitle) ogTitle.setAttribute('content', title)
    if (ogDesc) ogDesc.setAttribute('content', description)
    if (ogUrl) ogUrl.setAttribute('content', fullCanonical)
    if (twTitle) twTitle.setAttribute('content', title)
    if (twDesc) twDesc.setAttribute('content', description)

    // Gestion du Schema.org JSON-LD
    let scriptTag = document.getElementById('schema-ld-json')
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.id = 'schema-ld-json'
        scriptTag.type = 'application/ld+json'
        document.head.appendChild(scriptTag)
      }
      scriptTag.textContent = JSON.stringify(schema, null, 2)
    } else if (scriptTag) {
      scriptTag.remove()
    }

    // Restauration au démontage du composant
    return () => {
      document.title = prevTitle
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc)
      if (metaCanonical && prevCanonical) metaCanonical.setAttribute('href', prevCanonical)
      if (ogTitle && prevOgTitle) ogTitle.setAttribute('content', prevOgTitle)
      if (ogDesc && prevOgDesc) ogDesc.setAttribute('content', prevOgDesc)
      if (ogUrl && prevOgUrl) ogUrl.setAttribute('content', prevOgUrl)
      if (twTitle && prevTwTitle) twTitle.setAttribute('content', prevTwTitle)
      if (twDesc && prevTwDesc) twDesc.setAttribute('content', prevTwDesc)
      const currentScript = document.getElementById('schema-ld-json')
      if (currentScript) {
        currentScript.remove()
      }
    }
  }, [title, description, canonicalPath, ogImage, schema])
}
