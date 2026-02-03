'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, Clock, MapPin } from 'lucide-react'
import { countries } from '@/config/countries.config'
import WhatsAppModalAr from './WhatsAppModalAr'

export default function ContactCTAAr() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const country = countries.ar

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-ocean-600 via-ocean-700 to-navy-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                ¿Lista para dar el siguiente paso?
              </h2>
              <p className="text-xl text-ocean-100">
                Contactanos hoy y resolvé tus dudas. Estamos acá para acompañarte en Argentina.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-ocean-200 text-sm">Teléfono / WhatsApp</p>
                  <p className="text-lg font-semibold">{country.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-ocean-200 text-sm">Email</p>
                  <p className="text-lg font-semibold">{country.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-ocean-200 text-sm">Horario de atención</p>
                  <p className="text-lg font-semibold">{country.businessHours}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-ocean-200 text-sm">Atendemos en</p>
                  <p className="text-lg font-semibold">{country.cities.join(', ')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card de CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-10 h-10 text-green-600" />
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Escribinos por WhatsApp
                  </h3>
                  <p className="text-gray-600">
                    Respuesta inmediata de nuestro equipo en Argentina. 
                    Resolvemos todas tus dudas sin compromiso.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Precio del test:</span>
                    <span className="font-bold text-gray-900">{country.priceDisplay}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Tiempo de resultados:</span>
                    <span className="font-semibold text-gray-900">{country.deliveryDays}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Precisión:</span>
                    <span className="font-semibold text-green-600">99.9%</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowWhatsAppModal(true)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Iniciar conversación
                </button>

                <p className="text-xs text-gray-400">
                  También podés completar el{' '}
                  <a href="/ar/formulario" className="text-ocean-600 hover:underline">
                    formulario de contacto
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WhatsAppModalAr isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} />
    </section>
  )
}
