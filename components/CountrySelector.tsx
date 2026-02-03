'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Globe } from 'lucide-react'
import { getAllCountries, type CountryConfig } from '@/config/countries.config'

interface CountrySelectorProps {
  currentCountry: CountryConfig
  variant?: 'header' | 'footer'
}

export default function CountrySelector({ currentCountry, variant = 'header' }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const countries = getAllCountries()

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCountrySelect = (country: CountryConfig) => {
    if (country.code !== currentCountry.code) {
      // Obtener la ruta actual sin el prefijo de país
      const currentPath = window.location.pathname
        .replace(/^\/(ar|ve|co)/, '')
        .replace(/^\//, '')
      
      // Construir la nueva URL
      const newPath = country.urlPrefix + (currentPath ? `/${currentPath}` : '')
      window.location.href = newPath || '/'
    }
    setIsOpen(false)
  }

  const isHeader = variant === 'header'

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
          ${isHeader 
            ? 'text-white bg-white/10 hover:bg-white/20 border border-white/30' 
            : 'text-gray-300 hover:text-white hover:bg-white/10'
          }
        `}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          <span className="mr-1">{currentCountry.flag}</span>
          <span className="hidden sm:inline">{currentCountry.name}</span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`
              absolute z-50 mt-2 w-48 rounded-xl shadow-lg overflow-hidden
              ${isHeader 
                ? 'bg-white border border-gray-200 right-0' 
                : 'bg-navy-800 border border-navy-700 left-0 bottom-full mb-2'
              }
            `}
            role="listbox"
          >
            <div className="py-1">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleCountrySelect(country)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150
                    ${isHeader 
                      ? 'hover:bg-gray-50 text-gray-700' 
                      : 'hover:bg-navy-700 text-gray-300 hover:text-white'
                    }
                    ${country.code === currentCountry.code 
                      ? isHeader 
                        ? 'bg-ocean-50 text-ocean-700' 
                        : 'bg-navy-700 text-white' 
                      : ''
                    }
                  `}
                  role="option"
                  aria-selected={country.code === currentCountry.code}
                >
                  <span className="text-lg">{country.flag}</span>
                  <div className="flex-1">
                    <span className="font-medium">{country.name}</span>
                  </div>
                  {country.code === currentCountry.code && (
                    <div className={`
                      w-2 h-2 rounded-full
                      ${isHeader ? 'bg-ocean-500' : 'bg-accent-400'}
                    `} />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
