import { Accordion } from './components/Accordion/Accordion';
import { Typography } from '@mui/material';
import useAdminStore from '../../../../../../../../stores/useAdmin.store';
import { SelectInput } from '../../../SelectInput';

interface IProps {
    editMode: boolean;
    currentStatus: string;
    setCurrentStatus: (value: string) => void;
}

export const Accordions = ({
    editMode,
    currentStatus,
    setCurrentStatus,
}: IProps) => {
    const { order } = useAdminStore(state => state);

    return (
        <>
            <Accordion
                title="Order Info"
                defaultExpanded={true}
                panelNumber={1}
            >
                <Typography>
                    Order Date: {new Date(order?.orderDate ?? '').toUTCString()}
                </Typography>

                {!editMode ? (
                    <Typography>Order Status: {order?.orderStatus}</Typography>
                ) : (
                    <SelectInput
                        currentStatus={currentStatus}
                        setCurrentStatus={setCurrentStatus}
                    />
                )}
                <Typography>Total Price</Typography>
                <Typography>Delivery Price</Typography>
                <Typography>Delivery Type</Typography>
                <Typography>Delivery Comment</Typography>
            </Accordion>
            <Accordion title="Address" panelNumber={2}>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                </Typography>
            </Accordion>
            <Accordion title="Client Info" panelNumber={3}>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                </Typography>
            </Accordion>
            <Accordion title="Items" panelNumber={4}>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                </Typography>
            </Accordion>
        </>
    );
};
