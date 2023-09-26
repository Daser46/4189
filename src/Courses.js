import React, {useState} from "react";
import './Courses.css';
import CourseView from "./CourseView";
import  courseimg from './assets/courseimg.jpg';
import { Col, Container, Row } from "react-bootstrap";

const courses = [
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
        ratings: 4.5,
    },
    {
        id: 3,
        name: 'Programming with JAVA',
        level: 'Intermediate',
        duration: '4weeks',
        image: courseimg,
        ratings: 3.2,
    },
    {
        id: 4,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 5,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 6,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 7,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 8,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 9,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 10,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 11,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 12,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 13,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 14,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
];

const Courses = () => {
    return(
        <Container xs={12} fluid className="d-flex flex-coumn h-100"  >
        <Col xs={10} className="d-flex flex-column">
            <Row>
                <Container><p style={{fontSize:"20px",textTransform:'uppercase', paddingTop: 20}}>Recomended courses</p></Container>
                <Row className="gap-2 scroll-bar-hidden" style={{overflowX:"auto", overflowY: 'hidden', flexDirection: 'column',whiteSpace: 'nowrap', maxHeight: '400px'}}>
                    {courses.map(course => (
                        <CourseView
                        image={course.image}
                        name={course.name}
                        duration={course.duration}
                        level={course.level}
                        rating={course.ratings}
                        />
                    ))}
                </Row>
            </Row>
            <Row className="d-flex flex-column flex-grow-1"> 
                <Container><p style={{fontSize:"20px",textTransform:'uppercase'}}>other courses</p></Container>
                <Row className="gap-2 scroll-bar-hidden" style={{overflowY:'scroll' ,whiteSpace: 'nowrap', maxHeight: 'calc(100vh - 450px)'}}>
                {courses.map(course => (
                    <CourseView
                    image={course.image}
                    name={course.name}
                    duration={course.duration}
                    level={course.level}
                    rating={course.ratings}
                    />
                ))}
                </Row>
            </Row>
        </Col>
        <Col>
            notifications
        </Col>
        </Container>
    );
}

export default Courses;