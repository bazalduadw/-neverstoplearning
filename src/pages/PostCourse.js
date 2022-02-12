import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import { Titulo } from '../components/Titulo';

const PostCourse = () => {
    return ( 
        <>

        {/* <Form /> */}

        <Container>
        
            <Titulo texto="Proximamente..." textAlign="Center" color="white"/>
        
        </Container>

        </>
    );
}


const Container = styled.div`

    height: 66.5vh;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    

`;
 
export default PostCourse;