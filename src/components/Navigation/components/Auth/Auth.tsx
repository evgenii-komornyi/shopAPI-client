import useAuthStore from '../../../../stores/useAuth.store';
import { StyledNavLink } from '../../styles/Navigation.styles';
import { UserBar } from './UserBar';

export const Auth = () => {
    const { user } = useAuthStore(state => state);

    return user.id !== 0 ? (
        <UserBar />
    ) : (
        <StyledNavLink to="/auth">Login/Registration</StyledNavLink>
    );
};
