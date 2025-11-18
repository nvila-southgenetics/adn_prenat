import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import { organizationSchema, serviceSchema } from '@/utils/schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://paternidadprenatal.com'),
  title: 'Prueba de Paternidad Prenatal Internacional - Test Paternidad Prenatal',
  description: 'Test Paternidad Prenatal ofrece pruebas de paternidad prenatal seguras, confidenciales y con cobertura global. Resultados certificados en pocos días. Prueba no invasiva desde la semana 7.',
  keywords: 'prueba paternidad prenatal, test paternidad prenatal, prueba adn prenatal, paternidad prenatal no invasiva, test paternidad embarazo, prueba paternidad prenatal precio',
  authors: [{ name: 'Test Paternidad Prenatal' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://paternidadprenatal.com/',
    languages: {
      es: 'https://paternidadprenatal.com/',
      'es-co': 'https://paternidadprenatal.com/co/',
    },
  },
  openGraph: {
    title: 'Prueba de Paternidad Prenatal Internacional - Test Paternidad Prenatal',
    description: 'Test Paternidad Prenatal: pruebas seguras, no invasivas y con resultados certificados en todo el mundo. Desde la semana 7 de embarazo.',
    type: 'website',
    locale: 'es',
    url: 'https://paternidadprenatal.com/',
    siteName: 'Test Paternidad Prenatal',
    images: [
      {
        url: '/imgs/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Test Paternidad Prenatal - Pruebas certificadas de paternidad prenatal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Paternidad Prenatal - Pruebas Certificadas',
    description: 'Pruebas de paternidad prenatal seguras y confidenciales con resultados en 10 días.',
    images: ['/imgs/twitter-card.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema)
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <elevenlabs-convai agent-id="agent_5401k8y01665evjb09r95z6scpsv"></elevenlabs-convai>
        <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="afterInteractive" />
      </body>
    </html>
  )
}

