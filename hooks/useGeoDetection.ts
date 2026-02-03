'use client'

import { useState, useEffect, useCallback } from 'react'
import { countryCodeMap, countries, defaultCountry, type CountryConfig } from '@/config/countries.config'

const GEO_PREFERENCE_KEY = 'geo_country_preference'
const GEO_BANNER_DISMISSED_KEY = 'geo_banner_dismissed'
const GEO_DETECTED_KEY = 'geo_detected_country'

interface GeoDetectionResult {
  detectedCountry: CountryConfig | null
  currentCountry: CountryConfig
  isLoading: boolean
  shouldShowBanner: boolean
  dismissBanner: () => void
  setCountryPreference: (countryCode: string) => void
  clearPreference: () => void
}

// Detecta el país actual basado en la URL
const getCurrentCountryFromUrl = (): CountryConfig => {
  if (typeof window === 'undefined') return defaultCountry
  
  const pathname = window.location.pathname
  
  if (pathname.startsWith('/ar')) {
    return countries.ar
  }
  if (pathname.startsWith('/ve')) {
    return countries.ve
  }
  if (pathname.startsWith('/co')) {
    return countries.co
  }
  
  // Raíz = Colombia
  return defaultCountry
}

export function useGeoDetection(): GeoDetectionResult {
  const [detectedCountry, setDetectedCountry] = useState<CountryConfig | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [shouldShowBanner, setShouldShowBanner] = useState(false)
  const [currentCountry, setCurrentCountry] = useState<CountryConfig>(defaultCountry)

  // Detectar país por IP usando API gratuita
  const detectCountryByIP = useCallback(async () => {
    try {
      // Verificar si ya se descartó el banner en esta sesión
      const bannerDismissed = sessionStorage.getItem(GEO_BANNER_DISMISSED_KEY)
      if (bannerDismissed === 'true') {
        setIsLoading(false)
        return
      }

      // Verificar si el usuario ya tiene una preferencia guardada
      const savedPreference = localStorage.getItem(GEO_PREFERENCE_KEY)
      if (savedPreference) {
        setIsLoading(false)
        return
      }

      // Verificar si ya detectamos el país anteriormente
      const cachedDetection = sessionStorage.getItem(GEO_DETECTED_KEY)
      if (cachedDetection) {
        const cached = JSON.parse(cachedDetection)
        const country = countries[cached.countryCode as keyof typeof countries]
        if (country) {
          setDetectedCountry(country)
          // Mostrar banner solo si el país detectado es diferente al actual
          const current = getCurrentCountryFromUrl()
          if (country.code !== current.code) {
            setShouldShowBanner(true)
          }
        }
        setIsLoading(false)
        return
      }

      // Hacer la detección de IP
      const response = await fetch('https://ipapi.co/json/', {
        signal: AbortSignal.timeout(5000) // Timeout de 5 segundos
      })
      
      if (!response.ok) throw new Error('Failed to fetch')
      
      const data = await response.json()
      const countryCode = countryCodeMap[data.country_code]
      
      if (countryCode && countries[countryCode as keyof typeof countries]) {
        const detected = countries[countryCode as keyof typeof countries]
        setDetectedCountry(detected)
        
        // Guardar en sessionStorage para no hacer llamadas repetidas
        sessionStorage.setItem(GEO_DETECTED_KEY, JSON.stringify({
          countryCode,
          timestamp: Date.now()
        }))
        
        // Mostrar banner solo si el país detectado es diferente al actual
        const current = getCurrentCountryFromUrl()
        if (detected.code !== current.code) {
          setShouldShowBanner(true)
        }
      }
    } catch (error) {
      // Si falla la detección, simplemente no mostramos el banner
      console.log('Geo detection failed:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Inicializar país actual basado en URL
  useEffect(() => {
    setCurrentCountry(getCurrentCountryFromUrl())
  }, [])

  // Detectar país por IP al montar
  useEffect(() => {
    detectCountryByIP()
  }, [detectCountryByIP])

  // Descartar banner
  const dismissBanner = useCallback(() => {
    setShouldShowBanner(false)
    sessionStorage.setItem(GEO_BANNER_DISMISSED_KEY, 'true')
  }, [])

  // Guardar preferencia de país
  const setCountryPreference = useCallback((countryCode: string) => {
    localStorage.setItem(GEO_PREFERENCE_KEY, countryCode)
    setShouldShowBanner(false)
    sessionStorage.setItem(GEO_BANNER_DISMISSED_KEY, 'true')
  }, [])

  // Limpiar preferencia
  const clearPreference = useCallback(() => {
    localStorage.removeItem(GEO_PREFERENCE_KEY)
    sessionStorage.removeItem(GEO_BANNER_DISMISSED_KEY)
    sessionStorage.removeItem(GEO_DETECTED_KEY)
  }, [])

  return {
    detectedCountry,
    currentCountry,
    isLoading,
    shouldShowBanner,
    dismissBanner,
    setCountryPreference,
    clearPreference
  }
}
