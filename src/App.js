import React from 'react';

import './App.css';
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import {Button, Card, CardBody, CardTitle, Input} from "reactstrap";
import {ChatTable} from "./ChatTable";
import {Join} from "./Join";

const cardStyle = {
    backgroundColor: "#BDBDBD"
};

class App extends React.Component {

    state = {
        sender: '',
        sendMessage: '',
        messages : [],
        cols : [
            {"num": 0, "name" : "username"},
            {"num": 1, "name" : "message"},
            {"num": 2, "name" : "time"}
        ]
    };

    socket = new WebSocket('ws://localhost:8080/wsChat');

    componentDidMount() {
        this.connectToWebsocket();
    }

    addMessage = message =>
        this.setState(state => ({messages: [...state.messages, message]}));

    sendMessage = messageString => {
        const message = {
            sender : this.state.sender,
            message : messageString,
            time : new Date().toLocaleTimeString()
        };
        this.socket.send(JSON.stringify(message));

    };

    joinAs = name => this.setState({sender: name});

    render() {
        return (
            <div>
                <h1>Welcome to the Chat-Client</h1>
                <Join loggedInAs={this.state.sender} join={name => this.joinAs(name)}/>
                <Row>
                    <Col md="6">
                        <Card style={cardStyle}>
                            <CardBody>
                                <CardTitle><strong>Conversation</strong></CardTitle>
                                <ChatTable cols={this.state.cols} messages={this.state.messages}/>
                                <Input type="text"
                                placeholder={'Enter message...'}
                                onChange={e => this.setState({sendMessage: e.target.value})}/>
                                <Button color="dark" onClick={() => this.sendMessage(this.state.sendMessage)}>Send</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )

    }

    connectToWebsocket(){
        this.socket.onopen = () => {
            console.log('WebSocket connected successfully');
        };

        this.socket.onmessage = (messageEvent) => {
            console.log("message received: '%s'", messageEvent.data);
            const message = JSON.parse(messageEvent.data);
            this.addMessage(message);
        };

        this.socket.onclose = () => {
            console.log("Connection closed");
        };
    }
}

export default App;
