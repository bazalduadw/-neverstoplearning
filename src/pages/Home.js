import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Courses from '../components/Courses';

const Home = () => {
    return ( 
        <Container>
            <Banner />
            <Courses />
        </Container>
        

     );
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;
 
export default Home;