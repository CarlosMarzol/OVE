import React, { useState, useMemo } from 'react';
import { FileText, Download, Filter, Search, X, Globe, Building2, ExternalLink } from 'lucide-react';

// DEFINICIÓN DE TIPO
interface Doc {
  title: string;
  organization: string;
  type: string;
  date: string;
  size: string; // Ej: "2.5 MB" o "PDF" si es enlace externo
  category: string;
  fileUrl: string;
  isExternal?: boolean; // True para Google Drive o webs externas
}

// -------------------------------------------------------------------------------------------
// 📂 INSTRUCCIONES PARA GOOGLE DRIVE:
// 
// 1. Sube tu archivo a Google Drive.
// 2. Click derecho -> Compartir -> "Cualquier persona con el enlace".
// 3. Copia el enlace y pégalo en 'fileUrl'.
// 4. Pon 'isExternal: true'.
// -------------------------------------------------------------------------------------------

const docsData: Doc[] = [
  { 
    title: "Reporte de Situación Venezuela – Marzo y Abril 2025", 
    organization: "OCHA",
    type: "Reporte Humanitario", 
    date: "Abr 30, 2025", 
    size: "Ver PDF", 
    category: "Organismos Internacionales",
    fileUrl: "https://drive.google.com/file/d/1J0yEiXkbas7ulrcPfb5KMSlsQ81osKEx/view?usp=sharing", 
    isExternal: true
  },
  { 
    title: "Informe Económico Regional (Ejemplo Google Drive)", 
    organization: "FMI",
    type: "Informe Global", 
    date: "Oct 2023", 
    size: "Ver PDF", 
    category: "Organismos Internacionales",
    // EJEMPLO: Así se ve un link de Google Drive
    fileUrl: "https://drive.google.com/file/d/123456789_ID_DEL_ARCHIVO/view?usp=sharing", 
    isExternal: true
  },
  { 
    title: "Estudio sobre Pobreza y Equidad (Ejemplo Drive)", 
    organization: "Banco Mundial",
    type: "Estudio", 
    date: "Sep 2023", 
    size: "Ver PDF", 
    category: "Organismos Internacionales",
    fileUrl: "https://drive.google.com/file/d/otro_id_de_archivo/view", 
    isExternal: true
  },
  { 
    title: "Informe de Coyuntura Económica - Q3 2023", 
    organization: "OEV",
    type: "Informe Trimestral", 
    date: "Oct 15, 2023", 
    size: "2.4 MB", 
    category: "Informes OEV",
    fileUrl: "documentos/oev-informe-q3-2023.pdf", // Este sigue siendo un archivo local si quieres mezclarlos
    isExternal: false
  },
  { 
    title: "La Industria Petrolera y su impacto en el PIB 2024", 
    organization: "OEV",
    type: "Estudio Especial", 
    date: "Sep 28, 2023", 
    size: "1.8 MB", 
    category: "Estudios",
    fileUrl: "documentos/oev-industria-petrolera.pdf",
    isExternal: false
  },
  { 
    title: "Boletín Estadístico Semanal #45", 
    organization: "OEV",
    type: "Boletín", 
    date: "Ago 30, 2023", 
    size: "0.5 MB", 
    category: "Boletines",
    fileUrl: "documentos/boletin-45.pdf",
    isExternal: false
  },
];

const categories = ["Todos", "Informes OEV", "Organismos Internacionales", "Estudios", "Boletines"];

