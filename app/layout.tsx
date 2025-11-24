import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { organizationSchemaColombia, serviceSchemaColombia, localBusinessSchemaColombia } from '@/utils/schema'
import ElevenLabsWidget from '@/components/ElevenLabsWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://paternidadprenatal.com'),
  title: 'Prueba de Paternidad Prenatal en Cali - Test Paternidad Prenatal Cali',
  description: 'Test Paternidad Prenatal Cali: pruebas de paternidad prenatal seguras, confidenciales y certificadas. Resultados en 10 días hábiles. Laboratorio en Cali. Precio $1,199 USD.',
  keywords: 'prueba paternidad prenatal cali, test paternidad prenatal cali, prueba adn prenatal cali, prueba paternidad embarazo cali, test paternidad bogota, prueba adn prenatal medellin, prueba paternidad prenatal precio cali',
  alternates: {
    canonical: 'https://paternidadprenatal.com/',
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
    url: 'https://paternidadprenatal.com/',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Logo para Google Search Results */}
        <link rel="icon" href="/imgs/logo.png" />
        <link rel="apple-touch-icon" href="/imgs/logo.png" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17741877011"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17741877011');
            `,
          }}
        />
        {/* Event snippet for Envío de formulario para clientes potenciales conversion */}
        <Script
          id="google-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-17741877011/ymHnCNGIysIbEJOe_otC',
                    'value': 1.0,
                    'currency': 'USD',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchemaColombia)
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchemaColombia)
          }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchemaColombia)
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <ElevenLabsWidget />
      </body>
    </html>
  )
}

