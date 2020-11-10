import { combineReducers } from 'redux';
import { topicsReducer as topics } from './appReducer';

export default combineReducers({ topics });