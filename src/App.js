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
    const defaultWelcomeMsg = this.props.languages[0].welcomeMessage;
    const currentlySelectedLanguage = this.props.languages.find(language => language.href === this.props.selectedLanguage);

    return !currentlySelectedLanguage ? defaultWelcomeMsg : currentlySelectedLanguage.welcomeMessage;
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
