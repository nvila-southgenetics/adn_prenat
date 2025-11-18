'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, Phone, User, Mail, Calendar, FileText, X } from 'lucide-react'
import Image from 'next/image'

export default function FormularioPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    telefono: '',
    acceptSMS: false,
    nombre: '',
    apellido: '',
    email: '',
    semana: '',
    acceptInfo: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.telefono && formData.acceptSMS) {
      setStep(2)
    }
  }

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nombre || !formData.apellido || !formData.email || !formData.semana || !formData.acceptInfo) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://n8n.srv908725.hstgr.cloud/webhook/recibo_lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          telefono: formData.telefono,
          semana: formData.semana,
          acceptSMS: formData.acceptSMS,
          acceptInfo: formData.acceptInfo
        })
      })

      if (!response.ok) {
        throw new Error('Error al enviar el formulario')
      }

      setShowThankYou(true)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      alert('Hubo un error al enviar tu información. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Form with background */}
      <div className="lg:w-1/2 bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-xl">
          {/* Botón volver */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700 font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver
            </a>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  step >= 1 ? 'bg-ocean-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {step > 1 ? <Check className="w-6 h-6" /> : '1'}
                </div>
                <span className={`text-sm font-medium ${step >= 1 ? 'text-ocean-600' : 'text-gray-400'}`}>
                  Teléfono
                </span>
              </div>
              
              <div className={`h-0.5 w-16 transition-all duration-300 ${step >= 2 ? 'bg-ocean-600' : 'bg-gray-200'}`}></div>
              
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  step >= 2 ? 'bg-ocean-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  2
                </div>
                <span className={`text-sm font-medium ${step >= 2 ? 'text-ocean-600' : 'text-gray-400'}`}>
                  Información
                </span>
              </div>
            </div>
          </div>

          {/* Form content */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Comencemos
                  </h1>
                  <p className="text-gray-600 mb-8">
                    Ingresa tu número de teléfono para continuar
                  </p>

                  <form onSubmit={handleStep1Submit} className="space-y-6">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                        Número de teléfono *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all duration-200 text-lg"
                          placeholder="+1 305 555 0198"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="acceptSMS"
                        name="acceptSMS"
                        checked={formData.acceptSMS}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-5 h-5 text-ocean-600 border-gray-300 rounded focus:ring-ocean-500"
                      />
                      <label htmlFor="acceptSMS" className="text-sm text-gray-600 leading-relaxed">
                        Acepto recibir mensajes de texto en el número proporcionado. Pueden aplicarse tarifas de mensajes y datos.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!formData.telefono || !formData.acceptSMS}
                      className="w-full bg-ocean-600 hover:bg-ocean-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg inline-flex items-center justify-center gap-2"
                    >
                      Continuar
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  {showThankYou ? (
                    <div className="text-center py-8">
                      <div className="mb-6">
                        <Check className="w-16 h-16 text-ocean-600 mx-auto mb-4" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        ¡Gracias por contactarnos!
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto">
                        Gracias por contactarte, nuestro equipo se comunicará contigo a la brevedad para asesorarte y acompañarte durante todo el proceso.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Información personal
                      </h1>
                      <p className="text-gray-600 mb-8">
                        Completa tus datos para continuar
                      </p>

                      <form onSubmit={handleStep2Submit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nombre *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all duration-200"
                            placeholder="Tu nombre"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="apellido" className="block text-sm font-semibold text-gray-700 mb-2">
                          Apellido *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all duration-200"
                            placeholder="Tu apellido"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Correo electrónico *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all duration-200"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="semana" className="block text-sm font-semibold text-gray-700 mb-2">
                        Semana de gestación *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          id="semana"
                          name="semana"
                          value={formData.semana}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all duration-200 appearance-none bg-white"
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="7-8">7-8 semanas</option>
                          <option value="9-12">9-12 semanas</option>
                          <option value="13-16">13-16 semanas</option>
                          <option value="17-20">17-20 semanas</option>
                          <option value="21-24">21-24 semanas</option>
                          <option value="25+">25+ semanas</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => setShowModal(true)}
                        className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700 font-medium text-sm underline transition-colors duration-200"
                      >
                        <FileText className="w-4 h-4" />
                        info-test-paternidad
                      </button>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="acceptInfo"
                        name="acceptInfo"
                        checked={formData.acceptInfo}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-5 h-5 text-ocean-600 border-gray-300 rounded focus:ring-ocean-500"
                      />
                      <label htmlFor="acceptInfo" className="text-sm text-gray-600 leading-relaxed">
                        He leído la información sobre la prueba y quiero continuar
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 text-lg"
                      >
                        Atrás
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.nombre || !formData.apellido || !formData.email || !formData.semana || !formData.acceptInfo}
                        className="flex-1 bg-ocean-600 hover:bg-ocean-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg inline-flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Enviando...
                          </>
                        ) : (
                          <>
                            Contáctanos
                            <ChevronRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right side - Image full height */}
      <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-screen">
        <Image
          src="/imgs/bebe-en-hombros.png"
          alt="Prueba de paternidad prenatal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 to-transparent"></div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Información sobre la prueba de paternidad prenatal
                    </h2>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">¿Cómo se realiza?</h3>
                      <p className="leading-relaxed">
                        El estudio se realiza mediante una extracción de sangre a la mamá (que no requiere ayuno ni preparación previa) y un hisopado al presunto padre. Se puede realizar a partir de la <span className="underline">semana 7 de embarazo</span>.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">Restricciones importantes</h3>
                      <p className="mb-3 leading-relaxed">
                        No es posible realizarlo en los siguientes casos:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>Embarazos múltiples (gemelos o mellizos)</li>
                        <li>Gestantes que se hayan sometido a un trasplante de órganos, células madre o médula ósea</li>
                        <li>Gestantes que hayan recibido terapia de ADN externa para el sistema inmunológico hace menos de 4 semanas</li>
                        <li>Gestantes que hayan tenido una transfusión de sangre hace menos de dos años</li>
                        <li>Gestantes que se encuentren con toxemia gestacional o tumor</li>
                      </ul>
                    </div>

                    <div className="bg-ocean-50 border-l-4 border-ocean-600 p-4 rounded-r-lg">
                      <p className="font-semibold text-lg text-gray-900 mb-1">Costo</p>
                      <p className="text-ocean-700 font-bold text-xl">$1,490 USD</p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setShowModal(false)}
                      className="bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                    >
                      Entendido
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
