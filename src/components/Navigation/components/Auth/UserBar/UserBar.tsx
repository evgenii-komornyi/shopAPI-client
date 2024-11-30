import {
    Avatar,
    Chip,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
} from '@mui/material';
import useAuthStore from '../../../../../stores/useAuth.store';
import {
    AccountCircleOutlined,
    DashboardRounded,
    Logout,
    SettingsOutlined,
    ShoppingBagOutlined,
} from '@mui/icons-material';
import { useMenu } from '../../../../../hooks/useMenu.hook';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../../../../stores/useUser.store';

export const UserBar = () => {
    const { user, logout: logoutAuthUser } = useAuthStore(state => state);
    const { logout: setDefaultUserOnLogout } = useUserStore(state => state);
    const { anchorEl, open, handleClick, handleClose } = useMenu();
    const navigate = useNavigate();

    const logoutUser = () => {
        logoutAuthUser();
        setDefaultUserOnLogout();
        navigate('/');
    };

    const goTo = (url: string): void => {
        navigate(url);
        handleClose();
    };

    return (
        <>
            <Tooltip title="Account Info">
                <Chip
                    avatar={
                        <Avatar>{`${user.client.firstName[0]}${user.client.lastName[0]}`}</Avatar>
                    }
                    label={`${user.client.firstName} ${user.client.lastName}`}
                    onClick={handleClick}
                />
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {user.roles.includes('ADMIN') ? (
                    <div>
                        <MenuItem onClick={() => goTo('/admin')}>
                            <ListItemIcon>
                                <DashboardRounded fontSize="small" />
                            </ListItemIcon>
                            Admin Panel
                        </MenuItem>
                        <Divider />
                    </div>
                ) : null}
                <MenuItem onClick={() => goTo(`/profile`)}>
                    <ListItemIcon>
                        <AccountCircleOutlined fontSize="small" />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem onClick={() => goTo(`/orders`)}>
                    <ListItemIcon>
                        <ShoppingBagOutlined fontSize="small" />
                    </ListItemIcon>
                    Orders
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <SettingsOutlined fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
            </Menu>
            <Tooltip title="Logout">
                <IconButton aria-label="logout" onClick={logoutUser}>
                    <Logout />{' '}
                </IconButton>
            </Tooltip>
        </>
    );
};
