import React, {useState} from "react";
import './Courses.css';
import CourseView from "./CourseView";
import  courseimg from './assets/courseimg.jpg';
import Notifications from "./Notifications";
import {Col, Container, Row } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';



const radios = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
  ];

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
    const [radioValue, setRadioValue] = useState('1');
    return(
        <Container xs={12} fluid className="d-flex flex-coumn h-100"  >
        <Col xs={9} className="d-flex flex-column">
            <Row>
                <Container><p style={{fontSize:"20px",textTransform:'uppercase', paddingTop: 20}}>Recomended courses</p></Container>
                <Row className="gap-2 scroll-bar-hidden" style={{overflowX:"auto", overflowY: 'hidden', flexDirection: 'column',whiteSpace: 'nowrap', maxHeight: '300px'}}>
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
                <ButtonGroup style={{paddingTop: '1em', width: '100%', maxWidth: '150px', justifySelf: 'center'}}>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
            </Row>
        </Col>
        <Col fluid className="d-flex justify-content-center p-2">
            <Notifications/>
        </Col>
        </Container>
    );
}

export default Courses;