'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'
import { countries, type CountryConfig } from '@/config/countries.config'

interface WhatsAppModalProps {
  isOpen: boolean
  onClose: () => void
  country?: CountryConfig
}

export default function WhatsAppModal({ isOpen, onClose, country = countries.co }: WhatsAppModalProps) {
  // Scroll al inicio cuando se abre el modal
  useEffect(() => {
    if (isOpen) {
      // Guardar la posición actual
      const scrollY = window.scrollY
      
      // Prevenir scroll del body
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      
      // Restaurar cuando se cierra
      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  const handleConsultar = () => {
    // Reportar conversión a Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion()
    }

    // Abrir WhatsApp con mensaje predefinido
    const mensaje = 'Hola, quiero recibir más información sobre el test de paternidad prenatal.'
    const whatsappUrl = `https://wa.me/${country.whatsappNumber}?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose}
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col my-auto"
              style={{ marginTop: 'auto', marginBottom: 'auto' }}
            >
              {/* Header fijo */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-200 flex-shrink-0">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Información sobre la prueba de paternidad prenatal
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Contenido con scroll */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="space-y-6 text-gray-700">
                  {/* Precio arriba */}
                  <div className="bg-ocean-50 border-l-4 border-ocean-600 p-4 rounded-r-lg">
                    <p className="font-semibold text-lg text-gray-900 mb-1">Precio de la prueba</p>
                    <p className="text-ocean-700 font-bold text-xl">{country.priceDisplay}</p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="text-red-700 font-semibold leading-relaxed">
                      ⚠️ La prueba solo se realiza durante el embarazo, no en bebés nacidos.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">¿Cómo funciona la prueba?</h3>
                    <p className="leading-relaxed">
                      La prueba es muy sencilla: solo necesitamos una muestra de sangre de la {country.terms.mom} (no requiere ayuno ni preparación previa) y un hisopado del presunto padre. Lo mejor es que puedes realizarla desde las <span className="underline font-bold">7 semanas de embarazo</span>.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Importante tener en cuenta</h3>
                    <p className="mb-3 leading-relaxed">
                      Lamentablemente, no podemos realizar la prueba en los siguientes casos:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>Embarazos múltiples (gemelos o mellizos)</li>
                      <li>Si la gestante se ha sometido a un trasplante de órganos, células madre o médula ósea</li>
                      <li>Si la gestante ha recibido terapia de ADN externa para el sistema inmunológico hace menos de 4 semanas</li>
                      <li>Si la gestante ha tenido una transfusión de sangre hace menos de dos años</li>
                      <li>Si la gestante se encuentra con toxemia gestacional o tumor</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer fijo con botones */}
              <div className="border-t border-gray-200 p-6 md:p-8 flex justify-end gap-4 flex-shrink-0">
                <button
                  onClick={onClose}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Cerrar
                </button>
                <button
                  onClick={handleConsultar}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Ir a WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

