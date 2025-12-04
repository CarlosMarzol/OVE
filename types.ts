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

export enum AnalysisTopic {
  INFLATION = "Inflación y Poder Adquisitivo",
  OIL = "Producción Petrolera y Exportaciones",
  EXCHANGE = "Mercado Cambiario y Divisas",
  GDP = "Producto Interno Bruto (PIB)"
}