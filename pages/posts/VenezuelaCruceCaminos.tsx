import React, { useEffect, useState } from 'react';
import { Calendar, User, ArrowLeft, Bookmark, Share2, Quote, Info, ShieldAlert, GitMerge, Globe2, Landmark, Zap, MessageSquareQuote, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const VenezuelaCruceCaminos: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const pdfLink = "https://drive.google.com/file/d/1aW0KamF3ZJpmYyukehafwUNc1Er3YO99/view?usp=sharing";

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
        title="Venezuela ante el cruce de caminos" 
        description="Venezuela ante el cruce de caminos: lo que puede pasar (y lo que no). Un análisis sobre la realidad política y los escenarios posibles."
        article={true}
      />

      {/* Barra de progreso de lectura - En la parte inferior para no obstruir el logo */}
      <div className="fixed bottom-0 left-0 w-full h-1.5 z-[40] bg-gray-200 dark:bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-ven-yellow via-ven-blue to-ven-red transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Acciones superiores */}
        <div className="flex justify-between items-center mb-12">
            <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-ven-blue transition-colors font-bold text-sm bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-slate-800">
                <ArrowLeft size={16} className="mr-2" /> Volver al Blog
            </Link>
            <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-ven-blue hover:bg-white dark:hover:bg-slate-900 rounded-full transition-all border border-transparent hover:border-gray-100 dark:hover:border-slate-800 shadow-sm"><Bookmark size={18} /></button>
                <button className="p-2 text-gray-400 hover:text-ven-blue hover:bg-white dark:hover:bg-slate-900 rounded-full transition-all border border-transparent hover:border-gray-100 dark:hover:border-slate-800 shadow-sm"><Share2 size={18} /></button>
            </div>
        </div>
        
        {/* Portada del Artículo */}
        <header className="mb-16 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-ven-red/10 text-ven-red dark:text-red-400 text-xs font-black uppercase tracking-widest border border-ven-red/20 shadow-sm">
                    <Zap size={14} fill="currentColor" /> Análisis Coyuntural
                </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-ven-dark dark:text-white mb-8 leading-[1.05] tracking-tight font-serif">
                Venezuela ante el cruce de caminos: <span className="text-gray-400 dark:text-gray-600">lo que puede pasar (y lo que no)</span>
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ven-blue to-ven-dark flex items-center justify-center text-white font-black text-sm shadow-lg shadow-ven-blue/20">OEV</div>
                    <div className="text-left">
                        <span className="block font-bold text-gray-900 dark:text-gray-200">Unidad de Análisis Político</span>
                        <span className="text-xs">Observatorio de Economía</span>
                    </div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-slate-800 hidden md:block"></div>
                <div className="flex items-center gap-2 font-bold">
                    <Calendar size={18} className="text-ven-yellow" />
                    <span>18 de Mayo, 2025</span>
                </div>
            </div>
        </header>

        {/* Cuerpo del Artículo con Diseño Editorial */}
        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Sidebar con Destacado */}
            <aside className="lg:col-span-3 hidden lg:block space-y-8 sticky top-32 h-fit">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
                    <p className="text-xs font-black text-ven-blue dark:text-ven-yellow uppercase tracking-widest mb-4">Puntos Clave</p>
                    <ul className="space-y-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                        <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-ven-red mt-1.5 flex-shrink-0"></span>
                            Continuidad del chavismo sin Maduro.
                        </li>
                        <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-ven-blue mt-1.5 flex-shrink-0"></span>
                            Inestabilidad y fragmentación del poder.
                        </li>
                        <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-ven-yellow mt-1.5 flex-shrink-0"></span>
                            Mitos de la intervención directa.
                        </li>
                    </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-ven-blue to-ven-dark rounded-2xl text-white shadow-xl shadow-ven-blue/20">
                    <MessageSquareQuote className="mb-4 text-ven-yellow" size={32} />
                    <p className="text-lg font-serif italic leading-relaxed">
                        "Entender los escenarios reales no es un ejercicio académico: es una forma mínima de respeto."
                    </p>
                </div>
            </aside>

            {/* Contenido Principal */}
            <main className="lg:col-span-9">
                <article className="prose prose-lg prose-slate dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 font-serif leading-relaxed bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-800">
                    
                    {/* Introducción con Capitular */}
                    <p className="first-letter:text-7xl first-letter:font-black first-letter:text-ven-blue first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] mb-8">
                        Venezuela vive uno de esos momentos en los que la historia parece acelerarse, pero sin aclarar el rumbo. La salida forzada de Nicolás Maduro del tablero político no ha traído certezas, sino una pregunta que se repite dentro y fuera del país: ¿y ahora qué? Las respuestas fáciles abundan; la realidad, como casi siempre, es bastante más incómoda.
                    </p>

                    <p className="mb-12">
                        Para entender lo que puede ocurrir en Venezuela es necesario abandonar dos extremos muy frecuentes. Por un lado, la idea de que todo seguirá exactamente igual; por el otro, la fantasía de un cambio inmediato, limpio y sin costos. Entre ambos polos se mueven los escenarios reales.
                    </p>

                    {/* Escenario 1 Highlight */}
                    <div className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border-l-8 border-ven-yellow mb-10 overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <ShieldAlert size={120} />
                        </div>
                        <h3 className="text-ven-dark dark:text-white font-black text-xl mb-4 flex items-center gap-2 not-prose font-sans text-sm md:text-base">
                            <ShieldAlert className="text-ven-blue" /> ESCENARIO I: EL CONTINUISMO
                        </h3>
                        <p className="relative z-10 m-0 text-lg">
                            El primero —y el más probable en el corto plazo— es la continuidad del chavismo sin Maduro. No porque exista respaldo popular, sino porque el poder en Venezuela no se sostiene en votos, sino en control. Control de las Fuerzas Armadas, de los servicios de inteligencia, del sistema judicial, de la renta petrolera y, cada vez más, de la calle, a través de colectivos y estructuras informales. La salida de un líder no implica automáticamente la caída del sistema que lo sostuvo; los venezolanos ya aprendimos esa lección tras la muerte de Chávez. Lo que hoy se observa es un reacomodo: ganar tiempo, cerrar filas y negociar desde la supervivencia.
                        </p>
                    </div>

                    {/* Escenario 2 Highlight */}
                    <div className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border-l-8 border-ven-red mb-10 overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <GitMerge size={120} />
                        </div>
                        <h3 className="text-ven-dark dark:text-white font-black text-xl mb-4 flex items-center gap-2 not-prose font-sans text-sm md:text-base">
                            <GitMerge className="text-ven-red" /> ESCENARIO II: LA INESTABILIDAD
                        </h3>
                        <p className="relative z-10 m-0 text-lg">
                            Un segundo escenario, estrechamente vinculado al anterior, es el de una continuidad inestable. El régimen se mantiene, pero aparecen grietas: fracturas internas, disputas entre clanes, zonas donde el control es más débil y una mayor autonomía de actores armados. No es una guerra civil, pero tampoco un Estado plenamente funcional. Es un país que sobrevive día a día, con una gobernabilidad precaria y un costo social creciente. Paradójicamente, este escenario suele ser más peligroso para la población que una dictadura cohesionada, porque introduce arbitrariedad, miedo e imprevisibilidad.
                        </p>
                    </div>

                    {/* Escenario 3 Highlight */}
                    <div className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border-l-8 border-ven-blue mb-10 overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Landmark size={120} />
                        </div>
                        <h3 className="text-ven-dark dark:text-white font-black text-xl mb-4 flex items-center gap-2 not-prose font-sans text-sm md:text-base">
                            <Landmark className="text-ven-blue" /> ESCENARIO III: LA TRANSICIÓN PACTADA
                        </h3>
                        <p className="relative z-10 m-0 text-lg">
                            El tercer escenario, menos inmediato pero posible en el mediano plazo, es una transición negociada y limitada. No una transición ideal ni heroica, sino una salida pactada. Implica aceptar una verdad: sin garantías para parte del chavismo y del estamento militar, no habrá transición. Este camino frustra a quienes esperan justicia inmediata, pero es el único que históricamente ha permitido desmontar regímenes autoritarios sin multiplicar el sufrimiento. Elecciones, sí, pero precedidas de pactos, mediación internacional y concesiones mutuas.
                        </p>
                    </div>

                    {/* Geopolítica Sección */}
                    <div className="my-16 flex flex-col items-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-ven-yellow via-ven-blue to-ven-red mb-12 rounded-full"></div>
                        
                        <div className="space-y-8">
                            <p>
                                Uno de los escenarios que más ruido genera —y más confusión— es el de una intervención prolongada o tutela directa de Estados Unidos. Donald Trump ha insinuado esta posibilidad en algunas ruedas de prensa, alimentando la idea de una ocupación inminente. Sin embargo, este es uno de los escenarios menos probables. No porque Trump no lo diga, sino porque hacerlo sería enormemente costoso para Estados Unidos, más aún en un contexto marcado por elecciones de medio término y un electorado poco dispuesto a nuevas aventuras exteriores.
                            </p>

                            <p>
                                Decir que “se harán cargo” es políticamente barato; gobernar un país fracturado es carísimo. Estados Unidos ya aprendimos —en Irak y Afganistán— que ocupar y administrar un país destruye capital político interno, genera rechazo internacional y no garantiza estabilidad. Hoy, Washington prefiere otra fórmula: influir sin gobernar, condicionar sin ocupar, mandar sin asumir la responsabilidad diaria. Sanciones, alivios selectivos, reconocimiento diplomático, acceso al sistema financiero y control del mercado petrolero son herramientas mucho más eficaces que una tutela directa. Trump habla en clave de fuerza, pero actúa —como todos los presidentes estadounidenses modernos— desde los incentivos.
                            </p>
                            
                            <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800/30 flex items-start gap-4">
                                <Globe2 className="text-ven-blue flex-shrink-0" size={32} />
                                <p className="m-0 italic text-gray-600 dark:text-gray-400">
                                    Tampoco parece probable una escalada geopolítica mayor en la que Venezuela se convierta en un escenario de confrontación directa entre grandes potencias. Rusia y China tienen intereses, pero carecen de incentivos reales para transformar a Venezuela en un conflicto abierto. Su respaldo será táctico y diplomático, no militar.
                                </p>
                            </div>

                            <p>
                                Finalmente, está el escenario más deseado por muchos venezolanos: una transición democrática rápida y limpia. Lamentablemente, hoy es el menos realista. No existe una fractura clara del poder armedo ni una capacidad de movilización social suficiente para forzarla sin costos enormes. Desearlo no lo hace posible.
                            </p>

                            <div className="bg-ven-dark text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-ven-blue rounded-full filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
                                <h4 className="text-ven-yellow font-black text-2xl mb-6 flex items-center gap-2 font-sans not-prose">
                                    <Quote fill="currentColor" /> SÍNTESIS FINAL
                                </h4>
                                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-gray-100">
                                    Venezuela no está ante una liberación inmediata ni ante un colapso total. Está ante un período de reacomodo del poder, negociación y desgaste. El verdadero dilema ya no es si el chavismo puede sobrevivir sin Maduro, sino cuánto tiempo puede hacerlo y a qué precio para la sociedad venezolana.
                                </p>
                                <p className="text-lg text-gray-400 m-0 border-t border-white/10 pt-6 italic">
                                    Seguir analizando Venezuela desde consignas ideológicas —a favor o en contra— solo prolonga la ceguera. Hoy, entender los escenarios reales no es un ejercicio académico: es una forma mínima de respeto hacia un país que lleva demasiado tiempo pagando el costo de los relatos ajenos.
                                </p>
                            </div>

                            {/* CTA Descarga PDF Destacado */}
                            <div className="not-prose mt-12 bg-ven-blue text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden border border-white/10">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-ven-blue to-ven-dark opacity-50 z-0"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black mb-2 flex items-center gap-2">
                                        <Download size={24} className="text-ven-yellow" /> Versión PDF Completa
                                    </h3>
                                    <p className="text-blue-100 max-w-md">
                                        Descargue el análisis íntegro en formato editorial para su lectura offline o archivo institucional.
                                    </p>
                                </div>
                                <a 
                                    href={pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 bg-ven-yellow text-ven-dark px-8 py-3.5 rounded-xl font-black hover:bg-white transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-1"
                                >
                                    Descargar Ahora
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Footer del Autor */}
                <div className="mt-12 p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-8 transition-transform hover:scale-[1.01]">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-ven-blue to-ven-dark flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-ven-blue/30">OEV</div>
                    <div className="text-center md:text-left">
                        <h4 className="font-black text-2xl text-ven-dark dark:text-white mb-2">Unidad de Análisis del OEV</h4>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Este estudio forma parte de la serie de proyecciones sociopolíticas del Observatorio. Nuestro equipo monitorea diariamente la evolución de los indicadores económicos y políticos para ofrecer perspectivas objetivas sobre la realidad nacional.</p>
                        <div className="flex justify-center md:justify-start gap-4 mt-6">
                            <Link to="/publicaciones" className="text-ven-blue dark:text-ven-yellow font-bold text-sm hover:underline">Ver otros análisis</Link>
                            <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="text-ven-blue dark:text-ven-yellow font-bold text-sm hover:underline">Descargar en PDF</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
      </div>
    </div>
  );
};

export default VenezuelaCruceCaminos;