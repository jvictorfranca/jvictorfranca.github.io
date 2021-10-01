import { combineReducers } from 'redux';
import languageReducer from './language';

const rootReducer = combineReducers({
  languageReducer,
});

export default rootReducer;
