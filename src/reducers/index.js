import { combineReducers } from 'redux';
import { languageListReducer } from './data';

const selectedLanguageReducer = (selectedLangCode = null, action) => {
    if(action && action.type === 'SELECTED_LANGUAGE') {
        return action.payload;
    }

    return selectedLangCode;
};

export default combineReducers({
    languages: languageListReducer,
    selectedLanguage: selectedLanguageReducer
});
