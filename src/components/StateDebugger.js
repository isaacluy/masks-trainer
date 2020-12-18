import React from 'react';
import Col from 'react-bootstrap/Col';

class StateDebugger extends React.Component {
    render = () => {
        return (
            <div className="row justify-content-center">
                <Col className="col-3 text-center">
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
                </Col>
            </div>
        )
    }
}

export default StateDebugger;