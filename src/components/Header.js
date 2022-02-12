import React from 'react';
import styled from 'styled-components';
import {Titulo }from './Titulo';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 

      <HeaderContainer>

        <Titulo texto="#NeverStopLearning" color="white" textAlign="center"/>


          <Menu>
            <NavLink to="/" exact={true}>Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/acerca-de">Acerca De</NavLink>
          </Menu>
        

      </HeaderContainer>

    );
}

const HeaderContainer = styled.header`
  width: 100%;
  background: #252525;
  margin: 0 auto;
  padding: 0px;
`;

const Menu = styled.nav`
    text-align: center;

    a{
        text-align: center;
        text-decoration: none;
        color: #1651168;
        margin: 0px 10px;
    } 

    a:hover{
        color: white;
    }

    a.active{
        color: white;
    }
`
 
export default Header;
