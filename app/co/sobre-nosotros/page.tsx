import { Metadata } from 'next'
import HeaderCo from '@/components/co/HeaderCo'
import FooterCo from '@/components/co/FooterCo'
import { Shield, Users, Award, Heart, Target, Microscope } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Test ADN Prenatal Colombia',
  description: 'Conoce más sobre Test ADN Prenatal en Colombia, nuestra misión y el equipo de profesionales comprometidos con brindarte resultados precisos y confidenciales.',
}

export default function SobreNosotrosCo() {
  return (
    <>
      <HeaderCo />
      
      {/* Hero Section */}
      <section 
        className="relative h-[85vh] min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imgs/medicos.png')" }}
      >
        <div className="absolute inset-0 bg-gray-900/20"></div>
      </section>

      {/* SouthGenetics */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                SouthGenetics
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-ocean-500 to-ocean-600 mx-auto mb-8"></div>
            </div>
            <div className="bg-gradient-to-br from-ocean-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  <span className="font-bold text-ocean-700">SouthGenetics</span> cuenta con una presencia internacional con 20 años de experiencia en Latinoamérica y el Caribe.
                </p>
                <p>
                  Nos enorgullece haber introducido numerosas innovaciones pioneras en la región. Fuimos los primeros en poner a disposición de pacientes y médicos las pruebas prenatales de ADN fetal, las biopsias líquidas y los biomarcadores en el campo de urología.
                </p>
                <p>
                  Lideramos la implementación de pruebas diagnósticas avanzadas, asegurando que tanto pacientes como profesionales de la salud tengan acceso a las herramientas más innovadoras y precisas disponibles a nivel mundial.
                </p>
                <p>
                  Además, somos partners de los laboratorios más importantes en pruebas moleculares en el campo de la oncología.
                </p>
              </div>
              <div className="mt-10 text-center">
                <a
                  href="https://southgenetics.com/#nosotros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white px-8 py-4 rounded-xl font-bold hover:from-ocean-700 hover:to-ocean-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Conocer más
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Nuestra Historia en Colombia
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Test ADN Prenatal llegó a Colombia con una misión clara: hacer accesibles las pruebas de paternidad prenatal no invasivas de la más alta calidad, con resultados confiables y un servicio completamente confidencial.
                  </p>
                  <p>
                    Desde nuestra sede en Cali, coordinamos todo el proceso en alianza con laboratorios certificados internacionalmente. Entendemos que este momento puede estar lleno de emociones y preguntas, por eso te acompañamos en cada paso con empatía, profesionalismo y discreción absoluta.
                  </p>
                  <p>
                    Trabajamos con el laboratorio DDC (DNA Diagnostics Center), líder mundial en pruebas de ADN, utilizando la tecnología más avanzada en análisis de ADN fetal libre en sangre materna, garantizando resultados con 99.9% de precisión.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-ocean-100 to-ocean-200 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-ocean-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Seguridad</h3>
                      <p className="text-gray-700">Procedimientos no invasivos y completamente seguros</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-ocean-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Certificación</h3>
                      <p className="text-gray-700">Alianza con laboratorio DDC con certificaciones internacionales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-ocean-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Empatía</h3>
                      <p className="text-gray-700">Acompañamiento personalizado desde Cali</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <img 
                src="/imgs/partners.png" 
                alt="Nuestros Partners"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Nuestros Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confidencialidad</h3>
                <p className="text-gray-600">
                  Protegemos tu información con los más altos estándares de privacidad y seguridad
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excelencia</h3>
                <p className="text-gray-600">
                  Trabajamos con laboratorios certificados internacionalmente de primer nivel
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Empatía</h3>
                <p className="text-gray-600">
                  Comprendemos la importancia de este momento y te acompañamos con respeto y cuidado
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Profesionalismo</h3>
                <p className="text-gray-600">
                  Nuestro equipo en Colombia está capacitado para brindarte el mejor servicio
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Precisión</h3>
                <p className="text-gray-600">
                  Garantizamos resultados con 99.9% de precisión respaldados por tecnología avanzada
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compromiso</h3>
                <p className="text-gray-600">
                  Nos dedicamos a darte la tranquilidad que necesitas con respuestas claras y confiables
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="py-20 bg-gradient-to-br from-ocean-600 to-ocean-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              ¿Por Qué Elegirnos en Colombia?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">✓ Tecnología Avanzada</h3>
                <p className="text-ocean-100">
                  Análisis de ADN con laboratorio DDC, líder mundial en pruebas de paternidad
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">✓ Sin Riesgos</h3>
                <p className="text-ocean-100">
                  Procedimiento 100% no invasivo, sin peligro para la madre ni el bebé
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">✓ Resultados Rápidos</h3>
                <p className="text-ocean-100">
                  Obtén tus resultados en aproximadamente 10 días hábiles
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">✓ Atención Local</h3>
                <p className="text-ocean-100">
                  Coordinamos todo desde Cali y atendemos en toda Colombia
                </p>
              </div>
            </div>
            <div className="mt-12">
              <a
                href="/co/formulario"
                className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
              >
                Comienza tu prueba ahora
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterCo />
    </>
  )
}

