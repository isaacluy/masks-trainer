import React from 'react';
import Button from 'react-bootstrap/Button';

class StopTrainingButton extends React.Component {
    goBackToWelcomeApp = (delay = 100) => {
        const { toggleTraining, trainingStarted } = this.props;

        setTimeout(
            () => toggleTraining(trainingStarted), delay
        );
    }

    clearMasksTimer = () => {
        const { setTimerId, timerId } = this.props;

        clearInterval(timerId);
        setTimerId(null);
    }

    stopOnScreenStopwatch = () => {
        const { stopwatchStarted, toggleStopwatch } = this.props;

        toggleStopwatch(stopwatchStarted);
    }

    stopTraining = () => {
        this.stopOnScreenStopwatch();
        this.clearMasksTimer();
        this.goBackToWelcomeApp();
    }

    render = () => {
        const { selectedLanguage } = this.props;

        return (
            <Button
                onClick={this.stopTraining}
                size="lg"
                variant="danger"
            >
                {selectedLanguage.stopTraining}
            </Button>
        )
    }
}

export default StopTrainingButton;