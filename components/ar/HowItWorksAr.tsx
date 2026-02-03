'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, FileText, Droplet, FlaskConical, FileCheck, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import WhatsAppModalAr from './WhatsAppModalAr'

const steps = [
  {
    number: '01',
    title: 'Contactanos',
    description: 'Escribinos por WhatsApp o completá el formulario. Te explicamos todo el proceso y resolvemos tus dudas.',
    icon: MessageCircle,
    image: '/imgs/contacto-inicial.png'
  },
  {
    number: '02',
    title: 'Coordinamos la toma de muestra',
    description: 'Agendamos la extracción de sangre de la mamá en un laboratorio aliado cerca tuyo o con kit a domicilio.',
    icon: FileText,
    image: '/imgs/muestra.png'
  },
  {
    number: '03',
    title: 'Tomamos las muestras',
    description: 'Solo se necesita una muestra de sangre de la mamá y una muestra simple del posible padre (saliva o sangre).',
    icon: Droplet,
    image: '/imgs/muestra-2.png'
  },
  {
    number: '04',
    title: 'Análisis en laboratorio',
    description: 'Las muestras se envían a nuestro laboratorio certificado DDC en Estados Unidos para el análisis de ADN.',
    icon: FlaskConical,
    image: '/imgs/medicos.png'
  },
  {
    number: '05',
    title: 'Recibís los resultados',
    description: 'En aproximadamente 10 días hábiles, te entregamos los resultados de forma segura y confidencial.',
    icon: FileCheck,
    image: '/imgs/resultados.png'
  }
]

export default function HowItWorksAr() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)

  return (
    <section id="como-funciona" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un proceso simple, seguro y 100% confidencial. Te acompañamos en cada paso desde Argentina.
          </p>
        </motion.div>

        {/* Timeline de pasos */}
        <div className="relative">
          {/* Línea conectora (solo desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean-200 via-ocean-400 to-ocean-600 transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Número del paso (centro en desktop) */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-ocean-600 rounded-full items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  {step.number}
                </div>

                {/* Contenido */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-24' : 'lg:text-left lg:pl-24'}`}>
                  <div className={`bg-white rounded-2xl p-8 shadow-lg ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-lg`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="lg:hidden w-12 h-12 bg-ocean-600 rounded-full flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-ocean-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className={`text-gray-600 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Imagen */}
                <div className="flex-1">
                  <div className={`relative w-full max-w-md mx-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ${
                    index % 2 === 0 ? 'lg:ml-24' : 'lg:mr-24'
                  }`}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Tenés dudas sobre el proceso? Estamos para ayudarte
          </p>
          <button
            type="button"
            onClick={() => setShowWhatsAppModal(true)}
            className="btn-primary inline-flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Hablemos por WhatsApp
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>

      <WhatsAppModalAr isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} />
    </section>
  )
}
