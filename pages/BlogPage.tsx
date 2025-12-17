import React from 'react';
import BlogSection from '../components/BlogSection'; 

const BlogPage: React.FC = () => {
  return (
    <div className="pt-24 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
       <div className="bg-ven-light dark:bg-slate-900 py-16 mb-8 transition-colors">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-ven-dark dark:text-white mb-4">Noticias y Actualidad</h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                    Artículos de opinión, resúmenes de prensa y cobertura de eventos económicos relevantes para el país.
                </p>
            </div>
       </div>
       <BlogSection />
       
       <div className="container mx-auto px-4 pb-20">
            <div className="flex justify-center gap-2">
                <button className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-ven-blue hover:text-white hover:border-ven-blue transition-colors">1</button>
                <button className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-ven-blue hover:text-white hover:border-ven-blue transition-colors">2</button>
                <button className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-ven-blue hover:text-white hover:border-ven-blue transition-colors">3</button>
                <span className="px-4 py-2 text-gray-400 dark:text-gray-600">...</span>
                <button className="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-ven-blue hover:text-white hover:border-ven-blue transition-colors">12</button>
            </div>
       </div>
    </div>
  );
};

export default BlogPage;