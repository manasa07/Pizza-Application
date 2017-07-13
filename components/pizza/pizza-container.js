import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
// import {NoResultsFound} from './pizza-box/no-results';
import SearchPizza from './pizza-box/search-pizza';
import SortPizza from './pizza-box/sort-pizza';

export default class PizzaContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            pizzaList: [],
            filteredPizza: [],
            showDefaultPizza: true
        };
        this.filterList = this.filterList.bind(this);
        this.showFilteredPizza = this.showFilteredPizza.bind(this);
        this.sortFilteredPizza = this.sortFilteredPizza.bind(this);
        this.sortDefaultPizza = this.sortDefaultPizza.bind(this);
    }

    loadPizzaJson() {
        fetch("./../pizza.json")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    pizzaList: json.pizzas
                });
            });
    }

    filterList(event){
        this.setState({
            showDefaultPizza: false
        })
        var updatedPizzaList = this.state.pizzaList;
        updatedPizzaList = updatedPizzaList.filter(function(pizza){
            return pizza.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
        });
        this.setState({filteredPizza: updatedPizzaList});
    }

    sortDefaultPizza() {
        var sortedDefaultPizza = this.state.pizzaList;

        sortedDefaultPizza = sortedDefaultPizza.sort(function(a, b){
            var pizza_ele1 = a.toLowerCase(), pizza_ele2 = b.toLowerCase();

            return pizza_ele1 === pizza_ele2 ? 0 : pizza_ele1 > pizza_ele2 ? 1 : -1;
        });
        this.setState({
            pizzaList: sortedDefaultPizza.reverse()
        })
    }

    sortFilteredPizza() {
        var sortedFilteredList = this.state.filteredPizza;

        sortedFilteredList = sortedFilteredList.sort(function(a, b){
            var pizza_ele1 = a.toLowerCase(), pizza_ele2 = b.toLowerCase();

            return pizza_ele1 === pizza_ele2 ? 0 : pizza_ele1 > pizza_ele2 ? 1 : -1;
        });
        this.setState({
            filteredPizza: sortedFilteredList.reverse()
        })
    }

    showFilteredPizza() {
        if (this.state.showDefaultPizza) {
            return (
                <div className="pizza-box">
                    <SortPizza onClick={this.sortDefaultPizza}/>
                    <PizzaList Pizzas={this.state.pizzaList}/>
                </div>
            );
        }
        else if(!this.state.showDefaultPizza) {
            return (
                <div className="pizza-box">
                    <SortPizza onClick={this.sortFilteredPizza}/>
                    <PizzaList Pizzas={this.state.filteredPizza}/>
                </div>
            );
        }
    }

    componentDidMount() {
        this.loadPizzaJson();
    }

    render(){
        return (
            <div className="pizza-filter">
                <SearchPizza onChange={this.filterList}/>
                <br />
                {this.showFilteredPizza()}
            </div>
        );
    }
}

class PizzaList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.Pizzas.map(function(pizza) {
                        return <li className="list-group-item" data-category={pizza} key={pizza}>{pizza}</li>
                    })
                }
            </ul>
        )
    }
}
