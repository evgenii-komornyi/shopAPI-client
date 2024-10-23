import { IOrderItem } from '../../../../interfaces/entities/IOrderItem.interface';
import { ItemDetails } from './components/ItemDetails';

interface IProps {
    orderItem: IOrderItem;
}

export const Item = ({ orderItem }: IProps) => {
    return <ItemDetails item={orderItem} />;
};
