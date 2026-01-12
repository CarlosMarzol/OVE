import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { InflationChart, ExchangeChart } from '../components/Charts';
import { 
  TrendingUp, 
  TrendingDown,
  Activity, 
  Search, 
  Droplets, 
  Landmark, 
  ShoppingCart, 
  BarChart3,
  Minus,
  ArrowLeft,
  PieChart,
  ArrowRightLeft,
  Calculator
} from 'lucide-react';
import { formatNumber } from '../utils/format';

// --- DEFINICIÓN DE TIPOS Y DATOS ---

type Category = 'Todos' | 'Macroeconomía' | 'Monetario' | 'Energía' | 'Social';

const categoryMap: Record<string, Category> = {
    'macroeconomia': 'Macroeconomía',
    'monetario': 'Monetario',
    'energia': 'Energía',
    'social': 'Social'
};

const categoryInfo: Record<string, { description: string, icon: React.ReactNode }> = {
    'Macroeconomía': {
        description: 'Indicadores agregados que reflejan el estado general de la economía, incluyendo PIB e inflación.',
        icon: <Activity className="w-8 h-8"/>
    },
    'Monetario': {
        description: 'Variables del sistema financiero, liquidez monetaria, reservas internacionales y tipos de cambio.',
        icon: <Landmark className="w-8 h-8"/>
    },
    'Energía': {
        description: 'Datos de producción petrolera, exportaciones de crudo y precios de la cesta energética.',
        icon: <Droplets className="w-8 h-8"/>
    },
    'Social': {
        description: 'Métricas de consumo, poder adquisitivo, costo de la canasta básica y salarios.',
        icon: <ShoppingCart className="w-8 h-8"/>
    }
};

interface StatItem {
  id: string;
  title: string;
  value: string | number;
  unit: string;
  trend: number; 
  category: Category;
  type: 'card' | 'chart_large';
  component?: React.ReactNode; 
  description?: string;
}

interface ExchangeRate {
    code: string;
    country: string;
    buy: number;
    sell: number;
}

const exchangeRatesList: ExchangeRate[] = [
    { code: 'EUR', country: 'Zona Euro', buy: 48.34, sell: 48.95 },
    { code: 'CNY', country: 'China', buy: 6.28, sell: 6.35 },
    { code: 'TRY', country: 'Turquia', buy: 1.34, sell: 1.36 },
    { code: 'RUB', country: 'Rusia', buy: 0.45, sell: 0.47 },
    { code: 'USD', country: 'E.U.A.', buy: 45.75, sell: 45.85 },
    { code: 'CAD', country: 'Canada', buy: 32.65, sell: 32.85 },
    { code: 'INR', country: 'India', buy: 0.54, sell: 0.56 },
    { code: 'JPY', country: 'Japon', buy: 0.29, sell: 0.31 },
];

const statisticsData: StatItem[] = [
  {
    id: 'inflacion-kpi',
    title: 'Inflación Mensual (Oct)',
    value: 4.0,
    unit: '%',
    trend: 3.2,
    category: 'Macroeconomía',
    type: 'card',
    description: 'Variación del IPC General para el mes de Octubre 2024.'
  },
  {
    id: 'inflacion-acum',
    title: 'Inflación Acumulada',
    value: 16.6,
    unit: '%',
    trend: 5.4,
    category: 'Macroeconomía',
    type: 'card',
    description: 'Variación acumulada de precios desde Enero hasta Octubre 2024.'
  },
  {
    id: 'inflacion-inter',
    title: 'Inflación Interanual',
    value: 23.6,
    unit: '%',
    trend: -12.0,
    category: 'Macroeconomía',
    type: 'card',
    description: 'Variación de precios respecto a Octubre de 2023.'
  },
  {
    id: 'inflacion-chart',
    title: 'Serie Histórica IPC 2024',
    value: 0, 
    unit: '',
    trend: 0,
    category: 'Macroeconomía',
    type: 'chart_large',
    component: <InflationChart />,
    description: 'Evolución mensual de la inflación durante el año 2024.'
  },
  {
    id: 'dolar-bcv',
    title: 'Dólar Oficial (BCV)',
    value: 45.85,
    unit: 'VES',
    trend: 1.2,
    category: 'Monetario',
    type: 'card',
    description: 'Tipo de cambio ponderado del sistema bancario nacional.'
  },
  {
    id: 'exchange-chart',
    title: 'Brecha Cambiaria',
    value: 0,
    unit: '',
    trend: 0,
    category: 'Monetario',
    type: 'chart_large',
    component: <ExchangeChart />,
    description: 'Comparativa entre tasa oficial y mercado paralelo.'
  },
  {
    id: 'food-basket',
    title: 'Canasta Alimentaria',
    value: 540.32,
    unit: 'USD',
    trend: 4.0,
    category: 'Social',
    type: 'card',
    description: 'Costo para una familia de 5 personas (Ref: Octubre).'
  }
];

