import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {
    convertMinToMs,
    maskNameConverter,
    randomIntFromInterval
} from '../functions';

class TrainingApp extends React.Component {
    constructor(props) {
        super(props);

        const masksNames = this.props.masks.map(mask => maskNameConverter(mask, this.props.selectedLanguage))
        this.props.createMasksNames(masksNames);
    }

    componentDidMount = () => {
        this.startTraining();
    }

    setNextMask = () => {
        const numberOfMasks = this.props.masks.length;
        const randomMaskIndex = randomIntFromInterval(0, numberOfMasks-1);

        this.props.setCurrentMask(this.props.masksNames[randomMaskIndex]);
    }

    startTraining = () => {
        setTimeout(this.setNextMask, 0);

        if(!this.props.timerId) {
            const intervalLength = convertMinToMs(this.props.intervalLength);
            const timerId = setInterval(this.setNextMask, intervalLength);
            this.props.setTimerId(timerId);
        }
    }

    stopTraining = () => {
        clearInterval(this.props.timerId);
        this.props.setTimerId(null);
        this.props.toggleTraining(this.props.trainingStarted);
    }

    render = () => {
        return (
            <Container fluid className="my-5">
                <Row className="justify-content-center mb-4">
                    <h1 className="text-center">
                        {this.props.currentMask}
                    </h1>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Button
                        onClick={this.stopTraining}
                        size="lg"
                        variant="danger"
                    >
                        {this.props.selectedLanguage.stopTraining}
                    </Button>
                </Row>
            </Container>
        );
    }
}

export default TrainingApp;