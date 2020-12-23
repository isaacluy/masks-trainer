import React from 'react';
import Col from 'react-bootstrap/Col';

class StateDebugger extends React.Component {
    render = () => {
        return (
            <div className="row justify-content-center">
                <Col className="col-3 text-center">
                    <h3>DEBUGGER</h3>
                    <ul>
                        <li>
                            {
                                (
                                    this.props.selectedLanguage &&
                                    this.props.selectedLanguage !== '/') ?
                                        'Selected Masks:' : null
                            }
                        </li>
                        {
                            this.props.masks.map(
                                (mask, index) => <li key={index}>{mask}</li>
                            )
                        }
                    </ul>
                </Col>
                <Col className="col-3 text-center">
                    <h3>DEBUGGER</h3>
                    <p>
                        {
                            (
                                this.props.selectedLanguage &&
                                this.props.selectedLanguage !== '/') ?
                                    `Selected Language: ${this.props.selectedLanguage.text}` : null
                        }
                    </p>
                    <p>
                        {`Route: ${window.location.pathname}`}
                    </p>
                    <p>
                        {`Languages: ${this.props.languages.map(lang => lang.text)}`}
                    </p>
                    <p>
                        {`Interval Length: ${this.props.intervalLenght} min`}
                    </p>
                    <p>
                        {`Training Started?: ${this.props.trainingStarted}`}
                    </p>
                    <p>
                        {`Current Mask: ${this.props.currentMask}`}
                    </p>
                    <p>
                        {`Mask Names: ${this.props.masksNames}`}
                    </p>
                </Col>
            </div>
        )
    }
}

export default StateDebugger;