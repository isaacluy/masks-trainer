import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import {
    getSelectedLanguage,
    getTargetHrefValue,
    isControlKeyPressed,
    navigateToPathname
} from '../functions';

class LanguageSelector extends React.Component {
    setLanguageAndNavigate = event => {
        const pathname = getTargetHrefValue(event);
        const { languages, setLanguage } = this.props;
        const newSelectedLanguage = getSelectedLanguage(languages, pathname);

        setLanguage(newSelectedLanguage);
        navigateToPathname(pathname);
    }

    onClick = event => {
        if(isControlKeyPressed(event)) {
            return;
        }

        event.preventDefault();
        this.setLanguageAndNavigate(event);
    }

    renderDropdownItem = (language, index) => {
        return (
            <Dropdown.Item
                key={index}
                href={language.href}
                onClick={this.onClick}
            >
                {language.text}
            </Dropdown.Item>
        );
    }

    renderDropdownItems = () => {
        const { languages } = this.props;

        return languages.map(this.renderDropdownItem);
    }

    renderDropdown = dropdownTitle => {
        return (
            <DropdownButton
                id="language-selection-button"
                title={dropdownTitle}
            >
                {this.renderDropdownItems()}
            </DropdownButton>
        );
    }

    getDropdownTitle = () => {
        return this.props.selectedLanguage ?
            this.props.selectedLanguage.text : 'Select a Language';
    }

    render = () => {
        const dropdownTitle = this.getDropdownTitle();

        return this.renderDropdown(dropdownTitle);
    }
}

export default LanguageSelector;
