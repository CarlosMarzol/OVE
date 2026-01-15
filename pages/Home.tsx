import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBasket, 
  ArrowUpRight, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight,
  Droplets,
  Calendar as CalendarIcon,
  FileText,
  PieChart,
  Activity
} from 'lucide-react';
import SEO from '../components/SEO';
import { InflationChart } from '../components/Charts';
import BlogSection from '../components/BlogSection';
import GeminiAnalyst from '../components/GeminiAnalyst';
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Inicio" 
        description="Referencia técnica independiente para el monitoreo de la economía venezolana. Datos de inflación, tipo de cambio y actividad petrolera."
      />
      
      {/* --- INSTITUTIONAL HERO --- */}
      <section className="relative pt-32 pb-12 bg-white dark:bg-slate-950 transition-colors duration-300 border-b border-gray-100 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Authority Statement */}
            <div className="lg:col-span-7 animate-fade-in">
                <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-[10px] font-bold tracking-widest uppercase mb-6 border border-gray-200 dark:border-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Datos Oficiales OEV • Actualización: Octubre 2024
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-ven-dark dark:text-white mb-6 leading-[1.1] font-serif tracking-tight">
                  Observatorio de Economía de <span className="text-ven-blue dark:text-ven-yellow">Venezuela</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-serif italic font-medium leading-relaxed max-w-2xl mb-8 border-l-4 border-ven-red pl-4">
                  La estadística rigurosa como pilar de la libertad económica.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link to="/estadisticas" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-ven-dark text-white font-bold text-sm hover:bg-ven-blue transition-all shadow-xl shadow-ven-dark/20">
                        <Activity size={18} /> Monitor de Mercado
                    </Link>
                    <Link to="/publicaciones" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700 font-bold text-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-all">
                        <FileText size={18} /> Últimos Informes
                    </Link>
                </div>
            </div>

            {/* Right: Key Indicators Snapshot */}
            <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4">
                     {[
                      { label: 'Tipo de Cambio BCV', val: '45.85', unit: 'VES', trend: '+0.15%', Icon: DollarSign, color: 'text-ven-dark dark:text-white' },
                      { label: 'Inflación Mensual', val: '4.0', unit: '%', trend: '+3.2%', Icon: TrendingUp, color: 'text-ven-red' },
                      { label: 'Canasta Alimentaria', val: '540.32', unit: 'USD', trend: '+4.0%', Icon: ShoppingBasket, color: 'text-ven-blue dark:text-blue-400' },
                      { label: 'Cesta Merey', val: '64.30', unit: 'USD', trend: '-1.2%', Icon: Droplets, color: 'text-gray-800 dark:text-gray-200' },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-gray-50 dark:bg-slate-900/50 p-5 rounded-xl border border-gray-100 dark:border-slate-800 hover:border-ven-blue/30 transition-all group">
                        <div className="flex justify-between items-start mb-2">
                            <kpi.Icon className="w-5 h-5 text-gray-400 group-hover:text-ven-blue transition-colors" />
                            <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400">
                                {kpi.trend}
                            </span>
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{kpi.label}</p>
                        <p className={`text-2xl font-black font-serif mt-1 ${kpi.color}`}>
                            {kpi.val} <span className="text-xs font-sans text-gray-400 font-bold">{kpi.unit}</span>
                        </p>
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTELLIGENCE DASHBOARD SECTION --- */}
      <section className="py-16 bg-ven-light dark:bg-slate-950 transition-colors">
        <div className="container mx-auto px-4">
            
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-black text-ven-dark dark:text-white flex items-center gap-2">
                        <BarChart3 className="text-ven-blue" /> Inteligencia Económica
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Análisis de datos en tiempo real y proyecciones IA.</p>
                </div>
                <Link to="/estadisticas" className="text-sm font-bold text-ven-blue hover:underline hidden md:block">
                    Ver todos los indicadores &rarr;
                </Link>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Main Chart Area */}
                <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-1 shadow-sm">
                    <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-gray-800 dark:text-white">Evolución del Índice Nacional de Precios</h3>
                            <p className="text-xs text-gray-400 uppercase tracking-wide">Octubre 2023 - Octubre 2024</p>
                        </div>
                        <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full bg-ven-red"></div>
                             <span className="text-xs font-bold text-gray-500">Inflación</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <InflationChart />
                    </div>
                </div>

                {/* Sidebar Intelligence */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Gemini Component */}
                    <GeminiAnalyst />

                    {/* Next Events Mini Calendar */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-6">
                        <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <CalendarIcon className="w-4 h-4 text-ven-yellow" /> Agenda Económica
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="bg-gray-100 dark:bg-slate-800 rounded-lg p-2 text-center min-w-[50px]">
                                    <span className="block text-xs font-bold text-gray-500 uppercase">Nov</span>
                                    <span className="block text-xl font-black text-ven-dark dark:text-white">01</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Canasta Cendas</p>
                                    <p className="text-xs text-gray-500">Publicación valor canasta básica.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-gray-100 dark:bg-slate-800 rounded-lg p-2 text-center min-w-[50px]">
                                    <span className="block text-xs font-bold text-gray-500 uppercase">Nov</span>
                                    <span className="block text-xl font-black text-ven-dark dark:text-white">15</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Liquidez Monetaria</p>
                                    <p className="text-xs text-gray-500">Cierre semanal BCV.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- CAPABILITIES SECTION (Institutional Pillars) --- */}
      <section className="py-20 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
          <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-black text-ven-dark dark:text-white mb-6 font-serif">
                      Infraestructura de Datos para la Toma de Decisiones
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                      Combinamos levantamiento de campo tradicional con modelos econométricos modernos para cubrir los vacíos de información oficial.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-ven-blue/50 transition-all hover:-translate-y-1">
                      <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                          <Activity className="text-ven-blue" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Macroeconomía</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          Seguimiento diario de tipos de cambio, reservas internacionales y agregados monetarios para anticipar tendencias inflacionarias.
                      </p>
                      <Link to="/estadisticas" className="text-sm font-bold text-ven-blue flex items-center gap-1 hover:gap-2 transition-all">
                          Explorar Datos <ArrowRight size={14} />
                      </Link>
                  </div>

                  {/* Card 2 */}
                  <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-ven-yellow/50 transition-all hover:-translate-y-1">
                      <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                          <PieChart className="text-ven-yellow" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sector Real</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          Estimaciones de actividad económica, consumo masivo y producción petrolera independiente de PDVSA.
                      </p>
                      <Link to="/estadisticas/energia" className="text-sm font-bold text-ven-yellow flex items-center gap-1 hover:gap-2 transition-all">
                          Ver Producción <ArrowRight size={14} />
                      </Link>
                  </div>

                  {/* Card 3 */}
                  <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-ven-red/50 transition-all hover:-translate-y-1">
                      <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                          <FileText className="text-ven-red" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Análisis Estructural</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          Informes de profundidad sobre distorsiones de precios, economía conductual y riesgos regulatorios.
                      </p>
                      <Link to="/publicaciones" className="text-sm font-bold text-ven-red flex items-center gap-1 hover:gap-2 transition-all">
                          Leer Informes <ArrowRight size={14} />
                      </Link>
                  </div>
              </div>
          </div>
      </section>
      
      {/* Blog & Newsletter Sections remain for engagement */}
      <BlogSection />
      
      <div className="bg-ven-dark py-16 text-center">
          <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-white mb-6">Compromiso con la Transparencia</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                  Nuestra metodología y principios de independencia están detallados públicamente. Entienda cómo construimos nuestros indicadores.
              </p>
              <Link to="/mision" className="inline-block px-8 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-ven-dark transition-all">
                  Conozca nuestra Metodología
              </Link>
          </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Home;