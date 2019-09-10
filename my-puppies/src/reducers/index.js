import { combineReducers } from 'redux';
import puppyReducer from './puppyReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    puppies: puppyReducer,
    form: formReducer
});