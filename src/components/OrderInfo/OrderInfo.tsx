import { AnonymousUsersOrder } from './components/AnonymousUsersOrder';
import useUserStore from '../../stores/useUser.store';
import { LoggedInUsersOrder } from './components/LoggedInUsersOrder';

export const OrderInfo = () => {
    const { user } = useUserStore(state => state);

    return user.id === 0 ? <AnonymousUsersOrder /> : <LoggedInUsersOrder />;
};
