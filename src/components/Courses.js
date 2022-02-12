import React from 'react';
import courses from '../data/courses';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import {Titulo2} from './Titulo';
import { NavLink } from 'react-router-dom';

const AllCourses = () => {
    return ( 

        <>

        <Titulo2 texto="Cursos gratis con certificación" color="white" textAlign="center"/>    
        <ContainerCourses>

        {courses.map( (course) => { return(
            <Course>
                <Card sx={{ maxWidth: 345, minHeigth: 300 }, { bgcolor: '#1a2027' }}>
                    <CardMedia
                        component="img"
                        alt={course.title}
                        height="140"
                        image={course.img}
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
    </>
    );
}


const ContainerCourses = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const Course = styled.div`
    width: 25%;
    padding: 20px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Image = styled.img`
    max-width: 100%;
`
 
export {AllCourses};