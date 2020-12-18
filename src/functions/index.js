export const arrayDiff = (a1, a2) => {
    return a1.filter(element => a2.indexOf(element) === -1);
}

export const buildMasksArray = languageObj => {
    const masksArray = [];

    if(languageObj) {
        for (let i = 1; i <= 6; i++) {
            const helperArray = [];
            
            if(languageObj.href === '/en') {
                helperArray.push(`${i} ${languageObj.experience}`, `${i} ${languageObj.innocence}`);
            } else {
                helperArray.push(`${languageObj.experience} ${i}`, `${languageObj.innocence} ${i}`);
            }
            masksArray.push(helperArray);
        }
    }

    return masksArray;
}

export const buildMasksIdsArray = languageObj => {
    let masksIdsArray = [];

    if(languageObj) {
        for (let i = 1; i <= 6; i++) {
            masksIdsArray = [...masksIdsArray, `${i}-experience`, `${i}-innocence`];
        }
    }

    return masksIdsArray;
}

export const getSelectedLanguage = (languages, href) => {
    return languages.find(language => language.href === href);
}

export const getPropertyFromLanguageObject = 
    (currentlySelectedLanguage, property, defaultPropertyValue) => {
        return !currentlySelectedLanguage ? defaultPropertyValue : currentlySelectedLanguage[property];
    }
