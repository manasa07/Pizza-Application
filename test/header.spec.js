import React, {Component} from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import PizzaHeader from '../components/header';

describe('Pizza Header Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<PizzaHeader/>);
    });

    it('should have a h1 element', () => {
        expect(renderedElement.type()).to.equal('h1');
    });
    it('should have the pizza header class', () => {
        expect(renderedElement.props().className).to.equal('pizza-header');
    });
    it('should contain the pizza header text', () => {
        expect(renderedElement.props().children).to.equal('Pizza Hub...');
    });

});
