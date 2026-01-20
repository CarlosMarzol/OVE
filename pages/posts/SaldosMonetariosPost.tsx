import React, { useEffect } from 'react';
import { Calendar, ArrowLeft, BookOpen, Brain, Activity, Download, ListChecks, Users, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const SaldosMonetariosPost: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pdfUrl = "https://drive.google.com/file/d/18RKms9cJKZDXD1PG08I1_eppSLnh3sGB/view?usp=sharing";
  const mainImageUrl = "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop";

  return (
    <div className="pt-28 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300">
      <SEO 
        title="Saldos Monetarios, Economía Conductual y Caos" 
        description="Estudio sobre los determinantes de la inflación en Venezuela desde la perspectiva de la economía conductual y la teoría del caos."
        article={true}
      />
      
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-ven-blue mb-8 transition-colors font-bold text-sm bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-slate-800">
            <ArrowLeft size={16} className="mr-2" /> Volver al Blog
        </Link>
        
        <header className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-ven-blue/10 text-ven-blue dark:text-ven-yellow text-xs font-black uppercase tracking-widest border border-ven-blue/20 mb-6">
                <Brain size={14} fill="currentColor" /> Investigación Académica
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-ven-dark dark:text-white mb-8 leading-tight tracking-tight font-serif">
                Saldos monetarios reales, economía conductual y el caos: <span className="text-gray-400 dark:text-gray-600">El caso Venezuela</span>
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400 border-y border-gray-200 dark:border-slate-800 py-6">
                <div className="flex items-center gap-2 font-bold">
                    <Calendar size={18} className="text-ven-yellow" />
                    <span>Publicado: 2025</span>
                </div>
                <div className="flex items-center gap-2 font-bold">
                    <BookOpen size={18} className="text-ven-yellow" />
                    <span>Semestre Económico, 28 (65)</span>
                </div>
            </div>
        </header>

        {/* Hero Image Section */}
        <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl mb-16 group">
          <img 
            src={mainImageUrl} 
            alt="Análisis de sistemas complejos y caos económico" 
            className="w-full h-full object-cover animate-fade-in group-hover:scale-105 transition-transform duration-[3000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-8 flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-widest bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
            <Camera size={12} className="text-ven-yellow" /> Representación de Redes Dinámicas / Teoría del Caos
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar con Autores */}
            <aside className="lg:col-span-4 space-y-8">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-black text-ven-dark dark:text-white mb-6 flex items-center gap-2">
                        <Users size={20} className="text-ven-blue" /> Autores del Estudio
                    </h3>
                    <div className="space-y-8">
                        <div>
                            <p className="font-black text-ven-blue dark:text-ven-yellow text-base">José Contreras</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                PhD. en Economía (Texas A&M). Magíster y Matemático (UCV). Profesor de la Universidad Metropolitana-Caracas.
                            </p>
                        </div>
                        <div className="pt-6 border-t border-gray-50 dark:border-slate-800">
                            <p className="font-black text-ven-blue dark:text-ven-yellow text-base">Medina Karelys</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                Magister Scientiarum en Teoría y Política Económica (UCV). Especialista Económico, Oficina de Investigaciones Económicas, Banco Central de Venezuela.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-ven-dark text-white rounded-[2rem] shadow-xl">
                    <h4 className="font-bold text-ven-yellow mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                        <Activity size={16} /> Hallazgo Principal
                    </h4>
                    <p className="text-lg font-serif italic leading-relaxed">
                        "La devaluación constituye el principal factor que induce a los agentes a ajustar sus saldos, con un impacto 3,5 veces mayor que la propia inflación."
                    </p>
                </div>
            </aside>

            {/* Contenido Principal */}
            <main className="lg:col-span-8">
                <article className="prose prose-lg prose-slate dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-800">
                    <h2 className="text-2xl font-black text-ven-dark dark:text-white mb-6">Resumen Ejecutivo</h2>
                    <p>
                        Estudiar los determinantes de la inflación es relevante en economías inflacionarias para dilucidar con mayor precisión los instrumentos de política macroeconómica. Este trabajo analiza los determinantes de largo plazo, construye un modelo de hiperinflación basado en la teoría del caos y estima el nivel de inflación óptimo para la recaudación del "impuesto inflacionario".
                    </p>

                    <h3 className="text-xl font-bold text-ven-blue mt-10">1. Dinámica de los Saldos Monetarios Reales</h3>
                    <p>
                        El estudio define los saldos monetarios reales como la relación entre la oferta monetaria y el IPC. Utilizando la ecuación cuantitativa del dinero (M*V = P*Y), se demuestra que si la producción no crece, los precios tienden a crecer a la velocidad de circulación del dinero.
                    </p>

                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border-l-4 border-ven-yellow my-8 not-prose text-center">
                        <p className="font-mono text-lg font-bold text-ven-blue dark:text-blue-300">
                            M/P = e<sup>-απ</sup> * e<sup>-βs</sup>
                        </p>
                        <p className="text-xs text-gray-500 mt-2 italic">Modelo de demanda de dinero extendido con expectativas de devaluación (s).</p>
                    </div>

                    <h3 className="text-xl font-bold text-ven-blue mt-10">2. Aportes de la Economía Conductual</h3>
                    <p>
                        La investigación identifica que los agentes económicos en Venezuela no actúan bajo "racionalidad perfecta" en el corto plazo, sino bajo la <strong>racionalidad acotada</strong>. Se identifican sesgos críticos:
                    </p>
                    <ul>
                        <li><strong>Sesgo de Anclaje:</strong> Los agentes anclan sus expectativas a aumentos de precios recientes.</li>
                        <li><strong>Heurística de Disponibilidad:</strong> Las noticias sobre escasez de divisas aceleran la liquidación de bolívares.</li>
                        <li><strong>Dicotomía Temporal:</strong> En el largo plazo los agentes tienden a ser racionales, pero en el corto plazo dominan las reacciones heurísticas (Sistema 1 de Kahneman).</li>
                    </ul>

                    <h3 className="text-xl font-bold text-ven-blue mt-10">3. El Impuesto Inflacionario</h3>
                    <p>
                        Uno de los aportes más rigurosos del estudio es la resolución de la ecuación cuadrática para encontrar la tasa de inflación que maximiza el señoreaje. Los resultados indican que el equivalente anual ronda apenas el <strong>1 % anual</strong>, sugiriendo que niveles hiperinflacionarios son fiscalmente contraproducentes.
                    </p>

                    <h3 className="text-xl font-bold text-ven-blue mt-10">4. Teoría del Caos e Hiperinflación</h3>
                    <p>
                        El estudio explora cómo una política monetaria expansiva puede empujar la economía hacia un "atractor caótico". Se identifica un umbral crítico (θ &gt; 2.3) donde pequeños cambios tienen efectos desproporcionados, haciendo la inflación virtualmente imposible de controlar mediante medidas lineales tradicionales.
                    </p>

                    {/* Referencias Bibliográficas */}
                    <div className="mt-16 pt-10 border-t border-gray-100 dark:border-slate-800">
                        <h4 className="text-lg font-black text-ven-dark dark:text-white mb-6 flex items-center gap-2">
                            <ListChecks size={20} className="text-ven-red" /> Referencias Bibliográficas Seleccionadas
                        </h4>
                        <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400 font-sans">
                            <p><strong>Barbosa, F. (2017).</strong> <i>Exploring the Mechanics of Chronic Inflation and Hyperinflation.</i> Brazil, Springer.</p>
                            <p><strong>Cagan, P. (1956).</strong> <i>Estudios de teoría cuantitativa del dinero.</i> Chicago: Prensa Universidad de Chicago.</p>
                            <p><strong>Contreras, J., & Medina K. (2025).</strong> Saldos monetarios reales y aportes desde la economía conductual y el caos: caso Venezuela. <i>Semestre Económico</i>, 28 (65).</p>
                            <p><strong>Kahneman, D. (2014).</strong> <i>Pensar rápido, pensar despacio.</i> España: Debate.</p>
                            <p><strong>Muth, J. (1961).</strong> Rational expectations and the theory of price movements. <i>Econométrica</i>, 29(3), 315-335.</p>
                            <p><strong>Olivera, J. (1967).</strong> Money, Prices and Fiscal Lags: A Note on the Dynamics of inflation. <i>Banca Nazionale del Lavoro Quarterly Review</i>, 20, 258-267.</p>
                        </div>
                    </div>

                    <div className="not-prose mt-12 bg-ven-blue text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl overflow-hidden relative border border-white/10">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-ven-blue to-ven-dark opacity-50 z-0"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-2 flex items-center gap-2">
                                <Download size={24} className="text-ven-yellow" /> Estudio Completo (PDF)
                            </h3>
                            <p className="text-blue-100 max-w-md">
                                Acceda a la versión íntegra de 33 páginas con todas las matrices de correlación y pruebas de raíz unitaria.
                            </p>
                        </div>
                        <a 
                            href={pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 bg-ven-yellow text-ven-dark px-8 py-3.5 rounded-xl font-black hover:bg-white transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-1"
                        >
                            Ver Investigación
                        </a>
                    </div>
                </article>
            </main>
        </div>
      </div>
    </div>
  );
};

export default SaldosMonetariosPost;