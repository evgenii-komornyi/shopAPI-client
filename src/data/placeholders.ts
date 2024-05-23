export interface ICountryPlaceholders {
    Latvia: string;
    Lithuania: string;
    Estonia: string;
}

export interface IPlaceholders {
    phoneNumber: ICountryPlaceholders;
    city: ICountryPlaceholders;
    postalCode: ICountryPlaceholders;
}

export const placeholders: IPlaceholders = {
    phoneNumber: {
        Latvia: '+37112345678',
        Lithuania: '+37061234567',
        Estonia: '+37251234567',
    },
    city: {
        Latvia: 'Riga',
        Lithuania: 'Vilnius',
        Estonia: 'Tallinn',
    },
    postalCode: {
        Latvia: 'LV-1234',
        Lithuania: 'LT-12345',
        Estonia: '12345',
    },
};
