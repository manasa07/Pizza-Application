import React, {Component} from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import Chance from 'chance';
import sinon from 'sinon';

import SearchPizza from '../../components/pizza/pizza-box/search-pizza';
import SortPizza from '../../components/pizza/pizza-box/sort-pizza';
import PizzaContainer from '../../components/pizza/pizza-container';

const chance = new Chance();

describe('pizza container component', () => {
    let renderedElement, testPizza, sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        testPizza = Object.freeze({
            pizzas: ['cheese','vegetable','marconi'],
            pizzaList: [],
            filteredPizza: sandbox.stub(),
            showDefaultPizza: true
        });
        renderedElement = shallow(<PizzaContainer {...testPizza}/>);
        renderedElement.setState({
            pizzaList: testPizza.pizzas
        });
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should have a SearchBox componenet', () => {
        expect(renderedElement.props().children[0].type).to.equal(SearchPizza);
    });

    it('should have a div element comprising SortPizza and PizzaList', () => {
        expect(renderedElement.props().children[2].type).to.equal('div');
        expect(renderedElement.props().children[2].props.className).to.equal('pizza-box');
        expect(renderedElement.props().children[2].props.children[0].type).to.equal(SortPizza);
    });

    it('should fetch the pizza list', () => {
        expect(renderedElement.state('pizzaList')).to.equal(['cheese','vegetable','marconi']);
    });

    it('should filter according to the user input', () => {
        const searchBox = renderedElement.props().children[0];
        const filteredItem = ['cheese'];
        searchBox.props.onChange({target: {value: 'che'}});

        expect(renderedElement.state('filteredPizza')).to.contains(filteredItem);
    });

    it('should sort default pizzas in reverse alphabetical order', () => {
        const sortBox = renderedElement.props().children[2].props.children[0];

        const sortedList = ['vegetable', 'marconi', 'cheese'];

        sortBox.props.onClick();
        expect(renderedElement.state('pizzaList')).to.equal(sortedList);
    });

});