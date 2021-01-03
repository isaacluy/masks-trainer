import React from 'react';
import { connect } from 'react-redux';

import TrainingApp from './components/TrainingApp';
import WelcomeApp from './components/WelcomeApp';
import { getSelectedLanguage } from './utils/language-utils';
import { isHomePath, navigateToHomePath } from './utils/navigation-utils';
import {
  addMask,
  addSelectedMasksNames,
  removeMask,
  setCurrentMask,
  setIntervalLength,
  setLanguage,
  setTimerId,
  toggleStopwatch,
  toggleTraining
} from './actions';

class App extends React.Component {
  validatePathname = (currentPathname, selectedLanguageObject) => {
    const { setLanguage } = this.props;

    if(selectedLanguageObject) {
      setLanguage(selectedLanguageObject);
    } else if (!isHomePath(currentPathname)) {
      navigateToHomePath();
    }
  }

  componentDidMount = () => {
    const currentPathname = window.location.pathname;
    const { languages } = this.props;

    const selectedLanguageObject = getSelectedLanguage(languages, currentPathname);

    this.validatePathname(currentPathname, selectedLanguageObject);
  }

  renderTrainingApp = () => {
    return (
      <TrainingApp
        addSelectedMasksNames={this.props.addSelectedMasksNames}
        currentMask={this.props.currentMask}
        intervalLength={this.props.intervalLength}
        selectedMasksNames={this.props.selectedMasksNames}
        selectedLanguage={this.props.selectedLanguage}
        selectedMasks={this.props.selectedMasks}
        setCurrentMask={this.props.setCurrentMask}
        setTimerId={this.props.setTimerId}
        stopwatchStarted={this.props.stopwatchStarted}
        timerId={this.props.timerId}
        toggleStopwatch={this.props.toggleStopwatch}
        toggleTraining={this.props.toggleTraining}
        trainingStarted={this.props.trainingStarted}
      />
    );
  }

  renderWelcomeApp = () => {
    return (
      <WelcomeApp
        addMask={this.props.addMask}
        languages={this.props.languages}
        removeMask={this.props.removeMask}
        selectedLanguage={this.props.selectedLanguage}
        selectedMasks={this.props.selectedMasks}
        setLanguage={this.props.setLanguage}
        toggleTraining={this.props.toggleTraining}
        trainingStarted={this.props.trainingStarted}
      />
    );
  }

  renderWelcomeOrTraining = () => {
    return this.props.trainingStarted ?
      this.renderTrainingApp() : this.renderWelcomeApp();
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
        selectedMasks:state.selectedMasks,
        selectedMasksNames: state.selectedMasksNames,
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
    addSelectedMasksNames,
    removeMask,
    setCurrentMask,
    setIntervalLength,
    setLanguage,
    setTimerId,
    toggleStopwatch,
    toggleTraining
  }
)(App);
