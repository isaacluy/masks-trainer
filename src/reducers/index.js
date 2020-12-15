import { combineReducers } from 'redux';
import { languageListReducer } from './data';

const selectedLanguageReducer = (selectedLangHref = '/', action) => {
    if(action && action.type === 'SELECTED_LANGUAGE') {
        return action.payload;
    }

    return selectedLangHref;
}

const selectedMasksReducer = (masks = [], action) => {
    if(action && action.type === 'ADD_MASK') {
        let newMasks = Array.from(masks);
        newMasks.push(action.payload);
        return newMasks;
    } else if (action && action.type === 'REMOVE_MASK') {
        const index = masks.indexOf(action.payload);
        if (index > -1) {
            const newMasks = Array.from(masks);
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
