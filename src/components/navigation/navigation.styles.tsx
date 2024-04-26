import { NavLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';

export const StyledNavLink = styled(NavLink)({
    marginRight: '20px',
    marginLeft: '20px',
    padding: '10px 20px',
    color: '#fff !important',
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    transition: 'border-bottom .5s ease-in',

    '&.active, :hover': {
        borderBottom: '1px solid rgba(242,125,12, .4)',
        transition: 'border-bottom .5s ease-in',
    },
});
