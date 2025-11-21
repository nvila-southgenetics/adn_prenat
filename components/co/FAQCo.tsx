'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Script from 'next/script'
import { smoothScrollTo } from '@/utils/smoothScroll'
import { faqSchema } from '@/utils/schema'
import WhatsAppModal from '../WhatsAppModal'

const faqs = [
  {
    question: '¿Qué tan precisa es la prueba?',
    answer: 'La prueba de paternidad prenatal que realizamos en Cali tiene una precisión del 99.9%. Utilizamos la misma tecnología de laboratorio certificada que se emplea en clínicas de referencia mundial.'
  },
  {
    question: '¿Cuánto tardan los resultados?',
    answer: 'Aproximadamente 10 días hábiles desde que recibimos la muestra en el laboratorio aliado DDC. Te avisamos apenas estén listos y los enviamos de manera segura y confidencial.'
  },
  {
    question: '¿Es segura para el bebé?',
    answer: 'Sí. Solo requiere una muestra de sangre de la mamá, no es invasiva y no implica riesgos para el bebé. Puedes realizarla desde la semana 8 de embarazo.'
  },
  {
    question: '¿Cómo puedo pagar?',
    answer: 'Aceptamos transferencias bancarias, PSE, tarjetas débito y crédito, y opciones como Nequi o Daviplata. También contamos con planes de pago flexibles.'
  },
  {
    question: '¿Qué incluye el precio?',
    answer: 'Incluye la toma de muestras, el análisis de laboratorio, el informe con validez legal, la entrega segura de resultados y el acompañamiento de nuestros especialistas en Cali.'
  }
]

export default function FAQCo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="section-padding bg-gradient-to-br from-ocean-800 via-ocean-900 to-navy-900">
      <Script
        id="faq-schema-colombia"
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-ocean-100 max-w-3xl mx-auto">
            Lo esencial sobre nuestra prueba de paternidad prenatal en Cali
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
                href="/co/formulario"
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

      <WhatsAppModal isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} />
    </section>
  )
}

