import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { countries } from '@/config/countries.config'

const country = countries.ar

export const metadata: Metadata = {
  title: `Formulario de Contacto - Test Paternidad Prenatal ${country.name}`,
  description: `Solicita información sobre pruebas de paternidad prenatal en ${country.name}. Completa el formulario y te contactamos.`,
  alternates: {
    canonical: 'https://paternidadprenatal.com/ar/formulario',
  },
}

export default function FormularioArgentinaPage() {
  return (
    <main className="min-h-screen">
      <Header country={country} />
      
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Solicitar información
              </h1>
              <p className="text-lg text-gray-600">
                Completá el formulario y te contactamos a la brevedad. 
                Toda la información es confidencial.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                      placeholder="+54 11 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad
                  </label>
                  <select
                    id="ciudad"
                    name="ciudad"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                  >
                    <option value="">Seleccioná tu ciudad</option>
                    {country.cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                    <option value="otra">Otra ciudad</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="semanas" className="block text-sm font-medium text-gray-700 mb-2">
                    Semanas de embarazo (aproximado)
                  </label>
                  <input
                    type="number"
                    id="semanas"
                    name="semanas"
                    min="0"
                    max="42"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                    placeholder="Ej: 10"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Tenés alguna pregunta específica?
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all resize-none"
                    placeholder="Contanos tus dudas..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacidad"
                    name="privacidad"
                    required
                    className="mt-1 w-4 h-4 text-ocean-600 border-gray-300 rounded focus:ring-ocean-500"
                  />
                  <label htmlFor="privacidad" className="text-sm text-gray-600">
                    Acepto la{' '}
                    <a href="#privacidad" className="text-ocean-600 hover:underline">
                      política de privacidad
                    </a>{' '}
                    y el tratamiento de mis datos personales. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  Enviar solicitud
                </button>

                <p className="text-center text-sm text-gray-500">
                  También podés contactarnos directamente por{' '}
                  <a 
                    href={`https://wa.me/${country.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer country={country} />
    </main>
  )
}
