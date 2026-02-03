'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, MessageCircle } from 'lucide-react'
import WhatsAppModalAr from './WhatsAppModalAr'

export default function EmpathyAr() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido emocional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-ocean-100 text-ocean-700 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Te entendemos</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Sabemos que este momento{' '}
              <span className="text-ocean-600">puede ser difícil</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Tomar la decisión de hacer una prueba de paternidad prenatal no es fácil. 
              Hay emociones, dudas y preguntas que necesitan respuestas claras y honestas.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Por eso, nuestro equipo en Argentina está acá para acompañarte con respeto, 
              confidencialidad y sin juicios. No estás sola en esto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(true)}
                className="btn-primary inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablemos por WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Tarjetas de valores */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-ocean-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    100% Confidencial
                  </h3>
                  <p className="text-gray-600">
                    Tu privacidad es sagrada. Nadie más que vos tendrá acceso a los resultados. 
                    Manejamos todo con la máxima discreción.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Acompañamiento humano
                  </h3>
                  <p className="text-gray-600">
                    No sos un número. Nuestro equipo te acompaña en cada paso, 
                    respondiendo tus dudas y brindándote el apoyo que necesitás.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Sin juicios
                  </h3>
                  <p className="text-gray-600">
                    Cada situación es única y válida. Estamos acá para ayudarte, 
                    no para cuestionar tus decisiones. Contás con nuestro apoyo incondicional.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WhatsAppModalAr isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} />
    </section>
  )
}
