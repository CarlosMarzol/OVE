import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, ReferenceLine } from 'recharts';
import { formatNumber } from '../utils/format';

// Datos detallados IPC Venezuela (Oct 2023 - Oct 2024)
// Mensual (mensual), Interanual (inter), Acumulada (acum)
const inflationData = [
  { month: 'Oct 23', mensual: 5.9, inter: 316.5, acum: 173.5 },
  { month: 'Nov 23', mensual: 3.5, inter: 282.8, acum: 182.9 },
  { month: 'Dic 23', mensual: 2.4, inter: 189.8, acum: 189.8 },
  { month: 'Ene 24', mensual: 1.7, inter: 107.4, acum: 1.7 },
  { month: 'Feb 24', mensual: 1.2, inter: 75.9, acum: 2.9 },
  { month: 'Mar 24', mensual: 1.2, inter: 67.8, acum: 4.1 },
  { month: 'Abr 24', mensual: 2.0, inter: 64.9, acum: 6.3 },
  { month: 'May 24', mensual: 1.5, inter: 59.2, acum: 7.8 },
  { month: 'Jun 24', mensual: 1.0, inter: 51.4, acum: 8.9 },
  { month: 'Jul 24', mensual: 0.8, inter: 43.6, acum: 9.7 },
  { month: 'Ago 24', mensual: 1.4, inter: 35.6, acum: 11.2 },
  { month: 'Sep 24', mensual: 0.8, inter: 25.8, acum: 12.1 },
  { month: 'Oct 24', mensual: 4.0, inter: 23.6, acum: 16.6 },
];

const exchangeData = [
  { month: 'May', official: 36.6, parallel: 40.2 },
  { month: 'Jun', official: 36.7, parallel: 41.0 },
  { month: 'Jul', official: 36.8, parallel: 42.1 },
  { month: 'Ago', official: 36.9, parallel: 43.5 },
  { month: 'Sep', official: 37.0, parallel: 44.2 },
  { month: 'Oct', official: 39.5, parallel: 47.8 },
];

// Componente de Tooltip personalizado para mayor claridad
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-900 p-4 border border-gray-100 dark:border-slate-800 shadow-2xl rounded-xl">
        <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 border-b border-gray-50 dark:border-slate-800 pb-2">{label}</p>
        <div className="space-y-1.5">
          <p className="flex justify-between items-center gap-6">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Var. Mensual:</span>
            <span className="text-lg font-black text-ven-red">{formatNumber(payload[0].payload.mensual, 1)}%</span>
          </p>
          <p className="flex justify-between items-center gap-6">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Var. Acumulada:</span>
            <span className="text-sm font-bold text-ven-blue dark:text-blue-400">{formatNumber(payload[0].payload.acum, 1)}%</span>
          </p>
          <p className="flex justify-between items-center gap-6">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Var. Interanual:</span>
            <span className="text-sm font-bold text-gray-400">{formatNumber(payload[0].payload.inter, 1)}%</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

type InflationMetric = 'mensual' | 'inter' | 'acum';

export const InflationChart: React.FC = () => {
  const [metric, setMetric] = useState<InflationMetric>('mensual');

  const metricConfig = {
    mensual: { label: 'Mensual', color: '#CF142B' },
    acum: { label: 'Acumulada', color: '#00247D' },
    inter: { label: 'Interanual', color: '#64748b' },
  };

  return (
    <div className="flex flex-col h-full w-full animate-fade-in">
      {/* Botonera de cambio de variable */}
      <div className="flex justify-end gap-2 mb-6 px-4">
        {(Object.keys(metricConfig) as InflationMetric[]).map((key) => (
          <button
            key={key}
            onClick={() => setMetric(key)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
              ${metric === key 
                ? 'bg-ven-blue text-white shadow-lg scale-105' 
                : 'bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
          >
            {metricConfig[key].label}
          </button>
        ))}
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={inflationData} margin={{ top: 10, right: 30, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorInflation" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={metricConfig[metric].color} stopOpacity={0.15}/>
                <stop offset="95%" stopColor={metricConfig[metric].color} stopOpacity={0}/>
              </linearGradient>
              <filter id="shadow" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" strokeOpacity={0.5} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 600}} 
              dy={15}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fontSize: 11, fill: '#94a3b8', fontWeight: 500}} 
              tickFormatter={(value) => `${formatNumber(value, metric === 'mensual' ? 1 : 0)}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            {metric === 'mensual' && (
              <ReferenceLine y={1.5} label={{ position: 'right', value: 'Promedio 2024', fill: '#94a3b8', fontSize: 10 }} stroke="#94a3b8" strokeDasharray="3 3" />
            )}
            <Area 
              type="monotone" 
              dataKey={metric} 
              stroke={metricConfig[metric].color} 
              strokeWidth={4} 
              fillOpacity={1} 
              fill="url(#colorInflation)" 
              filter="url(#shadow)"
              activeDot={{ r: 8, strokeWidth: 0, fill: metricConfig[metric].color, className: 'animate-pulse' }}
              animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const ExchangeChart: React.FC = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={exchangeData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" strokeOpacity={0.5} />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{fontSize: 11, fill: '#94a3b8', fontWeight: 600}} 
            dy={15}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{fontSize: 11, fill: '#94a3b8', fontWeight: 500}} 
            domain={['auto', 'auto']}
            tickFormatter={(value) => formatNumber(value, 0)}
          />
          <Tooltip 
            cursor={{fill: '#f8fafc'}}
            contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)',
                padding: '12px'
            }}
            formatter={(value: number) => [<span className="font-black">{formatNumber(value, 2)} Bs.</span>, '']}
          />
          <Legend 
            verticalAlign="top" 
            align="right" 
            iconType="circle" 
            wrapperStyle={{ paddingBottom: '20px', fontSize: '12px', fontWeight: 'bold' }} 
          />
          <Bar 
            name="BCV (Oficial)" 
            dataKey="official" 
            fill="#00247D" 
            radius={[6, 6, 0, 0]} 
            barSize={24} 
          />
          <Bar 
            name="Mercado Paralelo" 
            dataKey="parallel" 
            fill="#F7C600" 
            radius={[6, 6, 0, 0]} 
            barSize={24} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};