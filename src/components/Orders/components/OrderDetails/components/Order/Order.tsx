import { IconButton, Typography } from '@mui/material';
import {
    ClientInfoDetailsContainer,
    IconContainer,
    ItemsContainer,
    OrderContainer,
    OrderHeaderContainer,
    OrderInfoDetailsContainer,
    OrderInformationContainer,
    OrderInformationWrapper,
} from './styles/Order';
import { PictureAsPdfOutlined } from '@mui/icons-material';
import useOrderStore from '../../../../../../stores/useOrder.store';
import { OrderProperty } from './OrderProperty';
import { formatPrice } from '../../../../../../helpers/price.helper';
import { ItemsInfo } from '../../../../../ItemsInfo';

export const Order = () => {
    const { order } = useOrderStore(state => state);

    return (
        <OrderContainer>
            <OrderHeaderContainer>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    Order #{order.uOrderId}
                </Typography>
                <IconContainer title="Generate PDF">
                    <IconButton size="large">
                        <PictureAsPdfOutlined fontSize="large" />
                    </IconButton>
                </IconContainer>
            </OrderHeaderContainer>
            <OrderInformationContainer>
                <OrderInformationWrapper>
                    <OrderInfoDetailsContainer>
                        <OrderProperty
                            propertyName="Status"
                            property={order.orderStatus.toUpperCase()}
                        />
                        <OrderProperty
                            propertyName="Order date"
                            property={new Intl.DateTimeFormat('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            }).format(new Date(order?.orderDate ?? ''))}
                        />
                        <OrderProperty
                            propertyName="Delivery type"
                            property={order.deliveryType.toUpperCase()}
                        />
                        {order.deliveryComment && (
                            <OrderProperty
                                propertyName="Delivery comment"
                                property={order.deliveryComment}
                            />
                        )}
                        <OrderProperty
                            propertyName="Total price"
                            property={formatPrice(order.totalPrice ?? 0)}
                        />
                    </OrderInfoDetailsContainer>
                    <ClientInfoDetailsContainer>
                        <OrderProperty
                            propertyName="Email"
                            property={order.client.email}
                        />
                        <OrderProperty
                            propertyName="First name"
                            property={order.client.firstName}
                        />
                        <OrderProperty
                            propertyName="Last name"
                            property={order.client.lastName}
                        />
                        <OrderProperty
                            propertyName="Phone number"
                            property={order.client.phoneNumber}
                        />
                        <OrderProperty
                            propertyName="Country"
                            property={order.client.address?.country}
                        />
                        <OrderProperty
                            propertyName="City"
                            property={order.client.address?.city}
                        />
                        <OrderProperty
                            propertyName="Postal code"
                            property={order.client.address?.postalCode}
                        />
                        <OrderProperty
                            propertyName="Address"
                            property={order.client.address?.address}
                        />
                    </ClientInfoDetailsContainer>
                </OrderInformationWrapper>
                <ItemsContainer>
                    <ItemsInfo orderItems={order.orderItems} />
                </ItemsContainer>
            </OrderInformationContainer>
        </OrderContainer>
    );
};
