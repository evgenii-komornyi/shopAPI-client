import { Box } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';
import useAdminStore from '../../../../../../../../../../../../stores/useAdmin.store';
import { Item } from './components/Item';
import {
    ItemContainer,
    ItemHeader,
    ItemWrapper,
} from '../../../../styles/Accordions.styles';

export const ItemsInfo = () => {
    const orderItems = useAdminStore(state => state.order?.orderItems);

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
