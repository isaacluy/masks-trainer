import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { buildMasksIdsArrayByPairs } from '../utils/masks-utils';

class MasksCheckboxes extends React.Component {
    onCheckboxChange = event => {
        const { addMask, removeMask } = this.props;

        if(event.target.checked) {
            addMask(event.target.id);
        } else if(!event.target.checked) {
            removeMask(event.target.id);
        }
    }

    renderCheckbox = properties => {
        const { checked, id, label } = properties;

        return (
            <Form.Check
                className="m-3"
                checked={checked}
                id={id}
                label={label}
                onChange={this.onCheckboxChange}
                type="checkbox"
            />
        );
    }

    selectedMasksIncludeId = id => {
        const { selectedMasks } = this.props;

        return selectedMasks.includes(id);
    }

    getCheckboxProps = (id, label) => {
        const checked = this.selectedMasksIncludeId(id);

        return { checked, id, label };
    }

    getCheckboxId = (index, maskSide) => {
        return `${index+1}-${maskSide}`;
    }

    render = () => {
        const { selectedLanguage } = this.props;
        const masksIdsArrayByPairs =
            buildMasksIdsArrayByPairs(selectedLanguage);

        return masksIdsArrayByPairs.map((masksPair, index) => {
            const experienceId = this.getCheckboxId(index, 'experience');
            const innocenceId = this.getCheckboxId(index, 'innocence');
            const experienceLabel = `${masksPair[0]}`;
            const innocenceLabel = `${masksPair[1]}`;

            const experienceCheckboxProps =
                this.getCheckboxProps(experienceId, experienceLabel);

            const innocenceCheckbokProps =
                this.getCheckboxProps(innocenceId, innocenceLabel);

            return (
                <Form.Row key={index+1}>
                    <Col>
                        {this.renderCheckbox(experienceCheckboxProps)}
                    </Col>
                    <Col>
                        {this.renderCheckbox(innocenceCheckbokProps)}
                    </Col>
                </Form.Row>
            );
        });
    }
}

export default MasksCheckboxes;