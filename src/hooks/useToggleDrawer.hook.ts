import { useState } from 'react';

export const useToggleDrawer = () => {
    const [isCartOverlayOpened, setIsCartOverlayOpened] = useState(false);

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setIsCartOverlayOpened(prevState => !prevState);
    };

    return { isCartOverlayOpened, toggleDrawer, setIsCartOverlayOpened };
};
