export const addMask = mask => {
    return {
        type: 'ADD_MASK',
        payload: mask
    }
}

export const createMasksNames = masksNames => {
    return {
        type: 'CREATE_MASKS_NAMES',
        payload: masksNames
    }
}

export const removeMask = mask => {
    return {
        type: 'REMOVE_MASK',
        payload: mask
    }
}

export const selectLanguage = obj => {
    return {
        type: 'SELECTED_LANGUAGE',
        payload: obj
    }
}

export const setCurrentMask = maskName => {
    return {
        type: 'SET_CURRENT_MASK',
        payload: maskName
    }
}

export const toggleTraining = currentState => {
    return {
        type: 'TOGGLE_TRAINING',
        payload: currentState
    }
}
