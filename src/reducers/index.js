import { combineReducers } from 'redux';
import { languageListReducer } from './data';

const selectedLanguageReducer = (selectedLangHref = '/', action) => {
    if(action && action.type === 'SELECTED_LANGUAGE') {
        return action.payload;
    }

    return selectedLangHref;
};

export default combineReducers({
    languages: languageListReducer,
    selectedLanguage: selectedLanguageReducer
});
