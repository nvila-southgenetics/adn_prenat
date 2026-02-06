'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Users, Shield, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import WhatsAppModalAr from './WhatsAppModalAr'

export default function HeroAr() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)

  return (
    <section id="inicio" className="relative min-h-[200vh] flex items-start bg-gradient-to-r from-white via-gray-50 to-gray-100 overflow-hidden pt-[10px] pb-0">
      {/* Imagen de fondo absoluta en el lado derecho - ocupa más espacio */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[60%] z-0">
        <Image
          src="/imgs/argentina_hero.png"
          alt="Prueba de paternidad prenatal en Argentina - Test paternidad prenatal Buenos Aires"
          fill
          className="object-cover object-top"
          priority
          sizes="60vw"
        />
        {/* Fade más notorio hacia el borde izquierdo para camuflarse con el fondo */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.1) 50%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 20%)'
          }}
        ></div>
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.3) 0%, transparent 20%)'
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10 h-full w-full">
        <div className="grid lg:grid-cols-[40%_60%] gap-0 items-start h-full min-h-[200vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 lg:pl-0 lg:pr-12 mt-24 flex items-center"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Prueba de Paternidad{' '}
                <span className="text-blue-600">Prenatal</span>{' '}
                en Argentina
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Precisa, segura y sin riesgos para la mamá ni el bebé. Resultados confiables, rápidos y accesibles desde la semana 7 de embarazo. Atención en Buenos Aires y Belgrano.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-8 h-8 text-ocean-600 flex-shrink-0" />
                <span className="font-semibold text-lg md:text-xl text-gray-800">99.9% de precisión</span>
              </div>
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-ocean-600 flex-shrink-0" />
                <span className="font-semibold text-lg md:text-xl text-gray-800">Sin riesgos</span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-ocean-600 flex-shrink-0" />
                <span className="font-semibold text-lg md:text-xl text-gray-800">Resultados en días</span>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-ocean-600 flex-shrink-0" />
                <span className="font-semibold text-lg md:text-xl text-gray-800">Acompañamiento cercano</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(true)}
                className="btn-secondary text-center group text-lg md:text-xl py-4 px-8"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
                Hablar por WhatsApp
              </button>
              <a
                href="/ar/formulario"
                className="btn-outline border-ocean-600 text-ocean-600 hover:bg-ocean-600 hover:text-white text-center text-lg md:text-xl py-4 px-8"
              >
                Solicitar información
              </a>
            </motion.div>
          </motion.div>

          {/* Espacio para la imagen (ya está en posición absoluta) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      <WhatsAppModalAr isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} />
    </section>
  )
}
