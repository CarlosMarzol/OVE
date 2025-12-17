import React from 'react';
import { ShieldCheck, Database, Scale, BrainCircuit, Globe, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mission: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen font-sans">
      {/* Hero Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-ven-blue/5 text-ven-blue text-xs font-bold tracking-widest uppercase mb-6 border border-ven-blue/10">
            <ShieldCheck className="w-4 h-4" />
            Manifiesto Institucional
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ven-dark mb-6 leading-tight">
            La estadística rigurosa como pilar de la libertad económica.
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Sin independencia y recursos adecuados, la integridad de los datos económicos —y las decisiones ciudadanas que se basan en ellos— se ve comprometida.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          
          {/* Section 1: The Context (General Philosophy) */}
          <div className="prose prose-lg prose-blue text-gray-600 mb-16">
            <div className="bg-ven-light p-8 rounded-2xl border-l-4 border-ven-red mb-8">
              <h3 className="text-ven-dark font-bold text-lg mb-2 flex items-center gap-2">
                <AlertTriangle className="text-ven-red" /> La Verdad en los Números
              </h3>
              <p className="text-base italic font-serif text-gray-700">
                "La calidad de una democracia puede medirse por la calidad de sus estadísticas. Cuando los datos son vulnerables, la realidad se vuelve negociable. Nosotros creemos que el acceso a cifras precisas no es un lujo técnico, sino un derecho fundamental para la toma de decisiones libres."
              </p>
            </div>
            
            <p>
              Vivimos en una era saturada de información, pero paradójicamente escasa de verdad verificable. El papel de un observatorio económico moderno trasciende la mera recolección de cifras; se trata de establecer un estándar de confianza. Las instituciones estadísticas sólidas actúan como faros: permiten a los inversores medir riesgos, a los ciudadanos evaluar su poder de compra y a la sociedad comprender su propio devenir.
            </p>
            <p>
              El silencio estadístico o la manipulación de indicadores generan un costo invisible pero devastador: la pérdida de la brújula nacional. Reconstruir series históricas, validar metodologías y proteger la autonomía del dato son actos de responsabilidad cívica. Sin una base numérica fiable, cualquier discusión sobre política económica es, en esencia, navegar a ciegas en medio de la tormenta.
            </p>
          </div>

          {/* Section 2: Complexity & AI */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <BrainCircuit className="w-10 h-10 text-ven-blue mb-4" />
               <h3 className="text-xl font-bold text-gray-800 mb-3">Tecnología con Propósito</h3>
               <p className="text-gray-600 text-sm leading-relaxed">
                 La inteligencia artificial tiene el poder de transformar datos dispersos en conocimiento, pero carece de juicio moral. Su utilidad depende enteramente de la calidad de la información con la que se alimenta. Nuestro compromiso es proveer esa "verdad fundamental" (ground truth) que convierte al algoritmo en una herramienta de claridad, no de confusión.
               </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <Globe className="w-10 h-10 text-ven-yellow mb-4" />
               <h3 className="text-xl font-bold text-gray-800 mb-3">Soberanía del Dato</h3>
               <p className="text-gray-600 text-sm leading-relaxed">
                 En un mundo globalizado, la independencia estadística es una forma de soberanía. Mantener metodologías armonizadas internacionalmente, pero gestionadas con autonomía local, asegura que la realidad venezolana sea contada con precisión técnica, resistiendo presiones externas o narrativas convenientes.
               </p>
            </div>
          </div>

          {/* Section 3: Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ven-dark mb-8 text-center">Nuestros Pilares</h2>
            <div className="space-y-6">
                <div className="flex gap-4 items-start">
                    <div className="bg-ven-blue text-white p-3 rounded-lg flex-shrink-0">
                        <Scale size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-800">Autonomía Técnica</h4>
                        <p className="text-gray-600 mt-2">
                             La metodología no se negocia. Nuestros protocolos de recolección y análisis responden estrictamente a criterios econométricos, blindando los resultados de ciclos políticos o intereses particulares.
                        </p>
                    </div>
                </div>
                
                <div className="flex gap-4 items-start">
                    <div className="bg-ven-blue text-white p-3 rounded-lg flex-shrink-0">
                        <Database size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-800">Innovación Adaptativa</h4>
                        <p className="text-gray-600 mt-2">
                            Ante la opacidad, innovación. Utilizamos big data, imágenes satelitales y levantamiento de precios en tiempo real para llenar los vacíos de información oficial, construyendo una imagen fidedigna de la economía sumergida y formal.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="bg-ven-blue text-white p-3 rounded-lg flex-shrink-0">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-800">Responsabilidad Pública</h4>
                        <p className="text-gray-600 mt-2">
                             Somos custodios de la confianza pública. Creemos que un ciudadano informado es el activo más valioso de la nación, y por ello trabajamos para democratizar el acceso a la complejidad económica.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-ven-dark rounded-2xl p-10 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-ven-blue rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
             
             <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Fortalezca la Transparencia</h3>
             <p className="text-gray-300 mb-8 max-w-lg mx-auto relative z-10">
                La información de calidad requiere compromiso. Únase a nuestra red de suscriptores para mantener este esfuerzo independiente.
             </p>
             <div className="flex justify-center gap-4 relative z-10">
                <Link to="/boletin" className="bg-ven-yellow text-ven-dark px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors">
                    Suscribirse al Boletín
                </Link>
                <Link to="/estadisticas" className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors">
                    Consultar Datos
                </Link>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Mission;