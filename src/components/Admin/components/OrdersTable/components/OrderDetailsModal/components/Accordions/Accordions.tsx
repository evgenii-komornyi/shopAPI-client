import { Accordion } from './components/Accordion/Accordion';
import { OrderInfo } from './components/Accordion/components/OrderInfo';
import { AddressInfo } from './components/Accordion/components/AddressInfo';
import { ClientInfo } from './components/Accordion/components/ClientInfo';
import { ItemsInfo } from './components/Accordion/components/ItemsInfo';

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
    return (
        <>
            <Accordion
                title="Order Info"
                defaultExpanded
                panelNumber={1}
                needInfoIcon
            >
                <OrderInfo
                    editMode={editMode}
                    currentStatus={currentStatus}
                    setCurrentStatus={setCurrentStatus}
                />
            </Accordion>
            <Accordion title="Address" panelNumber={2} needInfoIcon>
                <AddressInfo />
            </Accordion>
            <Accordion title="Client Info" panelNumber={3} needInfoIcon>
                <ClientInfo />
            </Accordion>
            <Accordion title="Items" panelNumber={4} needInfoIcon>
                <ItemsInfo />
            </Accordion>
        </>
    );
};
