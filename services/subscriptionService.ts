interface SubscriptionResponse {
  success: boolean;
  message: string;
}

// ------------------------------------------------------------------
// CONFIGURACIÓN:
// Reemplaza 'TU_CODIGO_AQUI' con el código que te da Formspree.io
// Ejemplo: si tu URL es https://formspree.io/f/mwkglpjq, pon 'mwkglpjq'
// ------------------------------------------------------------------
const FORMSPREE_ID = 'xanrbnvy'; 

export const subscribeEmail = async (email: string): Promise<SubscriptionResponse> => {
  // Validación básica local antes de enviar
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Por favor ingrese un correo electrónico válido." };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        source: 'Landing Page OEV', // Dato extra para saber de dónde vino
        date: new Date().toISOString()
      })
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: "¡Gracias! Tu suscripción ha sido confirmada." };
    } else {
      // Formspree suele devolver errores detallados, intentamos leerlos
      if (data.errors && data.errors.length > 0) {
        return { success: false, message: data.errors.map((err: any) => err.message).join(", ") };
      }
      return { success: false, message: "Hubo un problema al procesar tu solicitud." };
    }

  } catch (error) {
    console.error("Error de red:", error);
    return { success: false, message: "Error de conexión. Por favor verifica tu internet." };
  }
};