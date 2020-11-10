import { API_URL } from './config';

export function searchRelatedTopics(query:string) {
    let url = `${API_URL}/api/result/${query}`;

    return fetch(url, { 
        mode: 'cors',
        method: 'GET'
    })
        .then(res => res.json());
}

export function saveSearch(search: any) {
    let url = `${API_URL}/api/history/`;
    
    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(search)
    })
        .then(res => res.json());
}

export function getHistory() {
    let url = `${API_URL}/api/history/`;

    return fetch(url, {
        mode: 'cors',
        method: 'GET'
    })
        .then(res => res.json());
}