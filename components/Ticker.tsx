import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { formatNumber } from '../utils/format';

interface TickerItem {
  symbol: string;
  value: number;
  change: number;
  isCurrency?: boolean;
  unit?: string;
}

// Datos actualizados al 16/12/2025
const data: TickerItem[] = [
  { symbol: 'BCV (USD)', value: 276.58, change: 0.15 },
  { symbol: 'Euro (BCV)', value: 326.16, change: 0.05 },
  { symbol: 'Yuan (CNY)', value: 39.28, change: 0.02 },
  { symbol: 'Lira (TRY)', value: 6.48, change: -0.01 },
  { symbol: 'Rublo (RUB)', value: 3.48, change: 0.01 },
  { symbol: 'Real (BRL)', value: 50.72, change: 0.12 },
  { symbol: 'Crudo Merey', value: 64.30, change: -1.2, unit: '$' },
  { symbol: 'Inflación Men.', value: 2.4, change: 0.2, unit: '%' },
  { symbol: 'Reservas Int.', value: 9850, change: -0.1, unit: 'MM' },
];

const Ticker: React.FC = () => {
  return (
    <div className="bg-[#001240] text-white overflow-hidden py-2 border-b border-ven-blue/30 relative z-[60]">
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {/* Duplicamos los datos para crear el efecto de loop infinito sin saltos */}
        {[...data, ...data, ...data].map((item, index) => (
          <div key={index} className="inline-flex items-center mx-6 gap-2">
            <span className="font-bold text-xs text-ven-yellow uppercase tracking-wider">{item.symbol}</span>
            <span className="font-mono text-xs font-bold">
              {item.unit === '$' ? '$' : ''}{formatNumber(item.value, 2)}{item.unit === '%' ? '%' : ''} {item.unit === 'MM' ? 'MM' : ''} {item.unit === 'pts' ? 'pts' : ''}
            </span>
            <span className={`text-[10px] flex items-center font-bold ${
              item.change > 0 ? 'text-green-400' : item.change < 0 ? 'text-red-400' : 'text-gray-400'
            }`}>
              {item.change > 0 ? <TrendingUp size={10} className="mr-0.5" /> : 
               item.change < 0 ? <TrendingDown size={10} className="mr-0.5" /> : 
               <Minus size={10} className="mr-0.5" />}
              {Math.abs(item.change)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;