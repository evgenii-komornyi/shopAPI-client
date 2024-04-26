import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { MainRoutes } from './routes/routes.route';

import './App.css';
import { Header } from './components/header/header.component';
import { Main, Wrapper } from './styles/main.styles';
import { Footer } from './components/footer/footer.component';
import { Outlet } from 'react-router-dom';

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
