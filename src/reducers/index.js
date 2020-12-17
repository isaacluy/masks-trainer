import { combineReducers } from 'redux';
import { languageListReducer } from './data';

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

export default combineReducers({
    languages: languageListReducer,
    masks: selectedMasksReducer,
    selectedLanguage: selectedLanguageReducer
});
