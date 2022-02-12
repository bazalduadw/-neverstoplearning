import React from 'react';
import { Navigate , useParams } from 'react-router';
import courses from '../data/courses';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Course = () => {

    const {id_course} = useParams();

    return ( 
        <>
        {courses[id_course-1]
        ?   
        <>
            <Card sx={{ maxWidth: 800, mx: "auto", mt: "1.5rem", mb: "1.5rem"}}>
            <CardMedia
              component="img"
              alt={courses[id_course-1].img}
              height="auto"
              image={courses[id_course-1].img}
            />
            <CardContent>
              <Typography gutterBottom variant="h1" component="div" sx={{ fontSize: 45, textAlign: "center" }}>
                {courses[id_course-1].title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {courses[id_course-1].description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {courses[id_course-1].descriptionlarge}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={courses[id_course-1].url} target="_blank">Ir al curso</Button>
            </CardActions>
          </Card>
          </>
        :
            <Navigate replace to="/"/>
        }
        </>
     );
}

export default Course;