import {
    ADD_MASK,
    CREATE_MASKS_NAMES,
    REMOVE_MASK,
    SELECTED_LANGUAGE,
    SET_CURRENT_MASK,
    SET_INTERVAL_LENGTH,
    SET_TIMER_ID,
    TOGGLE_STOPWATCH,
    TOGGLE_TRAINING
} from './types';

export const addMask = mask => {
    return {
        type: ADD_MASK,
        payload: mask
    }
}

export const createMasksNames = masksNames => {
    return {
        type: CREATE_MASKS_NAMES,
        payload: masksNames
    }
}

export const removeMask = mask => {
    return {
        type: REMOVE_MASK,
        payload: mask
    }
}

export const setCurrentMask = maskName => {
    return {
        type: SET_CURRENT_MASK,
        payload: maskName
    }
}

export const setIntervalLength = minutes => {
    return {
        type:SET_INTERVAL_LENGTH,
        payload: minutes
    }
}

export const setLanguage = obj => {
    return {
        type: SELECTED_LANGUAGE,
        payload: obj
    }
}

export const setTimerId = timerId => {
    return {
        type:SET_TIMER_ID,
        payload: timerId
    }
}

export const toggleStopwatch = currentState => {
    return {
        type: TOGGLE_STOPWATCH,
        payload: currentState
    }
}

export const toggleTraining = currentState => {
    return {
        type: TOGGLE_TRAINING,
        payload: currentState
    }
}
