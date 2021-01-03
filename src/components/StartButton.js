import React from 'react';
import Button from 'react-bootstrap/Button';

class StartButton extends React.Component {
    renderLargeButton = properties => {
        const { disabled, label, onClick } = properties;

        return (
            <Button
                active={true}
                disabled={disabled}
                onClick={onClick}
                size="lg"
                variant="success"
            >
                {label}
            </Button>
        );
    }
    
    onClick = () => {
        const { toggleTraining, trainingStarted } = this.props;

        toggleTraining(trainingStarted);
    }

    isButtonDisabled = () => {
        const { selectedMasks } = this.props;

        return selectedMasks.length >= 1 ? false : true;
    }

    getButtonProps = selectedLanguage => {
        const disabled = this.isButtonDisabled();
        const label = selectedLanguage.startTraining;

        return { disabled, label, onClick: this.onClick };
    }

    render = () => {
        const { selectedLanguage } = this.props;

        if(!selectedLanguage) {
            return null;
        }

        const buttonProps = this.getButtonProps(selectedLanguage);

        return this.renderLargeButton(buttonProps);
    }
}

export default StartButton;