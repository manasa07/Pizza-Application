import React, {Component} from 'react';

export default class SortPizza extends Component{

    constructor(props) {
        super(props);
        this.state = {
            sortText : 'SORT'
        }
    }

    render(){
        return (
            <button className="btn btn-primary pizza-sort" onClick={this.props.onClick}>{this.state.sortText}</button>
        );
    }
}