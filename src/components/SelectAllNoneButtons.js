import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import {
    arrayDifference,
    buildMasksIdsArray
} from '../functions';

class SelectAllNoneButtons extends React.Component {
    onSelectNoneButtonClick = () => {
        const { removeMask, selectedMasks } = this.props;

        if(selectedMasks.length >= 1) {
            selectedMasks.forEach(id => removeMask(id));
        }
    }

    onSelectAllButtonClick = () => {
        const { addMask, selectedLanguage, selectedMasks } = this.props;

        if(selectedMasks.length < 12) {
            const allMasksIdsArray = buildMasksIdsArray(selectedLanguage);
            const missingMasksIdsArray =
                arrayDifference(allMasksIdsArray, selectedMasks);

            missingMasksIdsArray.forEach(id => addMask(id));
        }
    }

    renderButton = properties => {
        const {label, onClick, variant } = properties;

        return (
            <Button
                className="w-100"
                onClick={onClick}
                size="sm"
                variant={variant}
            >
                {label}
            </Button>
        );
    }

    getButtonProps = (label, onClick, variant) => {
        return { label, onClick, variant };
    }

    render = () => {
        const { selectAll, selectNone } = this.props.selectedLanguage;
        const selectAllButtonProps =
            this.getButtonProps(selectAll, this.onSelectAllButtonClick, "success");
        const selectNoneButtonProps =
            this.getButtonProps(selectNone, this.onSelectNoneButtonClick, "danger");

        return (
            <Form.Row>
                <div className="d-flex container">
                    <Col>
                        {this.renderButton(selectAllButtonProps)}
                    </Col>
                    <Col>
                        {this.renderButton(selectNoneButtonProps)}
                    </Col>
                </div>
            </Form.Row>
        );
    }
}

export default SelectAllNoneButtons;