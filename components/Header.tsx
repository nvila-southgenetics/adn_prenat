'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import { smoothScrollTo } from '@/utils/smoothScroll'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

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
      window.location.href = `/#${sectionId}`
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
              <div className="bg-sky-100 px-2 py-1 rounded">
                <Image
                  src="/imgs/logo.png"
                  alt="SouthGenetics - Test Paternidad Prenatal - Pruebas de paternidad prenatal certificadas"
                  width={100}
                  height={30}
                  className="h-6 w-auto object-contain"
                  priority
                />
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                <span>+57 317 364 4276</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>cjflorez@southgenetics.com</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-ocean-100">Lunes a viernes 8:00 - 18:00</span>
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
              <a href="/">
                <h1 className="text-2xl font-bold gradient-text">
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
                Beneficios
              </button>
              <button 
                onClick={() => handleNavClick('faqs')}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200"
              >
                FAQs
              </button>
              <a
                href="/sobre-nosotros"
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
              <a
                href="https://wa.me/573173644276"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                    (window as any).gtag_report_conversion()
                  }
                }}
              >
                WhatsApp
              </a>
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
                  Beneficios
                </button>
                <button 
                  onClick={() => handleNavClick('faqs')}
                  className="text-left text-gray-700 hover:text-ocean-600 font-medium py-2"
                >
                  FAQs
                </button>
                <a
                  href="/sobre-nosotros"
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
                <a
                  href="https://wa.me/573173644276"
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
