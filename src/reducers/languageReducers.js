import { SELECTED_LANGUAGE } from '../actions/types';

export const selectedLanguageReducer = (selectedLang = null, action) => {
    if(action && action.type === SELECTED_LANGUAGE) {
        return action.payload;
    }

    return selectedLang;
}
