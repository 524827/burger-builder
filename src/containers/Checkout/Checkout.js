import React, { Component } from 'react';
import { connect} from 'react-redux';

import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactDetails from '../Checkout/ContactDetails/ContactDetails'


class Checkout extends Component {


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
        <CheckoutSummary ingredients={this.props.ings} click={()=>this.handleCotantactDetails()}/>
        <Route path={this.props.match.path + '/contact-details'}
        component={ContactDetails} />
      </div>
  );
}
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice
  }
}

export default connect(mapStateToProps)(Checkout);