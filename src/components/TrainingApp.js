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

    componentDidMount = () => {
        this.startTraining();
    }

    stopTraining = () => {
        this.props.toggleStopwatch(this.props.stopwatchStarted);

        clearInterval(this.props.timerId);
        this.props.setTimerId(null);
        setTimeout(
            () => this.props.toggleTraining(this.props.trainingStarted), 100
        );
    }

    renderStopTrainingButton = () => {
        return (
            <Button
                onClick={this.stopTraining}
                size="lg"
                variant="danger"
            >
                {this.props.selectedLanguage.stopTraining}
            </Button>
        )
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

    renderCurrentMask = () => {
        return (
            <h1 className="text-center text-white">
                {this.props.currentMask}
            </h1>
        );
    }

    render = () => {
        return (
            <Container fluid className="p-0">
                <Row
                    className="justify-content-center align-items-center bg-success ml-0"
                    id="mask-display"
                >
                    {this.renderCurrentMask()}
                </Row>
                <Row className="justify-content-center ml-0 my-3">
                    {this.renderStopWatch()}
                </Row>
                <Row className="justify-content-center ml-0">
                    {this.renderStopTrainingButton()}
                </Row>
            </Container>
        );
    }
}

export default TrainingApp;