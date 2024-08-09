import { useState, SyntheticEvent } from 'react';
import { Tabs, Tab } from '@mui/material';
import { FactCheckOutlined, LoginOutlined } from '@mui/icons-material';
import { StyledBox } from './styles/Tabs.styles';
import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm';
import { TabContent } from './components/TabContent';

const allYProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

export const FormTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <StyledBox
            sx={{
                maxWidth: { xs: 320, sm: 480, md: 700 },
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="inherit"
                aria-label="icon label tabs"
            >
                <Tab
                    icon={<LoginOutlined />}
                    iconPosition="start"
                    label="LOGIN"
                    {...allYProps(0)}
                    sx={{ color: 'white' }}
                />
                <Tab
                    icon={<FactCheckOutlined />}
                    iconPosition="start"
                    label="REGISTRATION"
                    {...allYProps(1)}
                    sx={{ color: 'white' }}
                />
            </Tabs>
            <TabContent value={value} index={0}>
                <LoginForm />
            </TabContent>
            <TabContent value={value} index={1}>
                <RegisterForm />
            </TabContent>
        </StyledBox>
    );
};
