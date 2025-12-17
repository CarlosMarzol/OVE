import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { formatNumber } from '../utils/format';

const inflationData = [
  { month: 'Ene', value: 1.7 },
  { month: 'Feb', value: 1.2 },
  { month: 'Mar', value: 3.9 },
  { month: 'Abr', value: 2.0 },
  { month: 'May', value: 1.5 },
  { month: 'Jun', value: 2.4 },
];

const exchangeData = [
  { month: 'Ene', official: 36.1, parallel: 38.5 },
  { month: 'Feb', official: 36.3, parallel: 38.2 },
  { month: 'Mar', official: 36.4, parallel: 38.9 },
  { month: 'Abr', official: 36.5, parallel: 39.5 },
  { month: 'May', official: 36.6, parallel: 40.2 },
  { month: 'Jun', official: 36.7, parallel: 41.0 },
];

export const InflationChart: React.FC = () => {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={inflationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorInflation" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#CF142B" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#CF142B" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{fontSize: 12, fill: '#64748b', fontWeight: 500}} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{fontSize: 12, fill: '#64748b'}} 
            tickFormatter={(value) => formatNumber(value, 0)}
          />
          <Tooltip 
            contentStyle={{ 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                backgroundColor: '#fff',
                fontFamily: 'Inter, sans-serif'
            }}
            formatter={(value: number) => [<span className="font-bold text-ven-red">{formatNumber(value)}%</span>, <span className="text-gray-600">Inflación Mensual</span>]}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#CF142B" 
            strokeWidth={3} 
            fillOpacity={1} 
            fill="url(#colorInflation)" 
            activeDot={{ r: 6, strokeWidth: 0, fill: '#CF142B' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ExchangeChart: React.FC = () => {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={exchangeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{fontSize: 12, fill: '#64748b', fontWeight: 500}} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{fontSize: 12, fill: '#64748b'}} 
            domain={['auto', 'auto']}
            tickFormatter={(value) => formatNumber(value, 0)}
          />
          <Tooltip 
            cursor={{fill: '#f1f5f9'}}
            contentStyle={{ 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
            }}
            formatter={(value: number) => [formatNumber(value), '']}
          />
          <Legend 
            wrapperStyle={{paddingTop: '20px'}} 
            iconType="circle"
          />
          <Bar 
            name="BCV (Oficial)" 
            dataKey="official" 
            fill="#00247D" 
            radius={[4, 4, 0, 0]} 
            barSize={18} 
          />
          <Bar 
            name="Paralelo" 
            dataKey="parallel" 
            fill="#F7C600" 
            radius={[4, 4, 0, 0]} 
            barSize={18} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};