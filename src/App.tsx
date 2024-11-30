import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { MainRoutes } from './routes/routes.route';

import './App.css';
import { Main, Wrapper } from './styles/main.styles';
import useCartStore from './stores/useCart.store';
import { useEffect } from 'react';
import useUserStore from './stores/useUser.store';

const darkTheme = createTheme({
    palette: {
        background: {
            default: '#000000',
        },
        mode: 'dark',
    },
});

export const App = () => {
    const { cart, mergeCarts } = useCartStore(state => state);
    const { user } = useUserStore(state => state);

    useEffect(() => {
        if (cart[0].length !== 0 && user.id !== 0) {
            mergeCarts(user.id);
        }
    }, [cart, user]);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Wrapper>
                <Header />
                <MainRoutes />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </Wrapper>
        </ThemeProvider>
    );
};
