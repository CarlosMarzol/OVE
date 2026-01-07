
import { GoogleGenAI } from "@google/genai";

// Fetches an economic analysis from Gemini based on a topic and optional context data
export const getEconomicAnalysis = async (topic: string, contextData?: string): Promise<string> => {
  // Use the API key exclusively from environment variables as required by security guidelines
  if (!process.env.API_KEY) {
    return "API Key no configurada. Por favor configure process.env.API_KEY para recibir análisis en tiempo real.";
  }

  try {
    // Correct initialization using named parameter and process.env.API_KEY directly
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
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

    // Updated model to gemini-3-flash-preview for basic text analysis tasks as per guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    // Access the text property directly on the GenerateContentResponse object
    return response.text || "No se pudo generar el análisis en este momento.";
  } catch (error) {
    console.error("Error fetching Gemini analysis:", error);
    return "Hubo un error al conectar con el servicio de análisis inteligente. Por favor intente más tarde.";
  }
};
