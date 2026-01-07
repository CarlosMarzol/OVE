import React, { useEffect } from 'react';
import { Calendar, User, Download, ArrowLeft, PieChart, Activity, Droplets, Utensils, Shield, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const OchaReportPost: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-white dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300">
      
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-ven-blue mb-6 transition-colors font-medium">
            <ArrowLeft size={16} className="mr-2" /> Volver al Blog
        </Link>
        
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-ven-blue dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100 dark:border-blue-800">
            Reporte Técnico
        </span>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-ven-dark dark:text-white mb-6 leading-tight">
            OCHA: 1,1 millones de personas atendidas en respuesta humanitaria (Marzo-Abril 2025)
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8 border-b border-gray-100 dark:border-slate-800 pb-8">
            <div className="flex items-center gap-2">
                <Calendar size={16} className="text-ven-yellow" />
                <span>30 Abr, 2025</span>
            </div>
            <div className="flex items-center gap-2">
                <User size={16} className="text-ven-yellow" />
                <span>Redacción OEV</span>
            </div>
            <div className="flex items-center gap-2">
                <PieChart size={16} className="text-ven-yellow" />
                <span>Fuente: OCHA Venezuela</span>
            </div>
        </div>
        
        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            
            <div className="bg-ven-light dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 not-prose mb-10 shadow-sm">
                <h3 className="text-xl font-bold text-ven-dark dark:text-white mb-6 flex items-center gap-2">
                    <Activity className="text-ven-red" /> Estadísticas del Periodo
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <p className="text-3xl font-extrabold text-ven-blue dark:text-blue-400">1,1M</p>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Personas Alcanzadas</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold text-ven-blue dark:text-blue-400">24</p>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Estados Cubiertos</p>
                    </div>
                    <div>
                         <p className="text-3xl font-extrabold text-ven-blue dark:text-blue-400">57%</p>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Mujeres y Niñas</p>
                    </div>
                     <div>
                         <p className="text-3xl font-extrabold text-ven-red dark:text-red-400">$606M</p>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Fondos Requeridos</p>
                    </div>
                </div>
            </div>

            <p className="lead text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                El informe técnico elaborado por OCHA Venezuela detalla que la respuesta abarcó 275 municipios del país (82% del territorio) durante el periodo bimestral.
            </p>

            <p>
                Este despliegue se logró mediante la coordinación de <strong>104 organizaciones</strong>, destacando que el 60% son instituciones nacionales. Sin embargo, persiste una brecha financiera: de los $606 millones proyectados, solo se ha recaudado el 6,5% del total necesario.
            </p>

            <h2 className="text-2xl font-bold text-ven-dark dark:text-white mt-10 mb-6">Sectores Prioritarios</h2>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose mb-10">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                            <Utensils size={20} />
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 dark:text-white">Seguridad Alimentaria</h4>
                    </div>
                    <p className="text-3xl font-bold text-ven-dark dark:text-white mb-1">616.000</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Beneficiarios directos</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
                            <HeartPulse size={20} />
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 dark:text-white">Salud y Prevención</h4>
                    </div>
                    <p className="text-3xl font-bold text-ven-dark dark:text-white mb-1">297.000</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Atenciones médicas</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-ven-dark dark:text-white mb-4">Desafíos Logísticos</h2>
            <p>
                El reporte enfatiza que la sostenibilidad del apoyo depende de la infraestructura de servicios públicos. Específicamente, el <strong>Clúster de Nutrición</strong> alertó sobre un ajuste en las necesidades nutricionales en las zonas rurales del sur del país.
            </p>

            <div className="not-prose mt-12 bg-ven-dark text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-ven-blue rounded-full filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Informe Técnico Oficial</h3>
                    <p className="text-blue-200 max-w-md">
                        Descargue el documento completo con tablas estadísticas y mapas de cobertura sectorial.
                    </p>
                </div>
                <a 
                    href="https://drive.google.com/file/d/1J0yEiXkbas7ulrcPfb5KMSlsQ81osKEx/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 bg-ven-yellow text-ven-dark px-8 py-3.5 rounded-xl font-bold hover:bg-white transition-all shadow-lg flex items-center gap-2"
                >
                    <Download size={20} /> Descargar PDF
                </a>
            </div>

        </article>
      </div>
    </div>
  );
};

export default OchaReportPost;