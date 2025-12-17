import React from 'react';
import { TrendingUp, DollarSign, ShoppingBasket, ArrowUpRight, BarChart3, PieChart, Quote } from 'lucide-react';
import GeminiAnalyst from '../components/GeminiAnalyst';
import { InflationChart, ExchangeChart } from '../components/Charts';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import { formatNumber, formatCurrency } from '../utils/format';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section - Reduced padding top for better visual balance */}
      <section className="relative bg-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#00247D 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-slide-up">
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-ven-blue/5 text-ven-blue text-xs font-bold tracking-widest uppercase mb-6 border border-ven-blue/10">
                        <span className="w-2 h-2 rounded-full bg-ven-yellow animate-pulse"></span>
                        Datos Oficiales y Análisis Independiente
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ven-dark leading-[1.1] mb-6 tracking-tight">
                        La economía de <br/>
                        <span className="relative inline-block">
                             Venezuela
                             <svg className="absolute w-full h-3 -bottom-1 left-0 text-ven-yellow opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                             </svg>
                        </span>
                        <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl text-gray-500 font-bold">en tiempo real.</span>
                    </h1>
                    
                    {/* Philosophical Quote */}
                    <div className="my-8 relative pl-6 border-l-4 border-ven-yellow bg-gray-50/50 p-4 rounded-r-lg max-w-lg">
                      <Quote className="absolute top-2 left-2 w-4 h-4 text-ven-yellow opacity-40 transform -scale-x-100 -translate-x-full" />
                      <p className="text-lg md:text-xl text-gray-700 italic font-serif leading-relaxed">
                        "Sin instituciones estadísticas sólidas, la confianza en los datos se desploma — y con ella, los cimientos de una política sólida."
                      </p>
                    </div>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                        Plataforma integral de inteligencia económica. Monitoreamos indicadores, proyectamos tendencias y democratizamos el acceso a la información financiera del país.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/estadisticas" className="bg-ven-blue text-white px-8 py-3.5 rounded-lg font-bold hover:bg-ven-dark transition-all shadow-xl shadow-ven-blue/20 transform hover:-translate-y-1">
                            Ver Indicadores de Hoy
                        </Link>
                        <Link to="/mision" className="bg-white text-ven-dark border-2 border-ven-dark/10 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                            Nuestra Metodología
                        </Link>
                    </div>
                </div>
                
                {/* Hero Stats Visual */}
                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-ven-blue/5 to-ven-yellow/10 rounded-full filter blur-3xl -z-10"></div>
                    
                    <div className="grid grid-cols-2 gap-5">
                        <div className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 transform translate-y-8 animate-slide-up" style={{animationDelay: '100ms'}}>
                            <div className="flex items-start justify-between mb-4">
                                <div className="bg-red-50 p-2.5 rounded-xl">
                                    <TrendingUp className="text-ven-red w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-bold text-ven-red bg-red-50 px-2 py-1 rounded-md border border-red-100">+{formatNumber(2.4)}% Mensual</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-400 mb-1 uppercase tracking-wide">Inflación</p>
                            <p className="text-3xl font-extrabold text-gray-800">{formatNumber(2.4)}%</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 animate-slide-up" style={{animationDelay: '200ms'}}>
                             <div className="flex items-start justify-between mb-4">
                                <div className="bg-blue-50 p-2.5 rounded-xl">
                                    <DollarSign className="text-ven-blue w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-bold text-ven-blue bg-blue-50 px-2 py-1 rounded-md border border-blue-100">BCV</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-400 mb-1 uppercase tracking-wide">Tasa Oficial</p>
                            <p className="text-3xl font-extrabold text-gray-800">{formatNumber(36.7)} <span className="text-sm text-gray-400 font-medium">VES</span></p>
                        </div>
                        
                        <div className="bg-ven-dark p-6 rounded-2xl shadow-xl shadow-ven-blue/20 col-span-2 transform -translate-y-4 border border-ven-blue/30 animate-slide-up" style={{animationDelay: '300ms'}}>
                             <div className="flex items-start justify-between mb-3">
                                <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                                    <ShoppingBasket className="text-ven-yellow w-6 h-6" />
                                </div>
                                <Link to="/estadisticas" className="text-xs font-bold text-ven-yellow flex items-center hover:underline">
                                    Ver desglose <ArrowUpRight className="w-3 h-3 ml-1"/>
                                </Link>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-sm font-semibold text-gray-400 mb-1 uppercase tracking-wide">Canasta Alimentaria</p>
                                    <p className="text-3xl font-extrabold text-white">{formatCurrency(540.32, 'USD')}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400">Grupo Familiar</p>
                                    <p className="text-xs text-green-400 font-bold flex items-center justify-end gap-1">
                                        <TrendingUp size={12}/> +{formatNumber(1.2)}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Main Stats & Gemini Section */}
      <section className="py-20 bg-ven-light">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column: Charts */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                         <div>
                            <h2 className="text-2xl font-bold text-ven-dark flex items-center gap-2">
                                <BarChart3 className="text-ven-blue"/> Indicadores Destacados
                            </h2>
                            <p className="text-gray-500 text-sm mt-1">Resumen de mercado. Para más detalles visita la sección de <Link to="/estadisticas" className="text-ven-blue underline">Estadísticas</Link>.</p>
                         </div>
                    </div>
                    
                    <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-lg font-bold text-gray-800 border-l-4 border-ven-red pl-3">Inflación Mensual (%)</h3>
                        </div>
                        <InflationChart />
                    </div>
                </div>
                
                {/* Right Column: AI Analysis */}
                <div className="lg:col-span-1">
                    <div className="space-y-6">
                         <GeminiAnalyst />
                         
                         <div className="bg-ven-dark text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-ven-blue rounded-full filter blur-2xl opacity-50 transform translate-x-10 -translate-y-10"></div>
                            
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 relative z-10">
                                <PieChart className="text-ven-yellow"/> Reportes Destacados
                            </h3>
                            <ul className="space-y-3 relative z-10">
                                <li className="group cursor-pointer bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors border border-white/5 hover:border-ven-yellow/50">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-sm font-bold text-gray-100 group-hover:text-ven-yellow transition-colors">Informe Trimestral Q3</p>
                                            <p className="text-[10px] text-gray-400 mt-1">Publicado: Oct 01, 2023</p>
                                        </div>
                                        <span className="text-[10px] bg-ven-blue px-2 py-0.5 rounded text-white">PDF</span>
                                    </div>
                                </li>
                                <li className="group cursor-pointer bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors border border-white/5 hover:border-ven-yellow/50">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-sm font-bold text-gray-100 group-hover:text-ven-yellow transition-colors">Perspectivas Petroleras 2024</p>
                                            <p className="text-[10px] text-gray-400 mt-1">Publicado: Sep 15, 2023</p>
                                        </div>
                                        <span className="text-[10px] bg-ven-blue px-2 py-0.5 rounded text-white">PDF</span>
                                    </div>
                                </li>
                            </ul>
                            <Link to="/publicaciones" className="block text-center w-full mt-4 py-2 text-xs font-bold uppercase tracking-wider text-ven-yellow border border-ven-yellow/30 rounded hover:bg-ven-yellow hover:text-ven-dark transition-all">
                                Ver Repositorio
                            </Link>
                         </div>
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