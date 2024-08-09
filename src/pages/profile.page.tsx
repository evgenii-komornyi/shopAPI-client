import { Container } from '@mui/material';
import { Profile } from '../components/Profile';
import useUserStore from '../stores/useUser.store';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

let intervalId: number, timeoutId: number;

export const ProfilePage = () => {
    const navigate = useNavigate();
    const [timer, setTimer] = useState<number>(10);
    const { isLoaded, getUserById } = useUserStore(state => state);

    useEffect(() => {
        getUserById();

        if (!isLoaded) {
            intervalId = setInterval(() => {
                setTimer(prev => (prev <= 0 ? 0 : prev - 1));
            }, 1000);

            timeoutId = setTimeout(() => {
                navigate('/auth');
            }, 10000);
        }

        return () => {
            intervalId && clearInterval(intervalId);
            timeoutId && clearTimeout(timeoutId);
        };
    }, [navigate, getUserById, isLoaded]);

    return (
        <Container maxWidth="lg">
            {isLoaded ? (
                <Profile />
            ) : (
                <h3>
                    Page not found. You will be redirected to login page at{' '}
                    {timer} sec.
                </h3>
            )}
        </Container>
    );
};
