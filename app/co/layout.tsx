import type { Metadata } from 'next'
import Script from 'next/script'
import { organizationSchemaColombia, serviceSchemaColombia, localBusinessSchemaColombia } from '@/utils/schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://paternidadprenatal.com'),
  title: 'Prueba de Paternidad Prenatal en Cali - Test Paternidad Prenatal Cali',
  description: 'Test Paternidad Prenatal Cali: pruebas de paternidad prenatal seguras, confidenciales y certificadas. Resultados en 10 días hábiles. Laboratorio en Cali. Precio $1,199 USD.',
  keywords: 'prueba paternidad prenatal cali, test paternidad prenatal cali, prueba adn prenatal cali, prueba paternidad embarazo cali, test paternidad bogota, prueba adn prenatal medellin, prueba paternidad prenatal precio cali',
  alternates: {
    canonical: 'https://paternidadprenatal.com/co/',
    languages: {
      es: 'https://paternidadprenatal.com/',
      'es-co': 'https://paternidadprenatal.com/co/',
    },
  },
  openGraph: {
    title: 'Prueba de Paternidad Prenatal en Cali - Test Paternidad Prenatal Cali',
    description: 'Test Paternidad Prenatal Cali: resultados con precisión del 99.9% y acompañamiento cercano. Laboratorio certificado en Cali.',
    type: 'website',
    locale: 'es_CO',
    url: 'https://paternidadprenatal.com/co/',
    siteName: 'Test Paternidad Prenatal Cali',
    images: [
      {
        url: '/imgs/og-image-colombia.jpg',
        width: 1200,
        height: 630,
        alt: 'Test Paternidad Prenatal Cali - Laboratorio certificado en Cali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Paternidad Prenatal Cali - Laboratorio Cali',
    description: 'Pruebas de paternidad prenatal en Cali con resultados certificados en 10 días.',
    images: ['/imgs/twitter-card-colombia.jpg'],
  },
}

export default function ColombiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        id="organization-schema-colombia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchemaColombia)
        }}
      />
      <Script
        id="service-schema-colombia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemaColombia)
        }}
      />
      <Script
        id="local-business-schema-colombia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchemaColombia)
        }}
      />
      {children}
    </>
  )
}

