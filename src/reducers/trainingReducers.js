import { TOGGLE_TRAINING } from '../actions/types';

export const toggleTrainingReducer = (currentState = false, action) => {
    if(action && action.type === TOGGLE_TRAINING) {
        return !currentState;
    }

    return currentState;
}