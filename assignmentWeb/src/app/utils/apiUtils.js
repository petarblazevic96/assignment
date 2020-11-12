import { API_URL } from '../../config';

async function searchRelatedTopics(query) {
    let url = `${API_URL}/api/result/${query}`;

    const res = await fetch(url, {
        mode: 'cors',
        method: 'GET'
    });
    return await res.json();
}

async function saveSearch(search) {
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

async function getHistory() {
    let url = `${API_URL}/api/history/`;

    return fetch(url, {
        mode: 'cors',
        method: 'GET'
    })
        .then(res => res.json());
}

export {
    searchRelatedTopics,
    saveSearch,
    getHistory,
}