import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

import LanguageSelector from './components/LanguageSelector';
import { selectLanguage } from './actions';
import { 
  getSelectedLanguage,
  getPropertyFromLanguageObject
} from './functions';

class App extends React.Component {
  constructor(props){
    super(props);

    const isValidPath = this.checkValidPath(window.location.pathname);
    if(!isValidPath) {
      window.location = '/';
    } else if(isValidPath && window.location.pathname !== '/') {
      props.selectLanguage(window.location.pathname);
    }
  }

  checkValidPath = pathname => {
    const pathnameExists = getSelectedLanguage(this.props.languages, pathname);

    return pathnameExists || pathname === '/' ? true : false;
  }

  getWelcomeMsg = () => {
    const defaultWelcomeMsg = this.props.languages[0].welcomeMessage;
    return getPropertyFromLanguageObject(this.props, 'welcomeMessage', defaultWelcomeMsg);
  }

  render = () => {
    return (
      <Container fluid className="my-5">
        <Row className="justify-content-center mb-4">
          <h1 id="welcome-message" className="text-center">{this.getWelcomeMsg()}</h1>
        </Row>
        <Row className="justify-content-center mb-2">
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
