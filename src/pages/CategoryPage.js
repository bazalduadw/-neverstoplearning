import React from 'react';
import styled from 'styled-components';
import { Titulo2 } from '../components/Titulo';
import courses from '../data/courses';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Prueba = () => {

    return(
        <ContainerCourses>
            {(() => {
               let n = 1;
               while (n <= 5){
                {courses.filter(course => course.category === "Programacion")
                .map((course) => { return(
                    <Course>
                    <Card sx={{ maxWidth: 345 }, { bgcolor: '#1a2027' }}>
                        <CardMedia
                            component="img"
                            alt={course.title}
                            height="auto"
                            image={course.img}
                            loading="lazy"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="white">
                            {course.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" color="white">
                            {course.description}
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={course.url} sx={ { bgcolor: 'white' }}>Ir al curso</Button>
                            <Button size="small" sx={ { bgcolor: 'white', ml: 1 }}> <NavLink to={`/course/${course.id_curso}`}>Ver detalles</NavLink></Button>   
                        </CardActions>
                    </Card>
                </Course>
                )})}
                n++
               }
            })()}
        </ContainerCourses>
    )
}

const CategoryProgramming = () => {

   

    return ( 
        <Container>

        <Titulo2 texto="Cursos de Programacion" color="white" textAlign="center"/>    
        <ContainerCourses>


        {courses.filter(course => course.category === "Programacion")
            .map((course) => { return(
                <Course>
                <Card sx={{ maxWidth: 345 }, { bgcolor: '#1a2027' }}>
                    <CardMedia
                        component="img"
                        alt={course.title}
                        height="auto"
                        image={course.img}
                        loading="lazy"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                        {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" color="white">
                        {course.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={course.url} sx={ { bgcolor: 'white' }}>Ir al curso</Button>
                        <Button size="small" sx={ { bgcolor: 'white', ml: 1 }}> <NavLink to={`/course/${course.id_curso}`}>Ver detalles</NavLink></Button>   
                    </CardActions>
                </Card>
            </Course>
            )})}
        
        </ContainerCourses> 

        <Prueba />
    </Container> 
     );
}

const CategoryDesign = () => {
    return ( 
        <Container>

        <Titulo2 texto="Cursos de diseño" color="white" textAlign="center"/>    
        <ContainerCourses>

        {courses.filter(course => course.category === "Diseño")
           .map( (course) => { return(
            <Course>
                <Card sx={{ maxWidth: 345 }, { bgcolor: '#1a2027' }}>
                    <CardMedia
                        component="img"
                        alt={course.title}
                        height="auto"
                        image={course.img}
                        loading="lazy"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                        {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" color="white">
                        {course.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={course.url} sx={ { bgcolor: 'white' }}>Ir al curso</Button>
                        <Button size="small" sx={ { bgcolor: 'white', ml: 1 }}> <NavLink to={`/course/${course.id_curso}`}>Ver detalles</NavLink></Button>   
                    </CardActions>
                </Card>
            </Course>
        )})}
        
        </ContainerCourses> 
    </Container> 
     );
}

const CategoryIA = () => {
    return ( 
        <Container>

        <Titulo2 texto="Cursos de Inteligencia Artificial" color="white" textAlign="center"/>    
        <ContainerCourses>

        {courses.filter(course => course.category === "Inteligencia Artificial")
           .map( (course) => { return(
            <Course>
                <Card sx={{ maxWidth: 345 }, { bgcolor: '#1a2027' }}>
                    <CardMedia
                        component="img"
                        alt={course.title}
                        height="auto"
                        image={course.img}
                        loading="lazy"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                        {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" color="white">
                        {course.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={course.url} sx={ { bgcolor: 'white' }}>Ir al curso</Button>
                        <Button size="small" sx={ { bgcolor: 'white', ml: 1 }}> <NavLink to={`/course/${course.id_curso}`}>Ver detalles</NavLink></Button>   
                    </CardActions>
                </Card>
            </Course>
        )})}
        
        </ContainerCourses> 
    </Container> 
     );
}

const CategoryMarketing = () => {
    return ( 
        <Container>

        <Titulo2 texto="Cursos de Marketing" color="white" textAlign="center"/>    
        <ContainerCourses>

        {courses.filter(course => course.category === "Marketing")
           .map( (course) => { return(
            <Course>
                <Card sx={{ maxWidth: 345 }, { bgcolor: '#1a2027' }}>
                    <CardMedia
                        component="img"
                        alt={course.title}
                        height="auto"
                        image={course.img}
                        loading="lazy"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                        {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" color="white">
                        {course.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={course.url} sx={ { bgcolor: 'white' }}>Ir al curso</Button>
                        <Button size="small" sx={ { bgcolor: 'white', ml: 1 }}> <NavLink to={`/course/${course.id_curso}`}>Ver detalles</NavLink></Button>   
                    </CardActions>
                </Card>
            </Course>
        )})}
        
        </ContainerCourses> 
    </Container> 
     );
}

const CategoryOthers = () => {
    return ( 
        <Container>

        <Titulo2 texto="Mas cursos" color="white" textAlign="center"/>    
        <ContainerCourses>

        {courses.filter(course => course.category === "Otros")
           .map( (course) => { return(
            <Course>
                <Card sx={{ maxWidth: 345 }, { bgcolor: '#1a2027' }}>
                    <CardMedia
                        component="img"
                        alt={course.title}
                        height="auto"
                        image={course.img}
                        loading="lazy"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                        {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" color="white">
                        {course.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={course.url} sx={ { bgcolor: 'white' }}>Ir al curso</Button>
                        <Button size="small" sx={ { bgcolor: 'white', ml: 1 }}> <NavLink to={`/course/${course.id_curso}`}>Ver detalles</NavLink></Button>   
                    </CardActions>
                </Card>
            </Course>
        )})}
        
        </ContainerCourses> 
    </Container> 
     );
}


const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0px 50px 0px;
`;

const ContainerCourses = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Course = styled.div`
    width: 50%;
    padding: 20px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Image = styled.img`
    max-width: 100%;
`;
 
export {CategoryDesign, CategoryProgramming, CategoryIA, CategoryMarketing, CategoryOthers};