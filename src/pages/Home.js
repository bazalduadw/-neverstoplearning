import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import { AllCourses } from '../components/Courses';
import { Parrafo, Titulo, Titulo2 } from '../components/Titulo';

const Home = () => {
    return ( 
        <Container>
            
            <MainContainer>
                <img src={require('../img/logo.png')}/>
                <Titulo texto="#NeverStopLearning" color="white"/>
                <Titulo2 texto="Aqui encontraras los mejores cursos con certigicacion gratis" color="white"/>
            </MainContainer>

            <AboutContainer>
                <AboutContainerInfo>
                    <Titulo2 texto="Acerca de" color="white"/>
                    <Parrafo texto="#NeverStopLearning es una plataforma donde encontraras cursos con certificacion totalmente gratis de empresas como Google, platzi y mas." color="white"/>
                </AboutContainerInfo>
                <AboutContainerImage>
                    <img src={require('../img/about-image.png')}/>
                </AboutContainerImage>
            </AboutContainer>


            <AllCourses />

            <BlogContainer>
                <Titulo2 texto="Blog proximamente..." color="white"/>
            </BlogContainer>


        </Container>
        

     );
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0px 50px 0px;
`;

const MainContainer = styled.div`
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    text-align: center;
    background-color: #1a2027;
    padding: 50px 0px 50px 0px;
`;

const AboutContainer = styled.div`
    display: flex;
    padding: 50px 0px 50px 0px;
`

const AboutContainerInfo = styled.div`
    width: 50%;
`

const AboutContainerImage = styled.div`
    width: 50%;
    text-align: center;
`

const BlogContainer = styled.div`
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    text-align: center;
    background-color: #1a2027;
    padding: 50px 0px 50px 0px;
`;
 
export default Home;