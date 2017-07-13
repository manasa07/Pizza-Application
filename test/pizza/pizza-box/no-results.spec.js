import React, {Component} from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import NoResultsFound from '../../../components/pizza/pizza-box/no-results';

describe('No Results Found Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<NoResultsFound/>);
    });

    it('should have a div element', () => {
        expect(renderedElement.type()).to.equal('div');
    });
    it('should have the component class', () => {
        expect(renderedElement.props().className).to.equal('no-results');
    });
    it('should contain the no result text', () => {
        expect(renderedElement.props().children.props.children).to.equal('No Results Found');
    });

});