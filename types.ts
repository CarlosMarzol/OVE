
export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

export interface EconomicDataPoint {
  date: string;
  value: number;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  imageUrl: string;
}

/**
 * Enum for defining available analysis topics in the AI dashboard section.
 * Restored after previous removal to support Gemini-powered features.
 */
export enum AnalysisTopic {
  INFLATION = 'Inflación y Precios',
  EXCHANGE = 'Mercado Cambiario',
  OIL = 'Producción Petrolera',
  GROWTH = 'Crecimiento y PIB'
}
