import { Navigation } from '../Navigation';

import { HeaderContainer } from './styles/Header.styles';

export const Header = () => {
    return (
        <HeaderContainer>
            <h6>Welcome to shop!</h6>
            <Navigation />
        </HeaderContainer>
    );
};
