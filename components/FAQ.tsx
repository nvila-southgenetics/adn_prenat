'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Script from 'next/script'
import { smoothScrollTo } from '@/utils/smoothScroll'
import { faqSchema } from '@/utils/schema'
import WhatsAppModal from './WhatsAppModal'
import { countries, type CountryConfig } from '@/config/countries.config'

interface FAQProps {
  country?: CountryConfig
}

const getFaqs = (country: CountryConfig) => [
  {
    question: '¿Qué significa prenatal?',
    answer: 'Prenatal significa “antes del nacimiento”. Nuestra prueba de paternidad prenatal se realiza mientras la mujer está embarazada, a partir de la semana 7 u 8 de gestación. No es para bebés ya nacidos ni para niños: es exclusivamente para determinar la paternidad durante el embarazo, de forma segura y no invasiva.'
  },
  {
    question: '¿Cuál es el precio?',
    answer: country.code === 'ar'
      ? `El precio de la prueba de paternidad prenatal es de ${country.priceDisplay}. Incluye la toma de muestra, el análisis de laboratorio, el informe con validez legal y el acompañamiento de nuestros especialistas. Aceptamos Mercado Pago, transferencia bancaria, tarjetas y otros medios de pago locales.`
      : country.code === 've'
      ? `El precio de la prueba de paternidad prenatal es de ${country.priceDisplay}. Incluye la toma de muestra, el análisis de laboratorio, el informe con validez legal y el acompañamiento de nuestros especialistas. Aceptamos pagos en dólares mediante Zelle, PayPal, transferencia bancaria internacional y criptomonedas.`
      : `El precio de la prueba de paternidad prenatal es de ${country.priceDisplay}. Incluye la toma de muestra, el análisis de laboratorio, el certificado de resultados y el acompañamiento durante todo el proceso. No hay costos ocultos.`
  },
  {
    question: '¿Qué tan precisa es la prueba?',
    answer: 'Nuestra prueba de paternidad prenatal tiene una precisión del 99.9%, utilizando tecnología de vanguardia y análisis de ADN fetal libre en sangre materna. Es la misma tecnología utilizada en hospitales de primer nivel mundial.'
  },
  {
    question: '¿Cuánto tardan los resultados?',
    answer: country.code === 've'
      ? `Aproximadamente ${country.deliveryDays} desde que recibimos la muestra en el laboratorio. Te avisamos apenas estén listos y los enviamos de manera segura y confidencial.`
      : `Aproximadamente ${country.deliveryDays} desde que recibimos la muestra en el laboratorio. Te avisamos apenas estén listos y los enviamos de manera segura y confidencial.`
  },
  {
    question: '¿Es segura para el bebé?',
    answer: 'Sí, es completamente segura. Solo requiere una muestra de sangre de la madre, sin ningún riesgo para el bebé o la madre. No es invasiva y no afecta el desarrollo del feto de ninguna manera.'
  },
  {
    question: '¿Cómo se paga?',
    answer: country.code === 'ar'
      ? `Aceptamos Mercado Pago (tarjetas, transferencia, efectivo en Rapipago/Pago Fácil), transferencias bancarias en pesos o dólares, y tarjetas de crédito/débito. También ofrecemos planes de pago flexibles.`
      : country.code === 've'
      ? `Aceptamos Zelle, PayPal, transferencia bancaria internacional en dólares, pago móvil y criptomonedas (Bitcoin, USDT). También ofrecemos planes de pago flexibles para facilitar el acceso.`
      : 'Aceptamos pagos en línea con tarjeta de crédito o débito a través de Stripe, así como transferencias bancarias. También ofrecemos planes de pago flexibles para tu comodidad.'
  },
  {
    question: '¿Puedo hacerla en cualquier semana de embarazo?',
    answer: 'La prueba se puede realizar a partir de la semana 8 de gestación, cuando ya hay suficiente ADN fetal libre en la sangre materna. No hay límite superior, se puede realizar en cualquier momento del embarazo.'
  },
  {
    question: '¿Los resultados son confidenciales?',
    answer: 'Absolutamente. Mantenemos la máxima confidencialidad en todos los aspectos del proceso. Los resultados solo se entregan a la persona autorizada y utilizamos protocolos de seguridad de nivel hospitalario.'
  },
  {
    question: '¿Qué incluye el precio?',
    answer: 'El precio incluye la toma de muestra, análisis de laboratorio, certificado de resultados, envío seguro de resultados y soporte durante todo el proceso. No hay costos ocultos.'
  },
  {
    question: '¿Puedo hacer la prueba si soy menor de edad?',
    answer: 'Sí, pero necesitamos el consentimiento de un padre, madre o tutor legal. Te guiaremos en todo el proceso legal necesario para realizar la prueba de forma segura y legal.'
  }
]

export default function FAQ({ country = countries.co }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const faqs = getFaqs(country)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="section-padding bg-gradient-to-br from-ocean-800 via-ocean-900 to-navy-900">
      <Script
        id="faq-schema"
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
            Resolvemos las dudas más comunes sobre nuestra prueba de paternidad prenatal
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
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-base font-semibold text-gray-900 pr-4">
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
                      <div className="px-6 pb-4">
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

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-ocean-100 rounded-full flex items-center justify-center">
                <HelpCircle className="w-7 h-7 text-ocean-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Nuestro equipo de especialistas está disponible de lunes a viernes de 8:00 a 18:00 para resolver todas tus dudas.
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
                href={`${country.urlPrefix}/formulario`}
                className="btn-outline inline-flex items-center justify-center"
              >
                {country.code === 'ar' ? 'Contactanos' : 'Contáctanos'}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <WhatsAppModal isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} country={country} />
    </section>
  )
}

