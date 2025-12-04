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
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
      {/* Decorative top gradient */}
      <div className="h-2 w-full bg-gradient-to-r from-ven-blue via-ven-blue to-ven-yellow"></div>
      
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-ven-blue/10 p-2.5 rounded-lg border border-ven-blue/20">
            <BrainCircuit className="text-ven-blue w-6 h-6" />
          </div>
          <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">Analista Económico <span className="text-ven-blue">IA</span></h2>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Potenciado por Gemini 2.5</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Seleccione un indicador y obtenga un resumen ejecutivo instantáneo generado por inteligencia artificial sobre la economía venezolana.
        </p>

        <div className="space-y-4 mb-6">
          <select 
            value={selectedTopic}
            onChange={(e) => {
                setSelectedTopic(e.target.value);
                setHasGenerated(false);
                setAnalysis("");
            }}
            className="w-full p-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-ven-blue focus:border-ven-blue outline-none text-gray-700 font-medium transition-all hover:bg-white cursor-pointer"
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
            {loading ? 'Procesando Datos...' : 'Generar Análisis Inteligente'}
          </button>
        </div>

        {analysis && (
          <div className="bg-ven-light rounded-xl p-6 border border-ven-blue/10 animate-fade-in relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-ven-yellow rounded-l-xl"></div>
            <div className="prose prose-slate prose-sm max-w-none text-gray-700">
                <ReactMarkdown components={{
                    strong: ({node, ...props}) => <span className="font-bold text-ven-blue" {...props} />
                }}>{analysis}</ReactMarkdown>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 text-[10px] text-gray-400 flex justify-between items-center uppercase tracking-wider">
                <span className="flex items-center gap-1"><Sparkles size={10} /> Análisis Automático</span>
                <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        )}
        
        {!hasGenerated && !loading && (
             <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center text-gray-400 min-h-[160px]">
                <BookOpen className="w-10 h-10 mb-3 opacity-20" />
                <p className="text-sm">Esperando solicitud...</p>
             </div>
        )}
      </div>
    </div>
  );
};

export default GeminiAnalyst;