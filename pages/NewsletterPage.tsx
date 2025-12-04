
import React from 'react';
import Newsletter from '../components/Newsletter';

const NewsletterPage: React.FC = () => {
  return (
    <div className="pt-20 bg-ven-dark min-h-screen flex flex-col justify-center">
        <div className="py-10">
            <div className="container mx-auto px-4 text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Únete a nuestra comunidad</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    No pierdas detalle. Recibe cada lunes a las 8:00 AM el resumen más completo de la economía venezolana curado por expertos.
                </p>
            </div>
            <Newsletter />
        </div>
    </div>
  );
};

export default NewsletterPage;
