// ------------------------------------------------------------------
// CONFIGURACIÓN:
// Reemplaza 'G-XXXXXXXXXX' con tu ID de Medición de Google Analytics 4
// ------------------------------------------------------------------
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; 

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Verifica si el usuario aceptó específicamente las cookies de análisis
export const hasAnalyticsConsent = (): boolean => {
    try {
        const storedPrefs = localStorage.getItem('cookie_preferences');
        if (storedPrefs) {
            const prefs = JSON.parse(storedPrefs);
            return prefs.analytics === true;
        }
        return false;
    } catch (e) {
        return false;
    }
};

// Inicializa GA inyectando el script en el HEAD solo cuando se llama
export const initializeGoogleAnalytics = () => {
  if (window.gtag) return; // Ya está inicializado

  // 1. Crear el script de gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // 2. Configuración inicial del dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    anonymize_ip: true // Recomendado para GDPR
  });
  
  console.log("Google Analytics inicializado correctamente.");
};

// Registra una visita a una página (Page View)
export const trackPageView = (path: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

// Registra eventos personalizados (ej: clic en botón de suscripción)
export const trackEvent = (action: string, category: string, label: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};