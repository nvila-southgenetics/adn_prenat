import type { Metadata } from 'next'
import Script from 'next/script'
import { countries } from '@/config/countries.config'
import { generateOrganizationSchema, generateServiceSchema, generateLocalBusinessSchema } from '@/utils/seo-helpers'

const country = countries.ve
const schemas = {
  organization: generateOrganizationSchema(country),
  service: generateServiceSchema(country),
  localBusiness: generateLocalBusinessSchema(country)
}

export const metadata: Metadata = {
  metadataBase: new URL('https://paternidadprenatal.com'),
  title: country.metaTitle,
  description: country.metaDescription,
  keywords: country.seoKeywords.join(', '),
  alternates: {
    canonical: 'https://paternidadprenatal.com/ve/',
    languages: {
      'es-CO': 'https://paternidadprenatal.com/',
      'es-AR': 'https://paternidadprenatal.com/ar/',
      'es-VE': 'https://paternidadprenatal.com/ve/',
    },
  },
  openGraph: {
    title: country.metaTitle,
    description: country.metaDescription,
    type: 'website',
    locale: country.locale,
    url: 'https://paternidadprenatal.com/ve/',
    siteName: `Test Paternidad Prenatal ${country.name}`,
    images: [
      {
        url: '/imgs/og-image-ve.jpg',
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
    images: ['/imgs/twitter-card-ve.jpg'],
  },
}

export default function VenezuelaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* hreflang tags */}
      <link rel="alternate" hrefLang="es-CO" href="https://paternidadprenatal.com/" />
      <link rel="alternate" hrefLang="es-AR" href="https://paternidadprenatal.com/ar/" />
      <link rel="alternate" hrefLang="es-VE" href="https://paternidadprenatal.com/ve/" />
      <link rel="alternate" hrefLang="x-default" href="https://paternidadprenatal.com/" />
      
      {/* Schema.org JSON-LD */}
      <Script
        id="organization-schema-ve"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.organization)
        }}
      />
      <Script
        id="service-schema-ve"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.service)
        }}
      />
      <Script
        id="local-business-schema-ve"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.localBusiness)
        }}
      />
      
      {children}
    </>
  )
}
