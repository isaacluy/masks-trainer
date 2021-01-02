import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LanguageSelector from './LanguageSelector';
import MasksSelector from './MasksSelector';
import StartButton from './StartButton';

import { getPropertyFromLanguageObject } from '../functions';

class WelcomeApp extends React.Component {
  getWelcomeMessage = () => {
    const defaultWelcomeMsg = this.props.languages[0].welcomeMessage;
    return getPropertyFromLanguageObject(this.props.selectedLanguage, 'welcomeMessage', defaultWelcomeMsg);
  }

  render = () => {
    return (
      <Container fluid className="my-5">
        <Row className="justify-content-center mb-4">
          <h1
            id="welcome-message"
            className="text-center"
          >
            {this.getWelcomeMessage()}
          </h1>
        </Row>
        <Row className="justify-content-center mb-2">
          <LanguageSelector
            languages={this.props.languages}
            setLanguage={this.props.setLanguage}
            selectedLanguage={this.props.selectedLanguage}
          />
        </Row>
        <Row className="justify-content-center mb-4">
          <MasksSelector
            addMask={this.props.addMask}
            languages={this.props.languages}
            masks={this.props.masks}
            removeMask={this.props.removeMask}
            selectedLanguage={this.props.selectedLanguage}
          />
        </Row>
        <Row className="justify-content-center mb-4">
          <StartButton
            masks={this.props.masks}
            selectedLanguage={this.props.selectedLanguage}
            toggleTraining={this.props.toggleTraining}
            trainingStarted={this.props.trainingStarted}
          />
        </Row>
      </Container>
    );
  }
}

export default WelcomeApp;
