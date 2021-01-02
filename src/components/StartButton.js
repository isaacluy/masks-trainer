import React from 'react';
import Button from 'react-bootstrap/Button';

class StartButton extends React.Component {
    onClick = () => {
        this.props.toggleTraining(this.props.trainingStarted);
    }

    getButtonState = () => {
        return this.props.selectedMasks.length >= 1 ? false : true;
    }

    render = () => {
        const disableButton = this.getButtonState();

        return this.props.selectedLanguage ? (
            <Button
                active
                disabled={disableButton}
                onClick={this.onClick}
                size="lg"
                variant="success"
            >
                {this.props.selectedLanguage.startTraining}
            </Button>
        ) : null;
    }
}

export default StartButton;