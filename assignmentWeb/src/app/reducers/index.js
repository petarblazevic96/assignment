import { combineReducers } from 'redux';
import { topicsReducer as topics } from './topicReducer';

export default combineReducers({ topics });