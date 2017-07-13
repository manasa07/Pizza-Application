import React, {Component} from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import Loader from '../components/loader';

describe('Loader Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<Loader/>);
    });


    it('should have loader class', () => {
        expect(renderedElement.props().className).to.equal('pizza-loader');
    });
    it('should contain the loader text', () => {
        expect(renderedElement.props().children).to.equal('Loading...');
    });

});