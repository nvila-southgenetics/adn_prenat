import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prueba de Paternidad Prenatal Internacional - Test ADN Prenatal',
  description: 'Test ADN Prenatal ofrece pruebas de paternidad prenatal seguras, confidenciales y con cobertura global. Resultados certificados en pocos días.',
  keywords: 'test adn prenatal, prueba de paternidad prenatal, adn fetal, prueba de adn, internacional',
  authors: [{ name: 'Test ADN Prenatal' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://southgenetics.com/',
    languages: {
      es: 'https://southgenetics.com/',
      'es-co': 'https://southgenetics.com/co/',
    },
  },
  openGraph: {
    title: 'Prueba de Paternidad Prenatal Internacional - Test ADN Prenatal',
    description: 'Test ADN Prenatal: pruebas seguras, sin riesgos y con resultados certificados en todo el mundo.',
    type: 'website',
    locale: 'es',
    url: 'https://southgenetics.com/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <elevenlabs-convai agent-id="agent_5401k8y01665evjb09r95z6scpsv"></elevenlabs-convai>
        <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="afterInteractive" />
      </body>
    </html>
  )
}

