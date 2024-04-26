import { MouseEvent, useState } from 'react';

export const useAnchor = () => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const handleOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    return { anchor, handleOpen, handleClose };
};
