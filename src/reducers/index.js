import { combineReducers } from 'redux';
import { languageListReducer } from './data';

const currentMaskReducer = (maskName = '', action) => {
    if(action && action.type === 'SET_CURRENT_MASK') {
        return action.payload;
    }

    return maskName;
}

const selectedLanguageReducer = (selectedLang = null, action) => {
    if(action && action.type === 'SELECTED_LANGUAGE') {
        return action.payload;
    }

    return selectedLang;
}

const selectedMasksReducer = (masks = [], action) => {
    if(action && action.type === 'ADD_MASK') {
        return [...masks, action.payload];
    } else if (action && action.type === 'REMOVE_MASK') {
        const index = masks.indexOf(action.payload);
        if (index > -1) {
            const newMasks = [...masks];
            newMasks.splice(index, 1);
            return newMasks;
        }
    }

    return masks;
}

const selectedMasksNamesReducer = (masksNames = [], action) => {
    if(action && action.type === 'CREATE_MASKS_NAMES') {
        return action.payload;
    }

    return masksNames;
}

const toggleTrainingReducer = (currentState = false, action) => {
    if(action && action.type === 'TOGGLE_TRAINING') {
        return !currentState;
    }

    return currentState;
}

export default combineReducers({
    currentMask: currentMaskReducer,
    languages: languageListReducer,
    masks: selectedMasksReducer,
    masksNames: selectedMasksNamesReducer,
    selectedLanguage: selectedLanguageReducer,
    trainingStarted: toggleTrainingReducer
});
