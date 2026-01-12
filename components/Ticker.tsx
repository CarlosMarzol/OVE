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

// Datos actualizados al cierre de Octubre 2024
const data: TickerItem[] = [
  { symbol: 'BCV (USD)', value: 45.85, change: 0.15 },
  { symbol: 'Euro (BCV)', value: 48.95, change: 0.05 },
  { symbol: 'Crudo Merey', value: 64.30, change: -1.2, unit: '$' },
  { symbol: 'Inflación Mensual', value: 4.0, change: 3.2, unit: '%' },
  { symbol: 'Inflación Acum.', value: 16.6, change: 4.5, unit: '%' },
  { symbol: 'Inflación Inter.', value: 23.6, change: -2.2, unit: '%' },
  { symbol: 'Reservas Int.', value: 9850, change: -0.1, unit: 'MM' },
];

const Ticker: React.FC = () => {
  return (
    <div className="bg-[#001240] text-white overflow-hidden py-2 border-b border-ven-blue/30 relative z-[60]">
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {[...data, ...data, ...data].map((item, index) => (
          <div key={index} className="inline-flex items-center mx-6 gap-2">
            <span className="font-bold text-xs text-ven-yellow uppercase tracking-wider">{item.symbol}</span>
            <span className="font-mono text-xs font-bold">
              {item.unit === '$' ? '$' : ''}{formatNumber(item.value, 2)}{item.unit === '%' ? '%' : ''} {item.unit === 'MM' ? 'MM' : ''}
            </span>
            <span className={`text-[10px] flex items-center font-bold ${
              item.change > 0 ? 'text-green-400' : item.change < 0 ? 'text-red-400' : 'text-gray-400'
            }`}>
              {item.change > 0 ? <TrendingUp size={10} className="mr-0.5" /> : 
               item.change < 0 ? <TrendingDown size={10} className="mr-0.5" /> : 
               <Minus size={10} className="mr-0.5" />}
              {formatNumber(Math.abs(item.change), 1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;