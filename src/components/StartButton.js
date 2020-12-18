import React from 'react';
import Button from 'react-bootstrap/Button';

class StartButton extends React.Component {
    onClick = () => {
        console.log('');
        console.log('');
        console.log('>>> START THE TARINING!!! >>>');
        console.log('');
        console.log('');
    }

    render = () => {
        let disableButton = true;

        if(this.props.masks.length >= 1) {
            disableButton = false;
        }

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