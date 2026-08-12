export const BASIC_PRICE_USD = 5;
export const COMPLETE_PRICE_USD = 10;
export const DISCLAIMER_TEXT = "Precio aproximado en moneda local. El valor final puede variar según la conversión aplicada por Hotmart.";

export interface CurrencyData {
  basicPriceFormatted: string;
  completePriceFormatted: string;
  currencyCode: string;
  countryCode: string;
  isConverted: boolean;
  disclaimerText: string;
  rate: number;
  formatAmount: (usdAmount: number) => string;
}

export const DEFAULT_CURRENCY_DATA: CurrencyData = {
  basicPriceFormatted: "US$5",
  completePriceFormatted: "US$10",
  currencyCode: "USD",
  countryCode: "US",
  isConverted: false,
  disclaimerText: DISCLAIMER_TEXT,
  rate: 1,
  formatAmount: (usd: number) => `US$${usd}`
};

// Map country code to preferred LATAM currency code
const COUNTRY_TO_CURRENCY: Record<string, string> = {
  BR: 'BRL', // Brasil
  MX: 'MXN', // México
  CO: 'COP', // Colômbia
  AR: 'ARS', // Argentina
  CL: 'CLP', // Chile
  PE: 'PEN', // Peru
  UY: 'UYU', // Uruguai
  PY: 'PYG', // Paraguai
  BO: 'BOB', // Bolívia
  EC: 'USD', // Equador (Usa USD)
  CR: 'CRC', // Costa Rica
  DO: 'DOP', // República Dominicana
  GT: 'GTQ', // Guatemala
  PA: 'USD', // Panamá (Usa USD)
  SV: 'USD', // El Salvador (Usa USD)
  HN: 'HNL', // Honduras
  NI: 'NIO', // Nicarágua
  ES: 'EUR', // Espanha
  US: 'USD', // Estados Unidos
  PR: 'USD', // Puerto Rico
};

// Map timezones to country code as instant client-side fallback
const TIMEZONE_TO_COUNTRY: Record<string, string> = {
  'America/Sao_Paulo': 'BR',
  'America/Fortaleza': 'BR',
  'America/Recife': 'BR',
  'America/Bahia': 'BR',
  'America/Manaus': 'BR',
  'America/Belem': 'BR',
  'America/Cuiaba': 'BR',
  'America/Bogota': 'CO',
  'America/Mexico_City': 'MX',
  'America/Monterrey': 'MX',
  'America/Cancun': 'MX',
  'America/Tijuana': 'MX',
  'America/Santiago': 'CL',
  'America/Punta_Arenas': 'CL',
  'America/Buenos_Aires': 'AR',
  'America/Argentina/Buenos_Aires': 'AR',
  'America/Argentina/Cordoba': 'AR',
  'America/Lima': 'PE',
  'America/Montevideo': 'UY',
  'America/Asuncion': 'PY',
  'America/La_Paz': 'BO',
  'America/Guayaquil': 'EC',
  'America/Costa_Rica': 'CR',
  'America/Santo_Domingo': 'DO',
  'America/Guatemala': 'GT',
  'America/Panama': 'PA',
  'America/El_Salvador': 'SV',
  'America/Tegucigalpa': 'HN',
  'America/Managua': 'NI',
  'Europe/Madrid': 'ES',
};

