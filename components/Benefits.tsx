'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Shield, Clock, UserCheck, Award, FileText, Headphones } from 'lucide-react'
import { smoothScrollTo } from '@/utils/smoothScroll'
import { countries, type CountryConfig } from '@/config/countries.config'

const includedServices = [
  {
    icon: FileText,
    title: 'Toma de muestra incluida',
    description: 'Coordinación completa de la toma de muestra en laboratorios aliados o kit de recolección a domicilio',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Award,
    title: 'Análisis de laboratorio certificado',
    description: 'Análisis completo con tecnología de vanguardia certificada por DDC, líder mundial en pruebas de paternidad',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Headphones,
    title: 'Acompañamiento personalizado',
    description: 'Soporte humano y cercano durante todo el proceso, resolviendo cada duda con profesionales expertos',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Shield,
    title: 'Entrega segura y confidencial',
    description: 'Resultados entregados de manera segura y confidencial, protegiendo tu privacidad en todo momento',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Clock,
    title: 'Resultados en 10 días hábiles',
    description: 'Entrega rápida de resultados certificados con validez internacional, sin esperas innecesarias',
    color: 'from-teal-500 to-teal-600'
  }
]

interface BenefitsProps {
  country?: CountryConfig
}

export default function Benefits({ country = countries.co }: BenefitsProps) {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Un servicio premium completo que incluye todo lo necesario
          </p>
        </motion.div>

        {/* Precio destacado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-ocean-600 to-ocean-800 rounded-2xl p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            <div className="relative z-10 text-center">
              <div className="mb-2">
                <span className="text-ocean-100 text-lg font-medium">Inversión única</span>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                {country.priceDisplay}
              </div>
              <p className="text-ocean-100 text-lg">
                Todo incluido • Sin costos ocultos • Sin sorpresas
              </p>
            </div>
          </div>
        </motion.div>

        {/* Qué incluye */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Todo lo que incluye tu servicio premium
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {includedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-ocean-200"
            >
              <div className="space-y-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
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
          className="mt-12 bg-gradient-to-r from-ocean-600 to-ocean-800 rounded-2xl p-6 md:p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">5,000+</div>
              <div className="text-ocean-100">Pruebas realizadas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">99.9%</div>
              <div className="text-ocean-100">Precisión garantizada</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">10</div>
              <div className="text-ocean-100">Días hábiles para resultados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">L-V</div>
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
          className="mt-10 text-center"
        >
          <a
            href={`${country.urlPrefix}/formulario`}
            className="bg-ocean-600 hover:bg-ocean-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Solicitar información
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

