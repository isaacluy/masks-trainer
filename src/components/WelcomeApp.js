import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LanguageSelector from './LanguageSelector';
import MasksSelector from './MasksSelector';
import StartButton from './StartButton';

import { getPropertyFromLanguageObject } from '../functions';

class WelcomeApp extends React.Component {
  renderStartButton = () => {
    const {
      selectedMasks,
      selectedLanguage,
      toggleTraining,
      trainingStarted
    } = this.props;

    return (
      <StartButton
        selectedMasks={selectedMasks}
        selectedLanguage={selectedLanguage}
        toggleTraining={toggleTraining}
        trainingStarted={trainingStarted}
      />
    );
  }

  renderMasksSelector = () => {
    const {
      addMask,
      languages,
      selectedMasks,
      removeMask,
      selectedLanguage
    } = this.props;

    return (
      <MasksSelector
        addMask={addMask}
        languages={languages}
        selectedMasks={selectedMasks}
        removeMask={removeMask}
        selectedLanguage={selectedLanguage}
      />
    );
  }

  renderLanguageSelector = () => {
    const { languages, setLanguage, selectedLanguage } = this.props;

    return (
      <LanguageSelector
        languages={languages}
        setLanguage={setLanguage}
        selectedLanguage={selectedLanguage}
      />
    )
  }

  getDefaultWelcomeMessage = () => {
    const { languages } = this.props;

    return languages[0].welcomeMessage;
  }

  getWelcomeMessage = () => {
    const defaultWelcomeMessage = this.getDefaultWelcomeMessage();
    const { selectedLanguage } = this.props;
    const params = {
      selectedLanguage,
      propertyName: 'welcomeMessage',
      defaultPropertyValue: defaultWelcomeMessage
    }

    return getPropertyFromLanguageObject(params);
  }

  renderWelcomeMessage = () => {
    return (
      <h1
        id="welcome-message"
        className="text-center"
      >
        {this.getWelcomeMessage()}
      </h1>
    )
  }

  render = () => {
    return (
      <Container fluid className="my-5">
        <Row className="justify-content-center mb-4">
          {this.renderWelcomeMessage()}
        </Row>
        <Row className="justify-content-center mb-2">
          {this.renderLanguageSelector()}
        </Row>
        <Row className="justify-content-center mb-4">
          {this.renderMasksSelector()}
        </Row>
        <Row className="justify-content-center mb-4">
          {this.renderStartButton()}
        </Row>
      </Container>
    );
  }
}

export default WelcomeApp;
