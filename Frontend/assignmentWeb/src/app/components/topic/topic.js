import React from 'react'

export class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {readMore: false};
    }

    render() {
        const {
            topic,
        } = this.props;
        
        const toggleReadMore = (e) => {
            this.setState({readMore: !this.state.readMore});
            e.preventDefault();
        }

        const renderReadMoreButton = () => {
            const text = this.state.readMore ? "Read less" : "Read more";

            return (
                <button className="btn btn-warning btn-sm" onClick={toggleReadMore}>{text}</button>
            );
        }

        const content = this.state.readMore ? topic.readMoreContent : topic.firstPart;

        return (
            <li className="list-group-item">
                {content}
                <br></br>
                <a className="btn btn-secondary btn-sm" href={topic.url} target="_blank" rel="noreferrer">Visit topic</a>
                {topic.renderReadMore && renderReadMoreButton()}
            </li>
        );
    }
};
