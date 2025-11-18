'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Droplets, FileCheck } from 'lucide-react'
import Image from 'next/image'
import { smoothScrollTo } from '@/utils/smoothScroll'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Contacto inicial',
    description: 'Escríbenos por WhatsApp o completa el formulario. Nuestro equipo en Cali te responde rapidísimo, resuelve tus dudas y coordina el siguiente paso desde nuestro laboratorio.',
    image: '/imgs/contacto-inicialardo.png',
    imageAlt: 'Contacto inicial prueba paternidad prenatal Colombia - Formulario y WhatsApp desde Cali',
    color: 'from-blue-500 to-cyan-500',
    position: 'left'
  },
  {
    number: '02',
    icon: Droplets,
    title: 'Toma de muestra',
    description: 'Coordinamos la toma de sangre de la mamá y el hisopo bucal del posible padre en nuestra sede de Cali o programamos la recolección donde la necesites. Es rápido, sin dolor y totalmente seguro.',
    image: '/imgs/isopado.png',
    imageAlt: 'Toma de muestra prueba paternidad prenatal Cali - Extracción de sangre e hisopado bucal',
    color: 'from-purple-500 to-pink-500',
    position: 'right'
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Resultados Claros',
    description: 'En 10 días hábiles te compartimos los resultados con 99.9% de precisión. Los entregamos de forma confidencial y te acompañamos para interpretarlos.',
    image: '/imgs/resultados.png',
    imageAlt: 'Resultados prueba paternidad prenatal Colombia - Certificado 99.9% precisión en 10 días hábiles',
    color: 'from-emerald-500 to-teal-500',
    position: 'left'
  }
]

export default function HowItWorksCo() {
  return (
    <section id="como-funciona" className="relative py-24 bg-gradient-to-b from-ocean-900 via-ocean-800 to-ocean-700 overflow-hidden text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            ¿Cómo <span className="text-ocean-300">funciona?</span>
          </h2>
          <p className="text-xl md:text-2xl text-ocean-100 max-w-3xl mx-auto">
            Un proceso simple y seguro en 3 pasos, coordinado desde nuestra sede en Cali
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                  {step.position === 'left' ? (
                    <>
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
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="mt-6 flex justify-center">
                            <a
                              href="/co/formulario"
                              className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-base"
                            >
                              ¡Contáctate ya!
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative pr-12">
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
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="mt-6 flex justify-center">
                            <a
                              href="/co/formulario"
                              className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-base"
                            >
                              ¡Contáctate ya!
                            </a>
                          </div>
                        </div>
                      </div>

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

                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-black text-4xl shadow-2xl border-4 border-white`}>
                      {step.number}
                    </div>
                  </div>
                </div>

                <div className="lg:hidden">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className={`w-20 h-20 flex-shrink-0 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg`}>
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-1 flex-1 bg-white/20 mt-4"></div>
                      )}
                    </div>

                    <div className="flex-1 pb-12">
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
                          {step.description}
                        </p>
                        <div className="mt-6 flex justify-center">
                          <button
                            onClick={() => smoothScrollTo('contacto', 1200)}
                            className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-base"
                          >
                            ¡Contáctate ya!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 md:p-12 shadow-2xl text-white max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Escríbenos y da el primer paso hacia la tranquilidad que necesitas. Coordinamos todo desde nuestros laboratorios en Cali.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573005550198"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center shadow-lg text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Contactar por WhatsApp
              </a>
              <a
                href="/co/formulario"
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
    </section>
  )
}

