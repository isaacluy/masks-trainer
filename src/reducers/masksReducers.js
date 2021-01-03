import {
    ADD_MASK,
    ADD_SELECTED_MASKS_NAMES,
    REMOVE_MASK,
    SET_CURRENT_MASK
} from '../actions/types';

export const currentMaskReducer = (maskName = '', action) => {
    if(action && action.type === SET_CURRENT_MASK) {
        return action.payload;
    }

    return maskName;
}

export const selectedMasksReducer = (selectedMasks = [], action) => {
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

export const selectedMasksNamesReducer = (selectedMasksNames = [], action) => {
    if(action && action.type === ADD_SELECTED_MASKS_NAMES) {
        return action.payload;
    }

    return selectedMasksNames;
}