import React, {Component} from 'react';
import Loader from './loader';
import PizzaHeader from './header';
import PizzaContainer from './pizza/pizza-container';


export default class PizzaApp extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => this.setState({ isLoading: false }), 1500);
    }

    render() {
        const isLoading = this.state.isLoading;
        if (isLoading) {
            return (
                <div className="container loading">
                    <Loader/>
                </div>
            );
        }
        else{
            return (
                <div className="container pizza-app">
                    <div className="row col-sm-12 header">
                        <PizzaHeader/>
                    </div>
                    <div className="row col-sm-9">
                        <PizzaContainer/>
                    </div>
                </div>
            );
        }
    }
}