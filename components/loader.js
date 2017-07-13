import React, {Component} from 'react';

export default class Loader extends React.Component {
    constructor(){
        super();
        this.state = {
            loadingText : 'Loading...'
        }
    }
    render() {
        return (
            <p className="pizza-loader">{this.state.loadingText}</p>
        );
    }
}


