import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prueba de Paternidad Prenatal en México - Paternidad Prenatal MX',
  description: 'Prueba de paternidad prenatal precisa, segura y sin riesgos para la madre ni el bebé. Resultados confiables en pocos días.',
  keywords: 'paternidad prenatal, prueba de paternidad, ADN fetal, México, embarazo',
  authors: [{ name: 'Paternidad Prenatal MX' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Prueba de Paternidad Prenatal en México',
    description: 'Prueba de paternidad prenatal precisa, segura y sin riesgos para la madre ni el bebé.',
    type: 'website',
    locale: 'es_MX',
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
      </body>
    </html>
  )
}