const Publications: React.FC = () => {
  const [filter, setFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocs = useMemo(() => {
    return docsData.filter(doc => {
      const matchesCategory = filter === "Todos" || doc.category === filter;
      const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            doc.organization.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchTerm]);

  return (
    <div className="pt-36 pb-20 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl font-extrabold text-ven-dark dark:text-white mb-4">Biblioteca de Publicaciones</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl text-lg">
                Repositorio central de investigaciones propias y estudios de organismos multilaterales sobre la economía venezolana.
            </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10 p-2 rounded-xl">
            {/* Search Bar */}
            <div className="relative flex-grow max-w-xl">
                <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5"/>
                <input 
                    type="text" 
                    placeholder="Buscar por título u organización..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-ven-blue dark:focus:ring-ven-yellow focus:border-transparent transition-all shadow-sm"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm("")} className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600">
                    <X size={18} />
                  </button>
                )}
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2 items-center">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium mr-2">
                    <Filter size={18}/> <span className="hidden md:inline">Filtrar por:</span>
                </div>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                            filter === cat 
                            ? 'bg-ven-blue text-white shadow-lg shadow-ven-blue/20 transform -translate-y-0.5' 
                            : 'bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:border-gray-300'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 text-sm text-gray-500 dark:text-gray-400 font-medium">
            Mostrando {filteredDocs.length} documentos {filter !== "Todos" && `en la categoría "${filter}"`}
        </div>

        {/* Grid */}
        {filteredDocs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
                {filteredDocs.map((doc, index) => (
                    <div key={index} className="group border border-gray-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-xl hover:border-ven-blue/30 dark:hover:border-ven-yellow/30 transition-all bg-white dark:bg-slate-900 relative overflow-hidden flex flex-col h-full">
                        <div className="absolute top-0 left-0 w-1 h-full bg-ven-yellow group-hover:bg-ven-blue transition-colors"></div>
                        
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg group-hover:bg-ven-blue/10 dark:group-hover:bg-ven-yellow/10 transition-colors">
                                {doc.category.includes('Internacionales') ? (
                                    <Globe className="w-6 h-6 text-ven-blue dark:text-blue-400" />
                                ) : (
                                    <FileText className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-ven-blue dark:group-hover:text-ven-yellow" />
                                )}
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded mb-1">
                                    {doc.type}
                                </span>
                                {doc.organization !== 'OEV' && (
                                    <span className="flex items-center gap-1 text-[10px] font-bold text-ven-blue dark:text-ven-yellow">
                                        <Building2 size={10} /> {doc.organization}
                                    </span>
                                )}
                            </div>
                        </div>
                        
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-3 group-hover:text-ven-blue dark:group-hover:text-ven-yellow transition-colors leading-tight flex-grow">
                            {doc.title}
                        </h3>
                        
                        <div className="mt-auto">
                            <div className="flex justify-between items-center mt-4 text-xs text-gray-500 dark:text-gray-500 font-medium border-t border-gray-100 dark:border-slate-800 pt-4">
                                <span>{doc.date}</span>
                                <span className="flex items-center gap-1 bg-gray-50 dark:bg-slate-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-400">
                                    {doc.isExternal ? <ExternalLink size={10}/> : <Download size={10}/>} {doc.size}
                                </span>
                            </div>
                            
                            {/* Botón Inteligente: Detecta si es Drive/Externo o Local */}
                            <a 
                                href={doc.fileUrl} 
                                download={!doc.isExternal} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full mt-4 py-2.5 border rounded-lg text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 group-hover:shadow-md
                                  ${doc.isExternal 
                                    ? 'border-ven-blue/30 text-ven-blue hover:bg-ven-blue hover:text-white' 
                                    : 'border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:bg-ven-dark hover:text-white'
                                  }`}
                            >
                                {doc.isExternal ? <ExternalLink size={16} /> : <Download size={16} />}
                                {doc.isExternal ? "Ver Documento" : "Descargar PDF"}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-12 text-center border-2 border-dashed border-gray-200 dark:border-slate-700">
                <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-600 dark:text-gray-400">No se encontraron documentos</h3>
                <p className="text-gray-400 dark:text-gray-500 mt-2">Intenta ajustar los filtros o los términos de búsqueda.</p>
                <button onClick={() => {setFilter("Todos"); setSearchTerm("");}} className="mt-4 text-ven-blue dark:text-ven-yellow font-bold hover:underline">
                    Limpiar filtros
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Publications;