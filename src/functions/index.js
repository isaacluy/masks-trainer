export const getSelectedLanguage = (languages, href) => {
    return languages.find(language => language.href === href);
}

export const getPropertyFromLanguageObject = 
    (currentlySelectedLanguage, property, defaultPropertyValue) => {
        return !currentlySelectedLanguage ? defaultPropertyValue : currentlySelectedLanguage[property];
    }

export const buildMasksArray = languageObj => {
    const masksArray = [];

    for (let i = 1; i <= 6; i++) {
        const helperArray = [];
        
        if(languageObj.href === '/en') {
            helperArray.push(`${i} ${languageObj.experience}`, `${i} ${languageObj.innocence}`);
        } else {
            helperArray.push(`${languageObj.experience} ${i}`, `${languageObj.innocence} ${i}`);
        }
        masksArray.push(helperArray);
    }

    return masksArray;
}