import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import {
    arrayDiff,
    buildMasksArray,
    buildMasksIdsArray
} from '../functions';

class MasksSelector extends React.Component {
    onSelectNoneButtonClick = event => {
        if(this.props.masks.length >= 1) {
            this.props.masks.forEach(id => this.props.removeMask(id));
        }
    }

    onSelectAllButtonClick = event => {
        if(this.props.masks.length < 12) {
            const masksIds = buildMasksIdsArray(this.props.selectedLanguage);
            const missingMasks = arrayDiff(masksIds, this.props.masks);
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

    renderSelectAllButton = selectedLanguageObj => {
        return (
            <Form.Row>
                <Col>
                    <Button
                        onClick={this.onSelectAllButtonClick}
                        size="sm"
                        variant="success"
                    >
                        {selectedLanguageObj.selectAll}
                    </Button>
                </Col>
                <Col>
                    <Button
                        onClick={this.onSelectNoneButtonClick}
                        size="sm"
                        variant="danger"
                    >
                        {selectedLanguageObj.selectNone}
                    </Button>
                </Col>
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
                    {this.renderSelectAllButton(this.props.selectedLanguage)}
                </div>
            </Form>
        ) : null;
    }
}

export default MasksSelector;
