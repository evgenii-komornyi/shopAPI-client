import { useEffect } from 'react';
import useAuthStore from '../../stores/useAuth.store';
import { FormTabs } from './components/Tabs';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export const Auth = () => {
    const { message } = useAuthStore(state => state);
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (message) {
            navigate('/register-complete');
        }
    }, [message]);

    return <FormTabs />;
};
