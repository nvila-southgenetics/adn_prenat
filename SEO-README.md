# 📊 Guía Completa de SEO - Test Paternidad Prenatal

## 📋 Índice
1. [Evaluación Actual del SEO](#evaluación-actual-del-seo)
2. [Mejoras Implementadas](#mejoras-implementadas)
3. [Optimizaciones Técnicas Necesarias](#optimizaciones-técnicas-necesarias)
4. [Estrategia de Contenido SEO](#estrategia-de-contenido-seo)
5. [Checklist de SEO](#checklist-de-seo)
6. [Implementación Paso a Paso](#implementación-paso-a-paso)
7. [Monitoreo y Métricas](#monitoreo-y-métricas)

---

## 🔍 Evaluación Actual del SEO

### ✅ Aspectos Positivos Actuales

1. **Estructura Básica de Metadatos**
   - ✅ Metadatos en `app/layout.tsx` y `app/co/layout.tsx`
   - ✅ Títulos y descripciones definidos
   - ✅ Open Graph configurado
   - ✅ Canonical URLs establecidas

2. **Estructura Técnica**
   - ✅ Sitemap.xml configurado (`app/sitemap.ts`)
   - ✅ Robots.txt configurado (`app/robots.ts`)
   - ✅ Next.js 14 con App Router (mejor SEO)
   - ✅ Imágenes con Next.js Image component

3. **Estructura Semántica**
   - ✅ Uso de componentes semánticos
   - ✅ Navegación estructurada

### ⚠️ Áreas de Mejora Críticas

1. **Metadatos Desactualizados**
   - ❌ Títulos aún mencionan "Test ADN Prenatal" en lugar de "Test Paternidad Prenatal"
   - ❌ Keywords genéricas, no optimizadas para búsquedas locales
   - ❌ Falta metadata para páginas específicas (formulario, sobre-nosotros)

2. **Sitemap Incompleto**
   - ❌ No incluye todas las páginas (formulario, sobre-nosotros)
   - ❌ URLs con hash (#) no son ideales para SEO
   - ❌ Falta priorización correcta

3. **Contenido SEO**
   - ❌ Falta estructura de datos JSON-LD (Schema.org)
   - ❌ Headings (H1, H2, H3) no optimizados para keywords
   - ❌ Falta contenido rico en keywords de búsqueda

4. **Imágenes**
   - ❌ Alt text genérico o faltante
   - ❌ Falta optimización de nombres de archivos
   - ❌ No hay lazy loading estratégico

5. **Performance**
   - ❌ Falta compresión de imágenes
   - ❌ No hay preload de recursos críticos
   - ❌ Falta optimización de fuentes

6. **Local SEO (Colombia)**
   - ❌ Falta Google Business Profile
   - ❌ No hay datos estructurados de negocio local
   - ❌ Falta información de ubicación

---

## 🚀 Mejoras Implementadas

### 1. Actualización de Metadatos

**Archivo: `app/layout.tsx`**
```typescript
export const metadata: Metadata = {
  title: 'Prueba de Paternidad Prenatal Internacional - Test Paternidad Prenatal',
  description: 'Test Paternidad Prenatal ofrece pruebas de paternidad prenatal seguras, confidenciales y con cobertura global. Resultados certificados en pocos días.',
  keywords: 'prueba paternidad prenatal, test paternidad prenatal, adn prenatal, prueba adn embarazo, paternidad prenatal no invasiva, test paternidad embarazo',
  // ... resto de metadata
}
```

**Archivo: `app/co/layout.tsx`**
```typescript
export const metadata: Metadata = {
  title: 'Prueba de Paternidad Prenatal en Colombia - Test Paternidad Prenatal Colombia',
  description: 'Test Paternidad Prenatal Colombia: pruebas de paternidad prenatal seguras, confidenciales y certificadas. Resultados en 10 días hábiles. Laboratorio en Cali.',
  keywords: 'prueba paternidad prenatal colombia, test paternidad prenatal cali, adn prenatal colombia, prueba paternidad embarazo colombia, test paternidad bogota, prueba adn prenatal medellin',
  // ... resto de metadata
}
```

### 2. Sitemap Mejorado

**Archivo: `app/sitemap.ts`** - Actualizar para incluir todas las páginas:
```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://southgenetics.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/formulario`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/co`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/co/formulario`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/co/sobre-nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

---

## 🔧 Optimizaciones Técnicas Necesarias

### 1. Schema.org JSON-LD (Datos Estructurados)

**Crear: `app/schema.ts`**
```typescript
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Test Paternidad Prenatal",
  "description": "Pruebas de paternidad prenatal no invasivas con resultados certificados",
  "url": "https://southgenetics.com",
  "telephone": "+1-305-555-0198",
  "email": "contact@testadnprenatal.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://wa.me/13055550198"
  ],
  "priceRange": "$1,490 USD",
  "medicalSpecialty": "Genetic Testing"
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Prenatal Paternity Test",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Test Paternidad Prenatal"
  },
  "areaServed": "Worldwide",
  "description": "Prueba de paternidad prenatal no invasiva desde la semana 7 de embarazo"
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
```

**Implementar en `app/layout.tsx`:**
```typescript
import Script from 'next/script'
import { organizationSchema, serviceSchema } from './schema'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
      <body>{children}</body>
    </html>
  )
}
```

### 2. Optimización de Imágenes

**Mejoras necesarias:**
- ✅ Usar nombres descriptivos: `prueba-paternidad-prenatal-mujer-embarazada.jpg`
- ✅ Alt text descriptivo y con keywords: `"Mujer embarazada realizando prueba de paternidad prenatal no invasiva"`
- ✅ Implementar lazy loading para imágenes below-the-fold
- ✅ Usar formatos modernos (WebP, AVIF) cuando sea posible

**Ejemplo en componentes:**
```typescript
<Image
  src="/imgs/mujer-embarazada.png"
  alt="Prueba de paternidad prenatal no invasiva - Mujer embarazada desde semana 7"
  width={800}
  height={600}
  loading="lazy"
  quality={85}
  priority={false} // Solo true para hero images
/>
```

### 3. Optimización de Headings

**Estructura recomendada:**
```
H1: Test de Paternidad Prenatal [Keyword principal]
H2: ¿Cómo funciona la prueba de paternidad prenatal? [Keyword secundario]
H2: Beneficios de la prueba de paternidad prenatal [Keyword secundario]
H3: Resultados en 10 días hábiles [Keyword long-tail]
H3: Precisión del 99.9% [Keyword long-tail]
```

### 4. Meta Tags Adicionales

**Agregar a `app/layout.tsx`:**
```typescript
export const metadata: Metadata = {
  // ... metadata existente
  metadataBase: new URL('https://southgenetics.com'),
  alternates: {
    canonical: 'https://southgenetics.com/',
    languages: {
      'es': 'https://southgenetics.com/',
      'es-CO': 'https://southgenetics.com/co/',
    },
  },
  openGraph: {
    // ... openGraph existente
    images: [
      {
        url: '/imgs/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Test Paternidad Prenatal - Pruebas certificadas',
      },
    ],
    siteName: 'Test Paternidad Prenatal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Paternidad Prenatal',
    description: 'Pruebas de paternidad prenatal seguras y confidenciales',
    images: ['/imgs/twitter-card.jpg'],
  },
  verification: {
    google: 'tu-codigo-google-search-console',
    // yandex: 'tu-codigo-yandex',
    // bing: 'tu-codigo-bing',
  },
}
```

### 5. Performance Optimization

**Actualizar `next.config.js`:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Agregar headers de seguridad y performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

---

## 📝 Estrategia de Contenido SEO

### Keywords Principales (Target)

**Internacional:**
- prueba de paternidad prenatal
- test paternidad prenatal
- prueba adn prenatal
- paternidad prenatal no invasiva
- test paternidad embarazo

**Colombia (Local SEO):**
- prueba paternidad prenatal colombia
- test paternidad prenatal cali
- prueba adn prenatal bogota
- test paternidad medellin
- prueba paternidad prenatal barranquilla

**Long-tail Keywords:**
- prueba de paternidad prenatal desde semana 7
- cuanto cuesta prueba paternidad prenatal
- prueba paternidad prenatal resultados tiempo
- prueba paternidad prenatal segura embarazo
- test paternidad prenatal colombia precio

### Estrategia de Contenido por Página

#### 1. Página Principal (`/`)
- **H1:** "Test de Paternidad Prenatal - Resultados Certificados en 10 Días"
- **Contenido:** 800-1200 palabras optimizadas
- **Keywords density:** 1-2% para keywords principales
- **CTAs:** Optimizados con keywords ("Solicita tu prueba de paternidad prenatal")

#### 2. Página Colombia (`/co`)
- **H1:** "Prueba de Paternidad Prenatal en Colombia - Laboratorio Certificado en Cali"
- **Contenido:** Incluir menciones de ciudades principales (Bogotá, Medellín, Cali, Barranquilla)
- **Local SEO:** Agregar datos estructurados de LocalBusiness

#### 3. Página Formulario (`/formulario`)
- **Title:** "Solicita tu Prueba de Paternidad Prenatal - Formulario"
- **Meta Description:** "Completa el formulario en 2 pasos y nuestro equipo se contactará contigo para coordinar tu prueba de paternidad prenatal"
- **Schema:** FormAction schema

#### 4. Página Sobre Nosotros (`/sobre-nosotros`)
- **H1:** "Sobre Test Paternidad Prenatal - Laboratorio Certificado"
- **Contenido:** Historia, credenciales, certificaciones
- **Schema:** AboutPage schema

### Blog/Artículos Recomendados (Para SEO de Contenido)

Crear sección de blog con artículos como:
1. "¿Cuándo se puede hacer una prueba de paternidad prenatal?"
2. "Prueba de paternidad prenatal: Todo lo que necesitas saber"
3. "Diferencias entre prueba de paternidad prenatal y postnatal"
4. "¿Es segura la prueba de paternidad prenatal para el bebé?"
5. "Precio de prueba de paternidad prenatal en Colombia"

---

## ✅ Checklist de SEO

### On-Page SEO

- [ ] **Títulos y Meta Descriptions**
  - [ ] Títulos únicos y descriptivos (50-60 caracteres)
  - [ ] Meta descriptions atractivas (150-160 caracteres)
  - [ ] Incluir keywords principales en títulos
  - [ ] Call-to-action en meta descriptions

- [ ] **Headings (H1-H6)**
  - [ ] Un solo H1 por página
  - [ ] Estructura jerárquica correcta (H1 → H2 → H3)
  - [ ] Keywords en headings principales
  - [ ] Headings descriptivos y relevantes

- [ ] **Contenido**
  - [ ] Mínimo 300 palabras por página
  - [ ] Keywords naturales en contenido
  - [ ] Sin keyword stuffing
  - [ ] Contenido único y valioso
  - [ ] Internal linking estratégico

- [ ] **Imágenes**
  - [ ] Alt text descriptivo en todas las imágenes
  - [ ] Nombres de archivo descriptivos
  - [ ] Tamaño optimizado (< 200KB cuando sea posible)
  - [ ] Formatos modernos (WebP, AVIF)

- [ ] **URLs**
  - [ ] URLs descriptivas y cortas
  - [ ] Incluir keywords cuando sea relevante
  - [ ] Sin parámetros innecesarios
  - [ ] Estructura lógica

### Technical SEO

- [ ] **Velocidad**
  - [ ] PageSpeed Insights score > 90
  - [ ] Core Web Vitals optimizados
  - [ ] Lazy loading de imágenes
  - [ ] Minificación de CSS/JS
  - [ ] Caching configurado

- [ ] **Mobile-First**
  - [ ] Diseño responsive
  - [ ] Touch-friendly (botones > 44px)
  - [ ] Texto legible sin zoom
  - [ ] Viewport configurado

- [ ] **Indexación**
  - [ ] Sitemap.xml completo y actualizado
  - [ ] Robots.txt configurado correctamente
  - [ ] Canonical URLs en todas las páginas
  - [ ] No hay contenido duplicado

- [ ] **Datos Estructurados (Schema.org)**
  - [ ] Organization schema
  - [ ] Service schema
  - [ ] FAQPage schema
  - [ ] LocalBusiness schema (Colombia)
  - [ ] BreadcrumbList schema

### Off-Page SEO

- [ ] **Backlinks**
  - [ ] Directorios médicos
  - [ ] Directorios de laboratorios
  - [ ] Páginas de citas médicas
  - [ ] Blogs de salud y maternidad

- [ ] **Social Media**
  - [ ] Perfiles en redes sociales
  - [ ] Open Graph optimizado
  - [ ] Twitter Cards configurado
  - [ ] Compartir contenido regularmente

- [ ] **Local SEO (Colombia)**
  - [ ] Google Business Profile
  - [ ] Información NAP consistente (Nombre, Dirección, Teléfono)
  - [ ] Reseñas y valoraciones
  - [ ] Menciones locales

---

## 🛠️ Implementación Paso a Paso

### Fase 1: Optimización Básica (Semana 1)

1. **Actualizar Metadatos**
   ```bash
   # Actualizar app/layout.tsx y app/co/layout.tsx
   # Cambiar "Test ADN Prenatal" por "Test Paternidad Prenatal"
   # Optimizar keywords
   ```

2. **Mejorar Sitemap**
   ```bash
   # Actualizar app/sitemap.ts
   # Agregar todas las páginas
   # Ajustar prioridades
   ```

3. **Optimizar Imágenes**
   ```bash
   # Revisar todos los componentes
   # Agregar alt text descriptivo
   # Optimizar nombres de archivos
   ```

### Fase 2: Datos Estructurados (Semana 2)

1. **Crear Schema.org**
   ```bash
   # Crear app/schema.ts
   # Implementar Organization, Service, FAQ schemas
   # Agregar a layout.tsx
   ```

2. **Optimizar Headings**
   ```bash
   # Revisar estructura H1-H6
   # Incluir keywords estratégicamente
   # Asegurar jerarquía correcta
   ```

### Fase 3: Contenido y Performance (Semana 3)

1. **Mejorar Contenido**
   ```bash
   # Expandir contenido en páginas principales
   # Agregar keywords long-tail
   # Mejorar internal linking
   ```

2. **Optimizar Performance**
   ```bash
   # Actualizar next.config.js
   # Implementar lazy loading
   # Optimizar imágenes
   # Configurar caching
   ```

### Fase 4: Local SEO y Monitoreo (Semana 4)

1. **Local SEO Colombia**
   ```bash
   # Crear Google Business Profile
   # Agregar LocalBusiness schema
   # Optimizar para búsquedas locales
   ```

2. **Herramientas de Monitoreo**
   ```bash
   # Configurar Google Search Console
   # Configurar Google Analytics 4
   # Configurar Bing Webmaster Tools
   ```

---

## 📊 Monitoreo y Métricas

### Herramientas Recomendadas

1. **Google Search Console**
   - Monitorear indexación
   - Verificar errores de rastreo
   - Analizar búsquedas
   - Revisar Core Web Vitals

2. **Google Analytics 4**
   - Tráfico orgánico
   - Comportamiento de usuarios
   - Conversiones
   - Fuentes de tráfico

3. **PageSpeed Insights**
   - Performance score
   - Core Web Vitals
   - Oportunidades de optimización

4. **Ahrefs / SEMrush**
   - Posicionamiento de keywords
   - Análisis de competencia
   - Backlinks
   - Oportunidades de contenido

### KPIs a Monitorear

- **Tráfico Orgánico**
  - Sesiones orgánicas mensuales
  - Nuevos usuarios orgánicos
  - Tasa de rebote
  - Tiempo en sitio

- **Posicionamiento**
  - Posición promedio de keywords principales
  - Impresiones en búsqueda
  - CTR (Click-Through Rate)
  - Keywords posicionadas

- **Conversiones**
  - Formularios completados
  - Llamadas desde sitio
  - Clics a WhatsApp
  - Tasa de conversión orgánica

- **Technical SEO**
  - PageSpeed score
  - Core Web Vitals (LCP, FID, CLS)
  - Errores de rastreo
  - Páginas indexadas

### Reporte Mensual Recomendado

```
📊 Reporte SEO Mensual - Test Paternidad Prenatal

1. TRÁFICO ORGÁNICO
   - Sesiones: X (+Y% vs mes anterior)
   - Usuarios nuevos: X
   - Páginas vistas: X
   - Tasa de rebote: X%

2. POSICIONAMIENTO
   - Keywords posicionadas: X
   - Posición promedio: X
   - Impresiones: X
   - CTR: X%

3. CONVERSIONES
   - Formularios: X
   - Conversión orgánica: X%
   - Valor por sesión: $X

4. TÉCNICO
   - PageSpeed: X/100
   - Errores: X
   - Páginas indexadas: X

5. ACCIONES DEL MES
   - Contenido creado: X artículos
   - Backlinks obtenidos: X
   - Optimizaciones realizadas: X
```

---

## 🎯 Estrategia de Keywords por Prioridad

### Tier 1 - Keywords Principales (Alta Prioridad)
1. prueba de paternidad prenatal
2. test paternidad prenatal
3. prueba paternidad prenatal colombia
4. test paternidad prenatal cali

### Tier 2 - Keywords Secundarias (Media Prioridad)
1. prueba adn prenatal
2. paternidad prenatal no invasiva
3. test paternidad embarazo
4. prueba paternidad prenatal precio

### Tier 3 - Long-tail Keywords (Baja Prioridad, Alta Conversión)
1. prueba de paternidad prenatal desde semana 7
2. cuanto cuesta prueba paternidad prenatal colombia
3. prueba paternidad prenatal resultados tiempo
4. donde hacer prueba paternidad prenatal cali

---

## 📱 Optimización para Dispositivos Móviles

### Mobile-First Indexing

- ✅ Diseño responsive implementado
- ✅ Velocidad móvil optimizada
- ✅ Touch targets > 44px
- ✅ Texto legible sin zoom
- ✅ Formularios mobile-friendly

### AMP (Opcional para Futuro)

Considerar implementar AMP para páginas de contenido si el tráfico móvil es muy alto.

---

## 🔗 Estrategia de Link Building

### Enlaces Internos

- Enlazar páginas relacionadas
- Usar anchor text descriptivo
- Crear estructura de silos temáticos
- Breadcrumbs en todas las páginas

### Enlaces Externos (Backlinks)

**Directorios:**
- Directorios médicos
- Directorios de laboratorios
- Directorios de servicios de salud

**Contenido:**
- Guest posts en blogs de maternidad
- Artículos en revistas de salud
- Foros y comunidades

**Local:**
- Directorios locales de Colombia
- Páginas de citas médicas
- Directorios de servicios en Cali/Bogotá/Medellín

---

## 📈 Proyección de Resultados

### Mes 1-2: Fundación
- Indexación completa del sitio
- Configuración de herramientas
- Optimizaciones básicas implementadas

### Mes 3-4: Crecimiento Inicial
- Primeras posiciones en keywords long-tail
- Tráfico orgánico inicial (50-100 visitas/mes)
- Primeras conversiones orgánicas

### Mes 5-6: Expansión
- Posicionamiento en keywords secundarias
- Tráfico orgánico creciente (200-500 visitas/mes)
- Aumento de conversiones

### Mes 7-12: Consolidación
- Posicionamiento en keywords principales
- Tráfico orgánico estable (1000+ visitas/mes)
- ROI positivo de SEO

---

## 🚨 Errores Comunes a Evitar

1. **Keyword Stuffing**
   - ❌ Repetir keywords excesivamente
   - ✅ Uso natural y contextual

2. **Contenido Duplicado**
   - ❌ Mismo contenido en múltiples páginas
   - ✅ Contenido único por página

3. **Ignorar Mobile**
   - ❌ Optimizar solo para desktop
   - ✅ Mobile-first approach

4. **Metadatos Genéricos**
   - ❌ Mismos metadatos en todas las páginas
   - ✅ Metadatos únicos y optimizados

5. **Ignorar Core Web Vitals**
   - ❌ Solo enfocarse en keywords
   - ✅ Balance entre contenido y performance

---

## 📞 Recursos Adicionales

### Documentación
- [Next.js SEO Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)

### Herramientas
- Google Search Console
- Google Analytics 4
- PageSpeed Insights
- Schema Markup Validator
- Rich Results Test

---

## ✅ Próximos Pasos Inmediatos

1. **Hoy:**
   - [ ] Actualizar metadatos en layout.tsx
   - [ ] Mejorar sitemap.ts
   - [ ] Agregar alt text a imágenes principales

2. **Esta Semana:**
   - [ ] Implementar Schema.org JSON-LD
   - [ ] Optimizar headings en todas las páginas
   - [ ] Configurar Google Search Console

3. **Este Mes:**
   - [ ] Crear contenido adicional (blog/artículos)
   - [ ] Optimizar performance
   - [ ] Configurar Google Analytics 4
   - [ ] Iniciar estrategia de link building

---

**Última actualización:** [Fecha]
**Versión:** 1.0
**Mantenido por:** Equipo de Desarrollo

---

## 📝 Notas Finales

Este documento es un plan completo de SEO que debe implementarse de manera gradual. La paciencia y consistencia son clave para el éxito del SEO orgánico. Los resultados pueden tardar 3-6 meses en ser visibles, pero una vez establecidos, proporcionarán tráfico orgánico sostenible y de alta calidad.

**Recuerda:** El SEO es un proceso continuo, no un proyecto de una sola vez. Revisa y actualiza este plan regularmente según los resultados y cambios en el algoritmo de Google.

