import React from 'react';
import Form from 'react-bootstrap/Form';

import MasksCheckboxes from './MasksCheckboxes';
import SelectAllNoneButtons from './SelectAllNoneButtons';

class MasksSelector extends React.Component {
    render = () => {
        const {
            addMask,
            removeMask,
            selectedLanguage,
            selectedMasks
        } = this.props;

        if(!selectedLanguage) {
            return null;
        }

        return (
            <Form id="masks-selector">
                <div>
                    <MasksCheckboxes
                        addMask={addMask}
                        removeMask={removeMask}
                        selectedLanguage={selectedLanguage}
                        selectedMasks={selectedMasks}
                    />
                </div>
                <div>
                    <SelectAllNoneButtons
                        addMask={addMask}
                        removeMask={removeMask}
                        selectedLanguage={selectedLanguage}
                        selectedMasks={selectedMasks}
                    />
                </div>
            </Form>
        );
    }
}

export default MasksSelector;