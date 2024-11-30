import { Fish } from '../Fish';
import { ContactsContainer } from './styles/Contacts.ts';
import { Typography } from '@mui/material';

export const Contacts = () => {
    return (
        <ContactsContainer>
            <Typography variant="h4" sx={{letterSpacing: '5px'}}>Here might be your dragon!!!</Typography>
            <Fish />
        </ContactsContainer>
    );
}