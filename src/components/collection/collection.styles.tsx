import { Card } from '@mui/material';

import { styled } from '@mui/material/styles';

export const ItemContainer = styled(Card)({
    boxShadow: '0 0 10px rgba(242,125,12, .4)',
    transition: 'box-shadow .5s ease-in',

    '&:hover': {
        boxShadow: '0 0 5px rgba(242,125,12, .2)',
        transition: 'box-shadow .5s ease-in',
        cursor: 'pointer',
    },
});
