import React from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import StopTrainingButton from './StopTrainingButton';

import {
    convertMinToMs,
    maskNameConverter,
    randomIntFromInterval
} from '../functions';

class TrainingApp extends React.Component {
    getMasksNamesFromIds = () => {
        const { selectedLanguage, selectedMasks } = this.props;

        return selectedMasks.map(mask => maskNameConverter(mask, selectedLanguage));
    }

    setMasksNamesFromIds = () => {
        const selectedMasksNames = this.getMasksNamesFromIds();
        const { addSelectedMasksNames } = this.props;

        addSelectedMasksNames(selectedMasksNames);
    }

    constructor(props) {
        super(props);

        this.setMasksNamesFromIds();
    }

    startMasksTimer = () => {
        const { intervalLength, setTimerId, timerId } = this.props;

        if(!timerId) {
            const intervalLengthInMs = convertMinToMs(intervalLength);
            const newTimerId = setInterval(this.setNextMask, intervalLengthInMs);
            setTimerId(newTimerId);
        }
    }

    startOnScreenStopwatch = () => {
        const { stopwatchStarted, toggleStopwatch } = this.props;

        toggleStopwatch(stopwatchStarted);
    }

    setNextMask = () => {
        const { selectedMasksNames, selectedMasks, setCurrentMask } = this.props;
        const numberOfMasks = selectedMasks.length;
        const randomMaskIndex = randomIntFromInterval(0, numberOfMasks-1);

        setCurrentMask(selectedMasksNames[randomMaskIndex]);
    }

    setFirstMask = () => {
        setTimeout(this.setNextMask, 0);
    }

    startTraining = () => {
        this.setFirstMask();
        this.startOnScreenStopwatch();
        this.startMasksTimer();
    }

    componentDidMount = () => {
        this.startTraining();
    }

    renderStopTrainingButton = () => {
        return (
            <StopTrainingButton
                selectedLanguage={this.props.selectedLanguage}
                setTimerId={this.props.setTimerId}
                stopwatchStarted={this.props.stopwatchStarted}
                timerId={this.props.timerId}
                toggleStopwatch={this.props.toggleStopwatch}
                toggleTraining={this.props.toggleTraining}
                trainingStarted={this.props.trainingStarted}
            />
        )
    }

    renderOnScreenStopWatch = () => {
        const { stopwatchStarted } = this.props;
        const fromTime = new Date(0,0);

        return (
            <ReactTimerStopwatch
                fromTime={fromTime}
                isOn={stopwatchStarted}
                watchType="stopwatch"
            />
        );
    }

    renderCurrentMask = () => {
        const { currentMask } = this.props;

        return (
            <h1 className="text-center text-white">
                {currentMask}
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
                    {this.renderOnScreenStopWatch()}
                </Row>
                <Row className="justify-content-center ml-0">
                    {this.renderStopTrainingButton()}
                </Row>
            </Container>
        );
    }
}

export default TrainingApp;