interface IField {
    id: string;
    name: string;
    label: string;
    type: string;
    isRequired: boolean;
    isFullWidth: boolean;
}

interface IFormData {
    title: string;
    fields: IField[];
}

export const formData: IFormData[] = [
    {
        title: 'Contacts',
        fields: [
            {
                id: 'email',
                name: 'email',
                label: 'Email',
                type: 'email',
                isRequired: true,
                isFullWidth: true,
            },
            {
                id: 'firstName',
                name: 'firstName',
                label: 'First name',
                type: 'text',
                isRequired: true,
                isFullWidth: true,
            },
            {
                id: 'lastName',
                name: 'lastName',
                label: 'Last name',
                type: 'text',
                isRequired: true,
                isFullWidth: true,
            },
            {
                id: 'phoneNumber',
                name: 'phoneNumber',
                label: 'Phone number',
                type: 'text',
                isRequired: true,
                isFullWidth: true,
            },
        ],
    },
    {
        title: 'Delivery',
        fields: [
            {
                id: 'country',
                name: 'country',
                label: 'Country',
                type: 'text',
                isRequired: true,
                isFullWidth: true,
            },
        ],
    },
];
