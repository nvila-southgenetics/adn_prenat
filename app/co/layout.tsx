import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prueba de Paternidad Prenatal en Colombia - Test ADN Prenatal Colombia',
  description: 'Test ADN Prenatal Colombia ofrece pruebas de paternidad prenatal seguras, confidenciales y certificadas. Resultados en 10 días hábiles.',
  keywords: 'test adn prenatal colombia, prueba de paternidad prenatal, adn prenatal colombia',
  alternates: {
    canonical: 'https://southgenetics.com/co/',
    languages: {
      es: 'https://southgenetics.com/',
      'es-co': 'https://southgenetics.com/co/',
    },
  },
  openGraph: {
    title: 'Prueba de Paternidad Prenatal en Colombia - Test ADN Prenatal Colombia',
    description: 'Test ADN Prenatal Colombia: resultados con precisión del 99.9% y acompañamiento cercano.',
    type: 'website',
    locale: 'es_CO',
    url: 'https://southgenetics.com/co/',
  },
}

export default function ColombiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

