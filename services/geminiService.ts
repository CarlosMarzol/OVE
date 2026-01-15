// Servicio simulado de análisis económico (Mock)
// Se ha eliminado la dependencia de Google GenAI para evitar errores de build.

export const getEconomicAnalysis = async (topic: string, contextData?: string): Promise<string> => {
  // Simular un pequeño retardo de red para dar sensación de procesamiento
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Respuestas predefinidas basadas en el tema seleccionado
  switch (topic) {
    case 'Inflación y Precios':
      return `
**Análisis de Tendencia Inflacionaria**

1. **Resumen:** Los datos recientes sugieren una desaceleración en el ritmo de crecimiento de precios en rubros no alimentarios, aunque la canasta básica mantiene una presión alcista debido a costos logísticos. La inflación mensual se estabiliza en torno al dígito bajo.

2. **Impacto:** Para el ciudadano común, esto se traduce en una pérdida de poder adquisitivo que, aunque menos agresiva que en años anteriores, sigue erosionando el salario real en bolívares.

3. **Proyección:** Se estima que la contención del tipo de cambio por parte del BCV mantendrá la inflación acotada en el corto plazo, salvo shocks externos en el mercado petrolero.
      `;
    
    case 'Mercado Cambiario':
      return `
**Dinámica del Mercado Cambiario**

1. **Situación Actual:** La brecha entre el tipo de cambio oficial y el paralelo muestra signos de volatilidad estacional. La política de intervención cambiaria sigue siendo el principal ancla nominal de la economía.

2. **Impacto:** La incertidumbre cambiaria fomenta la indexación de precios en dólares, afectando principalmente a los sectores informales que no tienen acceso a divisas oficiales.

3. **Proyección:** Se prevé una corrección deslizante del tipo de cambio oficial en las próximas semanas para reducir la brecha sin generar un salto inflacionario brusco.
      `;

    case 'Producción Petrolera':
      return `
**Coyuntura Petrolera Nacional**

1. **Resumen:** La producción se mantiene estable con un leve repunte gracias a las licencias específicas otorgadas a socios extranjeros. Sin embargo, la infraestructura requiere inversión sostenida para superar el techo actual.

2. **Impacto:** El flujo de caja del Estado mejora marginalmente, permitiendo mantener ciertos subsidios y bonificaciones, aunque insuficientes para una recuperación salarial integral.

3. **Proyección:** El escenario base sugiere un mantenimiento de los niveles actuales, con variaciones dependientes de la flexibilización o endurecimiento de sanciones internacionales.
      `;

    case 'Crecimiento y PIB':
      return `
**Perspectivas de Crecimiento Económico**

1. **Resumen:** La economía muestra signos de reactivación desigual, concentrada en el sector comercio y servicios en zonas urbanas, mientras que la manufactura e industria operan con alta capacidad ociosa.

2. **Impacto:** La recuperación no es homogénea; se observa una "economía de dos velocidades" donde ciertos nichos prosperan mientras el consumo masivo sigue deprimido.

3. **Proyección:** Se espera un crecimiento moderado del PIB para el cierre de año, impulsado principalmente por el sector petrolero y actividades conexas, con un consumo privado estancado.
      `;

    default:
      return "Análisis no disponible para este tópico en este momento. Por favor consulte los indicadores estadísticos directos.";
  }
};