import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class LanguageSelector extends React.Component {
    render() {
        return (
            <DropdownButton id="language-selection-button" title="Select a Language">
                <Dropdown.Item href="/en">English</Dropdown.Item>
                <Dropdown.Item href="/es">Español</Dropdown.Item>
                <Dropdown.Item href="/pt">Portugues</Dropdown.Item>
                <Dropdown.Item href="/fr">Français</Dropdown.Item>
            </DropdownButton>
        );
    }
}

export default LanguageSelector;
