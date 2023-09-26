import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarOfDavid } from '@fortawesome/free-solid-svg-icons';

const ratingArray = (rating) => {
    const roundedRating = Math.round(rating);
    const componentsArray = Array.from({ length: roundedRating }, (_, index) => index);
    return componentsArray;
  };

const emptyArray = (rating) => {
    const roundedRating = 5 - Math.round(rating);
    const componentsArray = Array.from({ length: roundedRating }, (_, index) => index);
    return componentsArray;
  };

const CourseView = ({image,name,duration,level,rating}) => {
    return(
        <Card style={{display:'flex', flexDirection: 'column', overflow: 'hidden' ,width:'18rem', padding: '0px', boxShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
            <Card.Img src={image} variant='top'/>
            <Card.Title>{name}</Card.Title>
            <Row>
                <Col xs={6}>
                    <Card.Text>Duration:{duration}</Card.Text>
                </Col>
                <Col xs={6}>
                    <Card.Text>Level:{level}</Card.Text>
                </Col>
            </Row> 
            <Row className='text-center'>
                <Card.Text >Rating :  <span style={{color:'orange'}}>{ratingArray(rating).map(e=><FontAwesomeIcon icon={faStar}/>)}</span>{emptyArray(rating).map(e=><FontAwesomeIcon icon={faStarOfDavid}/>)} {rating}</Card.Text> 
                <Button style={{margin:0}}>View</Button> 
            </Row>
        </Card>
    );
}

export default CourseView;