import React from 'react';
import Container from 'react-bootstrap/Container';
import LanguageSelector from './components/language-selector';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <h1 className="text-center">Welcome to the Mask Trainer</h1>
      </Row>
      <Row className="justify-content-md-center">
        <LanguageSelector />
      </Row>
    </Container>
  );
}

export default App;
