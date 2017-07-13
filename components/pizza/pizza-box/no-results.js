import React, {Component} from 'react';

export default class NoResultsFound extends Component{

    constructor() {
        super();
        this.state= {
            noResults : 'No Results Found'
        };
    }
    render() {
        return(
            <div className="no-results">
                <h3>{this.state.noResults}</h3>
            </div>
        );
    }
}
