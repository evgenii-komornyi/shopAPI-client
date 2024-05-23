import { IAddress } from '../order/IAddress.interface';
import { IClient } from '../order/IClient.interface';
import { IDeliveryInfo } from '../order/IDeliveryInfo.interface';

export interface ICheckoutField extends IClient, IAddress, IDeliveryInfo {}
