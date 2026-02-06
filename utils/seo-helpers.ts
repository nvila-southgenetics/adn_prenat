// Helpers para SEO multi-país
import { countries, getAllCountries, type CountryConfig } from '@/config/countries.config'

const BASE_URL = 'https://paternidadprenatal.com'

// Genera los alternate links para hreflang
export const generateHreflangLinks = (currentPath: string = '') => {
  // Remover prefijo de país de la ruta actual
  const cleanPath = currentPath
    .replace(/^\/(ar|ve|co)/, '')
    .replace(/^\//, '')
  
  return getAllCountries().map(country => ({
    hreflang: country.hreflang,
    href: `${BASE_URL}${country.urlPrefix}${cleanPath ? `/${cleanPath}` : ''}`
  })).concat([
    // x-default apunta a la raíz (Colombia)
    {
      hreflang: 'x-default',
      href: `${BASE_URL}${cleanPath ? `/${cleanPath}` : ''}`
    }
  ])
}

// Genera metadata para Next.js basado en el país
export const generateCountryMetadata = (countryCode: string, pagePath: string = '') => {
  const country = countries[countryCode as keyof typeof countries]
  if (!country) return null

  const cleanPath = pagePath.replace(/^\/(ar|ve|co)/, '').replace(/^\//, '')
  const fullUrl = `${BASE_URL}${country.urlPrefix}${cleanPath ? `/${cleanPath}` : ''}`

  return {
    title: country.metaTitle,
    description: country.metaDescription,
    keywords: country.seoKeywords.join(', '),
    alternates: {
      canonical: fullUrl,
      languages: Object.fromEntries(
        getAllCountries().map(c => [
          c.hreflang.toLowerCase(),
          `${BASE_URL}${c.urlPrefix}${cleanPath ? `/${cleanPath}` : ''}`
        ])
      )
    },
    openGraph: {
      title: country.metaTitle,
      description: country.metaDescription,
      type: 'website',
      locale: country.locale,
      url: fullUrl,
      siteName: `Test Paternidad Prenatal ${country.name}`,
      images: [
        {
          url: `/imgs/og-image-${countryCode}.jpg`,
          width: 1200,
          height: 630,
          alt: `Test Paternidad Prenatal ${country.name} - Laboratorio certificado`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: country.metaTitle,
      description: country.metaDescription,
      images: [`/imgs/twitter-card-${countryCode}.jpg`],
    },
  }
}

// Genera JSON-LD Schema para LocalBusiness por país
export const generateLocalBusinessSchema = (country: CountryConfig) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Paternidad Prenatal ${country.mainCity}`,
    "image": `${BASE_URL}/imgs/logo.png`,
    "telephone": country.phone,
    "email": country.email,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": country.code.toUpperCase(),
      "addressLocality": country.mainCity,
      "addressRegion": country.mainCity
    },
    "geo": getGeoCoordinates(country.code),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": country.priceDisplay,
    "url": `${BASE_URL}${country.urlPrefix}`
  }
}

// Genera JSON-LD Schema para Organization por país
export const generateOrganizationSchema = (country: CountryConfig) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `Paternidad Prenatal ${country.mainCity}`,
    "alternateName": `SouthGenetics ${country.name}`,
    "description": `Pruebas de paternidad prenatal no invasivas en ${country.name}. Laboratorio certificado. Resultados en ${country.deliveryDays}.`,
    "url": `${BASE_URL}${country.urlPrefix}`,
    "logo": `${BASE_URL}/imgs/logo.png`,
    "telephone": country.phone,
    "email": country.email,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": country.code.toUpperCase(),
      "addressLocality": country.mainCity,
      "addressRegion": country.mainCity
    },
    "sameAs": [
      `https://wa.me/${country.whatsappNumber}`
    ],
    "priceRange": country.priceDisplay,
    "medicalSpecialty": "Genetic Testing",
    "areaServed": {
      "@type": "Country",
      "name": country.name
    }
  }
}

// Genera JSON-LD Schema para Service por país
export const generateServiceSchema = (country: CountryConfig) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Prenatal Paternity Test",
    "name": `Prueba de Paternidad Prenatal en ${country.mainCity}`,
    "description": `Prueba de paternidad prenatal no invasiva en ${country.name}. Laboratorio certificado. Resultados en ${country.deliveryDays}. Precisión del 99.9%.`,
    "provider": {
      "@type": "MedicalBusiness",
      "name": `Paternidad Prenatal ${country.mainCity}`
    },
    "areaServed": {
      "@type": "Country",
      "name": country.name
    },
    "offers": {
      "@type": "Offer",
      "price": country.price.toString(),
      "priceCurrency": country.currency,
      "availability": "https://schema.org/InStock",
      "description": "Incluye toma de muestras, análisis de laboratorio, entrega segura de resultados y acompañamiento de especialistas"
    },
    "category": "Medical Test"
  }
}

// Helper para obtener coordenadas geo por país
const getGeoCoordinates = (countryCode: string) => {
  const coords: Record<string, { latitude: string; longitude: string }> = {
    co: { latitude: "3.4516", longitude: "-76.5320" }, // Cali
    ar: { latitude: "-34.6037", longitude: "-58.3816" }, // Buenos Aires
    ve: { latitude: "10.4806", longitude: "-66.9036" } // Caracas
  }

  const coord = coords[countryCode] || coords.co

  return {
    "@type": "GeoCoordinates",
    ...coord
  }
}

// Genera todos los schemas necesarios para una página
export const generateAllSchemas = (country: CountryConfig) => {
  return {
    organization: generateOrganizationSchema(country),
    service: generateServiceSchema(country),
    localBusiness: generateLocalBusinessSchema(country)
  }
}

// Genera entries para sitemap
export const generateSitemapEntries = () => {
  const pages = ['', '/formulario', '/sobre-nosotros']
  const entries: Array<{
    url: string
    lastModified: Date
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority: number
    alternates?: { languages: Record<string, string> }
  }> = []

  pages.forEach(page => {
    // Generar alternates para cada página
    const alternates = {
      languages: Object.fromEntries(
        getAllCountries().map(country => [
          country.hreflang.toLowerCase(),
          `${BASE_URL}${country.urlPrefix}${page}`
        ])
      )
    }

    // Agregar entrada para cada país
    getAllCountries().forEach(country => {
      entries.push({
        url: `${BASE_URL}${country.urlPrefix}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates
      })
    })
  })

  return entries
}
