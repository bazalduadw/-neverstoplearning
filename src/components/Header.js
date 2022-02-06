import React from 'react';
import styled from 'styled-components';
import {Titulo }from './Titulo';

const Header = () => {
    return ( 

      <HeaderContainer>

        <Titulo texto="#NeverStopLearning" color="white" textAlign="center"/>

      </HeaderContainer>

    );
}

const HeaderContainer = styled.header`
  width: 100%;
  background: #252525;
  margin: 0 auto;
  padding: 0px;
`;
 
export default Header;
