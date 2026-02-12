'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Shield, Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import { countries } from '@/config/countries.config'
import WhatsAppModalAr from './WhatsAppModalAr'
import CountrySelector from '../CountrySelector'

export default function FooterAr() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const country = countries.ar
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <footer className="bg-navy-900 text-white">
        {/* Contenido principal */}
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Información de la empresa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/imgs/logo.png"
                  alt="SouthGenetics - Test Paternidad Prenatal Argentina"
                  width={150}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
                <h3 className="text-xl font-bold gradient-text">
                  Test Paternidad Prenatal
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pruebas de paternidad prenatal precisas y seguras para familias en Argentina.
                Utilizamos tecnología de vanguardia para brindarte resultados confiables y confidenciales en Buenos Aires y Belgrano.
              </p>
              
              {/* Características destacadas */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-accent-400" />
                  <span className="text-sm text-gray-300">100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-accent-400" />
                  <span className="text-sm text-gray-300">Confidencial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-accent-400" />
                  <span className="text-sm text-gray-300">99.9% Precisión</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-accent-400" />
                  <span className="text-sm text-gray-300">Certificado</span>
                </div>
              </div>
            </motion.div>

            {/* Selector de país */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-400 mb-2">Cambiar país</p>
              <CountrySelector currentCountry={country} variant="footer" />
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contacto Argentina</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-400" />
                  <span className="text-gray-300">{country.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-400" />
                  <span className="text-gray-300">{country.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent-400" />
                  <span className="text-gray-300">{country.mainCity}, {country.name}</span>
                </div>
              </div>

              {/* Botón de WhatsApp */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setShowWhatsAppModal(true)}
                  className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-navy-800">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                <p>&copy; 2024 Test ADN Prenatal Argentina. Todos los derechos reservados.</p>
              </motion.div>

              {/* Certificaciones */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2 text-accent-400">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Certificado SSL</span>
                </div>
                <div className="flex items-center space-x-2 text-accent-400">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Laboratorio Certificado</span>
                </div>
              </motion.div>

              {/* Botón para volver arriba */}
              <motion.button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm">Volver arriba</span>
              </motion.button>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppModalAr isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} />
    </div>
  )
}
