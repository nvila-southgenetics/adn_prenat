# 🔍 Estrategias de SEO Faltantes - Paternidad Prenatal

## ✅ Ya Implementado
- ✅ Schema.org JSON-LD (Organization, Service, FAQPage, LocalBusiness)
- ✅ Metadatos básicos (title, description, keywords)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Open Graph básico
- ✅ Twitter Cards básico
- ✅ Canonical URLs

## ⚠️ Estrategias Faltantes (Prioridad Alta)

### 1. **MetadataBase y OpenGraph Images**
**Archivo:** `app/layout.tsx` y `app/co/layout.tsx`

```typescript
export const metadata: Metadata = {
  // ... existente
  metadataBase: new URL('https://paternidadprenatal.com'), // ⚠️ FALTA
  openGraph: {
    // ... existente
    images: [  // ⚠️ FALTA
      {
        url: '/imgs/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Test Paternidad Prenatal - Pruebas certificadas',
      },
    ],
  },
  twitter: {
    // ... existente
    images: ['/imgs/twitter-card.jpg'], // ⚠️ FALTA
  },
}
```

**Acción:** Crear imágenes OG (1200x630px) y Twitter Card (1200x600px)

---

### 2. **Verification Codes (Google Search Console, Bing)**
**Archivo:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  // ... existente
  verification: {  // ⚠️ FALTA
    google: 'tu-codigo-google-search-console',
    bing: 'tu-codigo-bing-webmaster',
  },
}
```

**Acción:** Obtener códigos de Google Search Console y Bing Webmaster Tools

---

### 3. **Optimización de next.config.js**
**Archivo:** `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // ⚠️ FALTA
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true, // ⚠️ FALTA
  poweredByHeader: false, // ⚠️ FALTA (seguridad)
  generateEtags: true, // ⚠️ FALTA
  async headers() { // ⚠️ FALTA
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
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

---


---

### 5. **Lazy Loading en Imágenes Below-the-Fold**
**Archivos:** Componentes con imágenes

```typescript
<Image
  src="/imgs/imagen.png"
  alt="..."
  loading="lazy"  // ⚠️ FALTA en imágenes no críticas
  priority={false} // ⚠️ FALTA (solo true en hero)
/>
```

**Acción:** Agregar `loading="lazy"` a imágenes que no están en el viewport inicial

---

### 6. **Breadcrumb Schema**
**Archivos:** Páginas con navegación jerárquica

```typescript
// En páginas como /formulario, /sobre-nosotros
import { breadcrumbSchema } from '@/utils/schema'

const breadcrumbs = [
  { name: 'Inicio', url: 'https://paternidadprenatal.com' },
  { name: 'Formulario', url: 'https://paternidadprenatal.com/formulario' }
]
```

**Acción:** Implementar breadcrumbs en páginas internas

---

### 7. **Meta Tags por Página**
**Archivos:** `app/formulario/page.tsx`, `app/sobre-nosotros/page.tsx`, etc.

```typescript
export const metadata: Metadata = {
  title: 'Solicita tu Prueba - Formulario | Paternidad Prenatal',
  description: 'Completa el formulario en 2 pasos...',
  // ... metadata específica
}
```

**Acción:** Agregar metadata única a cada página

---

### 8. **Optimización de URLs**
**Problema:** URLs con hash (#) en sitemap
**Solución:** Ya corregido ✅

---

### 9. **Preload de Recursos Críticos**
**Archivo:** `app/layout.tsx`

```typescript
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
```

---

### 10. **Structured Data para Formularios**
**Archivo:** `app/formulario/page.tsx`

```typescript
const formActionSchema = {
  "@context": "https://schema.org",
  "@type": "FormAction",
  "name": "Solicitar Prueba de Paternidad Prenatal",
  "target": "https://paternidadprenatal.com/formulario",
  "method": "POST"
}
```

---

## 📊 Priorización de Implementación

### **Semana 1 (Crítico)**
1. ✅ MetadataBase y OpenGraph images
2. ✅ Verification codes (Google Search Console)
3. ✅ Optimización next.config.js
4. ✅ Alt text optimizado

### **Semana 2 (Importante)**
5. ✅ Lazy loading imágenes
6. ✅ Meta tags por página
7. ✅ Breadcrumb schema

### **Semana 3 (Mejoras)**
8. ✅ Preload recursos
9. ✅ FormAction schema
10. ✅ Headers de seguridad

---

## 🔍 Cómo Buscar tu Sitio en Google (Sin Entrar)

### **Método 1: Operador `site:`**
```
site:paternidadprenatal.com
```

**Resultado:** Muestra todas las páginas indexadas de tu dominio

### **Método 2: Buscar Keywords + Site**
```
prueba paternidad prenatal site:paternidadprenatal.com
```

**Resultado:** Muestra cómo aparece tu sitio para esa keyword específica

### **Método 3: Ver Solo Resultados del Sitio**
```
site:paternidadprenatal.com prueba paternidad
```

### **Método 4: Ver Páginas Específicas**
```
site:paternidadprenatal.com/formulario
site:paternidadprenatal.com/co
```

### **Método 5: Ver Cache de Google**
```
cache:paternidadprenatal.com
```

**Resultado:** Muestra la última versión que Google indexó

### **Método 6: Ver Información del Sitio**
```
info:paternidadprenatal.com
```

**Resultado:** Muestra información sobre el sitio y páginas relacionadas

---

## 🛠️ Herramientas Adicionales

### **1. Google Search Console**
- URL: https://search.google.com/search-console
- Ver: Posicionamiento, errores, impresiones, clics
- **Acción:** Configurar y verificar propiedad

### **2. Google Rich Results Test**
- URL: https://search.google.com/test/rich-results
- Ver: Validar Schema.org JSON-LD
- **Acción:** Probar todos los schemas implementados

### **3. PageSpeed Insights**
- URL: https://pagespeed.web.dev/
- Ver: Performance, Core Web Vitals
- **Acción:** Optimizar según recomendaciones

### **4. Schema Markup Validator**
- URL: https://validator.schema.org/
- Ver: Validar datos estructurados
- **Acción:** Verificar todos los schemas

### **5. Mobile-Friendly Test**
- URL: https://search.google.com/test/mobile-friendly
- Ver: Compatibilidad móvil
- **Acción:** Asegurar que sea mobile-friendly

---

## 📝 Checklist de Implementación

- [ ] Agregar metadataBase a layouts
- [ ] Crear imágenes OG (1200x630px)
- [ ] Crear imágenes Twitter Card (1200x600px)
- [ ] Agregar verification codes (Google, Bing)
- [ ] Optimizar next.config.js (formats, compress, headers)
- [ ] Optimizar todos los alt text con keywords
- [ ] Agregar lazy loading a imágenes below-the-fold
- [ ] Implementar breadcrumb schema en páginas internas
- [ ] Agregar metadata única a cada página
- [ ] Agregar preload de recursos críticos
- [ ] Implementar FormAction schema
- [ ] Configurar Google Search Console
- [ ] Validar todos los schemas
- [ ] Probar PageSpeed y optimizar

---

## 🎯 Resultados Esperados

Después de implementar estas mejoras:

1. **Rich Snippets en Google**
   - FAQs aparecen expandidos
   - Información de negocio visible
   - Ratings y reviews (si se agregan)

2. **Mejor Posicionamiento**
   - Keywords mejor posicionadas
   - Mayor CTR con rich snippets
   - Mejor comprensión del contenido

3. **Performance Mejorado**
   - PageSpeed score > 90
   - Core Web Vitals optimizados
   - Carga más rápida

4. **Mejor Indexación**
   - Todas las páginas indexadas
   - Sin errores de rastreo
   - Sitemap completo

---

**Última actualización:** [Fecha]
**Próxima revisión:** Después de implementar prioridades

