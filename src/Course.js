import React,{ useState } from "react";
import { Accordion,Button } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook,faVideo, faQuestion, faBeer } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from "react-router-dom";
/** 
  *@author github.com/daser46
  course module -> course compenent
*/

const Course = ({courseID,userID,setModuleID}) => {
    const navigate = useNavigate();
    return(
        <>
        <Accordion defaultActiveKey={["0",]} alwaysOpen>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Introduction</Accordion.Header>
            <Accordion.Body>
                {/*Actual course introduction should fetch from the course table and goes here, As we don't
                have a introduction in currnet model i will leave it like this for simplicity*/}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Week 1</Accordion.Header>
            <Accordion.Body>
                <Button variant='outline-success' fluid onClick={() => {navigate('textmodule')}}><FontAwesomeIcon icon={faBook} />&nbsp;&nbsp;&nbsp;Text Module</Button>
                <Button variant='outline-success' fluid onClick={() => {navigate('videomodule')}}><FontAwesomeIcon icon={faVideo} />&nbsp;&nbsp;&nbsp;Video Module</Button>
                <Button variant='outline-success' fluid onClick={() => {navigate('quizmodule')}}><FontAwesomeIcon icon={faQuestion} />&nbsp;&nbsp;&nbsp;Quiz Module</Button>
                <Button variant='outline-success' fluid onClick={() => {navigate('textmodule')}}><FontAwesomeIcon icon={faBeer} />&nbsp;&nbsp;&nbsp;Lab Module</Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Week 2</Accordion.Header>
            <Accordion.Body>
                <Button variant='outline-success' fluid onClick={() => {navigate('textmodule')}}><FontAwesomeIcon icon={faBook} />&nbsp;&nbsp;&nbsp;Text Module</Button>
                <Button variant='outline-secondary' fluid onClick={() => {navigate('videomodule')}}><FontAwesomeIcon icon={faVideo} />&nbsp;&nbsp;&nbsp;Video Module</Button>
                <Button variant='outline-secondary' fluid onClick={() => {navigate('quizmodule')}}><FontAwesomeIcon icon={faQuestion} />&nbsp;&nbsp;&nbsp;Quiz Module</Button>
                <Button variant='outline-secondary' fluid onClick={() => {navigate('textmodule')}}><FontAwesomeIcon icon={faBeer} />&nbsp;&nbsp;&nbsp;Lab Module</Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Week 3</Accordion.Header>
            <Accordion.Body>
                <Button variant='outline-secondary' fluid onClick={() => {navigate('textmodule')}}><FontAwesomeIcon icon={faBook} />&nbsp;&nbsp;&nbsp;Text Module</Button>
                <Button variant='outline-secondary' fluid onClick={() => {navigate('videomodule')}}><FontAwesomeIcon icon={faVideo} />&nbsp;&nbsp;&nbsp;Video Module</Button>
                <Button variant='outline-secondary' fluid onClick={() => {navigate('quizmodule')}}><FontAwesomeIcon icon={faQuestion} />&nbsp;&nbsp;&nbsp;Quiz Module</Button>
                <Button variant='outline-secondary' fluid onClick={() => {navigate('textmodule')}}><FontAwesomeIcon icon={faBeer} />&nbsp;&nbsp;&nbsp;Lab Module</Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Week 4</Accordion.Header>
            <Accordion.Body>
                <Button variant='outline-secondary' fluid onClick={() => {navigate('textmodule')}}><FontAwesomeIcon icon={faBook} />&nbsp;&nbsp;&nbsp;Text Module</Button>
                <Button variant='outline-secondary' fluid onClick={() => {navigate('textmodule')}}><FontAwesomeIcon icon={faVideo} />&nbsp;&nbsp;&nbsp;Video Module</Button>
                <Button variant='outline-secondary' fluid onClick={() => {navigate('quizmodule')}}><FontAwesomeIcon icon={faQuestion} />&nbsp;&nbsp;&nbsp;Quiz Module</Button>
                <Button variant='outline-secondary' fluid onClick={() => {navigate('textmodule')}}><FontAwesomeIcon icon={faBeer} />&nbsp;&nbsp;&nbsp;Lab Module</Button>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
    );
}

export default Course;