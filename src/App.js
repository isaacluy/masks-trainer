import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

import StateDebugger from './components/StateDebugger';
import TrainingApp from './components/TrainingApp';
import WelcomeApp from './components/WelcomeApp';
import { getSelectedLanguage } from './functions';

import {
  addMask,
  createMasksNames,
  removeMask,
  selectLanguage,
  setCurrentMask,
  setIntervalLength,
  setTimerId,
  toggleStopwatch,
  toggleTraining
} from './actions';

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

  renderDebugger = () => {
    return (
      <Container fluid className="my-5">
        <Row className="m-2">
          <StateDebugger
            currentMask={this.props.currentMask}
            intervalLength={this.props.intervalLength}
            languages={this.props.languages}              masks={this.props.masks}
            masksNames={this.props.masksNames}
            selectedLanguage={this.props.selectedLanguage}
            timerId={this.props.timerId}
            trainingStarted={this.props.trainingStarted}
          />
        </Row>
      </Container>
    );
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
        setTimerId={this.props.setTimerId}
        stopwatchStarted={this.props.stopwatchStarted}
        timerId={this.props.timerId}
        toggleStopwatch={this.props.toggleStopwatch}
        toggleTraining={this.props.toggleTraining}
        trainingStarted={this.props.trainingStarted}
      />
    )
  }

  render = () => {
    return this.props.languages ? (
      <div id="main-stage">
        {this.renderWelcomeOrTraining()}
        {this.renderDebugger()}
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
        stopwatchStarted: state.stopwatchStarted,
        timerId: state.timerId,
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
    setTimerId,
    toggleStopwatch,
    toggleTraining
  }
)(App);
