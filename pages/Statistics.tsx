import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { InflationChart, ExchangeChart } from '../components/Charts';
import { 
  ArrowDown, 
  TrendingUp, 
  TrendingDown,
  DollarSign, 
  Activity, 
  Search, 
  Droplets, 
  Landmark, 
  ShoppingCart, 
  BarChart3,
  Minus,
  ArrowLeft,
  ChevronRight,
  PieChart,
  RefreshCw,
  ArrowRightLeft,
  Calculator
} from 'lucide-react';
import { formatNumber } from '../utils/format';

// --- DEFINICIÓN DE TIPOS Y DATOS ---

type Category = 'Todos' | 'Macroeconomía' | 'Monetario' | 'Energía' | 'Social';

// Mapeo de SLUGS (URL) a Nombres de Categoría
const categoryMap: Record<string, Category> = {
    'macroeconomia': 'Macroeconomía',
    'monetario': 'Monetario',
    'energia': 'Energía',
    'social': 'Social'
};

// Información descriptiva por categoría para el Header de la sub-página
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
  trend: number; // Porcentaje de cambio
  trendLabel?: string;
  category: Category;
  type: 'card' | 'chart_large';
  component?: React.ReactNode; // Para gráficos complejos
  description?: string;
}

// Nueva interfaz para la tabla de divisas
interface ExchangeRate {
    code: string;
    country: string;
    buy: number;
    sell: number;
}

const exchangeRatesList: ExchangeRate[] = [
    { code: 'EUR', country: 'Zona Euro', buy: 325.340685, sell: 326.156075 },
    { code: 'CNY', country: 'China', buy: 39.182153, sell: 39.280354 },
    { code: 'TRY', country: 'Turquia', buy: 6.459581, sell: 6.475770 },
    { code: 'RUB', country: 'Rusia', buy: 3.467910, sell: 3.476602 },
    { code: 'USD', country: 'E.U.A.', buy: 275.885458, sell: 276.576900 },
    { code: 'CAD', country: 'Canada', buy: 200.687756, sell: 201.190733 },
    { code: 'INR', country: 'India', buy: 3.035344, sell: 3.042951 },
    { code: 'JPY', country: 'Japon', buy: 1.784050, sell: 1.788521 },
    { code: 'ARS', country: 'Argentina', buy: 0.189873, sell: 0.190349 },
    { code: 'BRL', country: 'Brasil', buy: 50.594263, sell: 50.721066 },
    { code: 'CLP', country: 'Chile', buy: 0.301735, sell: 0.302491 },
    { code: 'COP', country: 'Colombia', buy: 0.071793, sell: 0.071973 },
    { code: 'UYU', country: 'Uruguay', buy: 7.083431, sell: 7.101184 },
    { code: 'PEN', country: 'Perú', buy: 81.918599, sell: 82.123909 },
    { code: 'BOB', country: 'Bolivia', buy: 40.216539, sell: 40.317332 },
    { code: 'MXP', country: 'Mexico', buy: 15.377005, sell: 15.415544 },
    { code: 'CUC', country: 'Cuba', buy: 275.885458, sell: 276.576900 },
    { code: 'NIO', country: 'Nicaragua', buy: 7.585397, sell: 7.604409 },
    { code: 'DOP', country: 'R. Dominicana', buy: 4.310037, sell: 4.320839 },
    { code: 'TTD', country: 'Trinidad', buy: 41.041558, sell: 41.144419 },
    { code: 'ANG', country: 'Curazao', buy: 158.182133, sell: 158.578579 },
];

