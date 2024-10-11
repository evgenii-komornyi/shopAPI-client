import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IModalState {
    isModalOpened: boolean;
    orderId: number | null;

    setOrderId: (orderId: number | null) => void;
    setIsModalOpened: (isOpened: boolean) => void;
}

const useModalStore = create<IModalState>()(
    devtools(set => ({
        isModalOpened: false,
        orderId: null,

        setOrderId: (orderId: number | null): void => {
            set({ orderId });
        },

        setIsModalOpened: (isModalOpened: boolean): void => {
            set({ isModalOpened });
        },
    }))
);

export default useModalStore;
