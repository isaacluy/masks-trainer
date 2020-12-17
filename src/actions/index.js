export const selectLanguage = obj => {
    return {
        type: 'SELECTED_LANGUAGE',
        payload: obj
    }
}

export const addMask = mask => {
    return {
        type: 'ADD_MASK',
        payload: mask
    }
}

export const removeMask = mask => {
    return {
        type: 'REMOVE_MASK',
        payload: mask
    }
}
