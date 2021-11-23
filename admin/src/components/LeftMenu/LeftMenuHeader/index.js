import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from './Wrapper';
const StyledLink = styled(Link)`
  display: flex;
  font-size: 26px;
  line-height: 60px;
  color: #fff;
  &:hover {
    color: #f3cb53;
  }
`;

const LeftMenuHeader = () => (
  <Wrapper>
    <StyledLink to="/" className="leftMenuHeaderLink">
      <span className="projectName" />ShibaGalaxy
    </StyledLink>
  </Wrapper>
);

export default LeftMenuHeader;
