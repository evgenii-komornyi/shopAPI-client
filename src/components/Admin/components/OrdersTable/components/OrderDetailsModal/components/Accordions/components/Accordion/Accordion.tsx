import { ExpandMore } from '@mui/icons-material';
import {
    Accordion as MUIAccordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    title: string;
    panelNumber: number;
    defaultExpanded?: boolean;
}

export const Accordion = ({
    children,
    title,
    panelNumber,
    defaultExpanded = false,
}: IProps): ReactNode => {
    return (
        <MUIAccordion defaultExpanded={defaultExpanded}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${panelNumber}-content`}
                id={`panel${panelNumber}-header`}
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </MUIAccordion>
    );
};
