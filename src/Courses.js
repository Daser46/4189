import React, {useState} from "react";
import './Courses.css';
import  courseimg from './assets/courseimg.jpg';

Courses = [
    {
        id: 1,
        name: 'Introduction to CS',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 2,
        name: 'Introduction to Web Devolopment',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 3,
        name: 'Programming with JAVA',
        level: 'Intermediate',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 4,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
];

const Courses = () => {
    return(
        <Container>
            
        </Container>
    );
}

export default Courses;