import React from 'react';
import LogoStrapi from '../../../../assets/images/logo_strapi.png';
import Img from './Img';
import styled from 'styled-components';
const StyledDiv = styled.div`
  display: block;
  font-size: 26px;
  line-height: 60px;
  color: #000;
  font-weight: 600;
  &:hover {
    color: #f3cb53;
  }
`;

const Logo = () => <StyledDiv><Img src={LogoStrapi} alt="strapi-logo" />ShibaGalaxy Admin</StyledDiv>;

export default Logo;
