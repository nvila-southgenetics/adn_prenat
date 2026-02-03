'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Script from 'next/script'
import { faqSchema } from '@/utils/schema'
import WhatsAppModalVe from './WhatsAppModalVe'

const faqs = [
  {
    question: '¿Qué significa prenatal?',
    answer: 'Prenatal significa "antes del nacimiento". La prueba de paternidad prenatal se realiza mientras la mujer está embarazada, a partir de la semana 7 de gestación. No es para bebés ya nacidos ni para niños: es exclusivamente para determinar la paternidad durante el embarazo, de forma segura y no invasiva.'
  },
  {
    question: '¿Cuál es el precio en Venezuela?',
    answer: 'El precio de la prueba de paternidad prenatal es de $1,800 USD. Incluye la toma de muestra, el análisis de laboratorio, el informe con validez legal y el acompañamiento de nuestros especialistas. Aceptamos pagos en dólares mediante Zelle, PayPal, transferencia bancaria internacional y criptomonedas.'
  },
  {
    question: '¿Qué tan precisa es la prueba?',
    answer: 'La prueba de paternidad prenatal tiene una precisión del 99.9%. Utilizamos la misma tecnología de laboratorio certificada que se emplea en clínicas de referencia mundial, con resultados válidos internacionalmente.'
  },
  {
    question: '¿Cuánto tardan los resultados?',
    answer: 'Aproximadamente 10-12 días hábiles desde que recibimos la muestra en el laboratorio. Te avisamos apenas estén listos y los enviamos de manera segura y confidencial.'
  },
  {
    question: '¿Es segura para el bebé?',
    answer: 'Sí. Solo requiere una muestra de sangre de la mamá, no es invasiva y no implica riesgos para el bebé. Puedes realizarla desde la semana 7 de embarazo de manera totalmente segura.'
  },
  {
    question: '¿Cómo puedo pagar en Venezuela?',
    answer: 'Aceptamos Zelle, PayPal, transferencia bancaria internacional en dólares, pago móvil y criptomonedas (Bitcoin, USDT). También ofrecemos planes de pago flexibles para facilitar el acceso.'
  },
  {
    question: '¿Qué incluye el precio?',
    answer: 'Incluye la toma de muestras, el análisis de laboratorio, el informe con validez legal, la entrega segura de resultados y el acompañamiento de nuestros especialistas durante todo el proceso.'
  },
  {
    question: '¿Atienden en todo el país?',
    answer: 'Sí, atendemos en Caracas solamente. La toma de muestra se puede coordinar con laboratorios aliados o mediante kit de recolección.'
  }
]

export default function FAQVe() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="section-padding bg-gradient-to-br from-ocean-800 via-ocean-900 to-navy-900">
      <Script
        id="faq-schema-venezuela"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs))
        }}
      />
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-ocean-100 max-w-3xl mx-auto">
            Lo esencial sobre nuestra prueba de paternidad prenatal en Venezuela
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-ocean-600 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-ocean-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas más información?
            </h3>
            <p className="text-gray-600 mb-6">
              Escríbenos por WhatsApp y con gusto te acompañamos en lo que sigue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(true)}
                className="btn-primary inline-flex items-center justify-center"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Consultar por WhatsApp
              </button>
              <a
                href="/ve/formulario"
                className="btn-outline inline-flex items-center justify-center"
              >
                Contáctanos
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <WhatsAppModalVe isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} />
    </section>
  )
}
