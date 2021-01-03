import {
    SET_INTERVAL_LENGTH,
    SET_TIMER_ID
} from '../actions/types';

export const intervalLengthReducer = (minutes = 3, action) => {
    if(action && action.typer === SET_INTERVAL_LENGTH) {
        return action.payload;
    }

    return minutes;
}

export const timerIdReducer = (timerId = null, action) => {
    if(action && action.type === SET_TIMER_ID) {
        return action.payload;
    }

    return timerId;
}