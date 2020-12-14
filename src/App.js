import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

import LanguageSelector from './components/LanguageSelector';
import { selectLanguage } from './actions';
import { getPropertyFromLanguageObject } from './functions';

class App extends React.Component {
  constructor(props){
    super(props);

    if(window.location.pathname && window.location.pathname !== '/') {
      props.selectLanguage(window.location.pathname);
    }
  }

  getWelcomeMsg = () => {
    const defaultWelcomeMsg = this.props.languages[0].welcomeMessage;
    return getPropertyFromLanguageObject(this.props, 'welcomeMessage', defaultWelcomeMsg);
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
