import { Navigation } from '../navigation/navigation.component';

import { HeaderContainer } from './header.styles';

export const Header = () => {
    return (
        <HeaderContainer>
            <h6>Welcome to shop!</h6>
            <Navigation />
        </HeaderContainer>
    );
};
