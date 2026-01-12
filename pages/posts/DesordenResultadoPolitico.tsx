import React, { useEffect, useState } from 'react';
import { Calendar, ArrowLeft, Bookmark, Share2, Scale, MessageSquareQuote, Download, Info, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const DesordenResultadoPolitico: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  // Enlace directo optimizado de la imagen proporcionada
  const mainImageUrl = "https://lh3.googleusercontent.com/d/1LI9RSfYQFj0RNPMY4zsNvWN2P9OjDUjp";

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300">
      <SEO 
        title="El desorden no es un accidente: es un resultado político" 
        description="Un análisis profundo sobre cómo la incertidumbre y la fragilidad institucional se utilizan como herramientas de poder en la política contemporánea."
        article={true}
      />

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1.5 z-[40] bg-gray-200 dark:bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-ven-yellow via-ven-blue to-ven-red transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-between items-center mb-12">
            <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-ven-blue transition-colors font-bold text-sm bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-slate-800">
                <ArrowLeft size={16} className="mr-2" /> Volver al Blog
            </Link>
            <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-ven-blue hover:bg-white dark:hover:bg-slate-900 rounded-full transition-all border border-transparent hover:border-gray-100 dark:hover:border-slate-800 shadow-sm"><Bookmark size={18} /></button>
                <button className="p-2 text-gray-400 hover:text-ven-blue hover:bg-white dark:hover:bg-slate-900 rounded-full transition-all border border-transparent hover:border-gray-100 dark:hover:border-slate-800 shadow-sm"><Share2 size={18} /></button>
            </div>
        </div>
        
        <header className="mb-16 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-ven-blue/10 text-ven-blue dark:text-blue-300 text-xs font-black uppercase tracking-widest border border-ven-blue/20 shadow-sm">
                    <Scale size={14} fill="currentColor" /> Análisis de Poder
                </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-ven-dark dark:text-white mb-8 leading-[1.05] tracking-tight font-serif">
                El desorden no es un accidente: <span className="text-gray-400 dark:text-gray-600">es un resultado político</span>
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ven-dark to-ven-blue flex items-center justify-center text-white font-black text-sm shadow-lg shadow-ven-blue/20">OEV</div>
                    <div className="text-left">
                        <span className="block font-bold text-gray-900 dark:text-gray-200">Unidad de Análisis del OEV</span>
                        <span className="text-xs">Observatorio de Economía</span>
                    </div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-slate-800 hidden md:block"></div>
                <div className="flex items-center gap-2 font-bold">
                    <Calendar size={18} className="text-ven-yellow" />
                    <span>20 de Mayo, 2025</span>
                </div>
            </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-3 hidden lg:block space-y-8 sticky top-32 h-fit">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
                    <p className="text-xs font-black text-ven-blue dark:text-ven-yellow uppercase tracking-widest mb-4">Conceptos Clave</p>
                    <ul className="space-y-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                        <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-ven-red mt-1.5 flex-shrink-0"></span>
                            Incertidumbre como impuesto invisible.
                        </li>
                        <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-ven-blue mt-1.5 flex-shrink-0"></span>
                            Fragilidad institucional deliberada.
                        </li>
                        <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-ven-yellow mt-1.5 flex-shrink-0"></span>
                            Silencio estratégico.
                        </li>
                    </ul>
                </div>
            </aside>

            <main className="lg:col-span-9">
                {/* Cabecera con Imagen Proporcionada */}
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl mb-12 group">
                  <img 
                    src={mainImageUrl} 
                    alt="Visualización conceptual del desorden político" 
                    className="w-full h-full object-cover animate-fade-in group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-8 flex items-center gap-2 text-white/70 text-[10px] font-bold uppercase tracking-widest">
                    <Camera size={12} className="text-ven-yellow" /> Ilustración Conceptual / Análisis OEV
                  </div>
                </div>

                <article className="prose prose-lg prose-slate dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 font-serif leading-relaxed bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-800">
                    
                    <p className="first-letter:text-7xl first-letter:font-black first-letter:text-ven-blue first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] mb-8">
                        Durante mucho tiempo, el desorden ha sido interpretado como el síntoma de un fracaso: de la mala gestión, de la improvisación o de la incapacidad del poder para imponer reglas. Sin embargo, una lectura más realista de la política contemporánea sugiere algo distinto. El desorden no siempre aparece cuando el sistema falla; en determinados contextos, es el resultado buscado.
                    </p>

                    <p>
                        El orden político y económico no surge de forma espontánea. Es una construcción institucional compleja, costosa y lenta. Requiere normas estables, legitimidad, expectativas previsibles y capacidad de hacer cumplir decisiones. Destruir ese entramado, en cambio, suele ser rápido y relativamente barato. Y, para determinados actores, también funcional.
                    </p>

                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border-l-8 border-ven-yellow my-10">
                        <p className="m-0 italic text-xl leading-relaxed">
                            "Cuando se rompe una arquitectura institucional sin un marco que la sustituya, lo que emerge no es orden ni libertad, sino competencia por el control de recursos, poder y legitimidad."
                        </p>
                    </div>

                    <p>
                        Esta confusión es habitual porque seguimos analizando el poder con categorías del pasado. Asumimos que toda intervención busca gobernar, reconstruir o estabilizar. Sin embargo, en muchos escenarios actuales el objetivo es más limitado y más eficiente: reducir la capacidad de decisión autónoma del sistema afectado, debilitando sus reglas internas y condicionando su comportamiento futuro.
                    </p>

                    <div className="my-12 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800/30">
                        <h4 className="text-ven-blue font-black text-sm uppercase tracking-widest mt-0 mb-4 flex items-center gap-2">
                            <Info size={18} /> Perspectiva Económica
                        </h4>
                        <p className="m-0 text-lg">
                            Desde una perspectiva económica, este enfoque resulta especialmente evidente. La incertidumbre sostenida actúa como un <strong>impuesto invisible</strong>. Paraliza la inversión, retrasa decisiones productivas, erosiona la confianza en las instituciones y empuja a los agentes económicos hacia estrategias defensivas. No hace falta administrar un país para deteriorar su economía; basta con volver imprevisible su entorno normativo y político.
                        </p>
                    </div>

                    <p>
                        En este sentido, el desorden no necesita ser absoluto para ser eficaz. Un sistema parcialmente bloqueado, sin reglas claras ni expectativas estables, es mucho más fácil de influir que uno ordenado y predecible. La fragilidad institucional se convierte así en un instrumento de poder.
                    </p>

                    <div className="bg-ven-dark text-white p-10 rounded-[2rem] shadow-2xl my-16 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-ven-blue rounded-full filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
                        <h4 className="text-ven-yellow font-black text-2xl mb-6 flex items-center gap-2 font-sans not-prose">
                            <MessageSquareQuote fill="currentColor" /> EL SILENCIO ESTRATÉGICO
                        </h4>
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-0 text-gray-100">
                            "También conviene desmontar otra lectura simplista: la idea de que el silencio o la ausencia de respuesta siempre implican debilidad. En contextos de alta tensión, reaccionar de forma precipitada puede legitimar narrativas ajenas. El silencio, en determinados momentos, es una decisión estratégica, no una renuncia."
                        </p>
                    </div>

                    <p>
                        El problema surge cuando se confunde el impacto inicial con un resultado duradero. El “día después” suele ser más complejo que el momento del shock. Sin instituciones funcionales, sin acuerdos mínimos y sin legitimidad política, los vacíos se llenan rápidamente. Y rara vez lo hacen de manera ordenada o democrática.
                    </p>

                    <p>
                        Por eso, el debate relevante no debería centrarse únicamente en quién cae o quién gana un pulso puntual, sino en qué tipo de sistema queda operativo después. Porque el poder real no se mide solo por la capacidad de intervenir, sino por la capacidad de influir en la trayectoria futura de un país sin asumir la responsabilidad de gobernarlo.
                    </p>

                    <div className="not-prose mt-12 bg-ven-blue text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-2 flex items-center gap-2">
                                <Download size={24} className="text-ven-yellow" /> Ensayo Completo
                            </h3>
                            <p className="text-blue-100 max-w-md">
                                Descargue la versión íntegra de este análisis en PDF para su consulta institucional.
                            </p>
                        </div>
                        <button className="relative z-10 bg-ven-yellow text-ven-dark px-8 py-3.5 rounded-xl font-black hover:bg-white transition-all shadow-lg flex items-center gap-2">
                            Descargar PDF
                        </button>
                    </div>
                </article>

                <div className="mt-12 p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-ven-dark to-ven-blue flex items-center justify-center text-white text-3xl font-black shadow-xl">OEV</div>
                    <div className="text-center md:text-left">
                        <h4 className="font-black text-2xl text-ven-dark dark:text-white mb-2">Unidad de Análisis del OEV</h4>
                        <p className="text-gray-500 dark:text-gray-400">Este artículo forma parte del ciclo de estudios sobre "Gobernanza e Institucionalidad" del Observatorio de Economía de Venezuela.</p>
                    </div>
                </div>
            </main>
        </div>
      </div>
    </div>
  );
};

export default DesordenResultadoPolitico;