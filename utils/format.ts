export const formatNumber = (value: number, decimals: number = 2): string => {
  return new Intl.NumberFormat('es-VE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
};

export const formatCurrency = (value: number, currency: 'VES' | 'USD' = 'USD'): string => {
  return new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol'
  }).format(value);
};