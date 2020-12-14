import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { connect } from 'react-redux';

import { selectLanguage } from '../actions';
import { getPropertyFromLanguageObject } from '../functions';

class LanguageSelector extends React.Component {
    getDropdownTitle = () => { 
        return getPropertyFromLanguageObject(this.props, 'text', 'Select a Lang');
    }

    onClick = event => {
        if(event.metaKey || event.ctrlKey) {
            return;
        }

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
