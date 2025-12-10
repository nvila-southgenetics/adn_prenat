'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'
import WhatsAppModal from './WhatsAppModal'

export default function Contact() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    semana: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Validar datos
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.semana) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Simular envío
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      
      // Redirigir a WhatsApp con mensaje predefinido
      const mensaje = `Hola, me interesa la prueba de paternidad prenatal. Mi información:
- Nombre: ${formData.nombre}
- Email: ${formData.email}
- Teléfono: ${formData.telefono}
- Semana de gestación: ${formData.semana}`

      // Reportar conversión a Google Ads
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion()
      }

      const whatsappUrl = `https://wa.me/573002315914?text=${encodeURIComponent(mensaje)}`
      window.open(whatsappUrl, '_blank')
      
      // Limpiar formulario
      setFormData({ nombre: '', email: '', telefono: '', semana: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. <span className="font-bold text-green-600">Lunes a viernes de 8:00 a 18:00</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Solicita información
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="+57 317 364 4276"
                  />
                </div>

                <div>
                  <label htmlFor="semana" className="block text-sm font-semibold text-gray-700 mb-2">
                    Semana de gestación *
                  </label>
                  <select
                    id="semana"
                    name="semana"
                    value={formData.semana}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="8-12">8-12 semanas</option>
                    <option value="13-16">13-16 semanas</option>
                    <option value="17-20">17-20 semanas</option>
                    <option value="21-24">21-24 semanas</option>
                    <option value="25+">25+ semanas</option>
                  </select>
                </div>

                {/* Estado del envío */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">¡Información enviada correctamente!</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Por favor, completa todos los campos obligatorios.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar información
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-ocean-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ubicación</h4>
                    <p className="text-gray-600">Montevideo, Uruguay</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                    <p className="text-gray-600">+57 317 364 4276</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">cjflorez@southgenetics.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón de WhatsApp */}
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">¿Prefieres WhatsApp?</h4>
              <p className="text-accent-100 mb-6">
                Chatea con nosotros directamente y recibe respuestas inmediatas a tus preguntas.
              </p>
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(true)}
                className="btn-secondary bg-white text-accent-600 hover:bg-gray-100 inline-flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <WhatsAppModal isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} />
    </section>
  )
}
