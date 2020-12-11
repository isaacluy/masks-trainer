import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { connect } from 'react-redux';

class LanguageSelector extends React.Component {
    renderDropdownItems() {
        return this.props.languages.map((language, index) => {
            return (
            <Dropdown.Item href={`/${language.code}`} key={index}>
                {language.text}
            </Dropdown.Item>)
        });
    }
    render() {
        return (
            <DropdownButton id="language-selection-button" title="Select a Language">
                {this.renderDropdownItems()}
            </DropdownButton>
        );
    }
}

const mapStateToProps = state => {
    return { languages: state.languages}
}

export default connect(mapStateToProps)(LanguageSelector);
