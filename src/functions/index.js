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

export const getPropertyFromLanguageObject = 
    (currentlySelectedLanguage, property, defaultPropertyValue) => {
        return !currentlySelectedLanguage ? defaultPropertyValue : currentlySelectedLanguage[property];
    }

export const getRandomMask = masksNames => {
    const numberOfMasks = masksNames.length;
    const randomMaskIndex = randomIntFromInterval(0, numberOfMasks-1);

    return masksNames[randomMaskIndex];
}

export const getSelectedLanguage = (languages, href) => {
    return languages.find(language => language.href === href);
}

export const maskNameConverter = (maskId, selectedLanguage) => {
    const number = maskId.slice(0,1);
    const type = maskId.slice(2);
    let maskName = '';

    if (selectedLanguage.href === '/en') {
        maskName = `${number} ${selectedLanguage[type]}`;
    } else {
        maskName = `${selectedLanguage[type]} ${number}`;
    }

    return maskName;
}

export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
}
