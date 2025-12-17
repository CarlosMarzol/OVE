import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { initializeGoogleAnalytics } from '../services/analytics';

interface CookiePreferences {
  necessary: boolean; // Siempre true
  analytics: boolean;
}

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Estado temporal para las preferencias mientras el usuario configura
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
  });

  useEffect(() => {
    // Comprobar si ya existe una configuración guardada
    const storedPrefs = localStorage.getItem('cookie_preferences');
    if (!storedPrefs) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
        // Si ya existen preferencias y analytics está activo, inicializar
        const prefs = JSON.parse(storedPrefs);
        if (prefs.analytics) initializeGoogleAnalytics();
    }
  }, []);

  const savePreferences = (finalPrefs: CookiePreferences) => {
    localStorage.setItem('cookie_preferences', JSON.stringify(finalPrefs));
    localStorage.setItem('cookieConsent', 'true'); // Flag general de que ya interactuó
    
    if (finalPrefs.analytics) {
      initializeGoogleAnalytics();
    }

    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const allEnabled = { necessary: true, analytics: true };
    savePreferences(allEnabled);
  };

  const handleRejectAll = () => {
    const allDisabled = { necessary: true, analytics: false };
    savePreferences(allDisabled);
  };

  const handleSaveSelection = () => {
    savePreferences(preferences);
  };

  const toggleAnalytics = () => {
    setPreferences(prev => ({ ...prev, analytics: !prev.analytics }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* --- BANNER PRINCIPAL --- */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 w-full z-[100] animate-slide-up px-4 pb-4 md:pb-6">
          <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-6">
            
            <div className="flex items-start gap-4 flex-grow">
                <div className="bg-ven-blue/10 dark:bg-ven-yellow/10 p-3 rounded-full flex-shrink-0 hidden sm:block">
                    <Cookie className="text-ven-blue dark:text-ven-yellow w-6 h-6" />
                </div>
                <div>
                    <h4 className="text-ven-dark dark:text-white font-bold text-lg mb-1">Su privacidad es importante</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Usamos cookies para mejorar su experiencia y analizar el tráfico. Puede aceptar todas o ajustar sus preferencias. 
                        Más info en nuestra <Link to="/cookies" className="text-ven-blue dark:text-ven-yellow underline font-semibold hover:text-ven-red">Política de Cookies</Link>.
                    </p>
                </div>
            </div>

            {/* Botones: En móvil usamos flex-col para que no se salgan, en desktop flex-row */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                <button 
                    onClick={() => setShowSettings(true)}
                    className="order-3 sm:order-1 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors flex justify-center items-center gap-2"
                >
                    <Settings size={16} /> Configurar
                </button>
                <button 
                    onClick={handleRejectAll}
                    className="order-2 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                >
                    Rechazar
                </button>
                <button 
                    onClick={handleAcceptAll}
                    className="order-1 sm:order-3 px-6 py-2.5 rounded-lg bg-ven-blue text-white text-sm font-bold shadow-lg shadow-ven-blue/20 hover:bg-ven-dark transition-colors whitespace-nowrap"
                >
                    Aceptar Todo
                </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL DE CONFIGURACIÓN --- */}
      {showSettings && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-slate-700 flex flex-col">
            
            {/* Header Modal */}
            <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center sticky top-0 bg-white dark:bg-slate-900 z-10">
                <h3 className="text-xl font-bold text-ven-dark dark:text-white flex items-center gap-2">
                    <Settings className="text-ven-blue dark:text-ven-yellow" /> Configuración de Cookies
                </h3>
                <button 
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Body Modal */}
            <div className="p-6 space-y-6">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Aquí puede configurar qué cookies permite que se instalen en su navegador. Las cookies técnicas son necesarias para el funcionamiento de la web.
                </p>

                {/* Opción 1: Necesarias */}
                <div className="flex items-start justify-between p-4 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700">
                    <div className="flex gap-3">
                        <Shield className="text-green-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-gray-800 dark:text-white text-sm">Estrictamente Necesarias</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Garantizan funciones básicas de seguridad y accesibilidad. No se pueden desactivar.</p>
                        </div>
                    </div>
                    <div className="text-xs font-bold text-ven-blue uppercase tracking-wider bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">Siempre Activas</div>
                </div>

                {/* Opción 2: Analíticas */}
                <div className="flex items-start justify-between p-4 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-ven-blue dark:hover:border-ven-yellow transition-colors cursor-pointer" onClick={toggleAnalytics}>
                    <div className="flex gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 transition-colors ${preferences.analytics ? 'bg-ven-blue border-ven-blue' : 'border-gray-300'}`}>
                            {preferences.analytics && <Check size={12} className="text-white" />}
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 dark:text-white text-sm">Medición y Análisis</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Nos ayudan a entender cómo usa la web para mejorar el contenido (Google Analytics).</p>
                        </div>
                    </div>
                    
                    {/* Toggle Switch Visual */}
                    <div className={`w-11 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${preferences.analytics ? 'bg-ven-blue' : 'bg-gray-300 dark:bg-slate-600'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${preferences.analytics ? 'translate-x-5' : 'translate-x-0'}`}></div>
                    </div>
                </div>
            </div>

            {/* Footer Modal */}
            <div className="p-6 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50 flex flex-col sm:flex-row justify-end gap-3 sticky bottom-0">
                <button 
                    onClick={handleRejectAll} 
                    className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-white dark:hover:bg-slate-800 transition-colors"
                >
                    Rechazar Todo
                </button>
                <button 
                    onClick={handleSaveSelection} 
                    className="px-6 py-2.5 rounded-lg bg-ven-dark text-white text-sm font-bold shadow-lg hover:bg-black transition-colors flex items-center justify-center gap-2"
                >
                    Guardar mi selección <ChevronRight size={16} />
                </button>
                <button 
                    onClick={handleAcceptAll} 
                    className="px-6 py-2.5 rounded-lg bg-ven-blue text-white text-sm font-bold shadow-lg shadow-ven-blue/20 hover:bg-blue-700 transition-colors"
                >
                    Aceptar Todo
                </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;