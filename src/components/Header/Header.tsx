import { Box, Typography } from '@mui/material';
import { Navigation } from '../Navigation';

import { HeaderContainer } from './styles/Header.styles';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { SetMealTwoTone } from '@mui/icons-material';

export const Header = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <HeaderContainer>
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    p: 5,
                }}
                onClick={() => navigate('/')}
            >
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        cursor: 'pointer',
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    BETTA FISH
                </Typography>
            </Box>
            <Navigation />
        </HeaderContainer>
    );
};
