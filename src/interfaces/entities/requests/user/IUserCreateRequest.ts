export interface IUserCreateRequest {
    email?: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country?: string;
    city?: string;
    postalCode?: string;
    address?: string;
}
