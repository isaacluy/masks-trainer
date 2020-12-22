import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class TrainingApp extends React.Component {
    render = () => {
        return (
            <Container fluid className="my-5">
                <Row className="justify-content-center mb-4">
                <h1 className="text-center">
                    {`TRAINING STARTED? = ${this.props.trainingStarted}`}
                </h1>
                </Row>
            </Container>
        );
    }
}

export default TrainingApp;