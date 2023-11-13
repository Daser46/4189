import React from "react";
import { Row,Button, Container } from "react-bootstrap";
import Notification from "./Notification";

const notifications = [
    {
    id: 1,
    message: "this is a notification",
    date : '11/8/2023'
},
{
    id: 2,
    message: "this is a notification",
    date : '11/8/2023'
},
{
    id: 3,
    message: "this is a notification",
    date : '11/8/2023'
},
{
    id: 4,
    message: "this is a notification",
    date : '11/8/2023'
},
{
    id: 5,
    message: "this is a notification",
    date : '11/8/2023'
}
]

const Notifications = () => {
    return (
        <Container className="text-center p-3 flex-grow-1 justify-content-center" style={{border: '1px solid rgb(200,200,200)', boxShadow: '2px 1px 4px rgba(0,0,0, 0.4)'}}>
            Notifications
            <Container className="p-2" style={{background: 'rgb(230,230,230)', borderRadius: '1rem', minHeight: '80vh'}}>
               {notifications.map(n => (
                <Notification
                message={n.message}
                date={n.date}
                />
               ))}
            </Container>
            <Row>
                <Button variant="primary-outline">clear all</Button>
            </Row>
        </Container>
    )
}

export default Notifications;