import React, { useState } from 'react';
import { Sparkles, Loader2, BookOpen, BrainCircuit } from 'lucide-react';
import { getEconomicAnalysis } from '../services/geminiService';
import { AnalysisTopic } from '../types';
import ReactMarkdown from 'react-markdown';

const GeminiAnalyst: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>(AnalysisTopic.INFLATION);
  const [analysis, setAnalysis] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);

  const handleGenerate = async () => {
    setLoading(true);
    setAnalysis("");
    
    // Simulate context data based on topic to feed the AI
    let context = "";
    if (selectedTopic === AnalysisTopic.INFLATION) context = "Inflación mensual junio 2.4%, acumulada 50% aprox.";
    if (selectedTopic === AnalysisTopic.EXCHANGE) context = "Brecha cambiaria aumentando al 10%.";
    
    const result = await getEconomicAnalysis(selectedTopic, context);
    setAnalysis(result);
    setLoading(false);
    setHasGenerated(true);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden relative transition-colors">
      {/* Decorative top gradient */}
      <div className="h-2 w-full bg-gradient-to-r from-ven-blue via-ven-blue to-ven-yellow"></div>
      
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-ven-blue/10 dark:bg-ven-blue/20 p-2.5 rounded-lg border border-ven-blue/20 dark:border-ven-blue/30">
            <BrainCircuit className="text-ven-blue dark:text-blue-400 w-6 h-6" />
          </div>
          <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white leading-tight">Inteligencia de Mercados</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Análisis Computacional Avanzado</p>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
          Nuestros algoritmos sintetizan múltiples vectores macroeconómicos para ofrecer una interpretación objetiva, técnica y libre de sesgos sobre la coyuntura actual.
        </p>

        <div className="space-y-4 mb-6">
          <select 
            value={selectedTopic}
            onChange={(e) => {
                setSelectedTopic(e.target.value);
                setHasGenerated(false);
                setAnalysis("");
            }}
            className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-ven-blue dark:focus:ring-ven-yellow focus:border-ven-blue outline-none text-gray-700 dark:text-gray-200 font-medium transition-all hover:bg-white dark:hover:bg-slate-700 cursor-pointer"
          >
            {Object.values(AnalysisTopic).map((topic) => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
          
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2
              ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-ven-blue to-ven-dark hover:shadow-ven-blue/30 hover:-translate-y-0.5'}`}
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5 text-ven-yellow" />}
            {loading ? 'Procesando Datos...' : 'Generar Informe Técnico'}
          </button>
        </div>

        {analysis && (
          <div className="bg-ven-light dark:bg-slate-800/50 rounded-xl p-6 border border-ven-blue/10 dark:border-slate-700 animate-fade-in relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-ven-yellow rounded-l-xl"></div>
            {/* Se usa la clase markdown-content definida en index.html, que ya tiene soporte para dark mode */}
            <div className="markdown-content text-sm text-gray-700 dark:text-gray-300">
                <ReactMarkdown components={{
                    strong: ({node, ...props}) => <span className="font-bold text-ven-blue dark:text-blue-400" {...props} />
                }}>{analysis}</ReactMarkdown>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700 text-[10px] text-gray-400 flex justify-between items-center uppercase tracking-wider">
                <span className="flex items-center gap-1"><Sparkles size={10} /> Reporte Sintético</span>
                <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        )}
        
        {!hasGenerated && !loading && (
             <div className="bg-gray-50 dark:bg-slate-800/30 border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center text-gray-400 dark:text-gray-500 min-h-[160px]">
                <BookOpen className="w-10 h-10 mb-3 opacity-20" />
                <p className="text-sm">Seleccione variable para iniciar proyección.</p>
             </div>
        )}
      </div>
    </div>
  );
};

export default GeminiAnalyst;