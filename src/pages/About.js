import React from 'react';
import styled from 'styled-components';
import { Titulo, Parrafo } from '../components/Titulo';
import { NavLink } from 'react-router-dom';

const About = () => {
    return ( 

        <Container>
        
            <Titulo texto="Acerca de" textAlign="Center" color="white"/>

            <Parrafo texto="Acadeinn es un sitio web con el propósito de promover la educación gratuita en línea con cursos y recursos gratis para aprender sobre programación, diseño, marketing y más." textAlign="center" color="white"/>

            <Parrafo texto="Algunos cursos tienen certificacion totalmente gratis" textAlign="center" color="white"/>

            <Parrafo texto="Dentro de los recursos encontraras videos de youtube y tambien articulos con buen contenido para que puedas aprender" textAlign="center" color="white"/>

            <Parrafo texto="Sitio disenado y desarrollado por Luis Bazaluda" textAlign="center" color="white"/>

            <img src={require('../img/elearning.jpg')} loading="lazy" width="500" />

            <NavLink to="/donaciones">Donaciones</NavLink>
        </Container>


     );
}

const Container = styled.div`
    padding: 100px 0px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    
`;


const Button = styled.button`
    margin-top: 20px;
    border: 1px solid white;
    outline: none;
    padding: 10px 35px 10px 35px;
    background: transparent;
    color: white;
`;
 
export default About;