'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Droplets, FileCheck } from 'lucide-react'
import Image from 'next/image'
import { smoothScrollTo } from '@/utils/smoothScroll'
import WhatsAppModal from './WhatsAppModal'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Contacto inicial',
    description: 'Comunicate con nosotros por WhatsApp o completa nuestro formulario web. Estamos disponibles cualquier día a cualquier hora. Te responderemos de inmediato para resolver todas tus dudas y coordinar el siguiente paso de forma personalizada.',
    image: '/imgs/contacto-inicialardo.png',
    imageAlt: 'Contacto inicial para prueba de paternidad prenatal - Formulario y WhatsApp disponible 24/7',
    color: 'from-blue-500 to-cyan-500',
    position: 'left' // imagen a la izquierda
  },
  {
    number: '02',
    icon: Droplets,
    title: 'Toma de muestra',
    description: 'Realizamos una simple extracción de sangre de la madre y un hisopo bucal del posible padre. Es un proceso rápido, sin dolor y completamente seguro para el bebé en desarrollo.',
    image: '/imgs/isopado.png',
    imageAlt: 'Toma de muestra para prueba paternidad prenatal - Extracción de sangre materna e hisopado del padre',
    color: 'from-purple-500 to-pink-500',
    position: 'right' // imagen a la derecha
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Resultados Claros',
    description: 'En 10 días hábiles recibirás tus resultados con 99.9% de precisión. La entrega es totalmente confidencial y te ofrecemos soporte profesional para interpretar los resultados.',
    image: '/imgs/resultados.png',
    imageAlt: 'Resultados de prueba de paternidad prenatal - Certificado con 99.9% de precisión en 10 días hábiles',
    color: 'from-emerald-500 to-teal-500',
    position: 'left' // imagen a la izquierda
  }
]

export default function HowItWorks() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)

  return (
    <section id="como-funciona" className="relative py-16 bg-gradient-to-b from-ocean-900 via-ocean-800 to-ocean-700 overflow-hidden text-white">
      <div className="container-custom">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            ¿Cómo <span className="text-ocean-300">funciona?</span>
          </h2>
          <p className="text-lg md:text-xl text-ocean-100 max-w-3xl mx-auto">
            Un proceso simple y seguro en 3 pasos
          </p>
        </motion.div>

        {/* Timeline vertical */}
        <div className="relative max-w-6xl mx-auto">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 transform -translate-x-1/2 hidden lg:block"></div>

          {/* Steps */}
          <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
                {/* Desktop layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                  {step.position === 'left' ? (
                    <>
                      {/* Imagen a la izquierda */}
                      <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                          <Image
                            src={step.image}
                            alt={step.imageAlt}
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`}></div>
                        </div>
                      </div>

                      {/* Texto a la derecha */}
                      <div className="relative pl-12">
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                          <div className="flex items-center gap-5 mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                              <step.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-gray-900">
                                {step.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-base text-gray-700 leading-relaxed">
                            {step.number === '01' ? (
                              <>
                                Comunicate con nosotros por WhatsApp o completa nuestro formulario web.{' '}
                                <span className="font-bold text-blue-600">
                                  Estamos disponibles cualquier día a cualquier hora.
                                </span>{' '}
                                Te responderemos de inmediato para resolver todas tus dudas y coordinar el siguiente paso de forma personalizada.
                              </>
                            ) : (
                              step.description
                            )}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Texto a la izquierda */}
                      <div className="relative pr-12">
                        <div className="bg-white rounded-2xl p-6 shadow-xl">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                              <step.icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">
                                {step.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-base text-gray-700 leading-relaxed">
                            {step.number === '01' ? (
                              <>
                                Comunicate con nosotros por WhatsApp o completa nuestro formulario web.{' '}
                                <span className="font-bold text-blue-600">
                                  Estamos disponibles cualquier día a cualquier hora.
                                </span>{' '}
                                Te responderemos de inmediato para resolver todas tus dudas y coordinar el siguiente paso de forma personalizada.
                              </>
                            ) : (
                              step.description
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Imagen a la derecha */}
                      <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                          <Image
                            src={step.image}
                            alt={step.imageAlt}
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`}></div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Círculo en el centro con número */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`w-28 h-28 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-black text-3xl shadow-2xl border-4 border-white`}>
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Mobile/Tablet layout */}
                <div className="lg:hidden">
                  <div className="flex gap-6">
                    {/* Línea lateral con número */}
                    <div className="flex flex-col items-center">
                      <div className={`w-20 h-20 flex-shrink-0 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg`}>
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-1 flex-1 bg-white/20 mt-4"></div>
                      )}
                </div>

                {/* Contenido */}
                    <div className="flex-1 pb-12">
                      {/* Imagen */}
                      <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          width={500}
                          height={500}
                          className="w-full h-auto object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`}></div>
                      </div>

                      {/* Texto */}
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center`}>
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {step.number === '01' ? (
                            <>
                              Comunicate con nosotros por WhatsApp o completa nuestro formulario web.{' '}
                              <span className="font-bold text-blue-600">
                                Estamos disponibles cualquier día a cualquier hora.
                              </span>{' '}
                              Te responderemos de inmediato para resolver todas tus dudas y coordinar el siguiente paso de forma personalizada.
                            </>
                          ) : (
                            step.description
                          )}
                        </p>
                      </div>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-6 md:p-8 shadow-2xl text-white max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              ¿Listo para comenzar?
            </h3>
            <p className="text-blue-100 text-base mb-6">
              Contactanos ahora y da el primer paso hacia la tranquilidad que necesitas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center shadow-lg text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Contactar por WhatsApp
              </button>
              <a
                href="/formulario"
                className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center shadow-lg text-lg"
              >
                Ir al formulario
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <WhatsAppModal isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} />
    </section>
  )
}
