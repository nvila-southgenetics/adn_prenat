'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Baby, Users, Shield, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { smoothScrollTo } from '@/utils/smoothScroll'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-r from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Imagen de fondo a la derecha */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <Image
            src="/imgs/nano-banana-2025-10-07T14-51-23.png"
            alt="ADN Prenatal - Fondo"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
        {/* Gradiente para fundido */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:pl-0 lg:pr-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Test de Paternidad{' '}
                <span className="text-blue-600">Prenatal</span>{' '}
                en México
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Precisa, segura y sin riesgos para la madre ni el bebé.
                Resultados confiables en pocos días.
              </motion.p>
            </div>

            {/* Características destacadas */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-ocean-600" />
                <span className="font-medium text-gray-800">99.9% de precisión</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-ocean-600" />
                <span className="font-medium text-gray-800">100% seguro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-ocean-600" />
                <span className="font-medium text-gray-800">Resultados rápidos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-ocean-600" />
                <span className="font-medium text-gray-800">Acompañamiento humano</span>
              </div>
            </motion.div>

            {/* Botones de acción */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="https://wa.me/525512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center group"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                Hablar por WhatsApp
              </a>
              <button 
                onClick={() => smoothScrollTo('contacto', 1200)}
                className="btn-outline border-ocean-600 text-ocean-600 hover:bg-ocean-600 hover:text-white"
              >
                Solicitar información
              </button>
            </motion.div>
          </motion.div>

          {/* Espacio para la imagen (solo en desktop) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <motion.a
        href="https://wa.me/525512345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-accent-500 hover:bg-accent-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50 transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </section>
  )
}
