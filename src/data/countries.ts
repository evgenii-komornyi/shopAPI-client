interface CountryType {
    code: string;
    countryLabel: string;
    phone: string;
    suggested?: boolean;
}

export const countries: readonly CountryType[] = [
    { code: 'EE', countryLabel: 'Estonia', phone: '372' },
    { code: 'LT', countryLabel: 'Lithuania', phone: '370' },
    { code: 'LV', countryLabel: 'Latvia', phone: '371' },
];
