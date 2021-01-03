export const getPropertyFromLanguageObject = params => {
    const {
        selectedLanguage,
        propertyName,
        defaultPropertyValue
    } = params;

    return !selectedLanguage ?
            defaultPropertyValue : selectedLanguage[propertyName];
}

export const getSelectedLanguage = (languages, href) => {
    return languages.find(language => language.href === href);
}