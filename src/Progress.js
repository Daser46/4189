import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
/** 
  *@author github.com/daser46
  course module -> progress compnent
*/
const Progress = ({userID}) => {
    const progress = 60;
    return(
        <>
            <Container fluid style={{border: '1px solid rgb(200,200,200)', borderRadius: '10px', overflow: 'hidden', boxShadow: '1px 1px 4px rgba(0,0,0, 0.4)', marginBottom: '10px'}}>
                <Row fluid xs={1} style={{backgroundColor: 'rgb(225,225,225)', fontSize: 'large', padding: '1rem'}}>
                    <Col>
                        Your Progress
                    </Col> 
                </Row>
                <Row>
                    <Col className="text-center m-2">
                        <span className="d-flex m-2 ">You have Completed!</span>
                        <ProgressBar now={progress} label={`${[progress]}%`} />
                        <Button variant='danger' className="m-2"> Continue </Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{border: '1px solid rgb(200,200,200)', borderRadius: '10px', overflow: 'hidden'}}>
                <Row fluid xs={1} style={{backgroundColor: 'rgb(225,225,225)', fontSize: 'large', padding: '1rem'}}>
                    <Col>
                        Your Marks
                    </Col> 
                </Row>
                <Row>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Weighted</th>
                                <th>Your marks</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Quizes</td>
                                <td>40%</td>
                                <td>30%</td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td>Labs</td>
                                <td>60%</td>
                                <td>30%</td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>100%</td>
                                <td>60%</td>
                                <td>60%</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    );
}
export default Progress;