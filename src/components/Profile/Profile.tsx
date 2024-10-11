import { ProfileMainContainer } from './styles/Profile.styles';
import { UserInfo } from './components/UserInfo';
import { PersonalInfo } from './components/PersonalInfo';
import { ErrorSnackbar } from '../ErrorSnackbar';
import useUserStore from '../../stores/useUser.store';

export const Profile = () => {
    const { validationErrors, databaseErrors } = useUserStore(state => state);

    return (
        <ProfileMainContainer>
            <UserInfo />
            <PersonalInfo />
            {validationErrors.length !== 0 && (
                <ErrorSnackbar errors={validationErrors} />
            )}
            {databaseErrors.length !== 0 && (
                <ErrorSnackbar errors={databaseErrors} />
            )}
        </ProfileMainContainer>
    );
};
