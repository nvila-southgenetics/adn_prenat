'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { smoothScrollTo } from '@/utils/smoothScroll'
import WhatsAppModal from './WhatsAppModal'
import CountrySelector from './CountrySelector'
import { countries, type CountryConfig } from '@/config/countries.config'

interface HeaderProps {
  country?: CountryConfig
}

export default function Header({ country = countries.co }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === country.urlPrefix || pathname === `${country.urlPrefix}/`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      smoothScrollTo(sectionId, 1200)
      setIsMenuOpen(false)
    } else {
      window.location.href = `${country.urlPrefix}/#${sectionId}`
    }
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-sm'
    }`}>
      {/* Barra superior con contacto */}
      <div className="bg-ocean-700 text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className={country.code === 'ar' ? '' : 'bg-sky-100 px-2 py-1 rounded'}>
                <Image
                  src="/imgs/logo.png"
                  alt="SouthGenetics - Test Paternidad Prenatal - Pruebas de paternidad prenatal certificadas"
                  width={100}
                  height={30}
                  className="h-6 w-auto object-contain"
                  priority
                />
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                <span>{country.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{country.email}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <span className="text-ocean-100">
                  {country.code === 'ar' ? 'Horario: 9:00 - 20:00' : country.businessHours}
                </span>
              </div>
              {/* Selector de país */}
              <CountrySelector currentCountry={country} variant="header" />
              {/* Botón WhatsApp para móviles */}
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(true)}
                className="md:hidden bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className="py-4">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a href={country.urlPrefix || '/'}>
                <h1 className="text-xl font-bold gradient-text">
                  Test Paternidad Prenatal
                </h1>
              </a>
            </div>

            {/* Menú desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => handleNavClick('inicio')}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                Inicio
              </button>
              <button 
                onClick={() => handleNavClick('como-funciona')}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                Cómo funciona
              </button>
              <button 
                onClick={() => handleNavClick('beneficios')}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                Precio
              </button>
              {country.code !== 'ar' && (
                <button 
                  onClick={() => handleNavClick('beneficios')}
                  className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
                >
                  Beneficios
                </button>
              )}
              <button 
                onClick={() => handleNavClick('faqs')}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                FAQs
              </button>
              <a
                href={`${country.urlPrefix}/sobre-nosotros`}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                Sobre nosotros
              </a>
              <button 
                onClick={() => handleNavClick('contacto')}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                Contacto
              </button>
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(true)}
                className="btn-secondary"
              >
                WhatsApp
              </button>
            </div>

            {/* Botón menú móvil */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => handleNavClick('inicio')}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => handleNavClick('como-funciona')}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  Cómo funciona
                </button>
                <button 
                  onClick={() => handleNavClick('beneficios')}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  Precio
                </button>
                {country.code !== 'ar' && (
                  <button 
                    onClick={() => handleNavClick('beneficios')}
                    className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                  >
                    Beneficios
                  </button>
                )}
                <button 
                  onClick={() => handleNavClick('faqs')}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  FAQs
                </button>
                <a
                  href={`${country.urlPrefix}/sobre-nosotros`}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  Sobre nosotros
                </a>
                <button 
                  onClick={() => handleNavClick('contacto')}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  Contacto
                </button>
                <button
                  type="button"
                  onClick={() => setShowWhatsAppModal(true)}
                  className="btn-secondary text-center"
                >
                  WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <WhatsAppModal isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} country={country} />
    </header>
  )
}
