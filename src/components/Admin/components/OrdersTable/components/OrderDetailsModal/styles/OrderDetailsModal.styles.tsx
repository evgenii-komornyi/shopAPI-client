import { DialogTitle } from '@mui/material';
import styled from 'styled-components';

export const TitleContainer = styled(DialogTitle)`
    && {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
`;

export const TitleDetails = styled.span`
    font-weight: bolder;
    margin-left: 10px;
`;
