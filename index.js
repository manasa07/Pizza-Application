import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import PizzaApp from './components/pizza-main-app'

ReactDOM.render(<PizzaApp />, document.querySelector('.content'));