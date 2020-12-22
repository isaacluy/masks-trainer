import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

import StateDebugger from './components/StateDebugger';
import TrainingApp from './components/TrainingApp';
import WelcomeApp from './components/WelcomeApp';

import {
  addMask,
  removeMask,
  selectLanguage,
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
              languages={this.props.languages}
              masks={this.props.masks}
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
        languages: state.languages,
        masks:state.masks,
        selectedLanguage: state.selectedLanguage,
        trainingStarted: state.trainingStarted
    }
}

export default connect(
  mapStateToProps,
  {
    addMask,
    removeMask,
    selectLanguage,
    toggleTraining
  }
)(App);
