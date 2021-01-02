import React from 'react';
import { connect } from 'react-redux';

import TrainingApp from './components/TrainingApp';
import WelcomeApp from './components/WelcomeApp';
import { getSelectedLanguage } from './functions';

import {
  addMask,
  createMasksNames,
  removeMask,
  setCurrentMask,
  setIntervalLength,
  setLanguage,
  setTimerId,
  toggleStopwatch,
  toggleTraining
} from './actions';

class App extends React.Component {
  componentDidMount = () => {
    const selectedLanguageObject = getSelectedLanguage(this.props.languages, window.location.pathname);

    if(window.location.pathname !== '/') {
      if(!selectedLanguageObject) {
        window.location = '/';
      } else {
        this.props.setLanguage(selectedLanguageObject);
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
        selectedLanguage={this.props.selectedLanguage}
        setLanguage={this.props.setLanguage}
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
    return (
      <div id="main-stage">
        {this.renderWelcomeOrTraining()}
      </div>
    );
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
    setCurrentMask,
    setIntervalLength,
    setLanguage,
    setTimerId,
    toggleStopwatch,
    toggleTraining
  }
)(App);
