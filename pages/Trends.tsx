import React from 'react';
import GeminiAnalyst from '../components/GeminiAnalyst';
import { LineChart, Zap } from 'lucide-react';

const Trends: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-ven-light min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-ven-yellow/10 text-ven-dark text-xs font-bold uppercase tracking-widest mb-4">
                Inteligencia Artificial
            </span>
            <h1 className="text-4xl font-extrabold text-ven-dark mb-6">Análisis de Tendencias</h1>
            <p className="text-gray-600 text-lg">
                Utilizamos modelos avanzados de lenguaje (Gemini 2.5) para procesar grandes volúmenes de datos económicos y ofrecer resúmenes ejecutivos sobre el comportamiento del mercado.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Zap className="text-ven-yellow w-5 h-5" /> Tópicos Calientes
                    </h3>
                    <ul className="space-y-3">
                        <li className="p-3 rounded-lg bg-gray-50 hover:bg-ven-blue/5 border border-transparent hover:border-ven-blue/20 cursor-pointer transition-all">
                            <p className="font-bold text-gray-800 text-sm">Brecha Cambiaria</p>
                            <p className="text-xs text-gray-500 mt-1">Alta volatilidad detectada esta semana.</p>
                        </li>
                        <li className="p-3 rounded-lg bg-gray-50 hover:bg-ven-blue/5 border border-transparent hover:border-ven-blue/20 cursor-pointer transition-all">
                            <p className="font-bold text-gray-800 text-sm">Producción Chevron</p>
                            <p className="text-xs text-gray-500 mt-1">Incremento sostenido en la Faja.</p>
                        </li>
                        <li className="p-3 rounded-lg bg-gray-50 hover:bg-ven-blue/5 border border-transparent hover:border-ven-blue/20 cursor-pointer transition-all">
                            <p className="font-bold text-gray-800 text-sm">Crédito Bancario</p>
                            <p className="text-xs text-gray-500 mt-1">Ligera flexibilización del encaje.</p>
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-ven-blue to-ven-dark p-6 rounded-2xl text-white shadow-xl">
                    <h3 className="font-bold mb-2">¿Necesitas data específica?</h3>
                    <p className="text-sm text-blue-100 mb-4">
                        Nuestros suscriptores premium pueden solicitar análisis a medida sobre sectores específicos.
                    </p>
                    <button className="w-full py-2 bg-ven-yellow text-ven-dark font-bold rounded-lg text-sm hover:bg-white transition-colors">
                        Contactar Ventas
                    </button>
                </div>
            </div>

            <div className="lg:col-span-2">
                <GeminiAnalyst />
                
                <div className="mt-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                        <LineChart className="text-ven-blue"/> Metodología de Análisis
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Nuestra herramienta de IA procesa información de fuentes públicas, informes del Banco Central de Venezuela (BCV), OPEP y reportes de mercado secundario. 
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Los análisis generados son revisados periódicamente por nuestro equipo de economistas para asegurar su coherencia, aunque se recomienda contrastar con los informes oficiales disponibles en la sección de Publicaciones para la toma de decisiones de inversión.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;