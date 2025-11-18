'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function GlobalTrust() {
  return (
    <section className="relative py-8 bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="flex flex-col items-start gap-2">
            <Image
              src="/imgs/logoDDC.png"
              alt="DDC - DNA Diagnostic Center"
              width={200}
              height={80}
              className="w-48 h-auto object-contain"
              priority
            />
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
              DNA Diagnostic Center
            </span>
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-2xl md:text-3xl font-semibold text-gray-100 leading-tight">
              Tu ADN tiene las respuestas. Descúbrelas con el <span className="text-red-500">laboratorio más confiable</span> en pruebas de Paternidad, Prenatal y Legal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