function formatThousandDots(num: number): string {
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatCommercialPrice(usdAmount: number, currencyCode: string, rate: number): string {
  if (!rate || rate <= 0 || currencyCode === 'USD') {
    return `US$${usdAmount}`;
  }

  const raw = usdAmount * rate;

  switch (currencyCode) {
    case 'BRL': {
      const val = Math.round(raw * 10) / 10;
      const formatted = val.toFixed(2).replace('.', ',');
      return `≈ R$ ${formatted}`;
    }
    case 'COP': {
      const rounded = Math.round(raw / 100) * 100;
      return `≈ $${formatThousandDots(rounded)} COP`;
    }
    case 'CLP': {
      const rounded = Math.round(raw / 100) * 100;
      return `≈ $${formatThousandDots(rounded)} CLP`;
    }
    case 'ARS': {
      const rounded = Math.round(raw / 100) * 100;
      return `≈ $${formatThousandDots(rounded)} ARS`;
    }
    case 'MXN': {
      const rounded = Math.round(raw);
      return `≈ $${formatThousandDots(rounded)} MXN`;
    }
    case 'PEN': {
      const rounded = Math.round(raw);
      return `≈ S/ ${rounded}`;
    }
    case 'UYU': {
      const rounded = Math.round(raw / 10) * 10;
      return `≈ $${formatThousandDots(rounded)} UYU`;
    }
    case 'PYG': {
      const rounded = Math.round(raw / 1000) * 1000;
      return `≈ Gs. ${formatThousandDots(rounded)}`;
    }
    case 'BOB': {
      const rounded = Math.round(raw);
      return `≈ Bs. ${rounded}`;
    }
    case 'CRC': {
      const rounded = Math.round(raw / 100) * 100;
      return `≈ ₡${formatThousandDots(rounded)}`;
    }
    case 'DOP': {
      const rounded = Math.round(raw);
      return `≈ $${formatThousandDots(rounded)} DOP`;
    }
    case 'GTQ': {
      const rounded = Math.round(raw);
      return `≈ Q ${rounded}`;
    }
    case 'HNL': {
      const rounded = Math.round(raw);
      return `≈ L ${rounded}`;
    }
    case 'NIO': {
      const rounded = Math.round(raw);
      return `≈ C$ ${rounded}`;
    }
    case 'EUR': {
      const formatted = raw.toFixed(2).replace('.', ',');
      return `≈ ${formatted} €`;
    }
    default: {
      const rounded = Math.round(raw);
      return `≈ $${formatThousandDots(rounded)} ${currencyCode}`;
    }
  }
}

const CACHE_KEY = 'kit_currency_cache_v3';
const CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

interface CachePayload {
  countryCode: string;
  currencyCode: string;
  rate: number;
  timestamp: number;
}

// Fetch with timeout helper
async function fetchWithTimeout(url: string, timeoutMs = 2500): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

// Main service to retrieve local currency data
export async function getCurrencyData(): Promise<CurrencyData> {
  // 1. Check local cache
  try {
    const cachedStr = localStorage.getItem(CACHE_KEY);
    if (cachedStr) {
      const cached: CachePayload = JSON.parse(cachedStr);
      if (Date.now() - cached.timestamp < CACHE_TTL_MS && cached.rate > 0) {
        if (cached.currencyCode === 'USD') {
          return DEFAULT_CURRENCY_DATA;
        }
        return {
          basicPriceFormatted: formatCommercialPrice(BASIC_PRICE_USD, cached.currencyCode, cached.rate),
          completePriceFormatted: formatCommercialPrice(COMPLETE_PRICE_USD, cached.currencyCode, cached.rate),
          currencyCode: cached.currencyCode,
          countryCode: cached.countryCode,
          isConverted: true,
          disclaimerText: DISCLAIMER_TEXT,
          rate: cached.rate,
          formatAmount: (usd: number) => formatCommercialPrice(usd, cached.currencyCode, cached.rate)
        };
      }
    }
  } catch (e) {
    console.warn('Currency cache read error:', e);
  }

  let countryCode = 'US';
  let currencyCode = 'USD';

  // 2. Client-side Timezone heuristic
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && TIMEZONE_TO_COUNTRY[tz]) {
      countryCode = TIMEZONE_TO_COUNTRY[tz];
      currencyCode = COUNTRY_TO_CURRENCY[countryCode] || 'USD';
    }
  } catch (e) {
    // ignore
  }

  // 3. Try IP Geolocation API with fast timeout
  try {
    const ipRes = await fetchWithTimeout('https://ipwho.is/', 2000);
    if (ipRes.ok) {
      const ipData = await ipRes.json();
      if (ipData && ipData.success) {
        countryCode = ipData.country_code || countryCode;
        if (ipData.currency && ipData.currency.code) {
          currencyCode = ipData.currency.code;
        } else if (COUNTRY_TO_CURRENCY[countryCode]) {
          currencyCode = COUNTRY_TO_CURRENCY[countryCode];
        }
      }
    }
  } catch (e) {
    // If ipwho.is fails, fallback to freeipapi
    try {
      const ipRes2 = await fetchWithTimeout('https://freeipapi.com/api/json', 1500);
      if (ipRes2.ok) {
        const ipData2 = await ipRes2.json();
        if (ipData2 && ipData2.countryCode) {
          countryCode = ipData2.countryCode;
          currencyCode = COUNTRY_TO_CURRENCY[countryCode] || (ipData2.currencyCode || currencyCode);
        }
      }
    } catch (e2) {
      console.warn('Geolocation APIs unavailable, using timezone heuristic or default USD');
    }
  }

  // If detected currency is USD or unsupported, return default USD immediately
  if (currencyCode === 'USD') {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        countryCode: 'US',
        currencyCode: 'USD',
        rate: 1,
        timestamp: Date.now()
      }));
    } catch (e) {}
    return DEFAULT_CURRENCY_DATA;
  }

  // 4. Fetch Exchange Rates
  let rate = 0;
  try {
    const rateRes = await fetchWithTimeout('https://open.er-api.com/v6/latest/USD', 2500);
    if (rateRes.ok) {
      const rateData = await rateRes.json();
      if (rateData && rateData.rates && rateData.rates[currencyCode]) {
        rate = rateData.rates[currencyCode];
      }
    }
  } catch (e) {
    // Try secondary rate API
    try {
      const rateRes2 = await fetchWithTimeout('https://api.exchangerate-api.com/v4/latest/USD', 2000);
      if (rateRes2.ok) {
        const rateData2 = await rateRes2.json();
        if (rateData2 && rateData2.rates && rateData2.rates[currencyCode]) {
          rate = rateData2.rates[currencyCode];
        }
      }
    } catch (e2) {
      console.warn('Exchange rate APIs unavailable, falling back to USD');
    }
  }

  // If rate failed, return USD fallback
  if (!rate || rate <= 0) {
    return DEFAULT_CURRENCY_DATA;
  }

  // Save to cache
  try {
    const payload: CachePayload = {
      countryCode,
      currencyCode,
      rate,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch (e) {}

  return {
    basicPriceFormatted: formatCommercialPrice(BASIC_PRICE_USD, currencyCode, rate),
    completePriceFormatted: formatCommercialPrice(COMPLETE_PRICE_USD, currencyCode, rate),
    currencyCode,
    countryCode,
    isConverted: true,
    disclaimerText: DISCLAIMER_TEXT,
    rate,
    formatAmount: (usd: number) => formatCommercialPrice(usd, currencyCode, rate)
  };
}
