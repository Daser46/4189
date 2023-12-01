import React,{ useState } from "react";
import './CourseModule.css';
import { Container, Row,Image, Col, ButtonGroup, ToggleButton, Button } from "react-bootstrap";
import courseLogo from "./assets/courselogo.png";
/** 
  *@author github.com/daser46
  text module
*/


const TextModule = ({id}) => {
    const [radioValue, setRadioValue] = useState('1');
    return(
        <Container fluid className="container-fitScreen">
            <Row>
                <Col style={{boxShadow: '1px 1px 2px rgba(00,0,0,0.4)', marginBottom: '5px'}}>
                    <Image src={courseLogo} alt='logo' roundedCircle style={{width :'50px', height:'auto', margin: '1em'}}/>
                    CourseName-Week01-Text1
                </Col>
            </Row>
            <Row>
                <Col className="p-2" fluid style={{boxShadow: '1px 1px 4px rgba(0,0,0,0.4)', marginBottom: '5px', fontSize: 'large'}}>
                    Introduction to JAVA
                </Col>
            </Row>
            <Row className="m-2">
                <Col className='d-flex' style={{border: 'solid 1px grey' , flexGrow: '1', overflow: 'auto', textAlign: 'justify', maxHeight: '75vh', height: '75vh'}}>
                Due to the traditional education system, students face many challenges. Also, due to the covid 19 virus that existed in the past days, those requests increased in a big way. Then the opportunity to get education easily from home will become an essential factor. But now there are many websites for this on the internet. But most of those websites do not provide convenient and flexible services to the students. This is because most websites are very complex. Students will find it difficult to understand them. 
                Also, there are almost no facilities for students to choose the things they need like course palettes and get them from one place. Sometimes students have to find one course in one site and another in another site. In other cases, students may not have an attractive interface to learn from. Then students' minds will not be able to handle easily. 
                There are several objectives in building this project. That is, 
                ✓	to reduce bridge the gap between learners and quality education as well as online courses and many other features bringing in one place. 
                ✓	to provide and properly categorize separate course to each field to carry out educational activities from a convenient station at a convenient time.  
                ✓	Apart from this, it is also aimed to give the students the opportunity to get advice and contact the teachers by phone or email to know about the unknown facts.
                In Order to achieve these project objectives, we provide these key features to support user,
                Key features of EduConnect include:

                Due to the traditional education system, students face many challenges. Also, due to the covid 19 virus that existed in the past days, those requests increased in a big way. Then the opportunity to get education easily from home will become an essential factor. But now there are many websites for this on the internet. But most of those websites do not provide convenient and flexible services to the students. This is because most websites are very complex. Students will find it difficult to understand them. 
                Also, there are almost no facilities for students to choose the things they need like course palettes and get them from one place. Sometimes students have to find one course in one site and another in another site. In other cases, students may not have an attractive interface to learn from. Then students' minds will not be able to handle easily. 
                There are several objectives in building this project. That is, 
                ✓	to reduce bridge the gap between learners and quality education as well as online courses and many other features bringing in one place. 
                ✓	to provide and properly categorize separate course to each field to carry out educational activities from a convenient station at a convenient time.  
                ✓	Apart from this, it is also aimed to give the students the opportunity to get advice and contact the teachers by phone or email to know about the unknown facts.
                In Order to achieve these project objectives, we provide these key features to support user,
                Key features of EduConnect include:


                Due to the traditional education system, students face many challenges. Also, due to the covid 19 virus that existed in the past days, those requests increased in a big way. Then the opportunity to get education easily from home will become an essential factor. But now there are many websites for this on the internet. But most of those websites do not provide convenient and flexible services to the students. This is because most websites are very complex. Students will find it difficult to understand them. 
                Also, there are almost no facilities for students to choose the things they need like course palettes and get them from one place. Sometimes students have to find one course in one site and another in another site. In other cases, students may not have an attractive interface to learn from. Then students' minds will not be able to handle easily. 
                There are several objectives in building this project. That is, 
                ✓	to reduce bridge the gap between learners and quality education as well as online courses and many other features bringing in one place. 
                ✓	to provide and properly categorize separate course to each field to carry out educational activities from a convenient station at a convenient time.  
                ✓	Apart from this, it is also aimed to give the students the opportunity to get advice and contact the teachers by phone or email to know about the unknown facts.
                In Order to achieve these project objectives, we provide these key features to support user,
                Key features of EduConnect include:


                Due to the traditional education system, students face many challenges. Also, due to the covid 19 virus that existed in the past days, those requests increased in a big way. Then the opportunity to get education easily from home will become an essential factor. But now there are many websites for this on the internet. But most of those websites do not provide convenient and flexible services to the students. This is because most websites are very complex. Students will find it difficult to understand them. 
                Also, there are almost no facilities for students to choose the things they need like course palettes and get them from one place. Sometimes students have to find one course in one site and another in another site. In other cases, students may not have an attractive interface to learn from. Then students' minds will not be able to handle easily. 
                There are several objectives in building this project. That is, 
                ✓	to reduce bridge the gap between learners and quality education as well as online courses and many other features bringing in one place. 
                ✓	to provide and properly categorize separate course to each field to carry out educational activities from a convenient station at a convenient time.  
                ✓	Apart from this, it is also aimed to give the students the opportunity to get advice and contact the teachers by phone or email to know about the unknown facts.
                In Order to achieve these project objectives, we provide these key features to support user,
                Key features of EduConnect include:

                </Col>
            </Row>
            <Row className="p-2 d-flex" style={{borderTop: 'solid grey 1px', justifyContent: 'flex-end'}}>
                <Col>
                    <Button variant="primary" style={{float: 'right'}}>
                        Next
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default TextModule;