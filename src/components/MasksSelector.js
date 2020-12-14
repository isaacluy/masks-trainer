import React from 'react';
import Form from 'react-bootstrap/Form';

import { getSelectedLanguage } from '../functions';

class MasksSelector extends React.Component {
    buildMasksArray = languageObj => {
        const masksArray = [];

        for (let i = 1; i <= 6; i++) {
            if(languageObj.href === '/en') {
                masksArray.push(`${i} ${languageObj.experience}`);
                masksArray.push(`${i} ${languageObj.innocence}`);
            } else {
                masksArray.push(`${languageObj.experience} ${i}`);
                masksArray.push(`${languageObj.innocence} ${i}`);
            }
        }

        return masksArray;
    }
    
    renderMasks = languageObj => {
        const masksArray = this.buildMasksArray(languageObj);

        return masksArray.map((mask, index) => {
            const kind = index % 2 === 0 ? 'experience' : 'innocence';
            const regex = /[0-9]/g;
            const num = mask.match(regex);

            return (
                <Form.Check
                    className="mb-3"
                    id={`${num}-${kind}`}
                    inline
                    key={index}
                    label={`${mask}`}
                    type="checkbox"
                />
            )
        });
    }

    renderMasksSelector = () => {
        const selectedLanguageObj = getSelectedLanguage(this.props.languages, this.props.selectedLanguage);

        return selectedLanguageObj ? this.renderMasks(selectedLanguageObj) : null;
    }

    render = () => {
        return (
            <Form>
                {this.renderMasksSelector()}
            </Form>
        );
    }
}

export default MasksSelector;
