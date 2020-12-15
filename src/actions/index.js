export const selectLanguage = href => {
    return {
        type: 'SELECTED_LANGUAGE',
        payload: href
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
