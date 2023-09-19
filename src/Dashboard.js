import './App.css';
import React,{ useState } from 'react';
import { Button, Col, Container, Row , Image} from "react-bootstrap";
import avatar from './assets/avatar.jpg';
const options = [
    {
        id: 0,
        icon: 'bi bi-book',
        name: 'Courses',
    },
    {
        id: 1,
        icon: 'bi bi-book',
        name: 'MyCourses',
    },
    {
        id: 2,
        icon: 'bi bi-book',
        name: 'Community',
    },
    {
        id: 3,
        icon: 'bi bi-book',
        name: 'About Us'
    },
    
];

const DBtn = ({ icon, name, isActive, onClick }) => (
    <Button className={`dbtn btn btn-primary ${isActive ? 'active' : ''}`} onClick={onClick}>
        <i className={icon}></i> {name}
    </Button>
);


const Dashboard = () => {
    const [activeButtonId, setActiveButtonId] = useState(0);

    const handleButtonClick = (id) => {
        setActiveButtonId(id);
    }
    return(
        <Container fluid>
            <Row>
                <Col xs={12} className="drawer">
                    <Row className='d-flex flex-coumn align-items-center justify-content-center'>
                        <Image src={avatar} alt='avatar' className="avatar" roundedCircle style={{width :'120px', height:'auto'}}/>
                        <Button variant = 'link' style={{color :'aliceblue'}}>Username</Button>
                    </Row>
                    <Row className='d-flex flex-coumn align-items-center'>
                        {options.map(option => (
                             <DBtn
                             key={option.id}
                             icon={option.icon}
                             name={option.name}
                             isActive={option.id === activeButtonId}
                             onClick={() => handleButtonClick(option.id)}
                            />
                        ))}
                    </Row>
                </Col>
                <Col fluid id="renderScreen">

                </Col>
            </Row>
        </Container>
    );
}
export default Dashboard;