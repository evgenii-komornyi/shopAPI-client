import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
    margin-right: 20px !important;
    margin-left: 20px !important;
    padding: 10px 20px !important;
    color: #fff !important;
    text-decoration: none !important;
    border-bottom: 1px solid transparent !important;
    transition: border-bottom 0.5s ease-in !important;

    &.active,
    :hover {
        border-bottom: 1px solid rgba(242, 125, 12, 0.4) !important;
        transition: border-bottom 0.5s ease-in !important;
    }
`;
