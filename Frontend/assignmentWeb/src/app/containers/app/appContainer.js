import React from 'react'
import { connect } from 'react-redux';
import { History } from '../../components/searchHistory/searchHistory';
import { Topic } from '../../components/topic/topic';
import * as actions from '../../actions/appActions';
import './appContainer.css'

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            initialized: false,
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        if (!this.state.initialized) { 
            this.props.fetchSearchHistory();
            this.setState({initialized: true});
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    search(query) {
        this.setState({value: query});
        this.props.searchQuery(this.state.value);
    }

    handleSubmit(event) {
        this.props.searchQuery(this.state.value);
        this.setState({value: ''})

        event.preventDefault();
    }

    render() {
        const {
            history,
            result,
        } = this.props;
        
        
        const clearResults = (e) => {
            this.props.clear();
            e.preventDefault();
        }

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-3">
                            <div className="form-inline">
                                <input type="text" value={this.state.value} className="form-control" placeholder="Search" onChange={this.handleChange}></input>
                                <button className="btn btn-primary">Submit</button>
                                <button className="btn btn-warning" onClick={clearResults}>Clear</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    { history.length > 0 ? 
                        <div className="col-6">
                            <h3>History</h3>
                            <div className="main">
                                { history.map((historyItem) => { return <div key={historyItem.id} style={{paddingBottom: 5}}><History item={historyItem} search={this.search} /></div> }) }
                            </div>
                        </div>
                        : <div></div> 
                    }
                        <div className="col-6">
                            { result !== undefined && result.topics !== undefined && result.topics.length > 0 ?
                                <div>
                                    <h3>Result</h3>
                                    <div className="main">
                                        <ul>
                                            {result.topics.map((topic) => <Topic key={topic.id} topic={topic}/>)}
                                        </ul>
                                    </div>
                                </div>
                            : <div></div> 
                            }
                        </div>
                    </div>
                
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.topics;
}

export default connect(mapStateToProps, { ...actions })(AppContainer);