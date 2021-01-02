import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { getSelectedLanguage } from '../functions';

class LanguageSelector extends React.Component {
    onClick = event => {
        if(event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        const href = event ? event.target.attributes.href.value : '/';
        const newSelectedLanguage = getSelectedLanguage(this.props.languages, href);
        this.props.setLanguage(newSelectedLanguage);
        window.history.pushState({}, '', href);
    }

    renderDropdownItems = () => {
        return this.props.languages.map((language, index) => {
            return (
            <Dropdown.Item
                key={index}
                href={language.href}
                onClick={this.onClick}
            >
                {language.text}
            </Dropdown.Item>)
        });
    }

    getDropdownTitle = () => {
        return this.props.selectedLanguage ? this.props.selectedLanguage.text : 'Select a Language';
    }

    render = () => {
        const dropdownTitle = this.getDropdownTitle();

        return (
            <DropdownButton
                id="language-selection-button"
                title={dropdownTitle}
            >
                {this.renderDropdownItems()}
            </DropdownButton>
        );
    }
}

export default LanguageSelector;
