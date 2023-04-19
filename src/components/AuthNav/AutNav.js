import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  margin-right: 10px;
  &.active,
  :hover {
    color: #2433e3;
  }
`;
export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};
