import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { countries } from '@/config/countries.config'

const country = countries.ve

export const metadata: Metadata = {
  title: `Sobre Nosotros - Test Paternidad Prenatal ${country.name}`,
  description: `Conoce más sobre SouthGenetics y nuestro servicio de pruebas de paternidad prenatal en ${country.name}. Laboratorio certificado con tecnología de vanguardia.`,
  alternates: {
    canonical: 'https://paternidadprenatal.com/ve/sobre-nosotros',
  },
}

export default function SobreNosotrosVenezuelaPage() {
  return (
    <main className="min-h-screen">
      <Header country={country} />
      
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sobre Nosotros
              </h1>
              <p className="text-xl text-gray-600">
                Brindamos tranquilidad a familias en {country.name} con pruebas de paternidad prenatal seguras y confiables.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
                <p className="text-gray-600">
                  En SouthGenetics, nos dedicamos a ofrecer pruebas de paternidad prenatal no invasivas 
                  con la más alta tecnología disponible. Entendemos que esta decisión puede ser 
                  emocionalmente compleja, por eso nos comprometemos a brindar un servicio 
                  humano, confidencial y profesional.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnología de Vanguardia</h2>
                <p className="text-gray-600 mb-4">
                  Trabajamos con DDC (DNA Diagnostics Center), uno de los laboratorios más 
                  reconocidos a nivel mundial en pruebas de ADN. Nuestra tecnología permite:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Análisis de ADN fetal libre en sangre materna</li>
                  <li>Pruebas desde la semana 7 de embarazo</li>
                  <li>99.9% de precisión en los resultados</li>
                  <li>Proceso 100% no invasivo y seguro</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Presencia en {country.name}</h2>
                <p className="text-gray-600 mb-4">
                  Atendemos a familias en todo el país, con especial presencia en:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {country.cities.map(city => (
                    <div key={city} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-800">{city}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mt-4">
                  Coordinamos la toma de muestras con laboratorios aliados en tu ciudad 
                  o mediante kits de recolección.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Formas de Pago en {country.name}</h2>
                <p className="text-gray-600 mb-4">
                  Entendemos la situación económica del país, por eso ofrecemos múltiples opciones de pago:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {country.paymentMethods.map(method => (
                    <div key={method} className="bg-green-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-green-800">{method}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-ocean-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔒</div>
                    <h3 className="font-semibold text-gray-900">Confidencialidad</h3>
                    <p className="text-sm text-gray-600">Tu privacidad es nuestra prioridad absoluta</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">💚</div>
                    <h3 className="font-semibold text-gray-900">Empatía</h3>
                    <p className="text-sm text-gray-600">Te acompañamos sin juicios</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">✅</div>
                    <h3 className="font-semibold text-gray-900">Precisión</h3>
                    <p className="text-sm text-gray-600">Resultados con 99.9% de confiabilidad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer country={country} />
    </main>
  )
}
