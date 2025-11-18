// Schema.org JSON-LD para SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Test Paternidad Prenatal",
  "alternateName": "SouthGenetics",
  "description": "Pruebas de paternidad prenatal no invasivas con resultados certificados. Tecnología de vanguardia para familias en todo el mundo.",
  "url": "https://paternidadprenatal.com",
  "logo": "https://paternidadprenatal.com/imgs/logo.png",
  "telephone": "+1-305-555-0198",
  "email": "contact@testadnprenatal.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressLocality": "Miami",
    "addressRegion": "FL"
  },
  "sameAs": [
    "https://wa.me/13055550198"
  ],
  "priceRange": "$1,490 USD",
  "medicalSpecialty": "Genetic Testing",
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  }
}

export const organizationSchemaColombia = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Paternidad Prenatal Colombia",
  "alternateName": "SouthGenetics Colombia",
  "description": "Pruebas de paternidad prenatal no invasivas en Colombia. Laboratorio certificado en Cali. Resultados en 10 días hábiles.",
  "url": "https://paternidadprenatal.com/co",
  "logo": "https://paternidadprenatal.com/imgs/logo.png",
  "telephone": "+57-601-508-1234",
  "email": "contacto@testadnprenatal.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CO",
    "addressLocality": "Cali",
    "addressRegion": "Valle del Cauca"
  },
  "sameAs": [
    "https://wa.me/573005550198"
  ],
  "priceRange": "$1,490 USD",
  "medicalSpecialty": "Genetic Testing",
  "areaServed": {
    "@type": "Country",
    "name": "Colombia"
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Prenatal Paternity Test",
  "name": "Prueba de Paternidad Prenatal",
  "description": "Prueba de paternidad prenatal no invasiva mediante análisis de ADN fetal libre en sangre materna. Se puede realizar desde la semana 7 de embarazo. Precisión del 99.9%.",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Test Paternidad Prenatal"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "offers": {
    "@type": "Offer",
    "price": "1490",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "description": "Incluye toma de muestras, análisis de laboratorio, certificado de resultados y envío seguro"
  },
  "category": "Medical Test"
}

export const serviceSchemaColombia = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Prenatal Paternity Test",
  "name": "Prueba de Paternidad Prenatal en Colombia",
  "description": "Prueba de paternidad prenatal no invasiva en Colombia. Laboratorio certificado en Cali. Resultados en 10 días hábiles. Precisión del 99.9%.",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Paternidad Prenatal Colombia"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Colombia"
  },
  "offers": {
    "@type": "Offer",
    "price": "1490",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "description": "Incluye toma de muestras, análisis de laboratorio, informe con validez legal, entrega segura de resultados y acompañamiento de especialistas"
  },
  "category": "Medical Test"
}

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

export const localBusinessSchemaColombia = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Paternidad Prenatal Colombia",
  "image": "https://southgenetics.com/imgs/logo.png",
  "telephone": "+57-601-508-1234",
  "email": "contacto@testadnprenatal.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CO",
    "addressLocality": "Cali",
    "addressRegion": "Valle del Cauca"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "3.4516",
    "longitude": "-76.5320"
  },
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
  "priceRange": "$1,490 USD",
  "url": "https://paternidadprenatal.com/co"
}

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

