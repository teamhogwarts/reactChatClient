import React from 'react';
import {Button, Card, CardBody, CardTitle, Input} from "reactstrap";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import {ChatTable} from "./ChatTable";

const cardStyle = {
    backgroundColor: "#F78181"
};

const cols = [
    {"num": 0, "name" : "username"},
    {"num": 1, "name" : "message"},
    {"num": 2, "name" : "time"}
];

const msg = [
    {"sender": "Harry", "msg": "Hey, alles klar?", "time": new Date().toLocaleTimeString()},
    {"sender": "Ron", "msg": "Hey, jo be dir?", "time": new Date().toLocaleTimeString()}
];

export const ChatBox = () =>
    <Row>
        <Col md="6">
            <Card style={cardStyle}>
                <CardBody>
                    <CardTitle>Conversation</CardTitle>
                    <ChatTable messages={msg} cols={cols}/>
                    <Input type="text"/>
                    <Button color="primary">Send</Button>
                </CardBody>
            </Card>
        </Col>
    </Row>;