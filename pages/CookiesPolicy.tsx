import React from 'react';
import { Shield, Cookie, Settings, Info } from 'lucide-react';

const CookiesPolicy: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-white dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Encabezado */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-ven-blue/5 dark:bg-ven-blue/20 text-ven-blue dark:text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 border border-ven-blue/10 dark:border-ven-blue/30">
            <Shield className="w-4 h-4" />
            Normativa Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ven-dark dark:text-white mb-6">
            Política de Cookies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Información clara y transparente sobre cómo gestionamos sus datos de navegación según la Ley 34/2002 (LSSI-CE) y el RGPD.
          </p>
        </div>

        {/* Contenido Legal */}
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          
          <div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 mb-10">
            <h3 className="text-xl font-bold text-ven-dark dark:text-white flex items-center gap-2 mb-4">
              <Info className="text-ven-blue" /> ¿Qué son las cookies?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-ven-dark dark:text-white mt-8 mb-4">1. Tipos de cookies utilizadas en este sitio web</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            El <strong>Observatorio de Economía de Venezuela</strong> utiliza las siguientes categorías de cookies:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-3 mb-3">
                    <Settings className="text-ven-yellow w-6 h-6" />
                    <h4 className="font-bold text-gray-800 dark:text-white">Cookies Técnicas (Necesarias)</h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen.
                </p>
                <ul className="mt-3 text-xs text-gray-400 list-disc pl-4 space-y-1">
                    <li>Gestión del tema (Oscuro/Claro)</li>
                    <li>Seguridad del formulario</li>
                    <li>Aceptación de cookies</li>
                </ul>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-3 mb-3">
                    <Cookie className="text-ven-blue w-6 h-6" />
                    <h4 className="font-bold text-gray-800 dark:text-white">Cookies de Análisis</h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio. 
                </p>
                <ul className="mt-3 text-xs text-gray-400 list-disc pl-4 space-y-1">
                    <li>Google Analytics (Estadísticas anónimas)</li>
                    <li>Rendimiento del sitio</li>
                </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-ven-dark dark:text-white mt-8 mb-4">2. Terceros prestadores de servicios</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            En concreto, los terceros con los que hemos gestionado algún servicio para el que es necesaria la utilización de cookies son:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-slate-800 rounded-lg">
                <thead className="text-xs text-gray-700 dark:text-gray-200 uppercase bg-gray-50 dark:bg-slate-800">
                    <tr>
                        <th className="px-6 py-3">Proveedor</th>
                        <th className="px-6 py-3">Finalidad</th>
                        <th className="px-6 py-3">Más información</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Google LLC</td>
                        <td className="px-6 py-4">Analítica web y servicios de IA (Gemini)</td>
                        <td className="px-6 py-4"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-ven-blue hover:underline">Política de Privacidad</a></td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Formspree</td>
                        <td className="px-6 py-4">Gestión de formularios de contacto y suscripción</td>
                        <td className="px-6 py-4"><a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-ven-blue hover:underline">Política de Privacidad</a></td>
                    </tr>
                </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-ven-dark dark:text-white mt-8 mb-4">3. Aceptación y rechazo de cookies</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Sin embargo, la desactivación de las mismas podría impedir el buen funcionamiento de algunas secciones de la web.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Para más información sobre cómo gestionar las cookies en su navegador, consulte los siguientes enlaces:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-ven-blue dark:text-ven-yellow font-medium">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c23d-3774-3bda26f46619" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
          </ul>

          <h3 className="text-2xl font-bold text-ven-dark dark:text-white mt-8 mb-4">4. Actualización de la política</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Es posible que actualicemos la Política de Cookies de nuestro Sitio Web, por ello le recomendamos revisar esta política cada vez que acceda a nuestro Sitio Web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.
          </p>
          <p className="text-sm text-gray-500 mt-4 italic">
            Última actualización: Octubre 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;