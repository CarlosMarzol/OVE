import React from 'react';
import { InflationChart, ExchangeChart } from '../components/Charts';
import { ArrowDown, TrendingUp, DollarSign, Activity } from 'lucide-react';
import { formatNumber } from '../utils/format';

const Statistics: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-ven-light min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-ven-dark mb-4">Estadísticas e Indicadores</h1>
            <p className="text-gray-600 max-w-2xl text-lg">
                Monitoreo continuo de las principales variables macroeconómicas de Venezuela. 
                Datos recopilados de fuentes oficiales (BCV), organismos multilaterales y estimaciones propias.
            </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Inflación Mensual</p>
                <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-extrabold text-ven-dark">{formatNumber(2.4)}%</h3>
                    <span className="text-xs text-ven-red font-bold flex items-center bg-red-50 px-1.5 py-0.5 rounded">
                        <TrendingUp size={12} className="mr-1"/> +0,2
                    </span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Dólar BCV</p>
                <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-extrabold text-ven-dark">{formatNumber(36.7)}</h3>
                    <span className="text-sm font-medium text-gray-500">VES/USD</span>
                </div>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Reservas Int.</p>
                <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-extrabold text-ven-dark">{formatNumber(9850)}</h3>
                    <span className="text-sm font-medium text-gray-500">MM USD</span>
                </div>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Producción Petrolera</p>
                <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-extrabold text-ven-dark">{formatNumber(850)}</h3>
                    <span className="text-sm font-medium text-gray-500">k bpd</span>
                </div>
            </div>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">Indice Nacional de Precios</h3>
                        <p className="text-sm text-gray-500">Variación intermensual (%)</p>
                    </div>
                </div>
                <InflationChart />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">Mercado Cambiario</h3>
                        <p className="text-sm text-gray-500">Comparativa Oficial vs Paralelo (VES)</p>
                    </div>
                </div>
                <ExchangeChart />
            </div>
        </div>
        
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
            <Activity className="w-12 h-12 text-ven-blue mx-auto mb-4" />
            <h3 className="text-lg font-bold text-ven-dark mb-2">Acceso a la Base de Datos Histórica</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Disponemos de series históricas desde 1998 para investigadores y suscriptores corporativos. Descarga los datasets en formato Excel o CSV.
            </p>
            <button className="bg-ven-blue text-white px-6 py-2.5 rounded-lg font-bold hover:bg-ven-dark transition-colors">
                Solicitar Acceso a Data
            </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;