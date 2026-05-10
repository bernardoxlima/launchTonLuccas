type TrackEventParams = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: TrackEventParams = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

export function trackBeginCheckout(plan: 'standard' | 'vip', value: number): void {
  trackEvent('begin_checkout', {
    currency: 'BRL',
    value,
    items: [
      {
        item_id: `workshop-mp-definitiva-${plan}`,
        item_name: 'Workshop Marca Pessoal Definitiva',
        item_variant: plan === 'standard' ? 'Lote 1 Standard' : 'VIP',
        price: value,
        quantity: 1,
      },
    ],
  });
}

export function trackViewPricing(): void {
  trackEvent('view_item_list', {
    item_list_name: 'Pricing Workshop',
    items: [
      { item_id: 'workshop-mp-definitiva-standard', item_name: 'Standard', price: 47 },
      { item_id: 'workshop-mp-definitiva-vip', item_name: 'VIP', price: 297 },
    ],
  });
}
