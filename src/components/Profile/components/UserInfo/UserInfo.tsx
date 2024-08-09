import { Chip, Typography } from '@mui/material';
import useUserStore from '../../../../stores/useUser.store';
import {
    DataContainer,
    Legend,
    UserInfoContainer,
    UserInfoFieldset,
} from './styles/UserInfo.styles';
import { VerifiedUserOutlined } from '@mui/icons-material';

export const UserInfo = () => {
    const { user } = useUserStore(state => state);

    return (
        <UserInfoContainer>
            <UserInfoFieldset>
                <Legend>User info</Legend>
                <DataContainer>
                    <Typography variant="h6">Email:</Typography>
                    <Chip
                        sx={{ letterSpacing: 2 }}
                        label={user.email}
                        variant="outlined"
                    />
                </DataContainer>
                <DataContainer>
                    <Typography variant="h6">Last login at:</Typography>
                    <Chip
                        sx={{ letterSpacing: 2 }}
                        label={new Date(user.lastLoginAt).toLocaleString()}
                        variant="outlined"
                    />
                </DataContainer>
                <DataContainer>
                    <Typography variant="h6">Created at:</Typography>
                    <Chip
                        sx={{ letterSpacing: 2 }}
                        label={new Date(user.createdAt).toLocaleString()}
                        variant="outlined"
                    />
                </DataContainer>
                <DataContainer>
                    <Typography variant="h6">Updated at:</Typography>
                    <Chip
                        sx={{ letterSpacing: 2 }}
                        label={new Date(user.updatedAt).toLocaleString()}
                        variant="outlined"
                    />
                </DataContainer>
                <DataContainer>
                    <Typography variant="h6">Verified?</Typography>
                    <Chip
                        color="success"
                        label="Yes"
                        variant="outlined"
                        deleteIcon={<VerifiedUserOutlined />}
                        onDelete={() => null}
                    />
                </DataContainer>
            </UserInfoFieldset>
        </UserInfoContainer>
    );
};
