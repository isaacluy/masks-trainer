import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { connect } from 'react-redux';

import { selectLanguage } from '../actions';

class LanguageSelector extends React.Component {
    getSelectedLanguageText = () => {
        let currentlySelectedLanguage = this.props.languages.find(language => this.props.selectedLanguage === language.href);

        return currentlySelectedLanguage.text;
    }

    getDropdownTitle = () => {
        const defaultDropdownTitle = 'Select a Language';

        if(this.props.selectedLanguage === '/') {
            return defaultDropdownTitle; 
        }

        return this.getSelectedLanguageText();
    }

    onClick = event => {
        event.preventDefault();

        const href = event ? event.target.attributes.href.value : '/';

        this.props.selectLanguage(href);
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

const mapStateToProps = state => {
    return { 
        languages: state.languages,
        selectedLanguage: state.selectedLanguage
    }
}

export default connect(
    mapStateToProps,
    { selectLanguage }
)(LanguageSelector);
