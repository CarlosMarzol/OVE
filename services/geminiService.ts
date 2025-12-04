import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Note: In a real environment, handle the missing API key gracefully. 
// We initialize lazily or check inside the function to prevent immediate crashes if env is missing in dev.

export const getEconomicAnalysis = async (topic: string, contextData?: string): Promise<string> => {
  if (!apiKey) {
    return "API Key no configurada. Por favor configure process.env.API_KEY para recibir análisis en tiempo real.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      Actúa como un economista senior experto en la economía de Venezuela.
      Analiza brevemente el siguiente tema: "${topic}".
      
      ${contextData ? `Ten en cuenta los siguientes datos recientes simulados: ${contextData}` : ''}
      
      Estructura tu respuesta en:
      1. Resumen de la situación actual.
      2. Impacto en el ciudadano común.
      3. Proyección a corto plazo.
      
      Mantén un tono profesional, objetivo y académico, similar al de un informe de observatorio económico.
      Usa formato Markdown. Máximo 250 palabras.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Flash doesn't support high thinking budget, keep low/zero for speed
      }
    });

    return response.text || "No se pudo generar el análisis en este momento.";
  } catch (error) {
    console.error("Error fetching Gemini analysis:", error);
    return "Hubo un error al conectar con el servicio de análisis inteligente. Por favor intente más tarde.";
  }
};