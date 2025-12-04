
import React from 'react';
import { FileText, Download, Filter, Search } from 'lucide-react';

const Publications: React.FC = () => {
  const docs = [
    { title: "Informe de Coyuntura Económica - Q3 2023", type: "Informe Trimestral", date: "Oct 15, 2023", size: "2.4 MB" },
    { title: "La Industria Petrolera y su impacto en el PIB 2024", type: "Estudio Especial", date: "Sep 28, 2023", size: "1.8 MB" },
    { title: "Evolución del Poder Adquisitivo en el Sector Privado", type: "Dossier", date: "Sep 10, 2023", size: "3.1 MB" },
    { title: "Boletín Estadístico Semanal #45", type: "Boletín", date: "Ago 30, 2023", size: "0.5 MB" },
    { title: "Proyecciones de Inflación: Cierre de Año", type: "Pronóstico", date: "Ago 15, 2023", size: "1.2 MB" },
    { title: "Comercio Exterior: Balanza Comercial Primer Semestre", type: "Informe", date: "Jul 22, 2023", size: "4.0 MB" },
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-ven-dark mb-4">Biblioteca de Publicaciones</h1>
            <p className="text-gray-600 max-w-3xl text-lg">
                Repositorio central de investigaciones, informes técnicos y dossiers producidos por el equipo del OEV.
            </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5"/>
                <input 
                    type="text" 
                    placeholder="Buscar por título o palabra clave..." 
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ven-blue"
                />
            </div>
            <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100">
                    <Filter size={18}/> Filtrar
                </button>
                <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium">
                    <option>Más recientes</option>
                    <option>Más antiguos</option>
                </select>
            </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docs.map((doc, index) => (
                <div key={index} className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-ven-blue/30 transition-all bg-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-ven-yellow group-hover:bg-ven-blue transition-colors"></div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-ven-blue/10 transition-colors">
                            <FileText className="w-6 h-6 text-gray-500 group-hover:text-ven-blue" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded">{doc.type}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-ven-blue transition-colors leading-tight">
                        {doc.title}
                    </h3>
                    <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
                        <span>{doc.date}</span>
                        <span className="flex items-center gap-1"><Download size={14}/> {doc.size}</span>
                    </div>
                    <button className="w-full mt-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 group-hover:bg-ven-blue group-hover:text-white group-hover:border-ven-blue transition-all">
                        Descargar PDF
                    </button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
