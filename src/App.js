import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

import LanguageSelector from './components/LanguageSelector';
import { selectLanguage } from './actions';

class App extends React.Component {
  constructor(props){
    super(props);

    if(window.location.pathname && window.location.pathname !== '/') {
      props.selectLanguage(window.location.pathname);
    }
  }

  getWelcomeMsg = () => {
    let welcomeMsg = 'Welcome to the Mask Trainer';

    this.props.languages.map(language => {
      if(language.href === this.props.selectedLanguage) {
        welcomeMsg = language.welcomeMessage;
      }
    });

    return welcomeMsg;
  }

  render = () => {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <h1 className="text-center">{this.getWelcomeMsg()}</h1>
        </Row>
        <Row className="justify-content-md-center">
          <LanguageSelector />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
    return { 
        languages: state.languages,
        selectedLanguage: state.selectedLanguage
    }
}

export default connect(
  mapStateToProps,
  { selectLanguage }
  )(App);
