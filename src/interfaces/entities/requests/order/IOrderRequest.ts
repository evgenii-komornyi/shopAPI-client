import { IOrderInfo } from '../../IOrderInfo.interface';
import { ITokenizedRequest } from '../ITokenizedRequest';

export interface IOrderRequest extends ITokenizedRequest, IOrderInfo {}
