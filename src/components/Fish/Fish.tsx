import { Container, CrownTail, Eye, Fin1, Fin2, Fin3, FishContainer } from './styles/Fish.ts';

export const Fish = () => {
    return (
        <Container>
            <FishContainer>
                <Eye />
                <Fin3 />
                <Fin1 />
                <Fin2 />
                <CrownTail />
            </FishContainer>
        </Container>
    );
}