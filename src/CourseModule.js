import React,{ useState } from "react";
import './CourseModule.css';
import { Container, Row,Image, Col, ButtonGroup, ToggleButton } from "react-bootstrap";
import courseLogo from "./assets/courselogo.png";
import Course from "./Course";
import Progress from "./Progress";
const radios = [
    { name: 'Course', value: '1' },
    { name: 'Progress', value: '2' },
  ];


const CourseModule = () => {
    const [radioValue, setRadioValue] = useState('1');
    return(
        <Container fluid className="container-fitScreen">
            <Row>
                <Col style={{boxShadow: '1px 1px 2px rgba(00,0,0,0.4)', marginBottom: '5px'}}>
                    <Image src={courseLogo} alt='logo' roundedCircle style={{width :'50px', height:'auto', margin: '1em'}}/>
                    CourseName
                </Col>
            </Row>
            <Row>
                <Col fluid>
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={radioValue === radio.value ? 'primary' : 'outline-success'}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                        {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
                </Col>
            </Row>
            <Row className="m-2">
                {radioValue === '2' ? <Progress/> : <Course/>}
            </Row>
        </Container>
    );
}

export default CourseModule;


