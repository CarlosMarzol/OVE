import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

const posts: BlogPost[] = [
  {
    id: 'desorden-resultado-politico',
    title: 'El desorden no es un accidente: es un resultado político',
    summary: 'Análisis profundo sobre cómo la incertidumbre y la fragilidad institucional se utilizan como herramientas de poder en la política contemporánea.',
    category: 'Análisis',
    date: '20 May, 2025',
    imageUrl: 'https://lh3.googleusercontent.com/d/1LI9RSfYQFj0RNPMY4zsNvWN2P9OjDUjp'
  },
  {
    id: 'venezuela-cruce-caminos',
    title: 'Venezuela ante el cruce de caminos: lo que puede pasar (y lo que no)',
    summary: 'Venezuela vive uno de esos momentos en los que la historia parece acelerarse, pero sin aclarar el rumbo. Análisis sobre los escenarios reales ante el reacomodo del poder.',
    category: 'Análisis',
    date: '18 May, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 'ocha-report',
    title: 'OCHA: 1,1 millones de personas atendidas en respuesta humanitaria',
    summary: 'El más reciente reporte de la OCHA destaca avances en seguridad alimentaria y salud entre marzo y abril de 2025, cubriendo el 82% de los municipios del país.',
    category: 'Humanitario',
    date: '30 Abr, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2670&auto=format&fit=crop'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300" id="blog">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-ven-red font-bold text-sm tracking-wider uppercase mb-2 block">Actualidad Económica</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ven-dark dark:text-white">Estudios y Publicaciones</h2>
            <div className="h-1.5 w-24 bg-ven-yellow mt-4 rounded-full"></div>
          </div>
          <Link to="/blog" className="hidden md:flex items-center text-ven-blue dark:text-ven-yellow font-bold hover:text-ven-red transition-colors group">
            Ver todas las publicaciones 
            <span className="ml-2 bg-ven-blue/10 dark:bg-ven-yellow/10 p-1 rounded-full group-hover:bg-ven-red/10 transition-colors">
                <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group bg-white dark:bg-slate-900 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-xl hover:shadow-ven-blue/10 transition-all duration-300 border border-gray-100 dark:border-slate-800 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-ven-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                     <span className="bg-ven-blue text-white px-3 py-1 rounded-md text-xs font-bold shadow-md uppercase tracking-wide flex items-center gap-1">
                        <Tag size={10} /> {post.category}
                     </span>
                </div>
              </div>
              
              <div className="p-7 flex flex-col flex-grow relative">
                <div className="flex items-center text-gray-400 text-xs mb-4 gap-4 font-medium uppercase tracking-wide">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-ven-yellow" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                     <User className="w-3.5 h-3.5 text-ven-yellow" />
                     <span>Redacción OEV</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-ven-blue dark:group-hover:text-ven-yellow transition-colors leading-tight line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.summary}
                </p>
                
                <div className="pt-5 border-t border-gray-100 dark:border-slate-800 mt-auto">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="inline-flex items-center text-sm font-bold text-ven-blue dark:text-ven-yellow group-hover:text-ven-red transition-colors"
                    >
                      Leer análisis completo <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;