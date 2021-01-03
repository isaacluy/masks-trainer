import { combineReducers } from 'redux';

import { languagesReducer } from './data';
import { selectedLanguageReducer } from './languageReducers';
import {
    currentMaskReducer,
    selectedMasksReducer,
    selectedMasksNamesReducer
} from './masksReducers';
import { toggleStopwatchReducer } from './stopwatchReducers';
import { intervalLengthReducer, timerIdReducer } from './timerReducers';
import { toggleTrainingReducer } from './trainingReducers';

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
