import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux'
import { Modal, Button }from 'react-bootstrap';

class OrderSummary extends Component{

  render() {
    console.log(this.props);
  /**
   * store all ingredients in list
   */
  const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igkey => {
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
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closedModal}>Close</Button>
          <Button variant="primary" onClick={this.props.click}>Save Changes</Button>
        </Modal.Footer>
     </Aux>
);
  }
}

export default OrderSummary;