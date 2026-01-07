import React from 'react';
import { ShieldCheck, Database, Scale, BookOpen, Globe, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mission: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-white dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300">
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-ven-blue/5 dark:bg-ven-blue/20 text-ven-blue dark:text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 border border-ven-blue/10">
            <ShieldCheck className="w-4 h-4" />
            Manifiesto Institucional
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ven-dark dark:text-white mb-6 leading-tight">
            La estadística rigurosa como pilar de la libertad económica.
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
            Sin independencia institucional y recursos adecuados, la integridad de los datos económicos se ve comprometida, afectando la toma de decisiones ciudadanas.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          
          <div className="prose prose-lg prose-blue dark:prose-invert text-gray-600 dark:text-gray-300 mb-16">
            <div className="bg-ven-light dark:bg-slate-900 p-8 rounded-2xl border-l-4 border-ven-red mb-8">
              <h3 className="text-ven-dark dark:text-white font-bold text-lg mb-2 flex items-center gap-2">
                <AlertTriangle className="text-ven-red" /> La Integridad de las Cifras
              </h3>
              <p className="text-base italic font-serif text-gray-700 dark:text-gray-300">
                "La calidad de una democracia depende de la calidad de sus estadísticas. Cuando los datos son vulnerables, la realidad se vuelve negociable. El acceso a cifras precisas es un derecho fundamental."
              </p>
            </div>
            
            <p>
              El papel de un observatorio económico moderno trasciende la recolección de cifras; se trata de establecer un estándar de confianza técnica. Las instituciones estadísticas sólidas actúan como faros que permiten medir riesgos y comprender el devenir productivo de la nación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800">
               <BookOpen className="w-10 h-10 text-ven-blue mb-4" />
               <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Metodología Humana</h3>
               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                 Nuestras proyecciones no dependen de algoritmos opacos. Contamos con un equipo de economistas que interpretan la realidad social, política y productiva, aplicando modelos econométricos tradicionales de alta precisión.
               </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800">
               <Globe className="w-10 h-10 text-ven-yellow mb-4" />
               <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Soberanía del Dato</h3>
               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                 Mantener metodologías armonizadas internacionalmente asegura que la realidad venezolana sea contada con precisión técnica, resistiendo presiones externas o narrativas oficiales sesgadas.
               </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ven-dark dark:text-white mb-8 text-center">Nuestros Pilares</h2>
            <div className="space-y-6">
                <div className="flex gap-4 items-start">
                    <div className="bg-ven-blue text-white p-3 rounded-lg flex-shrink-0">
                        <Scale size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white">Autonomía Técnica</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                             La metodología técnica no se negocia. Nuestros protocolos responden estrictamente a criterios científicos, blindando los resultados de ciclos políticos.
                        </p>
                    </div>
                </div>
                
                <div className="flex gap-4 items-start">
                    <div className="bg-ven-blue text-white p-3 rounded-lg flex-shrink-0">
                        <Database size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white">Veracidad Empírica</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                            Levantamos datos en campo para sectores de consumo masivo y mercado cambiario, construyendo una imagen fidedigna de la economía formal e informal.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          <div className="bg-ven-dark dark:bg-slate-900 rounded-2xl p-10 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-ven-blue rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
             <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Transparencia de Datos</h3>
             <p className="text-gray-300 mb-8 max-w-lg mx-auto relative z-10">
                La información de calidad requiere compromiso técnico. Únase a nuestra red para mantener este esfuerzo independiente.
             </p>
             <div className="flex justify-center gap-4 relative z-10">
                <Link to="/boletin" className="bg-ven-yellow text-ven-dark px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors">
                    Suscribirse
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