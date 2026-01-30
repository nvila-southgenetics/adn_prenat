'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section id="contacto" className="relative py-16 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Te orientamos
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Completa el formulario en 2 sencillos pasos y nuestro equipo se contactará contigo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="/formulario"
              className="bg-ocean-600 hover:bg-ocean-700 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-xl group"
            >
              Iniciar formulario
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

