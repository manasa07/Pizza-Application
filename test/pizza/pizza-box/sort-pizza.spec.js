import React, {Component} from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import SortPizza from '../../../components/pizza/pizza-box/sort-pizza';

describe('pizza sort button', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<SortPizza/>);
    });

    it('should have a button', () => {
        expect(renderedElement.type()).to.equal('button');
    });
    it('should have the sort button class', () => {
        expect(renderedElement.props().className).to.contain('pizza-sort');
    });
    it('should contain sort text', () => {
        expect(renderedElement.props().children).to.equal('SORT');
    });
});