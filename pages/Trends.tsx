import React from 'react';
import { LineChart, Zap, BookOpen, Search, BarChart4 } from 'lucide-react';
import SEO from '../components/SEO';

const Trends: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-ven-light dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <SEO 
        title="Tendencias e Insights de Mercado" 
        description="Análisis técnico de las tendencias económicas en Venezuela, proyecciones basadas en datos macroeconómicos y monitoreo de campo."
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-ven-blue/10 text-ven-blue dark:text-ven-yellow text-xs font-bold uppercase tracking-widest mb-4">
                Monitoreo Técnico
            </span>
            <h1 className="text-4xl font-extrabold text-ven-dark dark:text-white mb-6">Tendencias del Mercado</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
                Análisis estructurado de la coyuntura financiera nacional basado en el procesamiento técnico de fuentes oficiales y levantamientos de campo propios.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                        <Zap className="text-ven-yellow w-5 h-5" /> Tópicos de Interés
                    </h3>
                    <ul className="space-y-3">
                        <li className="p-3 rounded-lg bg-gray-50 dark:bg-slate-800 hover:bg-ven-blue/5 dark:hover:bg-slate-700 border border-transparent hover:border-ven-blue/20 cursor-pointer transition-all">
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">Brecha Cambiaria</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Presión detectada sobre la tasa oficial en el cierre de mes.</p>
                        </li>
                        <li className="p-3 rounded-lg bg-gray-50 dark:bg-slate-800 hover:bg-ven-blue/5 dark:hover:bg-slate-700 border border-transparent hover:border-ven-blue/20 cursor-pointer transition-all">
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">Producción Chevron</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Aporte incremental a la oferta de divisas nacional.</p>
                        </li>
                        <li className="p-3 rounded-lg bg-gray-50 dark:bg-slate-800 hover:bg-ven-blue/5 dark:hover:bg-slate-700 border border-transparent hover:border-ven-blue/20 cursor-pointer transition-all">
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">Consumo en Bodegones</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Ralentización del sector comercio minorista de lujo.</p>
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-ven-blue to-ven-dark dark:from-slate-800 dark:to-slate-900 p-6 rounded-2xl text-white shadow-xl">
                    <h3 className="font-bold mb-2">Solicitudes Técnicas</h3>
                    <p className="text-sm text-blue-100 dark:text-gray-300 mb-4">
                        ¿Necesita un estudio detallado sobre un sector específico? Nuestro equipo de economistas elabora consultorías personalizadas.
                    </p>
                    <button className="w-full py-2 bg-ven-yellow text-ven-dark font-bold rounded-lg text-sm hover:bg-white transition-colors">
                        Solicitar Consultoría
                    </button>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-ven-blue/10 dark:bg-ven-yellow/10 rounded-xl">
                            <BarChart4 className="text-ven-blue dark:text-ven-yellow w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-gray-800 dark:text-white">Perspectiva del Economista</h3>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Informe de Coyuntura Técnica</p>
                        </div>
                    </div>
                    
                    <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p className="mb-4">
                            Los datos recopilados durante la última semana sugieren una resistencia en el nivel de precios de la canasta básica alimentaria. A pesar de la relativa estabilidad cambiaria del BCV, los costos logísticos internos continúan presionando los márgenes de comercialización.
                        </p>
                        <p className="mb-4">
                            La liquidez monetaria registró un incremento del 3,2% mensual, lo cual se alinea con el financiamiento del gasto público previsto para el trimestre. Este flujo de capital VES está siendo monitoreado por su posible impacto en la demanda de divisas paralela.
                        </p>
                        <div className="bg-ven-light dark:bg-slate-800 p-4 rounded-lg border-l-4 border-ven-yellow my-6">
                            <p className="italic font-medium">"El equilibrio macroeconómico actual es altamente dependiente de la continuidad de las intervenciones del Banco Central."</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm transition-colors">
                    <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <LineChart className="text-ven-blue dark:text-blue-400"/> Rigurosidad en el Análisis
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        Nuestra metodología rechaza las proyecciones automatizadas sin supervisión. Cada dato presentado pasa por un proceso de limpieza, validación estadística y revisión por pares expertos en economía política venezolana.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Este enfoque humano garantiza que las matices de una economía multimoneda y altamente distorsionada sean capturadas con precisión, algo que los modelos estadísticos genéricos suelen pasar por alto.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;