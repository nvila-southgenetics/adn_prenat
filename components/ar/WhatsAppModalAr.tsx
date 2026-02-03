'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Phone } from 'lucide-react'
import { countries } from '@/config/countries.config'

interface WhatsAppModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WhatsAppModalAr({ isOpen, onClose }: WhatsAppModalProps) {
  const country = countries.ar
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, estoy interesado/a en la prueba de paternidad prenatal. Me gustaría recibir más información.')
    window.open(`https://wa.me/${country.whatsappNumber}?text=${message}`, '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 max-w-md w-full mx-auto overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Contactanos por WhatsApp</h3>
                  <p className="text-green-100 text-sm">Respuesta inmediata</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="text-center space-y-2">
                <p className="text-gray-600">
                  Nuestro equipo en Argentina está listo para ayudarte con todas tus consultas sobre la prueba de paternidad prenatal.
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{country.phone}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Te podemos ayudar con:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">&#10003;</span>
                    Información sobre el test prenatal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">&#10003;</span>
                    Precios y formas de pago en Argentina
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">&#10003;</span>
                    Proceso de toma de muestras
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">&#10003;</span>
                    Tiempos de entrega de resultados
                  </li>
                </ul>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                Iniciar conversación
              </button>

              <p className="text-center text-xs text-gray-400">
                {country.businessHours} (Hora Argentina)
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
