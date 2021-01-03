import { TOGGLE_STOPWATCH } from '../actions/types';

export const toggleStopwatchReducer = (currentState = false, action) => {
    if(action && action.type === TOGGLE_STOPWATCH) {
        return !currentState;
    }

    return currentState;
}