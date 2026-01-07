import React from 'react';
import { TrendingUp, DollarSign, ShoppingBasket, ArrowUpRight, BarChart3, ShieldCheck, Globe, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import EconomicCalendar from '../components/EconomicCalendar';
import { InflationChart } from '../components/Charts';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import { formatNumber, formatCurrency } from '../utils/format';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Observatorio de Economía de Venezuela - Datos y Estadísticas" 
        description="El Observatorio de Economía de Venezuela (OEV) es la fuente independiente líder en análisis de inflación, PIB, tipo de cambio y sector petrolero en Venezuela."
      />
      
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-slate-950 pt-28 pb-20 overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00247D 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-slide-up">
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-ven-blue/5 dark:bg-ven-blue/20 text-ven-blue dark:text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 border border-ven-blue/10 dark:border-ven-blue/30">
                        <span className="w-2 h-2 rounded-full bg-ven-yellow animate-pulse"></span>
                        Portal Oficial OEV
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ven-dark dark:text-white leading-[1.1] mb-6 tracking-tight">
                        Observatorio de <br/>
                        <span className="relative inline-block text-ven-blue dark:text-ven-yellow">
                             Economía de Venezuela
                             <svg className="absolute w-full h-3 -bottom-1 left-0 text-ven-yellow opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                             </svg>
                        </span>
                        <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl text-gray-500 dark:text-gray-400 font-bold">Estadísticas e Informes Independientes.</span>
                    </h1>
                    
                    <div className="my-8 relative pl-6 border-l-4 border-ven-yellow bg-gray-50/50 dark:bg-slate-900/50 p-4 rounded-r-lg max-w-lg">
                      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic font-serif leading-relaxed">
                        Análisis técnico del sistema financiero, mercado cambiario y sector energético nacional.
                      </p>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg">
                        Acceda a indicadores macroeconómicos de Venezuela actualizados: Inflación, Canasta Alimentaria, Tasa BCV y Producción Petrolera.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/estadisticas" className="bg-ven-blue text-white px-8 py-3.5 rounded-lg font-bold hover:bg-ven-dark hover:shadow-ven-blue/40 transition-all shadow-xl shadow-ven-blue/20 transform hover:-translate-y-1">
                            Explorar Indicadores
                        </Link>
                        <Link to="/mision" className="bg-white dark:bg-slate-800 text-ven-dark dark:text-white border-2 border-ven-dark/10 dark:border-slate-600 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                            Nuestra Metodología
                        </Link>
                    </div>
                </div>
                
                {/* Hero Stats Visual */}
                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-ven-blue/5 to-ven-yellow/10 dark:from-ven-blue/10 dark:to-ven-yellow/5 rounded-full filter blur-3xl -z-10"></div>
                    
                    <div className="grid grid-cols-2 gap-5">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 transform translate-y-8 animate-slide-up" style={{animationDelay: '100ms'}}>
                            <div className="flex items-start justify-between mb-4">
                                <div className="bg-red-50 dark:bg-red-900/20 p-2.5 rounded-xl">
                                    <TrendingUp className="text-ven-red dark:text-red-400 w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-bold text-ven-red dark:text-red-300 bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded-md border border-red-100 dark:border-red-900/50">+{formatNumber(2.4, 1)}%</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-wide">Inflación Venezuela</p>
                            <p className="text-3xl font-extrabold text-gray-800 dark:text-white">{formatNumber(2.4, 1)}%</p>
                        </div>
                        
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 animate-slide-up" style={{animationDelay: '200ms'}}>
                             <div className="flex items-start justify-between mb-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-2.5 rounded-xl">
                                    <DollarSign className="text-ven-blue dark:text-blue-400 w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-bold text-ven-blue dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md border border-blue-100 dark:border-blue-900/50">Tasa Oficial</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-wide">Dólar BCV</p>
                            <p className="text-3xl font-extrabold text-gray-800 dark:text-white">{formatNumber(276.58)} <span className="text-sm text-gray-400 font-medium font-sans">VES</span></p>
                        </div>
                        
                        <div className="bg-ven-dark dark:bg-slate-800 p-6 rounded-2xl shadow-xl shadow-ven-blue/20 col-span-2 transform -translate-y-4 border border-ven-blue/30 animate-slide-up" style={{animationDelay: '300ms'}}>
                             <div className="flex items-start justify-between mb-3">
                                <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                                    <ShoppingBasket className="text-ven-yellow w-6 h-6" />
                                </div>
                                <Link to="/estadisticas" className="text-xs font-bold text-ven-yellow flex items-center hover:underline">
                                    Ver Canasta Alimentaria <ArrowUpRight className="w-3 h-3 ml-1"/>
                                </Link>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-sm font-semibold text-gray-400 mb-1 uppercase tracking-wide">Costo de Vida en Venezuela</p>
                                    <p className="text-3xl font-extrabold text-white">{formatCurrency(540.32, 'USD')}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400">Canasta Cendas</p>
                                    <p className="text-xs text-green-400 font-bold flex items-center justify-end gap-1">
                                        <TrendingUp size={12}/> +{formatNumber(1.2, 1)}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Main Stats Section */}
      <section className="py-20 bg-ven-light dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column: Charts */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                         <div>
                            <h2 className="text-2xl font-bold text-ven-dark dark:text-white flex items-center gap-2">
                                <BarChart3 className="text-ven-blue dark:text-ven-yellow"/> Economía Venezolana: Indicadores Clave
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Análisis econométrico basado en series históricas del Observatorio.</p>
                         </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-900 p-7 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 border-l-4 border-ven-red pl-3">Evolución Histórica de Precios</h3>
                        </div>
                        <InflationChart />
                    </div>
                </div>
                
                {/* Right Column: Information Section */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-7 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-ven-blue/10 p-2.5 rounded-lg">
                                <ShieldCheck className="text-ven-blue w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 dark:text-white">Sobre el Observatorio</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            El OEV provee datos confiables sobre la economía venezolana para académicos, periodistas y tomadores de decisiones.
                        </p>
                        <div className="space-y-4">
                            <Link to="/mision" className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-slate-800 hover:bg-ven-blue hover:text-white transition-all group">
                                <span className="text-sm font-bold">Metodología de Análisis</span>
                                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                            <Link to="/publicaciones" className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-slate-800 hover:bg-ven-blue hover:text-white transition-all group">
                                <span className="text-sm font-bold">Descargar Informes</span>
                                <BookOpen size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <EconomicCalendar />

                    <div className="bg-ven-blue text-white p-6 rounded-2xl shadow-lg relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Globe size={120} />
                        </div>
                        <h3 className="font-bold mb-2 text-lg">Reportes Humanitarios</h3>
                        <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                            Análisis de impacto social en Venezuela (Periodo 2025).
                        </p>
                        <Link to="/blog/ocha-marzo-abril-2025" className="bg-white text-ven-blue px-4 py-2 rounded-lg text-xs font-bold inline-block">
                            Consultar Reporte
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <BlogSection />
      <Newsletter />
    </>
  );
};

export default Home;