import { Grid } from '@mui/material';
import { DashedLineChart } from './components/LineChat';
import { Pie } from './components/PieChart';
import { BarChart } from './components/BarChart';
import { AreaChart } from './components/AreaChart';

export const Charts = () => {
    return (
        <Grid container rowSpacing={3} rowGap={5} textAlign="center">
            <Grid item xs={12} lg={6}>
                <DashedLineChart />
            </Grid>
            <Grid item xs={12} lg={6}>
                <Pie />
            </Grid>
            <Grid item xs={12} lg={6}>
                <BarChart />
            </Grid>
            <Grid item xs={12} lg={6}>
                <AreaChart />
            </Grid>
        </Grid>
    );
};
