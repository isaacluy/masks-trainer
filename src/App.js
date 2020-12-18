import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

import LanguageSelector from './components/LanguageSelector';
import MasksSelector from './components/MasksSelector';
import StateDebugger from './components/StateDebugger';

import {
  addMask,
  removeMask,
  selectLanguage
} from './actions';

import { 
  getSelectedLanguage,
  getPropertyFromLanguageObject
} from './functions';

class App extends React.Component {
  componentDidMount = () => {
    const selectedLanguageObj = getSelectedLanguage(this.props.languages, window.location.pathname);

    if(window.location.pathname !== '/') {
      if(!selectedLanguageObj) {
        window.location = '/';
      } else {
        this.props.selectLanguage(selectedLanguageObj);
      }
    }
  }

  getWelcomeMsg = () => {
    const defaultWelcomeMsg = this.props.languages[0].welcomeMessage;
    return getPropertyFromLanguageObject(this.props.selectedLanguage, 'welcomeMessage', defaultWelcomeMsg);
  }

  render = () => {
    return this.props.languages ? (
      <Container fluid className="my-5">
        <Row className="justify-content-center mb-4">
          <h1
            id="welcome-message"
            className="text-center"
          >
            {this.getWelcomeMsg()}
          </h1>
        </Row>
        <Row className="justify-content-center mb-2">
          <LanguageSelector
            languages={this.props.languages}
            selectLanguage={this.props.selectLanguage}
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
        <Row className="m-2">
          <StateDebugger
            languages={this.props.languages}
            masks={this.props.masks}
            selectedLanguage={this.props.selectedLanguage}
          />
        </Row>
      </Container>
    ) : 'Loading...';
  }
}

const mapStateToProps = state => {
    return { 
        languages: state.languages,
        masks:state.masks,
        selectedLanguage: state.selectedLanguage
    }
}

export default connect(
  mapStateToProps,
  {
    addMask,
    removeMask,
    selectLanguage
  }
)(App);
