import React from 'react'
import styled from 'styled-components';
import { Titulo } from '../components/Titulo';

const Donations = () => {
    return ( 

        <Container>
            
            <Titulo texto="Donaciones" color="white"/>

            <a href="https://www.paypal.com/donate/?hosted_button_id=UTBVFNAJB3NRY">https://www.paypal.com/donate/?hosted_button_id=UTBVFNAJB3NRY</a>

        </Container>


     );
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0px 50px 0px;
`;
 
export default Donations;