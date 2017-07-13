import React, {Component} from 'react';

export default class SearchPizza extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="col-sm-9 search-pizza">
                <input className="form-control"
                    type="text"
                    placeholder="Search for pizzas..."
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}