import Badge, { BadgeProps } from '@mui/material/Badge';
import { Box, Button } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export const CartContainer = styled(Box)({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});
