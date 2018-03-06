import { combineReducers } from 'redux';
import phoneBookReducer from './phonebookReducer';

const rootReducer = combineReducers({ phoneBookReducer });

export default rootReducer;
