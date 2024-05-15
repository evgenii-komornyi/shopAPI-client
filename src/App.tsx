import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';

import { MainRoutes } from './routes/routes.route';

import './App.css';
import { Main, Wrapper } from './styles/main.styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const App = () => {
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
