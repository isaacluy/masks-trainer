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
        setTimeout(this.setNextMask, 0);

        const intervalLength = convertMinToMs(this.props.intervalLength);
        const timerId = setInterval(this.setNextMask, intervalLength);

        const temporaryCancelTime = (intervalLength*3)+10;
        setTimeout(() => clearInterval(timerId), temporaryCancelTime);
    }

    setNextMask = () => {
        const numberOfMasks = this.props.masks.length;
        const randomMaskIndex = randomIntFromInterval(0, numberOfMasks-1);

        this.props.setCurrentMask(this.props.masksNames[randomMaskIndex]);
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