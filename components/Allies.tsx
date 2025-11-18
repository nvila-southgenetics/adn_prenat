'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'

export default function Allies() {
  return (
    <section className="relative py-8 bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center justify-center rounded-full bg-white/10 p-2.5">
              <ShieldCheck className="w-8 h-8 text-red-500" />
            </span>
            <div className="flex items-center gap-6">
              <div className="flex flex-col leading-tight">
                <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/50 font-semibold">SouthGenetics</span>
                <Image
                  src="/imgs/logo.png"
                  alt="SouthGenetics - Test Paternidad Prenatal - Servicios de prueba de paternidad prenatal no invasiva"
                  width={200}
                  height={70}
                  className="w-48 h-auto object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/50 font-semibold">Respaldado internacional</span>
                <Image
                  src="/imgs/logoDDC.png"
                  alt="DDC DNA Diagnostic Center - Laboratorio certificado para análisis de ADN prenatal y paternidad"
                  width={220}
                  height={80}
                  className="w-52 h-auto object-contain"
                  priority
                />
                <span className="text-[0.6rem] md:text-xs uppercase tracking-[0.2em] text-gray-300 font-semibold">
                  DNA Diagnostic Center
                </span>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl max-w-2xl font-medium text-gray-200">
            <span className="font-semibold text-red-500">Líderes mundiales en pruebas de paternidad y análisis de ADN</span>, con más de 25 años brindando resultados precisos, certificados y reconocidos en todo el mundo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

