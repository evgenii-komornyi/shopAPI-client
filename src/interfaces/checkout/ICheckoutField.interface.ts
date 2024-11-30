import { IAddress } from '../entities/IAddress.interface';
import { IClient } from '../entities/IClient.interface';
import { IDeliveryInfo } from '../entities/IDeliveryInfo.interface';

export interface ICheckoutField extends IClient, IAddress, IDeliveryInfo {}
