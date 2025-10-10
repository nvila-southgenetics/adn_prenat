'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Users } from 'lucide-react'
import Image from 'next/image'
import { smoothScrollTo } from '@/utils/smoothScroll'

export default function Empathy() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-orange-50/50 to-orange-50">
      {/* Gradiente adicional de desvanecido */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-50/30 to-amber-50/50 pointer-events-none"></div>
      <div className="relative z-10">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* Imagen y testimonio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative space-y-6"
          >
            {/* Imagen de mujer embarazada */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/imgs/mujer-embarazada.png"
                alt="Mujer embarazada tranquila y acompañada"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent"></div>
            </div>

            {/* Tarjeta de testimonio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl shadow-lg p-6"
            >
              <p className="text-gray-700 italic leading-relaxed">
                "El equipo fue muy comprensivo y me explicaron todo el proceso. Me sentí acompañada en todo momento."
              </p>
              <p className="text-gray-600 text-sm mt-3">— María, Ciudad de México</p>
            </motion.div>
          </motion.div>

          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Sabemos que este momento puede ser{' '}
                <span className="text-orange-600">difícil</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Dudas, ansiedad, miedo al qué dirán… son emociones completamente normales cuando no hay claridad.
                Lo importante es que hoy existen <span className="font-bold text-orange-600">opciones seguras, rápidas y confidenciales</span> para ayudarte a encontrar la tranquilidad que merecés.
              </motion.p>
            </div>

            <motion.div 
              className="space-y-5 text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Cada historia es diferente, pero todas comparten algo en común: la necesidad de saber.
                En SouthGenetics acompañamos a cientos de mujeres que, como vos, necesitan una respuesta clara sin poner en riesgo su embarazo.
              </p>
              
              <p>
                Nuestro compromiso es ofrecerte un proceso seguro, discreto y humano, guiado paso a paso por profesionales que entienden lo que estás atravesando.
              </p>
            </motion.div>

            {/* Valores destacados */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col items-center text-center p-5 bg-white/60 backdrop-blur-sm rounded-lg">
                <Heart className="w-10 h-10 text-orange-500 mb-3" />
                <span className="font-semibold text-gray-800">Acompañamiento humano</span>
              </div>
              <div className="flex flex-col items-center text-center p-5 bg-white/60 backdrop-blur-sm rounded-lg">
                <Shield className="w-10 h-10 text-amber-500 mb-3" />
                <span className="font-semibold text-gray-800">100% confidencial</span>
              </div>
              <div className="flex flex-col items-center text-center p-5 bg-white/60 backdrop-blur-sm rounded-lg">
                <Users className="w-10 h-10 text-yellow-600 mb-3" />
                <span className="font-semibold text-gray-800">Profesionales expertos</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

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
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Contáctanos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

