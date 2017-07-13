import React, {Component} from 'react';

export default class PizzaHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            pizzaHeader : 'Pizza Hub...'
        }
    }
    render() {
        return (
            <h1 className="pizza-header">{this.state.pizzaHeader}</h1>
        );
    }
}

