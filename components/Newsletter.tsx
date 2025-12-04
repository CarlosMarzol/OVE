
import React, { useState } from 'react';
import { Mail, CheckCircle, Bell, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ---------------------------------------------------------------------------
  // CONFIGURACIÓN:
  // URL de Formspree proporcionada por el usuario
  // ---------------------------------------------------------------------------
  const NEWSLETTER_ENDPOINT = "https://formspree.io/f/xanrbnvy"; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !email.includes('@')) {
        setError('Por favor ingrese un correo válido.');
        return;
    }

    setIsLoading(true);

    try {
      // Envío real a Formspree
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email: email })
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail(''); // Limpiar campo
      } else {
        const data = await response.json();
        if (data && data.errors) {
            setError(data.errors.map((error: any) => error.message).join(", "));
        } else {
            setError('Hubo un problema al suscribirse. Intente nuevamente.');
        }
      }
    } catch (err) {
      setError('Error de conexión. Verifique su internet.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden" id="newsletter">
      {/* Patriotic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ven-dark via-ven-blue to-[#001240] z-0"></div>
      
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ven-red rounded-full filter blur-[150px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ven-yellow rounded-full filter blur-[120px] opacity-10 transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
                
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-ven-yellow/20 text-ven-yellow px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-ven-yellow/30 shadow-sm">
                    <Bell className="w-3.5 h-3.5" />
                    Actualización Semanal
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                    La economía venezolana,<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ven-yellow to-white">directo en tu correo.</span>
                    </h2>
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    Únase a más de 15,000 suscriptores entre empresarios, académicos y estudiantes que reciben nuestros análisis de mercado y proyecciones cada lunes por la mañana.
                    </p>
                    
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm font-medium text-gray-400">
                        <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-ven-yellow"/> Datos Verificados</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-ven-yellow"/> Análisis Imparcial</span>
                    </div>
                </div>

                <div className="w-full lg:w-[420px]">
                    {subscribed ? (
                    <div className="bg-white text-ven-dark p-8 rounded-2xl text-center shadow-xl animate-fade-in border-b-4 border-ven-yellow">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">¡Suscripción confirmada!</h3>
                        <p className="text-gray-600 text-sm">Bienvenido al Observatorio. Revisa tu bandeja de entrada.</p>
                        <button 
                            onClick={() => setSubscribed(false)}
                            className="mt-6 text-xs text-ven-blue font-bold hover:underline"
                        >
                            Registrar otro correo
                        </button>
                    </div>
                    ) : (
                    <div className="bg-white/10 border border-white/10 p-6 rounded-2xl shadow-inner relative">
                        {isLoading && (
                            <div className="absolute inset-0 bg-ven-dark/50 backdrop-blur-sm z-20 rounded-2xl flex items-center justify-center">
                                <Loader2 className="w-10 h-10 text-ven-yellow animate-spin" />
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="email" className="text-xs font-bold text-gray-300 uppercase tracking-wider ml-1 mb-2 block">Correo Institucional o Personal</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                                    <input
                                    id="email"
                                    type="email"
                                    placeholder="nombre@ejemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-900/60 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ven-yellow focus:border-transparent transition-all"
                                    disabled={isLoading}
                                    required
                                    />
                                </div>
                            </div>
                            
                            {error && (
                                <div className="bg-red-500/20 border border-red-500/50 p-3 rounded-lg flex items-center gap-2 text-xs text-red-200">
                                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                    {error}
                                </div>
                            )}

                            <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-ven-red to-[#b00e21] hover:from-[#b00e21] hover:to-[#900010] text-white font-bold py-4 rounded-xl shadow-lg shadow-ven-red/30 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                            >
                                {isLoading ? 'Procesando...' : 'Suscribirse Gratis'}
                            </button>
                            <p className="text-[10px] text-center text-gray-400 mt-2">
                                Respetamos su privacidad. Cancele su suscripción en cualquier momento.
                            </p>
                        </form>
                    </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
