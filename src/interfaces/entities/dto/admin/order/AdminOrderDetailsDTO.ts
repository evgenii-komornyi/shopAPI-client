export interface AdminOrderDetailsDTO {
    id: number;
    orderStatusId: number;
    orderStatus: string;
    orderDate: string;
    deliveryComment: string;
    deliveryType: string;
    uOrderId: string;
    clientId: number;
    addressId: number;
}
