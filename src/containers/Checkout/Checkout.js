import React, { Component } from 'react';
import { connect} from 'react-redux';

import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactDetails from '../Checkout/ContactDetails/ContactDetails'


class Checkout extends Component {

/**
 * @function handleCotantactDetails - function for navigate to contact details component
 */
  handleCotantactDetails() {
    console.log(this.props);
    this.props.history.push({
      pathname:this.props.match.path+'/contact-details'
    })
  }

  render() {
    const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null
    return (
      <div>
        {purchasedRedirect}
        <CheckoutSummary ingredients={this.props.ings} click={()=>this.handleCotantactDetails()}/>
        <Route path={this.props.match.path + '/contact-details'}
        component={ContactDetails} />
      </div>
  );
}
}

// map state to props
const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    purchased: state.orders.purchased
  }
}

export default connect(mapStateToProps)(Checkout);