'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Experience() {
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
              alt="DDC DNA Diagnostic Center - Laboratorio certificado internacional para pruebas de paternidad prenatal"
              width={200}
              height={80}
              className="w-48 h-auto object-contain"
              priority
            />
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
              DNA Diagnostic Center
            </span>
          </div>

          <div className="flex-1 grid md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center text-center gap-2">
              <p className="text-4xl md:text-5xl font-black text-red-500 tracking-tight leading-tight">30</p>
              <p className="text-gray-200 leading-relaxed max-w-xs">
                Años de experiencia en pruebas de ADN
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <p className="text-4xl md:text-5xl font-black text-red-500 tracking-tight leading-tight">3,718</p>
              <p className="text-gray-200 leading-relaxed max-w-xs">
                Centros de recolección en Estados Unidos
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <p className="text-4xl md:text-5xl font-black text-red-500 tracking-tight leading-tight">23,470,350</p>
              <p className="text-gray-200 leading-relaxed max-w-xs">
                Clientes de paternidad atendidos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

