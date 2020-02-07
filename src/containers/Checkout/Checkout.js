import React, { Component } from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactDetails from '../Checkout/ContactDetails/ContactDetails'


class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  }

  UNSAFE_componentWillMount() {

    const query = new URLSearchParams(this.props.location.search);
    console.log(this.props);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }

    }
    this.setState({
      ingredients: ingredients,
      totalPrice: price
    });
  }

  handleCotantactDetails() {
    console.log(this.props);
    this.props.history.push({
      pathname:this.props.match.path+'/contact-details'
    })
  }

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} click={()=>this.handleCotantactDetails()}/>
        <Route path={this.props.match.path + '/contact-details'} render={() => (<ContactDetails ingredients={this.state.ingredients} price={this.state.totalPrice}/>)} ></Route>
      </div>
  );
}
}

export default Checkout