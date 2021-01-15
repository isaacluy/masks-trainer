import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LanguageSelector from './LanguageSelector';
import MasksSelector from './MasksSelector';
import StartButton from './StartButton';
import { getPropertyFromLanguageObject } from '../utils/language-utils';

class WelcomeApp extends React.Component {
  renderExternalLink = () => {
    const { languages, selectedLanguage } = this.props;
    const linkText = selectedLanguage ? selectedLanguage.externalLinkText : languages[0].externalLinkText;

    return (
      <a
        className="text-center"
        href="http://canadianclowning.com/classes/"
      >
        <small>{linkText}</small>
      </a>
    );
  }

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
        className="display-4 text-center"
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
        <Row className="justify-content-center">
          {this.renderExternalLink()}
        </Row>
      </Container>
    );
  }
}

export default WelcomeApp;
