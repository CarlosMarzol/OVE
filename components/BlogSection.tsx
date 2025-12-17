import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Recuperación del sector comercio en el segundo trimestre: Mitos y Realidades',
    summary: 'Un análisis detallado sobre el repunte en ventas minoristas en las principales ciudades del país contrastado con la capacidad de compra real.',
    category: 'Análisis',
    date: '12 Oct, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Informe Mensual: Evolución del Índice de Precios',
    summary: 'Los precios de los alimentos mostraron una variación del 3.2% respecto al mes anterior, impactando principalmente en proteínas y vegetales.',
    category: 'Estadísticas',
    date: '10 Oct, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Alianzas Estratégicas para el Agro Venezolano',
    summary: 'El observatorio firma convenio con asociaciones de productores para digitalizar la data rural y mejorar la toma de decisiones en el campo.',
    category: 'Proyectos',
    date: '05 Oct, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-ven-red font-bold text-sm tracking-wider uppercase mb-2 block">Actualidad Económica</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ven-dark">Estudios y Publicaciones</h2>
            <div className="h-1.5 w-24 bg-ven-yellow mt-4 rounded-full"></div>
          </div>
          <Link to="/publicaciones" className="hidden md:flex items-center text-ven-blue font-bold hover:text-ven-red transition-colors group">
            Ver todas las publicaciones 
            <span className="ml-2 bg-ven-blue/10 p-1 rounded-full group-hover:bg-ven-red/10 transition-colors">
                <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-ven-blue/10 transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
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
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-ven-blue transition-colors leading-tight line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.summary}
                </p>
                
                <div className="pt-5 border-t border-gray-100 mt-auto">
                    <Link to="/blog" className="inline-flex items-center text-sm font-bold text-ven-blue group-hover:text-ven-red transition-colors">
                    Leer artículo completo <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <Link to="/publicaciones" className="px-8 py-3 bg-white border-2 border-ven-blue text-ven-blue rounded-full font-bold hover:bg-ven-blue hover:text-white transition-all inline-block">
                Ver biblioteca completa
            </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;