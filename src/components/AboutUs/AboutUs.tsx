import { Fish } from '../Fish';
import { AboutUsContainer } from './styles/AboutUs.ts';
import { Typography } from '@mui/material';

export const AboutUs = () => {
    return (
        <AboutUsContainer>
            <Typography variant="h4" sx={{letterSpacing: '5px'}}>Here might be your dragon!!!</Typography>
            <Fish />
        </AboutUsContainer>
    );
}