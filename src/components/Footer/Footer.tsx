import { ContactItemContainer, ContactsContainer, FooterContainer, ItemContainer } from './styles/Footer.styles';
import { Chip, Container, Tooltip } from '@mui/material';
import { EmailOutlined, PhoneAndroidOutlined } from '@mui/icons-material';

export const Footer = () => {
    return (
        <Container maxWidth="lg">
            <FooterContainer>
                <ItemContainer>
                    <ContactsContainer>
                        <ContactItemContainer>
                            <Tooltip sx={{cursor: 'pointer'}} title="Phone" placement="top">
                                <Chip component="a" href="tel:+37100000000" variant="outlined" icon={<PhoneAndroidOutlined fontSize="small" />} label="+ (371) 000 000 00" />
                            </Tooltip>
                        </ContactItemContainer>
                        <ContactItemContainer>
                            <Tooltip sx={{cursor: 'pointer'}} title="Email" placement="top">
                                <Chip component='a' href='mailto:bettafish@test.test' variant="outlined" icon={<EmailOutlined fontSize="small" />} label="bettafish@test.test" />
                            </Tooltip>
                        </ContactItemContainer>
                    </ContactsContainer>
                </ItemContainer>
            </FooterContainer>
        </Container>
    );
};
