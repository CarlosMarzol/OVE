import React from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

interface Event {
  date: string;
  title: string;
  type: 'high' | 'medium' | 'low';
  status: 'confirmed' | 'estimated';
}

const events: Event[] = [
  { date: '15 Oct', title: 'Índice Nacional de Precios (INPC)', type: 'high', status: 'confirmed' },
  { date: '21 Oct', title: 'Reporte de Balanza Comercial', type: 'medium', status: 'estimated' },
  { date: '01 Nov', title: 'Canasta Alimentaria Cendas', type: 'high', status: 'estimated' },
  { date: '05 Nov', title: 'Producción Petrolera (OPEP)', type: 'high', status: 'confirmed' },
];

const EconomicCalendar: React.FC = () => {
  return (
    <div className="bg-ven-dark text-white rounded-2xl shadow-xl overflow-hidden border border-ven-blue/30 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-ven-blue rounded-full filter blur-2xl opacity-30 transform translate-x-10 -translate-y-10"></div>
      
      <div className="p-6 relative z-10">
        <h3 className="font-bold text-lg mb-5 flex items-center gap-2 border-b border-white/10 pb-3">
            <Calendar className="text-ven-yellow w-5 h-5"/> Calendario Económico
        </h3>
        
        <div className="space-y-4">
            {events.map((evt, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-12 text-center">
                        <span className="block text-xs font-bold text-ven-yellow uppercase tracking-wider">{evt.date.split(' ')[1]}</span>
                        <span className="block text-xl font-bold text-white leading-none">{evt.date.split(' ')[0]}</span>
                    </div>
                    <div className="flex-grow pt-0.5">
                        <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors leading-tight">
                            {evt.title}
                        </p>
                        <div className="flex items-center gap-3 mt-1.5">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                                evt.type === 'high' ? 'border-red-500/50 text-red-300 bg-red-500/10' : 
                                evt.type === 'medium' ? 'border-yellow-500/50 text-yellow-300 bg-yellow-500/10' : 
                                'border-gray-500/50 text-gray-400 bg-gray-500/10'
                            }`}>
                                Impacto {evt.type === 'high' ? 'Alto' : evt.type === 'medium' ? 'Medio' : 'Bajo'}
                            </span>
                            {evt.status === 'estimated' && (
                                <span className="flex items-center text-[10px] text-gray-500 gap-1" title="Fecha estimada">
                                    <Clock size={10} /> Est.
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/10">
            <button className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-ven-yellow border border-ven-yellow/30 rounded hover:bg-ven-yellow hover:text-ven-dark transition-all flex items-center justify-center gap-2">
                <AlertCircle size={14} />
                Suscribir Alertas
            </button>
        </div>
      </div>
    </div>
  );
};

export default EconomicCalendar;