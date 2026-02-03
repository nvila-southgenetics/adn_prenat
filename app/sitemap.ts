import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://paternidadprenatal.com'
  const now = new Date()
  
  return [
    // Colombia (raíz) - x-default
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'es-CO': baseUrl,
          'es-AR': `${baseUrl}/ar`,
          'es-VE': `${baseUrl}/ve`,
        }
      }
    },
    {
      url: `${baseUrl}/formulario`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/formulario`,
          'es-AR': `${baseUrl}/ar/formulario`,
          'es-VE': `${baseUrl}/ve/formulario`,
        }
      }
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/sobre-nosotros`,
          'es-AR': `${baseUrl}/ar/sobre-nosotros`,
          'es-VE': `${baseUrl}/ve/sobre-nosotros`,
        }
      }
    },
    // Colombia /co (legacy - mantener por compatibilidad)
    {
      url: `${baseUrl}/co`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/co/formulario`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/co/sobre-nosotros`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Argentina /ar
    {
      url: `${baseUrl}/ar`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'es-CO': baseUrl,
          'es-AR': `${baseUrl}/ar`,
          'es-VE': `${baseUrl}/ve`,
        }
      }
    },
    {
      url: `${baseUrl}/ar/formulario`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/formulario`,
          'es-AR': `${baseUrl}/ar/formulario`,
          'es-VE': `${baseUrl}/ve/formulario`,
        }
      }
    },
    {
      url: `${baseUrl}/ar/sobre-nosotros`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/sobre-nosotros`,
          'es-AR': `${baseUrl}/ar/sobre-nosotros`,
          'es-VE': `${baseUrl}/ve/sobre-nosotros`,
        }
      }
    },
    // Venezuela /ve
    {
      url: `${baseUrl}/ve`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'es-CO': baseUrl,
          'es-AR': `${baseUrl}/ar`,
          'es-VE': `${baseUrl}/ve`,
        }
      }
    },
    {
      url: `${baseUrl}/ve/formulario`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/formulario`,
          'es-AR': `${baseUrl}/ar/formulario`,
          'es-VE': `${baseUrl}/ve/formulario`,
        }
      }
    },
    {
      url: `${baseUrl}/ve/sobre-nosotros`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/sobre-nosotros`,
          'es-AR': `${baseUrl}/ar/sobre-nosotros`,
          'es-VE': `${baseUrl}/ve/sobre-nosotros`,
        }
      }
    },
  ]
}
