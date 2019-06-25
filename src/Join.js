import React from 'react';
import {Button, Card, CardBody, CardTitle, Input} from "reactstrap";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

const cardStyle = {
    backgroundColor: "#F78181"
};

export class Join extends React.Component {

    state = {
        name: ''
    };

    render() {
        return (
            <Row>
                <Col md="6">
                    <Card style={cardStyle}>
                        <CardBody>
                            <CardTitle><strong>Join the Conversation as ...</strong></CardTitle>
                            <Input type="text" placeholder={'... name'}
                            onChange={e => this.setState({name: e.target.value})}/>
                            {
                                this.props.loggedInAs !== ''
                                    ? <p>Eingeloggt als: {this.props.loggedInAs}</p>
                                    : <p>Noch nicht eingeloggt</p>
                            }
                            <Button color="dark" onClick={() => this.props.join(this.state.name)}>Join</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )

    }
}