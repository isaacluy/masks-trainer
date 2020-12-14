export const getPropertyFromLanguageObject = 
    (props, property, defaultMessage) => {
        const defaultMsg = defaultMessage ? defaultMessage : '';
        const currentlySelectedLanguage = props.languages.find(language => props.selectedLanguage === language.href);

        return !currentlySelectedLanguage ? defaultMsg : currentlySelectedLanguage[property];
    }