const CurrencyConverter: React.FC = () => {
    const [amount, setAmount] = useState<number>(100);
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('VES');
    const [result, setResult] = useState<number>(0);
    const [rateUsed, setRateUsed] = useState<number>(0);

    const allCurrencies = useMemo(() => {
        const list = [...exchangeRatesList];
        list.sort((a, b) => a.code.localeCompare(b.code));
        return [{ code: 'VES', country: 'Venezuela', buy: 1, sell: 1 }, ...list];
    }, []);

    const handleSwap = () => {
        const tempFrom = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(tempFrom);
    };

    useEffect(() => {
        let rate = 0;
        const fromData = allCurrencies.find(c => c.code === fromCurrency);
        const toData = allCurrencies.find(c => c.code === toCurrency);

        if (fromData && toData) {
            if (fromCurrency === 'VES' && toCurrency === 'VES') {
                rate = 1;
            } else if (toCurrency === 'VES') {
                rate = fromData.buy;
            } else if (fromCurrency === 'VES') {
                rate = 1 / toData.sell;
            } else {
                const vesAmount = 1 * fromData.buy; 
                rate = vesAmount / toData.sell;
            }
        }
        setRateUsed(rate);
        setResult(amount * rate);
    }, [amount, fromCurrency, toCurrency, allCurrencies]);

    return (
        <section className="bg-gradient-to-br from-ven-dark to-[#00247D] text-white p-6 md:p-8 rounded-2xl shadow-xl border border-ven-blue/30 relative overflow-hidden mb-8 animate-slide-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ven-blue rounded-full filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-ven-yellow rounded-full filter blur-3xl opacity-10 transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                        <Calculator className="w-6 h-6 text-ven-yellow" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Convertidor Oficial BCV</h3>
                        <p className="text-xs text-blue-200">Tasas oficiales referenciales</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-xs font-bold text-blue-200 uppercase tracking-wider">Monto</label>
                        <input 
                            type="number" 
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-lg font-mono font-bold focus:outline-none focus:ring-2 focus:ring-ven-yellow placeholder-white/30"
                            min="0"
                        />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-xs font-bold text-blue-200 uppercase tracking-wider">De</label>
                        <select 
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-ven-yellow appearance-none cursor-pointer"
                        >
                            {allCurrencies.map(c => (
                                <option key={c.code} value={c.code} className="text-gray-900">{c.code} - {c.country}</option>
                            ))}
                        </select>
                    </div>
                    <div className="md:col-span-1 flex items-end justify-center pb-1">
                        <button onClick={handleSwap} className="p-3 rounded-full bg-ven-yellow text-ven-dark hover:bg-white hover:scale-110 transition-all shadow-lg">
                            <ArrowRightLeft size={20} />
                        </button>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-xs font-bold text-blue-200 uppercase tracking-wider">A</label>
                        <select 
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-ven-yellow appearance-none cursor-pointer"
                        >
                            {allCurrencies.map(c => (
                                <option key={c.code} value={c.code} className="text-gray-900">{c.code} - {c.country}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-8 bg-black/20 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center border border-white/5">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm text-blue-200 mb-1">Resultado de la conversión</p>
                        <div className="flex items-baseline gap-2 justify-center md:justify-start">
                            <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{formatNumber(result, 2)}</span>
                            <span className="text-xl font-bold text-ven-yellow">{toCurrency}</span>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-xs text-blue-200 mb-1 font-mono uppercase">Tasa Aplicada</p>
                        <p className="text-sm font-bold text-white">
                            1 {fromCurrency} = {formatNumber(rateUsed, 4)} {toCurrency}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ExchangeRatesTable: React.FC = () => {
    return (
        <section className="col-span-1 md:col-span-2 lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden mt-6 animate-slide-up">
            <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                        <Landmark className="text-ven-blue dark:text-ven-yellow w-5 h-5" /> Tipos de Cambio Oficiales
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Tasas de referencia publicadas por el Banco Central de Venezuela.
                    </p>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-slate-800 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-4 font-bold">Moneda</th>
                            <th className="px-6 py-4 font-bold">País / Región</th>
                            <th className="px-6 py-4 font-bold text-right">Compra (Bs.)</th>
                            <th className="px-6 py-4 font-bold text-right">Venta (Bs.)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                        {exchangeRatesList.map((rate) => (
                            <tr key={rate.code} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-bold text-ven-blue dark:text-white">
                                    {rate.code}
                                </td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                    {rate.country}
                                </td>
                                <td className="px-6 py-4 text-right font-mono text-gray-700 dark:text-gray-200">
                                    {formatNumber(rate.buy, 2)}
                                </td>
                                <td className="px-6 py-4 text-right font-mono font-bold text-gray-800 dark:text-white">
                                    {formatNumber(rate.sell, 2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

const Statistics: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory: Category | 'Todos' = categorySlug && categoryMap[categorySlug] 
    ? categoryMap[categorySlug] 
    : 'Todos';

  useEffect(() => {
    window.scrollTo(0,0);
    setSearchQuery('');
  }, [categorySlug]);

  const filteredData = useMemo(() => {
    return statisticsData.filter(item => {
      const matchesCategory = currentCategory === 'Todos' || item.category === currentCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description?.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [currentCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 bg-ven-light dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <SEO 
        title={`${currentCategory === 'Todos' ? 'Estadísticas Económicas' : currentCategory}`} 
        description={`Consulte indicadores de ${currentCategory} en Venezuela: Inflación, PIB, Reservas, Tipo de Cambio y producción petrolera.`} 
      />
      
      <div className="container mx-auto px-4">
        
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
            <Link to="/estadisticas" className="hover:text-ven-blue">Estadísticas</Link>
            {currentCategory !== 'Todos' && (
                <>
                    <span className="text-gray-300">/</span>
                    <span className="font-bold text-gray-800 dark:text-white">{currentCategory}</span>
                </>
            )}
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-ven-blue text-white p-3 rounded-2xl shadow-lg shadow-ven-blue/20">
                        {currentCategory !== 'Todos' ? categoryInfo[currentCategory].icon : <PieChart className="w-8 h-8"/>}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-ven-dark dark:text-white tracking-tight leading-none">
                        {currentCategory === 'Todos' ? 'Panel de Indicadores' : currentCategory}
                    </h1>
                </div>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                    {currentCategory !== 'Todos' ? categoryInfo[currentCategory].description : 'Exploración técnica de las variables críticas de la economía venezolana.'}
                </p>
            </div>
            
            <div className="w-full md:w-auto">
                <div className="relative group">
                    <Search className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-ven-blue transition-colors" size={20} />
                    <input 
                        type="text" 
                        placeholder="Buscar variable..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-80 pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-ven-blue dark:focus:ring-ven-yellow transition-all shadow-sm"
                    />
                </div>
            </div>
        </div>

        {currentCategory === 'Monetario' || currentCategory === 'Todos' ? <CurrencyConverter /> : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {filteredData.map((item) => (
                <div 
                    key={item.id} 
                    className={`bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl overflow-hidden transition-all hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none
                        ${item.type === 'chart_large' ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                    <div className="p-7">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-0.5">{item.category}</p>
                            </div>
                            {item.trend !== 0 && (
                                <div className={`flex items-center gap-1 text-xs font-black px-2 py-1 rounded-lg border
                                    ${item.trend > 0 ? 'bg-red-50 text-ven-red border-red-100' : 'bg-green-50 text-green-600 border-green-100'}`}>
                                    {item.trend > 0 ? <TrendingUp size={12}/> : <TrendingDown size={12}/>}
                                    {formatNumber(Math.abs(item.trend), 1)}%
                                </div>
                            )}
                        </div>
                        
                        {item.type === 'card' && (
                            <div className="mb-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                                        {typeof item.value === 'number' ? formatNumber(item.value, item.unit === 'VES' ? 2 : 1) : item.value}
                                    </span>
                                    <span className="text-lg font-bold text-gray-400">{item.unit}</span>
                                </div>
                            </div>
                        )}

                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                            {item.description}
                        </p>

                        {item.type === 'chart_large' && (
                            <div className="mt-4 pt-4 border-t border-gray-50 dark:border-slate-800">
                                {item.component}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>

        {(currentCategory === 'Monetario' || currentCategory === 'Todos') && <ExchangeRatesTable />}
      </div>
    </div>
  );
};

export default Statistics;