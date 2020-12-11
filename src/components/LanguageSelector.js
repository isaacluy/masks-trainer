import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { connect } from 'react-redux';

import { selectLanguage } from '../actions';

class LanguageSelector extends React.Component {
    getSelectedLanguageText = () => {
        return this.props.languages.map(language => {
            if(this.props.selectedLanguage === language.href) {
                return language.text;
            }
        });
    }

    getDropdownTitle = () => {
        if(this.props.selectedLanguage === '/') {
            return 'Select a Language'; 
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