const statisticsData: StatItem[] = [
  // --- MACROECONOMÍA ---
  {
    id: 'inflacion-kpi',
    title: 'Inflación Mensual',
    value: 2.4,
    unit: '%',
    trend: 0.2,
    category: 'Macroeconomía',
    type: 'card',
    description: 'Variación del Índice Nacional de Precios al Consumidor.'
  },
  {
    id: 'inflacion-chart',
    title: 'Evolución de la Inflación',
    value: 0, 
    unit: '',
    trend: 0,
    category: 'Macroeconomía',
    type: 'chart_large',
    component: <InflationChart />,
    description: 'Comportamiento de la variación de precios en los últimos 6 meses.'
  },
  {
    id: 'pib-kpi',
    title: 'Proyección PIB 2025',
    value: 4.5,
    unit: '%',
    trend: 1.1,
    category: 'Macroeconomía',
    type: 'card',
    description: 'Estimación de crecimiento económico anual.'
  },

  // --- MONETARIO ---
  {
    id: 'dolar-bcv',
    title: 'Dólar Oficial (BCV)',
    value: 276.58,
    unit: 'VES',
    trend: 0.15,
    category: 'Monetario',
    type: 'card',
    description: 'Tipo de cambio ponderado del sistema bancario.'
  },
  {
    id: 'reservas',
    title: 'Reservas Internacionales',
    value: 9850,
    unit: 'MM $',
    trend: -0.5,
    category: 'Monetario',
    type: 'card',
    description: 'Disponibilidad de divisas en el Banco Central.'
  },
  {
    id: 'liquidez',
    title: 'Liquidez Monetaria',
    value: 78.4,
    unit: 'Billones VES',
    trend: 3.2,
    category: 'Monetario',
    type: 'card',
    description: 'M2: Total de dinero circulante en la economía.'
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

  // --- ENERGÍA ---
  {
    id: 'oil-production',
    title: 'Producción Petrolera',
    value: 850,
    unit: 'k bpd',
    trend: 1.8,
    category: 'Energía',
    type: 'card',
    description: 'Barriles por día según fuentes secundarias OPEP.'
  },
  {
    id: 'oil-price',
    title: 'Cesta Merey',
    value: 64.30,
    unit: 'USD/bl',
    trend: -1.2,
    category: 'Energía',
    type: 'card',
    description: 'Precio promedio del crudo venezolano de referencia.'
  },

  // --- SOCIAL ---
  {
    id: 'food-basket',
    title: 'Canasta Alimentaria',
    value: 540.32,
    unit: 'USD',
    trend: 1.2,
    category: 'Social',
    type: 'card',
    description: 'Costo para una familia de 5 personas (Cendas).'
  },
  {
    id: 'min-wage',
    title: 'Ingreso Mínimo Integral',
    value: 130,
    unit: 'USD (Index)',
    trend: 0,
    category: 'Social',
    type: 'card',
    description: 'Salario base + Bono de Guerra Económica indexado.'
  }
];

// --- COMPONENTE: CONVERTIDOR DE MONEDAS ---
const CurrencyConverter: React.FC = () => {
    const [amount, setAmount] = useState<number>(100);
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('VES');
    const [result, setResult] = useState<number>(0);
    const [rateUsed, setRateUsed] = useState<number>(0);

    // Lista combinada incluyendo VES
    const allCurrencies = useMemo(() => {
        const list = [...exchangeRatesList];
        list.sort((a, b) => a.code.localeCompare(b.code));
        return [{ code: 'VES', country: 'Venezuela', buy: 1, sell: 1 }, ...list];
    }, []);

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    useEffect(() => {
        // Lógica de Conversión Bancaria
        let rate = 0;
        
        // 1. Obtener datos de las monedas seleccionadas
        const fromData = allCurrencies.find(c => c.code === fromCurrency);
        const toData = allCurrencies.find(c => c.code === toCurrency);

        if (fromData && toData) {
            if (fromCurrency === 'VES' && toCurrency === 'VES') {
                rate = 1;
            } 
            // Caso: Divisa -> VES (El banco TE COMPRA la divisa)
            else if (toCurrency === 'VES') {
                rate = fromData.buy;
            }
            // Caso: VES -> Divisa (El banco TE VENDE la divisa)
            else if (fromCurrency === 'VES') {
                rate = 1 / toData.sell; // Inverso porque la tasa está expresada en Bs por Dólar
            }
            // Caso: Divisa A -> Divisa B (Cross Rate: Vendes A a Bs, compras B con Bs)
            else {
                // Paso 1: Vendo A y obtengo Bolívares (Tasa Compra)
                const vesAmount = 1 * fromData.buy; 
                // Paso 2: Con esos Bolívares compro B (Tasa Venta)
                rate = vesAmount / toData.sell;
            }
        }

        setRateUsed(rate);
        setResult(amount * rate);

    }, [amount, fromCurrency, toCurrency, allCurrencies]);

    return (
        <div className="bg-gradient-to-br from-ven-dark to-[#00247D] text-white p-6 md:p-8 rounded-2xl shadow-xl border border-ven-blue/30 relative overflow-hidden mb-8 animate-slide-up">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ven-blue rounded-full filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-ven-yellow rounded-full filter blur-3xl opacity-10 transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                        <Calculator className="w-6 h-6 text-ven-yellow" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Convertidor Oficial BCV</h3>
                        <p className="text-xs text-blue-200">Tasas oficiales del 16/12/2025</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
                    {/* Input Amount */}
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

                    {/* From Currency */}
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

                    {/* Swap Button */}
                    <div className="md:col-span-1 flex items-end justify-center pb-1">
                        <button 
                            onClick={handleSwap}
                            className="p-3 rounded-full bg-ven-yellow text-ven-dark hover:bg-white hover:scale-110 transition-all shadow-lg"
                            title="Intercambiar monedas"
                        >
                            <ArrowRightLeft size={20} />
                        </button>
                    </div>

                    {/* To Currency */}
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

                {/* Result Display */}
                <div className="mt-8 bg-black/20 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center border border-white/5">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm text-blue-200 mb-1">Resultado de la conversión</p>
                        <div className="flex items-baseline gap-2 justify-center md:justify-start">
                            <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{formatNumber(result, 4)}</span>
                            <span className="text-xl font-bold text-ven-yellow">{toCurrency}</span>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-xs text-blue-200 mb-1 font-mono uppercase">Tasa Aplicada</p>
                        <p className="text-sm font-bold text-white">
                            1 {fromCurrency} = {formatNumber(rateUsed, 6)} {toCurrency}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExchangeRatesTable: React.FC = () => {
    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden mt-6 animate-slide-up">
            <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                        <Landmark className="text-ven-blue dark:text-ven-yellow w-5 h-5" /> Tipos de Cambio Oficiales
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Tasas de referencia publicadas por el Banco Central de Venezuela al 16/12/2025.
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
                                    {formatNumber(rate.buy, 4)}
                                </td>
                                <td className="px-6 py-4 text-right font-mono font-bold text-gray-800 dark:text-white">
                                    {formatNumber(rate.sell, 4)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const Statistics: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Determinar la categoría actual basada en la URL
  const currentCategory: Category | 'Todos' = categorySlug && categoryMap[categorySlug] 
    ? categoryMap[categorySlug] 
    : 'Todos';

  // Scroll to top cuando cambia la categoría
  useEffect(() => {
    window.scrollTo(0,0);
    setSearchQuery('');
  }, [categorySlug]);

  // Lógica de filtrado
  const filteredData = useMemo(() => {
    return statisticsData.filter(item => {
      const matchesCategory = currentCategory === 'Todos' || item.category === currentCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description?.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [currentCategory, searchQuery]);

  // VISTA: DASHBOARD PRINCIPAL (HUB)
  if (currentCategory === 'Todos') {
    return (
        <div className="pt-28 pb-20 bg-ven-light dark:bg-slate-950 min-h-screen transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-extrabold text-ven-dark dark:text-white mb-4">Centro de Estadísticas</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore nuestros indicadores económicos clasificados por sectores estratégicos. Seleccione un tema para acceder a la data detallada.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Tarjeta Macro */}
                    <Link to="/estadisticas/macroeconomia" className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-ven-red/30 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-ven-red/5 rounded-full -mr-10 -mt-10 group-hover:bg-ven-red/10 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="bg-red-50 dark:bg-red-900/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-ven-red dark:text-red-400">
                                <Activity size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-ven-red transition-colors">Macroeconomía</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">PIB, Inflación, Deuda Externa y Balanza de Pagos.</p>
                            <span className="inline-flex items-center font-bold text-ven-red text-sm">Ver Indicadores <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/></span>
                        </div>
                    </Link>

                    {/* Tarjeta Monetario */}
                    <Link to="/estadisticas/monetario" className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-ven-blue/30 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-ven-blue/5 rounded-full -mr-10 -mt-10 group-hover:bg-ven-blue/10 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="bg-blue-50 dark:bg-blue-900/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-ven-blue dark:text-blue-400">
                                <Landmark size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-ven-blue transition-colors">Sector Monetario</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">Liquidez (M2), Reservas, Tasas de Interés y Tipo de Cambio.</p>
                            <span className="inline-flex items-center font-bold text-ven-blue text-sm">Ver Indicadores <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/></span>
                        </div>
                    </Link>

                    {/* Tarjeta Energia */}
                    <Link to="/estadisticas/energia" className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-ven-yellow/30 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-ven-yellow/5 rounded-full -mr-10 -mt-10 group-hover:bg-ven-yellow/10 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="bg-orange-50 dark:bg-orange-900/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-orange-500">
                                <Droplets size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">Energía y Petróleo</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">Producción petrolera, Exportaciones, Refinación y Gas.</p>
                            <span className="inline-flex items-center font-bold text-orange-500 text-sm">Ver Indicadores <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/></span>
                        </div>
                    </Link>

                    {/* Tarjeta Social */}
                    <Link to="/estadisticas/social" className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-purple-500/30 transition-all relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-10 -mt-10 group-hover:bg-purple-500/10 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="bg-purple-50 dark:bg-purple-900/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                                <ShoppingCart size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">Social y Consumo</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">Canasta básica, Salarios, Pobreza y Ventas comerciales.</p>
                            <span className="inline-flex items-center font-bold text-purple-600 text-sm">Ver Indicadores <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/></span>
                        </div>
                    </Link>
                </div>
                
                {/* Banner de Data Historica */}
                <div className="max-w-5xl mx-auto mt-16 bg-gradient-to-r from-[#001a33] to-ven-blue rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-pattern opacity-10"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">Base de Datos Histórica (1998-2025)</h3>
                        <p className="text-blue-200">Acceda a series de tiempo completas en formato Excel/CSV para investigación académica.</p>
                    </div>
                    <button className="relative z-10 bg-ven-yellow text-ven-dark px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors flex items-center gap-2 flex-shrink-0">
                        <Activity size={18} /> Solicitar Acceso
                    </button>
                </div>
            </div>
        </div>
    );
  }

  // VISTA: DETALLE DE CATEGORÍA
  return (
    <div className="pt-28 pb-20 bg-ven-light dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb / Nav */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/estadisticas" className="hover:text-ven-blue dark:hover:text-ven-yellow flex items-center gap-1 transition-colors">
                <ArrowLeft size={14} /> Centro de Estadísticas
            </Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-ven-blue dark:text-ven-yellow">{currentCategory}</span>
        </div>

        {/* Header de Categoría */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-10">
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-2xl shadow-sm ${
                    currentCategory === 'Energía' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30' :
                    currentCategory === 'Monetario' ? 'bg-blue-100 text-ven-blue dark:bg-blue-900/30' :
                    currentCategory === 'Social' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30' :
                    'bg-red-100 text-ven-red dark:bg-red-900/30'
                }`}>
                    {categoryInfo[currentCategory as string]?.icon || <PieChart />}
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold text-ven-dark dark:text-white mb-1">{currentCategory}</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm leading-relaxed">
                        {categoryInfo[currentCategory as string]?.description}
                    </p>
                </div>
            </div>

            {/* Buscador Local */}
            <div className="relative w-full md:w-80 group">
                <Search className="absolute left-3 top-3 text-gray-400 group-focus-within:text-ven-blue transition-colors w-5 h-5" />
                <input 
                    type="text" 
                    placeholder={`Buscar en ${currentCategory}...`} 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-ven-blue dark:focus:ring-ven-yellow transition-all shadow-sm"
                />
            </div>
        </div>

        {/* Convertidor de Monedas - Solo visible en 'Monetario' */}
        {currentCategory === 'Monetario' && <CurrencyConverter />}

        {/* Grid de Datos */}
        {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
                
                {filteredData.map((item) => {
                    // RENDERIZADO: Tarjetas Pequeñas (KPIs)
                    if (item.type === 'card') {
                        return (
                            <div key={item.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">{item.category}</p>
                                        <h3 className="text-lg font-bold text-ven-dark dark:text-white leading-tight">{item.title}</h3>
                                    </div>
                                    {/* Icono pequeño decorativo */}
                                    <div className="text-gray-300 dark:text-gray-600">
                                        <BarChart3 size={16}/>
                                    </div>
                                </div>
                                
                                <div className="flex items-end gap-2 mb-2">
                                    <span className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
                                        {typeof item.value === 'number' ? formatNumber(item.value, item.unit === 'VES' ? 2 : item.unit === '%' ? 1 : 0) : item.value}
                                    </span>
                                    <span className="text-sm font-bold text-gray-400 mb-1">{item.unit}</span>
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-100 dark:border-slate-800 pt-3 mt-2">
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded flex items-center ${
                                        item.trend > 0 ? 'bg-red-50 text-ven-red dark:bg-red-900/20' : 
                                        item.trend < 0 ? 'bg-green-50 text-green-600 dark:bg-green-900/20' : 
                                        'bg-gray-100 text-gray-500 dark:bg-slate-800'
                                    }`}>
                                        {item.trend > 0 ? <TrendingUp size={12} className="mr-1"/> : 
                                         item.trend < 0 ? <TrendingDown size={12} className="mr-1"/> : 
                                         <Minus size={12} className="mr-1"/>}
                                        {Math.abs(item.trend)}%
                                    </span>
                                    <span className="text-[10px] text-gray-400">vs mes anterior</span>
                                </div>
                            </div>
                        );
                    } 
                    
                    // RENDERIZADO: Gráficos Grandes (Span 2 columnas)
                    else if (item.type === 'chart_large') {
                        return (
                            <div key={item.id} className="col-span-1 md:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="w-2 h-2 rounded-full bg-ven-blue dark:bg-ven-yellow"></span>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.category}</p>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{item.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                                {item.component}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        ) : (
            // Estado Vacio
            <div className="bg-gray-50 dark:bg-slate-900/50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200 dark:border-slate-800 animate-fade-in mt-8">
                <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-600 dark:text-gray-400">No encontramos indicadores</h3>
                <p className="text-gray-400 dark:text-gray-500 mt-2 mb-4">
                    No hay datos que coincidan con "{searchQuery}" en esta categoría.
                </p>
                <button 
                    onClick={() => setSearchQuery('')}
                    className="text-ven-blue dark:text-ven-yellow font-bold hover:underline"
                >
                    Limpiar búsqueda
                </button>
            </div>
        )}
        
        {/* Nueva Tabla de Tipos de Cambio - Solo para Monetario */}
        {currentCategory === 'Monetario' && <ExchangeRatesTable />}

      </div>
    </div>
  );
};

export default Statistics;