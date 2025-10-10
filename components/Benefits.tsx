'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Shield, Clock, UserCheck, Award, Heart } from 'lucide-react'
import { smoothScrollTo } from '@/utils/smoothScroll'

const benefits = [
  {
    icon: CheckCircle,
    title: '99.9% de precisión',
    description: 'Resultados altamente confiables con tecnología de vanguardia',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: '100% seguro',
    description: 'Sin riesgo para la madre ni el bebé en desarrollo',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Clock,
    title: 'Resultados rápidos',
    description: 'Entrega de resultados en 5-7 días hábiles',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: UserCheck,
    title: 'Acompañamiento humano',
    description: 'Soporte personalizado durante todo el proceso',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Award,
    title: 'Certificación médica',
    description: 'Laboratorio certificado y personal especializado',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Heart,
    title: 'Confidencialidad total',
    description: 'Privacidad garantizada en todos los resultados',
    color: 'from-pink-500 to-pink-600'
  }
]

export default function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Beneficios destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Por qué elegir nuestra prueba de paternidad prenatal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white hover:shadow-xl card-hover">
                {/* Icono */}
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Contenido */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ocean-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-ocean-600 to-ocean-800 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-ocean-100">Pruebas realizadas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-ocean-100">Precisión garantizada</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5-7</div>
              <div className="text-ocean-100">Días para resultados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-ocean-100">Atención al cliente</div>
            </div>
          </div>
        </motion.div>

        {/* CTA de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => smoothScrollTo('contacto', 1200)}
            className="bg-ocean-600 hover:bg-ocean-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Contáctanos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

