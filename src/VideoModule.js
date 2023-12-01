import React,{ useState } from "react";
import './CourseModule.css';
import { Container, Row,Image, Col, ButtonGroup, ToggleButton, Button } from "react-bootstrap";
import courseLogo from "./assets/courselogo.png";
import myVideo from "./assets/myVideo.mp4";
/** 
  *@author github.com/daser46
  video module
*/
const VideoModule = ({id}) => {
    const [radioValue, setRadioValue] = useState('1');
    return(
        <Container fluid className="container-fitScreen">
            <Row>
                <Col style={{boxShadow: '1px 1px 2px rgba(00,0,0,0.4)', marginBottom: '5px'}}>
                    <Image src={courseLogo} alt='logo' roundedCircle style={{width :'50px', height:'auto', margin: '1em'}}/>
                    CourseName-Week01-Video1
                </Col>
            </Row>
            <Row>
                <Col className="p-2" fluid style={{boxShadow: '1px 1px 4px rgba(0,0,0,0.4)', marginBottom: '5px', fontSize: 'large'}}>
                    Introduction to JAVA
                </Col>
            </Row>
            <Row className="m-2">
                <Col className='d-flex' style={{border: 'solid 1px grey' , flexGrow: '1', overflow: 'auto', textAlign: 'justify', alignItems:'center', justifyContent: 'center', maxHeight: '75vh', height: '75vh'}}>
                <video width="640" height="360" controls autoPlay>
                    <source src={myVideo} type="video/mp4">
                    
                    </source>

                </video>
                
                </Col>
            </Row>
            <Row className="p-2 d-flex" style={{borderTop: 'solid grey 1px', justifyContent: 'flex-end'}}>
                <Col>
                    <Button variant="light" style={{float: 'right'}}>
                        Next
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default VideoModule;