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
  setIntervalLength,
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
        createMasksNames={this.props.createMasksNames}
        currentMask={this.props.currentMask}
        intervalLength={this.props.intervalLength}
        masks={this.props.masks}
        masksNames={this.props.masksNames}
        selectedLanguage={this.props.selectedLanguage}
        setCurrentMask={this.props.setCurrentMask}
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
              intervalLength={this.props.intervalLength}
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
        intervalLength: state.intervalLength,
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
    setIntervalLength,
    toggleTraining
  }
)(App);
