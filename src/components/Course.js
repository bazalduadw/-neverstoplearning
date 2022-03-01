import React from 'react';
import { Navigate , useParams } from 'react-router';
import courses from '../data/courses';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const Course = () => {

    const {id_course} = useParams();

    return ( 
        <>
        {courses[id_course-1]
        ?   
            <CourseContainer>
                <Card sx={{ maxWidth: 800, mx: "auto", bgcolor: '#1a2027'}}>
                <CardMedia
                  component="img"
                  alt={courses[id_course-1].img}
                  height="auto"
                  image={courses[id_course-1].img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h1" component="div" sx={{ fontSize: 45, textAlign: "center", color: "white" }}>
                    {courses[id_course-1].title}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {courses[id_course-1].description}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {courses[id_course-1].descriptionlarge}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" sx={ { bgcolor: 'white' }} href={courses[id_course-1].url} target="_blank">Ir al curso</Button>
                </CardActions>
              </Card>
            </CourseContainer>
        :
            <Navigate replace to="/"/>
        }
        </>
     );
}

const CourseContainer = styled.div`
 padding: 115px 20px 20px 20px;
`

export default Course;