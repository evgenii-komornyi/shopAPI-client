import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import {
    ChevronLeft,
    ChevronRight,
    Menu as MenuIcon,
    StorefrontTwoTone,
    ShoppingCartTwoTone,
    AssessmentTwoTone,
} from '@mui/icons-material';
import { AppBar, Drawer, DrawerHeader } from './styles/AdminHeader.styles';

interface Menu {
    title: string;
    path: string;
    icon: React.ReactElement;
}

const menuList: Menu[] = [
    {
        title: 'Admin Panel',
        path: '',
        icon: <AssessmentTwoTone />,
    },
    {
        title: 'Orders',
        path: 'orders',
        icon: <ShoppingCartTwoTone />,
    },
    {
        title: 'Back to Shop',
        path: '/',
        icon: <StorefrontTwoTone />,
    },
];

export const AdminHeader = () => {
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [menuTitle, setMenuTitle] = useState<string>('Admin Panel');

    const handleMenuClick = (path: string, title: string): void => {
        navigate(path);
        setMenuTitle(title);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                marginRight: 5,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {menuTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? (
                            <ChevronRight />
                        ) : (
                            <ChevronLeft />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {menuList.map(({ title, path, icon }, index) => (
                        <Fragment key={index}>
                            {title === 'Back to Shop' && <Divider />}
                            <ListItem
                                disablePadding
                                sx={{ display: 'block' }}
                                onClick={() => handleMenuClick(path, title)}
                            >
                                <ListItemButton
                                    sx={[
                                        {
                                            minHeight: 48,
                                            px: 2.5,
                                        },
                                        open
                                            ? {
                                                  justifyContent: 'initial',
                                              }
                                            : {
                                                  justifyContent: 'center',
                                              },
                                    ]}
                                >
                                    <ListItemIcon
                                        sx={[
                                            {
                                                minWidth: 0,
                                                justifyContent: 'center',
                                            },
                                            open
                                                ? {
                                                      mr: 3,
                                                  }
                                                : {
                                                      mr: 'auto',
                                                  },
                                        ]}
                                    >
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={title}
                                        sx={[
                                            open
                                                ? {
                                                      opacity: 1,
                                                  }
                                                : {
                                                      opacity: 0,
                                                  },
                                        ]}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Fragment>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
