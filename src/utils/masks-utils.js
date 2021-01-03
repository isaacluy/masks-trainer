import { randomIntFromInterval } from './index';

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

export const getRandomMask = selectedMasksNames => {
    const numberOfMasks = selectedMasksNames.length;
    const randomMaskIndex = randomIntFromInterval(0, numberOfMasks-1);

    return selectedMasksNames[randomMaskIndex];
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
