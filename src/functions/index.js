export const arrayDifference = (a1, a2) => {
    return a1.filter(element => a2.indexOf(element) === -1);
}

export const buildMasksIdsArrayByPairs = languageObject => {
    const masksArray = [];

    if(languageObject) {
        for (let i = 1; i <= 6; i++) {
            const helperArray = [];
            
            if(languageObject.href === '/en') {
                helperArray.push(`${i} ${languageObject.experience}`, `${i} ${languageObject.innocence}`);
            } else {
                helperArray.push(`${languageObject.experience} ${i}`, `${languageObject.innocence} ${i}`);
            }
            masksArray.push(helperArray);
        }
    }

    return masksArray;
}

export const buildMasksIdsArray = languageObject => {
    let masksIdsArray = [];

    if(languageObject) {
        for (let i = 1; i <= 6; i++) {
            masksIdsArray = [...masksIdsArray, `${i}-experience`, `${i}-innocence`];
        }
    }

    return masksIdsArray;
}

export const convertMinToMs = minutes => {
    return ((minutes*60)*1000);
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

export const getTargetHrefValue = event => {
    return event ? event.target.attributes.href.value : '/';
}

export const isControlKeyPressed = event => {
    return event.metaKey || event.ctrlKey;
}

export const isHomePath = pathname => {
    return pathname === '/';
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

export const navigateToHomePath = () => {
    window.location = '/';
}

export const navigateToPathname = pathname => {
    window.history.pushState({}, '', pathname);
}

export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
}
