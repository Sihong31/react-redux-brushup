import { combineReducers } from 'redux';
import puppyReducer from './puppyReducer';

export default combineReducers({
    puppies: puppyReducer
});