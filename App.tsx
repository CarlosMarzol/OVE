import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Publications from './pages/Publications';
import Trends from './pages/Trends';
import BlogPage from './pages/BlogPage';
import NewsletterPage from './pages/NewsletterPage';
import Mission from './pages/Mission';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ven-light dark:bg-slate-950 font-sans text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-300">
        
        {/* Navbar */}
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mision" element={<Mission />} />
            <Route path="/estadisticas" element={<Statistics />} />
            <Route path="/publicaciones" element={<Publications />} />
            <Route path="/tendencias" element={<Trends />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/boletin" element={<NewsletterPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-[#001a33] dark:bg-slate-950 text-gray-400 py-16 border-t border-ven-blue/30 dark:border-slate-800 relative overflow-hidden mt-auto">
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-ven-yellow via-ven-blue to-ven-red"></div>
          
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-10 mb-12">
                  <div className="col-span-1 md:col-span-1">
                      <div className="flex items-center gap-3 mb-6">
                           <div className="relative w-10 h-10 flex-shrink-0">
                              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                                  <path d="M15 50 C 15 25 35 10 75 12 L 85 5 L 82 20 C 50 20 30 35 30 50 Z" fill="#F7C600"/>
                                  <path d="M25 55 C 35 40 65 25 95 15 L 100 28 L 90 32 C 65 35 45 50 35 60 Z" fill="#3b82f6"/>
                                  <path d="M30 65 C 40 80 65 90 90 88 L 85 98 L 25 85 C 20 70 25 65 30 65 Z" fill="#CF142B"/>
                                  <circle cx="55" cy="58" r="19" fill="white"/>
                                  <circle cx="55" cy="58" r="17" fill="#001a33" stroke="white" strokeWidth="1.5"/>
                                  <path d="M45 58 H 65 M 55 48 V 68 M 48 51 L 62 65 M 62 51 L 48 65" stroke="white" strokeWidth="0.8" opacity="0.6"/>
                                  <text x="55" y="63" fontSize="13" fontWeight="900" fill="#F7C600" textAnchor="middle" style={{fontFamily: 'Arial, sans-serif'}}>Bs</text>
                              </svg>
                           </div>
                          <span className="text-xl font-bold text-white tracking-tight">OEV.</span>
                      </div>
                      <p className="text-sm leading-relaxed mb-6 text-gray-300">
                          El Observatorio de Economía de Venezuela es la referencia independiente para el monitoreo, análisis y proyección de la realidad económica nacional.
                      </p>
                      <div className="flex gap-4">
                          <div className="w-8 h-8 rounded bg-white/5 hover:bg-ven-blue cursor-pointer transition-colors flex items-center justify-center text-white">X</div>
                          <div className="w-8 h-8 rounded bg-white/5 hover:bg-ven-blue cursor-pointer transition-colors flex items-center justify-center text-white">in</div>
                          <div className="w-8 h-8 rounded bg-white/5 hover:bg-ven-blue cursor-pointer transition-colors flex items-center justify-center text-white">Ig</div>
                      </div>
                  </div>
                  
                  <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-gray-700 pb-2 inline-block">Institucional</h4>
                      <ul className="space-y-3 text-sm">
                          <li><a href="#" className="hover:text-ven-yellow transition-colors">Sobre Nosotros</a></li>
                          <li><Link to="/mision" className="hover:text-ven-yellow transition-colors">Misión y Principios</Link></li>
                          <li><a href="#" className="hover:text-ven-yellow transition-colors">Consejo Directivo</a></li>
                          <li><a href="#" className="hover:text-ven-yellow transition-colors">Trabaja con nosotros</a></li>
                      </ul>
                  </div>
                  
                  <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-gray-700 pb-2 inline-block">Datos y Análisis</h4>
                      <ul className="space-y-3 text-sm">
                          <li><Link to="/estadisticas" className="hover:text-ven-yellow transition-colors">Macroeconomía</Link></li>
                          <li><a href="#" className="hover:text-ven-yellow transition-colors">Sector Petrolero</a></li>
                          <li><a href="#" className="hover:text-ven-yellow transition-colors">Consumo y Precios</a></li>
                          <li><a href="#" className="hover:text-ven-yellow transition-colors">Mercado Laboral</a></li>
                      </ul>
                  </div>
                  
                  <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-gray-700 pb-2 inline-block">Contacto</h4>
                      <p className="text-sm mb-3">Torre Financiera, Piso 12<br/>Caracas, Venezuela</p>
                      <p className="text-sm mb-3 hover:text-white cursor-pointer">contacto@oev.org.ve</p>
                      <p className="text-sm hover:text-white cursor-pointer">+58 212 555-0000</p>
                  </div>
              </div>
              
              <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                  <p>&copy; 2023 Observatorio de Economía de Venezuela. Todos los derechos reservados.</p>
                  <div className="flex gap-6 mt-4 md:mt-0">
                      <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                      <a href="#" className="hover:text-white transition-colors">Términos</a>
                      <a href="#" className="hover:text-white transition-colors">Cookies</a>
                  </div>
              </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;