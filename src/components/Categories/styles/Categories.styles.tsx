import styled from 'styled-components';
import { Card } from '@mui/material';

export const ItemContainer = styled(Card)`
    && {
        box-shadow: 0 0 10px rgba(242, 125, 12, 0.4);
        transition: box-shadow 0.5s ease-in;
    }

    &:hover {
        && {
            box-shadow: 0 0 5px rgba(242, 125, 12, 0.2);
            transition: box-shadow 0.5s ease-in;
            cursor: pointer;
        }
    }
`;
