'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Users, Shield, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import WhatsAppModalVe from './WhatsAppModalVe'

export default function HeroVe() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-r from-white via-gray-50 to-gray-100 overflow-hidden pt-[10px] pb-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <Image
            src="/imgs/nano-banana-2025-10-07T14-51-23.png"
            alt="Prueba de paternidad prenatal en Venezuela - Test paternidad prenatal Caracas"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:pl-0 lg:pr-8 mt-24"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Prueba de Paternidad{' '}
                <span className="text-blue-600">Prenatal</span>{' '}
                en Venezuela
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Precisa, segura y sin riesgos para la mamá ni el bebé. Resultados confiables, rápidos y accesibles desde la semana 7 de embarazo. Atención en Caracas solamente.
              </motion.p>
            </div>

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
                <span className="font-medium text-gray-800">Sin riesgos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-ocean-600" />
                <span className="font-medium text-gray-800">Resultados en días</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-ocean-600" />
                <span className="font-medium text-gray-800">Acompañamiento cercano</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(true)}
                className="btn-secondary text-center group"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                Hablar por WhatsApp
              </button>
              <a
                href="/ve/formulario"
                className="btn-outline border-ocean-600 text-ocean-600 hover:bg-ocean-600 hover:text-white text-center"
              >
                Solicitar información
              </a>
            </motion.div>
          </motion.div>

          <div className="hidden lg:block"></div>
        </div>
      </div>

      <WhatsAppModalVe isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} />
    </section>
  )
}
