import { combineReducers } from 'redux';

import {
    ADD_MASK,
    ADD_SELECTED_MASKS_NAMES,
    REMOVE_MASK,
    SELECTED_LANGUAGE,
    SET_CURRENT_MASK,
    SET_INTERVAL_LENGTH,
    SET_TIMER_ID,
    TOGGLE_STOPWATCH,
    TOGGLE_TRAINING
} from '../actions/types';
import { languagesReducer } from './data';

const currentMaskReducer = (maskName = '', action) => {
    if(action && action.type === SET_CURRENT_MASK) {
        return action.payload;
    }

    return maskName;
}

const intervalLengthReducer = (minutes = 3, action) => {
    if(action && action.typer === SET_INTERVAL_LENGTH) {
        return action.payload;
    }

    return minutes;
}

const selectedLanguageReducer = (selectedLang = null, action) => {
    if(action && action.type === SELECTED_LANGUAGE) {
        return action.payload;
    }

    return selectedLang;
}

const selectedMasksReducer = (selectedMasks = [], action) => {
    if(action && action.type === ADD_MASK) {
        return [...selectedMasks, action.payload];
    } else if (action && action.type === REMOVE_MASK) {
        const index = selectedMasks.indexOf(action.payload);
        if (index > -1) {
            const newMasks = [...selectedMasks];
            newMasks.splice(index, 1);
            return newMasks;
        }
    }

    return selectedMasks;
}

const selectedMasksNamesReducer = (selectedMasksNames = [], action) => {
    if(action && action.type === ADD_SELECTED_MASKS_NAMES) {
        return action.payload;
    }

    return selectedMasksNames;
}

const timerIdReducer = (timerId = null, action) => {
    if(action && action.type === SET_TIMER_ID) {
        return action.payload;
    }

    return timerId;
}

const toggleStopwatchReducer = (currentState = false, action) => {
    if(action && action.type === TOGGLE_STOPWATCH) {
        return !currentState;
    }

    return currentState;
}

const toggleTrainingReducer = (currentState = false, action) => {
    if(action && action.type === TOGGLE_TRAINING) {
        return !currentState;
    }

    return currentState;
}

export default combineReducers({
    currentMask: currentMaskReducer,
    intervalLength: intervalLengthReducer,
    languages: languagesReducer,
    selectedMasksNames: selectedMasksNamesReducer,
    selectedLanguage: selectedLanguageReducer,
    selectedMasks: selectedMasksReducer,
    stopwatchStarted: toggleStopwatchReducer,
    timerId: timerIdReducer,
    trainingStarted: toggleTrainingReducer
});
