import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import {
    arrayDifference,
    buildMasksArray,
    buildMasksIdsArray
} from '../functions';

class MasksSelector extends React.Component {
    onSelectNoneButtonClick = () => {
        if(this.props.masks.length >= 1) {
            this.props.masks.forEach(id => this.props.removeMask(id));
        }
    }

    onSelectAllButtonClick = () => {
        if(this.props.masks.length < 12) {
            const masksIds = buildMasksIdsArray(this.props.selectedLanguage);
            const missingMasks = arrayDifference(masksIds, this.props.masks);
            missingMasks.forEach(id => this.props.addMask(id));
        }
    }

    onCheckboxChange = event => {
        if(event.target.checked) {
            this.props.addMask(event.target.id);
        } else if(!event.target.checked) {
            this.props.removeMask(event.target.id);
        }
    }

    renderSelectButtons = selectedLanguageObject => {
        return (
            <Form.Row>
                <div className="d-flex container">
                    <Col>
                        <Button
                            className="w-100"
                            onClick={this.onSelectAllButtonClick}
                            size="sm"
                            variant="success"
                        >
                            {selectedLanguageObject.selectAll}
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            className="w-100"
                            onClick={this.onSelectNoneButtonClick}
                            size="sm"
                            variant="danger"
                        >
                            {selectedLanguageObject.selectNone}
                        </Button>
                    </Col>
                </div>
            </Form.Row>
        );
    }

    renderMasks = masksArray => {
        return masksArray.map((masksPair, index) => {
            return (
                <Form.Row key={index+1}>
                    <Col>
                        <Form.Check
                            className="m-3"
                            checked={this.props.masks.includes(`${index+1}-experience`)}
                            id={`${index+1}-experience`}
                            label={`${masksPair[0]}`}
                            onChange={this.onCheckboxChange}
                            type="checkbox"
                        />
                    </Col>
                    <Col>
                        <Form.Check
                            className="m-3"
                            checked={this.props.masks.includes(`${index+1}-innocence`)}
                            id={`${index+1}-innocence`}
                            label={`${masksPair[1]}`}
                            onChange={this.onCheckboxChange}
                            type="checkbox"
                        />
                    </Col>
                </Form.Row>
            );
        });
    }

    render = () => {
        const masksArray = buildMasksArray(this.props.selectedLanguage);

        return this.props.selectedLanguage ? (
            <Form id="masks-selector">
                <div>
                    {this.renderMasks(masksArray)}
                </div>
                <div>
                    {this.renderSelectButtons(this.props.selectedLanguage)}
                </div>
            </Form>
        ) : null;
    }
}

export default MasksSelector;
