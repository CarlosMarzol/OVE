import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Publications from './pages/Publications';
import Trends from './pages/Trends';
import BlogPage from './pages/BlogPage';
import NewsletterPage from './pages/NewsletterPage';
import Mission from './pages/Mission';
import CookiesPolicy from './pages/CookiesPolicy';
import OchaReportPost from './pages/posts/OchaReportPost';
import VenezuelaCruceCaminos from './pages/posts/VenezuelaCruceCaminos';
import DesordenResultadoPolitico from './pages/posts/DesordenResultadoPolitico';
import SaldosMonetariosPost from './pages/posts/SaldosMonetariosPost';
import CookieBanner from './components/CookieBanner';
import { initializeGoogleAnalytics, trackPageView, hasAnalyticsConsent } from './services/analytics';

// Componente auxiliar para hacer scroll al inicio al cambiar de página
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    if (hasAnalyticsConsent()) {
      if (typeof window.gtag === 'undefined') {
        initializeGoogleAnalytics();
      }
      trackPageView(location.pathname + location.search);
    }
  }, [location]);
  return null;
};

function App() {
  const logoUrl = "https://lh3.googleusercontent.com/d/1xmD_TZzJLzviRzNEnKTA7_n8EADxpHPx";

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-ven-light dark:bg-slate-950 font-sans text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-300">
        <AnalyticsTracker />
        <Navbar />
        <CookieBanner />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mision" element={<Mission />} />
            <Route path="/estadisticas" element={<Statistics />} />
            <Route path="/estadisticas/:categorySlug" element={<Statistics />} />
            <Route path="/publicaciones" element={<Publications />} />
            <Route path="/tendencias" element={<Trends />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/ocha-report" element={<OchaReportPost />} />
            <Route path="/blog/venezuela-cruce-caminos" element={<VenezuelaCruceCaminos />} />
            <Route path="/blog/desorden-resultado-politico" element={<DesordenResultadoPolitico />} />
            <Route path="/blog/saldos-monetarios-caos" element={<SaldosMonetariosPost />} />
            <Route path="/boletin" element={<NewsletterPage />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
          </Routes>
        </main>

        <footer className="bg-[#001a33] dark:bg-slate-950 text-gray-400 py-16 border-t border-ven-blue/30 dark:border-slate-800 relative overflow-hidden mt-auto">
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-ven-yellow via-ven-blue to-ven-red"></div>
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-10 mb-12">
                  <div className="col-span-1 md:col-span-1">
                      <div className="flex items-center gap-4 mb-6">
                           <div className="relative w-14 h-14 flex-shrink-0 bg-white rounded-full p-2 shadow-lg shadow-black/20 flex items-center justify-center">
                              <img 
                                src={logoUrl} 
                                alt="OEV Logo" 
                                className="w-full h-full object-contain" 
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                              />
                           </div>
                          <span className="text-2xl font-black text-white tracking-tighter">OEV.</span>
                      </div>
                      <p className="text-sm leading-relaxed mb-6 text-gray-300">
                          El Observatorio de Economía de Venezuela es la referencia independiente para el monitoreo, análisis y proyección de la realidad económica nacional.
                      </p>
                  </div>
                  <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-gray-700 pb-2 inline-block">Institucional</h4>
                      <ul className="space-y-3 text-sm">
                          <li><a href="#" className="hover:text-ven-yellow transition-colors">Sobre Nosotros</a></li>
                          <li><Link to="/mision" className="hover:text-ven-yellow transition-colors">Misión y Principios</Link></li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-gray-700 pb-2 inline-block">Datos y Análisis</h4>
                      <ul className="space-y-3 text-sm">
                          <li><Link to="/estadisticas" className="hover:text-ven-yellow transition-colors">Macroeconomía</Link></li>
                          <li><Link to="/estadisticas" className="hover:text-ven-yellow transition-colors">Sector Petrolero</Link></li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-gray-700 pb-2 inline-block">Contacto</h4>
                      <p className="text-sm mb-3 hover:text-white cursor-pointer">contacto@oev.org.ve</p>
                  </div>
              </div>
              <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                  <p>&copy; 2025 Observatorio de Economía de Venezuela. Todos los derechos reservados. <span className="opacity-40 ml-2">v2.1.0</span></p>
              </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;