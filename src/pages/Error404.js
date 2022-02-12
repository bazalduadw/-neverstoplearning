import React from 'react';
import styled from 'styled-components';
import { Titulo, Titulo2 } from '../components/Titulo';

const Error404 = () => {
    return ( 

        <Container>
            <Titulo texto="Error 404" color="white"/>
            <Titulo2 texto="Parece que estas perdido" color="white"/>
          
        </Container>

     );
}


const Container = styled.div`
    height: 68.8vh;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
    align-items: center;

`
 
export default Error404;