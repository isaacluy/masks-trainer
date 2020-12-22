import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

import StateDebugger from './components/StateDebugger';
import TrainingApp from './components/TrainingApp';
import WelcomeApp from './components/WelcomeApp';

import {
  addMask,
  createMasksNames,
  removeMask,
  selectLanguage,
  setCurrentMask,
  toggleTraining
} from './actions';

import { getSelectedLanguage } from './functions';

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

  renderWelcomeOrTraining = () => {
    return !this.props.trainingStarted ? (
      <WelcomeApp
        addMask={this.props.addMask}
        languages={this.props.languages}
        masks={this.props.masks}
        removeMask={this.props.removeMask}
        selectLanguage={this.props.selectLanguage}
        selectedLanguage={this.props.selectedLanguage}
        toggleTraining={this.props.toggleTraining}
        trainingStarted={this.props.trainingStarted}
      />
    ) : (
      <TrainingApp
        masks={this.props.masks}
        selectedLanguage={this.props.selectedLanguage}
        toggleTraining={this.props.toggleTraining}
        trainingStarted={this.props.trainingStarted}
      />
    )
  }

  render = () => {
    return this.props.languages ? (
      <div id="main-stage">
        {this.renderWelcomeOrTraining()}
        <Container fluid className="my-5">
          <Row className="m-2">
            <StateDebugger
              currentMask={this.props.currentMask}
              languages={this.props.languages}
              masks={this.props.masks}
              masksNames={this.props.masksNames}
              selectedLanguage={this.props.selectedLanguage}
              trainingStarted={this.props.trainingStarted}
            />
          </Row>
        </Container>
      </div>
    ) : 'Loading...';
  }
}

const mapStateToProps = state => {
    return { 
        currentMask: state.currentMask,
        languages: state.languages,
        masks:state.masks,
        masksNames: state.masksNames,
        selectedLanguage: state.selectedLanguage,
        trainingStarted: state.trainingStarted
    }
}

export default connect(
  mapStateToProps,
  {
    addMask,
    createMasksNames,
    removeMask,
    selectLanguage,
    setCurrentMask,
    toggleTraining
  }
)(App);
