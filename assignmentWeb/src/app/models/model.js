class Topic {
    constructor(content, url, id) {
        this.url = url;
        this.id = id;
        
        if (content.length > 50) {
            this.firstPart = content.substr(0, 50);
            this.readMoreContent = content;
            this.renderReadMore = true;
        } else {
            this.firstPart = content;
            this.readMoreContent = '';
            this.renderReadMore = false
        }
    }
}

class SearchTopic {
    constructor(query, topics, dateOfSearch, id) {
        this.query = query;
        this.topics = topics;
        this.dateOfSearch = dateOfSearch;
        this.id = id;
    }

    print() {
        return `${this.query} ${this.dateOfSearch}`
    }
}

export {
    Topic,
    SearchTopic,
}