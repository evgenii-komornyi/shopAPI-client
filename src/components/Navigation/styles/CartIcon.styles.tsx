import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { Box } from '@mui/material';

export const StyledBadge = muiStyled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export const CartContainer = styled(Box)`
    && {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
