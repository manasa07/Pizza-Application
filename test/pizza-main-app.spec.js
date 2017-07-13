/**
 * Created by manasa.e on 7/13/2017.
 */
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import PizzaApp from '../components/pizza-main-app';
import {Loader} from '../components/loader';
import {PizzaHeader} from '../components/header';
import {PizzaContainer} from '../components/pizza/pizza-container'

describe('PizzaApp Component', () => {
    let renderedPizzaElement;

    beforeEach(() => {
        renderedPizzaElement = shallow(<PizzaApp />);
    });

    it('should contain a loader class', () => {
        expect(renderedPizzaElement.props().className).to.equal('container loading')
    });
    it('should show the loader component while mounting', () => {
        expect(renderedPizzaElement.props().type).to.equal(Loader);
    });

    describe('when the component gets mounted', () => {
        beforeEach(() => {
            renderedPizzaElement.setState({
                isLoading: false
            });
        });
        it('should not show the loader component', () => {
            expect(renderedPizzaElement.props()).not.contains(Loader);
        });
        it('should contain a pizza-app class', () => {
            expect(renderedPizzaElement.props().className).to.equal('container pizza-app')
        });
        it('should contain PizzaHeader component', () => {
            expect(renderedPizzaElement.props().children[0].props.type).to.equal(PizzaHeader);
        });
        it('should contain PizzaContainer component', () => {
            expect(renderedPizzaElement.props().children[1].props.type).to.equal(PizzaContainer);
        });
    });

});