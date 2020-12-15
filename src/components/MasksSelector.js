import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { getSelectedLanguage } from '../functions';

class MasksSelector extends React.Component {
    onClick = event => {
        if(event.target.checked) {
            this.props.addMask(event.target.id);
        } else if(!event.target.checked) {
            this.props.removeMask(event.target.id);
        }
    }

    buildMasksArray = languageObj => {
        const masksArray = [];

        for (let i = 1; i <= 6; i++) {
            const helperArray = [];
            
            if(languageObj.href === '/en') {
                helperArray.push(`${i} ${languageObj.experience}`, `${i} ${languageObj.innocence}`);
            } else {
                helperArray.push(`${languageObj.experience} ${i}`, `${languageObj.innocence} ${i}`);
            }
            masksArray.push(helperArray);
        }

        return masksArray;
    }
    
    renderMasks = languageObj => {
        const masksArray = this.buildMasksArray(languageObj);

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
