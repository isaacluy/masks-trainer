import React from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';
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

    renderStopWatch = () => {
        return (
            <ReactTimerStopwatch
                fromTime={new Date(0,0)}
                isOn={this.props.stopwatchStarted}
                watchType="stopwatch"
            />
        );
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
        this.props.toggleStopwatch(this.props.stopwatchStarted);

        if(!this.props.timerId) {
            const intervalLength = convertMinToMs(this.props.intervalLength);
            const timerId = setInterval(this.setNextMask, intervalLength);
            this.props.setTimerId(timerId);
        }
    }

    stopTraining = () => {
        this.props.toggleStopwatch(this.props.stopwatchStarted);

        clearInterval(this.props.timerId);
        this.props.setTimerId(null);
        setTimeout(
            () => this.props.toggleTraining(this.props.trainingStarted), 100
        );
    }

    render = () => {
        return (
            <Container fluid className="p-0">
                <Row id="mask-display" className="justify-content-center align-items-center bg-success ml-0">
                    <h1 className="text-center text-white">
                        {this.props.currentMask}
                    </h1>
                </Row>
                <Row className="justify-content-center ml-0 my-3">
                    {this.renderStopWatch()}
                </Row>
                <Row className="justify-content-center ml-0">
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