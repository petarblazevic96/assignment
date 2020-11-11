import { Dispatch } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { SearchTopic, Topic } from '../models/model';
import { 
    searchRelatedTopics, 
    saveSearch, 
    getHistory,
} from '../utils/apiUtils';
import * as types from '../utils/actionTypes';

const fetchSearchHistory = () => async (dispatch) => {

    let history = await Promise.resolve(getHistory());

    let historyItems = history.map((item) => {
        let topics = item.topics.map((topic) => {
            return new Topic(topic.title, topic.url, uuidv4());
        });

        let searchTopic = new SearchTopic(item.query, topics, item.dateOfSearch, uuidv4())

        return searchTopic;
    });

    dispatch({
        type: types.INIT,
        payload: historyItems
    });
};

const searchQuery = (query) => async (dispatch) => {
    
    let encodedQuery = encodeURIComponent(query);
    
    let result = await Promise.resolve(searchRelatedTopics(encodeURIComponent(encodedQuery)));
    let topics = [];
    
    topics = result.map((topic) => {
        return new Topic(topic.title, topic.url, uuidv4());
    });

    let dateOfSearch = new Date();
    let localDate = dateOfSearch.toLocaleString("hr-HR");

    let searchTopic = new SearchTopic(query, topics, localDate, uuidv4());
    
    let forHistorySave = {
        query: query,
        dateOfSearch: localDate,
        topics: result.map((topic) => { return {
            title: topic.title,
            url: topic.url,
        }})
    };

    saveSearch(forHistorySave);

    dispatch({
        type: types.SEARCH,
        payload: [searchTopic]
    });
};

const clear = () => (dispatch) => {
    dispatch({
        type: types.CLEAR,
        payload: null
    });
}

export {
    fetchSearchHistory,
    searchQuery,
    clear,
}