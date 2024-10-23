import { Fragment } from 'react/jsx-runtime';

import { Item } from './components/Item';
import {
    ItemContainer,
    ItemHeader,
    ItemWrapper,
} from '../Admin/components/OrdersTable/components/OrderDetailsModal/components/Accordions/styles/Accordions.styles';
import { IOrderItem } from '../../interfaces/entities/IOrderItem.interface';

interface IProps {
    orderItems?: IOrderItem[];
}

export const ItemsInfo = ({ orderItems }: IProps) => {
    return (
        <ItemWrapper>
            <ItemHeader>
                <div>Item Name</div>
                <div>Quantity</div>
                <div>Category</div>
                <div>Price</div>
                <div>Image</div>
            </ItemHeader>
            <ItemContainer>
                {orderItems?.map((orderItem, index) => (
                    <Fragment key={index}>
                        <Item orderItem={orderItem} />
                    </Fragment>
                ))}
            </ItemContainer>
        </ItemWrapper>
    );
};
