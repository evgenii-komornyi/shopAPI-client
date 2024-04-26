import {
    AppBar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { SetMealTwoTone, Menu as MenuIcon } from '@mui/icons-material';
import { CartIcon } from '../cart/cart-icon.component';

import { menuItems } from '../../data/menu';

import { useAnchor } from '../../hooks/useAnchor.hook';

import { StyledNavLink } from './navigation.styles';

export const Navigation = () => {
    const { anchor, handleOpen, handleClose } = useAnchor();
    const navigate = useNavigate();

    return (
        <AppBar position="static" style={{ background: '#000000' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                        onClick={() => navigate('/')}
                    >
                        <SetMealTwoTone
                            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                        />
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
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchor}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchor)}
                            onClose={handleClose}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {menuItems.map(page => (
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                    }}
                                    key={page.title}
                                    to={page.path}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Typography textAlign="center">
                                            {page.title.toUpperCase()}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <SetMealTwoTone
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BETTA FISH
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {menuItems.map(page => (
                            <StyledNavLink key={page.title} to={page.path}>
                                {page.title.toUpperCase()}
                            </StyledNavLink>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                        <CartIcon />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
