import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { connect } from 'react-redux';

class LanguageSelector extends React.Component {
    onClick(event) {
        event.preventDefault();

        const href = event ? event.target.attributes.href.value : '/';
        
        window.history.pushState({}, '', href);
    }

    renderDropdownItems() {
        return this.props.languages.map((language, index) => {
            return (
            <Dropdown.Item onClick={this.onClick} href={`/${language.code}`} key={index}>
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
