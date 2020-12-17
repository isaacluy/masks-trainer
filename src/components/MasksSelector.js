import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import {
    buildMasksArray,
    getSelectedLanguage
} from '../functions';

class MasksSelector extends React.Component {
    onClick = event => {
        if(event.target.checked) {
            this.props.addMask(event.target.id);
        } else if(!event.target.checked) {
            this.props.removeMask(event.target.id);
        }
    }

    renderMasks = languageObj => {
        const masksArray = buildMasksArray(languageObj);

        return masksArray.map((masksPair, index) => {
            return (
                <Form.Row key={index+1}>
                    <Col>
                        <Form.Check
                            className="m-3"
                            id={`${index+1}-experience`}
                            label={`${masksPair[0]}`}
                            onClick={this.onClick}
                            type="checkbox"
                        />
                    </Col>
                    <Col>
                        <Form.Check
                            className="m-3"
                            id={`${index+1}-innocence`}
                            label={`${masksPair[1]}`}
                            onClick={this.onClick}
                            type="checkbox"
                        />
                    </Col>
                </Form.Row>
            );
        });
    }

    renderMasksSelector = () => {
        const selectedLanguageObj = getSelectedLanguage(this.props.languages, this.props.selectedLanguage);

        return selectedLanguageObj ? this.renderMasks(selectedLanguageObj) : null;
    }

    render = () => {
        return (
            <Form id="masks-selector">
                {this.renderMasksSelector()}
            </Form>
        );
    }
}

export default MasksSelector;
