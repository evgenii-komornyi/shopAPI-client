import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
    margin-right: 20px;
    margin-left: 20px;
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.5s ease-in;

    &.active,
    &:hover {
        border-bottom: 1px solid rgba(242, 125, 12, 0.4);
        transition: border-bottom 0.5s ease-in;
    }
`;
