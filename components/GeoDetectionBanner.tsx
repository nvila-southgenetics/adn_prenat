'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, ArrowRight } from 'lucide-react'
import { useGeoDetection } from '@/hooks/useGeoDetection'

export default function GeoDetectionBanner() {
  const { 
    detectedCountry, 
    currentCountry, 
    isLoading, 
    shouldShowBanner, 
    dismissBanner,
    setCountryPreference 
  } = useGeoDetection()
  
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar con un pequeño delay para mejor UX
  useEffect(() => {
    if (shouldShowBanner && !isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500) // Esperar 1.5s después de cargar la página
      return () => clearTimeout(timer)
    }
  }, [shouldShowBanner, isLoading])

  const handleGoToCountry = () => {
    if (detectedCountry) {
      setCountryPreference(detectedCountry.code)
      // Redirigir a la versión del país detectado
      window.location.href = detectedCountry.urlPrefix || '/'
    }
  }

  const handleStayHere = () => {
    setCountryPreference(currentCountry.code)
    setIsVisible(false)
    dismissBanner()
  }

  const handleDismiss = () => {
    setIsVisible(false)
    dismissBanner()
  }

  if (!detectedCountry || !shouldShowBanner) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-ocean-600 to-ocean-700 shadow-lg"
        >
          <div className="container-custom py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Mensaje */}
              <div className="flex items-center gap-3 flex-1">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-white">
                  <p className="text-sm sm:text-base font-medium">
                    <span className="mr-1">{detectedCountry.flag}</span>
                    Vemos que estás en {detectedCountry.name}
                  </p>
                  <p className="text-xs sm:text-sm text-ocean-100 hidden sm:block">
                    Tenemos una versión con precios en {detectedCountry.currency} e información local
                  </p>
                </div>
              </div>

              {/* Botones */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={handleGoToCountry}
                  className="flex items-center gap-1 sm:gap-2 bg-white text-ocean-700 px-3 sm:px-4 py-2 rounded-lg font-medium text-sm hover:bg-ocean-50 transition-colors duration-200"
                >
                  <span className="hidden sm:inline">Ver versión de</span>
                  <span>{detectedCountry.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={handleStayHere}
                  className="text-white/80 hover:text-white text-sm underline underline-offset-2 hidden sm:block"
                >
                  Quedarme aquí
                </button>

                <button
                  onClick={handleDismiss}
                  className="p-1 text-white/70 hover:text-white transition-colors duration-200"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
