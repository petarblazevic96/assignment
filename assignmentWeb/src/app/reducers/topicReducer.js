import { SearchTopic } from '../models/model';
import * as types from '../utils/actionTypes';

const initialState = { 
    history: [],
    result: SearchTopic,
};

export function topicsReducer(state = initialState, action) {
    switch(action.type) {
        case types.INIT: {
            let topics = action.payload;
            
            return {
                ...state,
                history: topics,
                result: undefined,
            }
        }
        case types.SEARCH: {
            let topics = action.payload;
            
            return {
                ...state,
                history: [
                    ...state.history, 
                    ...topics,
                ],
                result: topics[0],
            }
        }
        case types.CLEAR: {
            return {
                ...state,
                result: undefined, 
            }
        }
        default: {
            return state;
        }
    }
}