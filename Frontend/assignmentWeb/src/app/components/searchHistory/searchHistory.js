import React from 'react'
import { Topic } from '../topic/topic';

import './searchHistory.css';

export class History extends React.Component {
   render() {
        const {
            item,
        } = this.props;
        
        function expand(e) {
            var trgt = e.target;
            trgt.parentElement.parentElement.querySelector(".nested").classList.toggle("showItem");
        }

        return (
            <div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item active">
                        <p>{item.print()}</p>
                        <button className="btn btn-success btn-sm" onClick={() => this.props.search(item.query)}>Repeat search</button>
                        <button className="btn btn-info btn-sm" onClick={(e) => expand(e)}>Expand topics</button>
                    </li>
                    <ul className="nested">
                        {item.topics.map((topic) => <Topic key={topic.id} topic={topic}/>)}
                    </ul>
                </ul>
            </div>
        );
    }
};

