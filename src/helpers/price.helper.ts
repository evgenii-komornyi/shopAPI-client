export const formatPrice = (priceToFormat: number): string =>
    new Intl.NumberFormat('lv-LV', {
        style: 'currency',
        currency: 'EUR',
    }).format(priceToFormat);
