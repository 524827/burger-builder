import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux'
import axios from 'axios';

class OrderSummary extends Component{



  render() {

  /**
   * store all ingredients in list
   */
  const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igkey => {
      console.log(this.props.ingredients[igkey]);
      return <li key={igkey}><span style={{ textTransform: 'capitalize' }}>{igkey}</span>:{this.props.ingredients[igkey]}</li>
    })

    return (
      < Aux>
      <h3>Your Orders</h3>
      <p>A delicius burger with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
     <p><strong>Total Price:{this.props.price}</strong></p>
     <p>Continue to checkout?</p>
  <div className="modal-footer">
    <button type="button" className="btn btn-secondary" data-dismiss="modal">NO</button>
    <button type="button" className="btn btn-primary" onClick={this.props.click}>CONTINUE</button>
  </div>
     </Aux>
);
  }
}

export default OrderSummary;