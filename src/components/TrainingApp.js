import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {
    maskNameConverter,
    randomIntFromInterval
} from '../functions';

class TrainingApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMask: 'NO MASK SELECTED',
            masksNames: this.props.masks.map(mask => maskNameConverter(mask, this.props.selectedLanguage))
        };
    }

    setNextMask = () => {
        const numberOfMasks = this.props.masks.length;
        const randomMaskIndex = randomIntFromInterval(0, numberOfMasks-1);

        this.setState({
            currentMask: this.state.masksNames[randomMaskIndex]
        });
    }

    render = () => {
        return (
            <Container fluid className="my-5">
                <Row className="justify-content-center mb-4">
                <h1 className="text-center">
                        {this.state.currentMask}
                </h1>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Button
                        onClick={this.setNextMask}
                        size="lg"
                        variant="danger"
                    >
                        Next Mask
                    </Button>
                </Row>
            </Container>
        );
    }
}

export default TrainingApp;