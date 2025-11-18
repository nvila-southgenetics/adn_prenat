'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Shield, Clock, UserCheck, Award, TrendingUp } from 'lucide-react'
import { smoothScrollTo } from '@/utils/smoothScroll'

const benefits = [
  {
    icon: CheckCircle,
    title: '99.9% de precisión',
    description: 'Resultados altamente confiables con tecnología de vanguardia certificada por DDC',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: '100% seguro',
    description: 'Sin riesgo para la madre ni el bebé. Prueba no invasiva y avalada médicamente',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Clock,
    title: 'Resultados en 10 días',
    description: 'Entrega rápida de resultados certificados con validez internacional',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: UserCheck,
    title: 'Acompañamiento profesional',
    description: 'Soporte humano y cercano durante todo el proceso, resolviendo cada duda',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Award,
    title: 'Respuestas claras',
    description: 'Informes fáciles de entender con interpretación profesional incluida',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: TrendingUp,
    title: 'Líderes en Latinoamérica',
    description: 'Más de 20 años liderando las pruebas prenatales no invasivas en Latinoamérica',
    color: 'from-red-500 to-red-600'
  }
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-32 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group text-center"
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
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
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-ocean-100">Pruebas realizadas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-ocean-100">Precisión garantizada</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10</div>
              <div className="text-ocean-100">Días hábiles para resultados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">L-V</div>
              <div className="text-ocean-100">8:00 - 18:00</div>
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
          <a
            href="/sobre-nosotros"
            className="bg-ocean-600 hover:bg-ocean-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Sobre Nosotros
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

