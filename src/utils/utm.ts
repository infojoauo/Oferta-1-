/**
 * Utilitário para repassar UTMs e parâmetros de URL (src, sck, utm_source, etc.) para os links de checkout da Hotmart.
 */
export function buildCheckoutUrl(baseUrl: string): string {
  if (!baseUrl) return '';
  if (typeof window === 'undefined') return baseUrl;

  try {
    const currentParams = new URLSearchParams(window.location.search);
    if (!currentParams.toString()) return baseUrl;

    const url = new URL(baseUrl);
    currentParams.forEach((value, key) => {
      // Adiciona o parâmetro se ele ainda não estiver explicitamente definido na URL base
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  } catch {
    return baseUrl;
  }
}
