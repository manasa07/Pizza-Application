import React, {Component} from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import SearchPizza from '../../../components/pizza/pizza-box/search-pizza';

describe('pizza search input', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<SearchPizza/>);
    });

    it('should have a div element', () => {
        expect(renderedElement.type()).to.equal('div');
    });
    it('should have the search input class', () => {
        expect(renderedElement.props().className).to.contains('search-pizza');
    });
    it('should have the search placeholder', () => {
        expect(renderedElement.props().children.props.placeholder).to.contains('Search for pizzas...');
    });

});
