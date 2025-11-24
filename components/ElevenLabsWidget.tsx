'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

export default function ElevenLabsWidget() {
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // Detectar si estamos en la landing (página principal)
  const isLanding = pathname === '/' || pathname === '/co'

  // Detectar si estamos en el formulario
  const isFormPage = pathname?.includes('/formulario')

  // Detectar modales abiertos observando el DOM
  useEffect(() => {
    const checkForModals = () => {
      // Buscar overlays de modales con z-index alto (z-50, z-[9999], etc.)
      const modalSelectors = [
        '[class*="z-50"]',
        '[class*="z-[9999]"]',
        '[class*="z-40"]',
        '[class*="z-30"]'
      ]
      
      let hasModal = false
      
      modalSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(el => {
          const styles = window.getComputedStyle(el)
          const classes = el.className || ''
          
          // Verificar si es un overlay de modal (fixed, inset-0, y fondo oscuro)
          if (
            styles.position === 'fixed' &&
            (classes.includes('inset-0') || 
             (parseInt(styles.top || '0') === 0 && 
              parseInt(styles.left || '0') === 0 &&
              parseInt(styles.right || '0') === 0 &&
              parseInt(styles.bottom || '0') === 0)) &&
            (styles.backgroundColor.includes('black') || 
             styles.backgroundColor.includes('rgba') ||
             classes.includes('bg-black') ||
             classes.includes('backdrop'))
          ) {
            hasModal = true
          }
        })
      })
      
      setIsModalOpen(hasModal)
    }

    // Observar cambios en el DOM
    const observer = new MutationObserver(checkForModals)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style']
    })

    // Verificar inicialmente
    checkForModals()

    // Verificar periódicamente (fallback)
    const interval = setInterval(checkForModals, 300)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  // Determinar visibilidad
  useEffect(() => {
    setIsVisible(isLanding && !isFormPage && !isModalOpen)
  }, [isLanding, isFormPage, isModalOpen])

  // Aplicar estilo de visibilidad al elemento cuando esté en el DOM
  useEffect(() => {
    const updateWidgetVisibility = () => {
      const widget = document.querySelector('elevenlabs-convai')
      if (widget) {
        if (isVisible) {
          widget.removeAttribute('style')
        } else {
          widget.setAttribute('style', 'display: none !important;')
        }
      }
    }

    // Aplicar inmediatamente
    updateWidgetVisibility()

    // Observar cuando se agrega el elemento al DOM (el script lo puede agregar después)
    const observer = new MutationObserver(updateWidgetVisibility)
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // También verificar periódicamente
    const interval = setInterval(updateWidgetVisibility, 500)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [isVisible])

  return (
    <>
      <elevenlabs-convai 
        agent-id="agent_5401k8y01665evjb09r95z6scpsv"
        style={{ display: isVisible ? 'block' : 'none' }}
      />
      <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="afterInteractive" />
    </>
  )
}

