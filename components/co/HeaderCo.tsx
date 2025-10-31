'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { smoothScrollTo } from '@/utils/smoothScroll'

export default function HeaderCo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId, 1200)
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="bg-ocean-700 text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+57 601 508 1234</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contacto@testadnprenatal.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-ocean-100">Laboratorio certificado en Cali</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="py-4">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">
                Test ADN Prenatal Colombia
              </h1>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                Cómo funciona
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                Beneficios
              </button>
              <button 
                onClick={() => scrollToSection('faqs')}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                Preguntas
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                Contáctanos
              </button>
              <a
                href="https://wa.me/573005550198"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
            </div>

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

          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection('como-funciona')}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  Cómo funciona
                </button>
                <button 
                  onClick={() => scrollToSection('beneficios')}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  Beneficios
                </button>
                <button 
                  onClick={() => scrollToSection('faqs')}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  Preguntas
                </button>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  Contáctanos
                </button>
                <a
                  href="https://wa.me/573005550198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

