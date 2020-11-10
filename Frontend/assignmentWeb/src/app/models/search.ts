export class Topic {
    firstPart: string;
    readMoreContent: string;
    url: string;
    id: string;
    renderReadMore: boolean;

    constructor(content: string, url: string, id: string) {
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

export class SearchTopic {
    query: string;
    topics: Topic[];
    dateOfSearch: string;
    id: string;

    constructor(query: string, topics: Topic[], dateOfSearch: string, id: string) {
        this.query = query;
        this.topics = topics;
        this.dateOfSearch = dateOfSearch;
        this.id = id;
    }

    print() {
        return `${this.query} ${this.dateOfSearch}`
    }
}