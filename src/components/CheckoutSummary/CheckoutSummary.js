import React from 'react';
import classes from './CheckoutSummary.css'
import Burger from '../Burger/Burger';
import { Button }from 'react-bootstrap';

const checkoutSummary = (props) => {
  console.log(props);
  return (
    <div className={classes.OrderSummary}>
      <h1>We hope it testes well!</h1>
      <div style={{ width: '400px', margin: 'auto' }}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button  style={{marginRight:'10px'}} variant="secondary" onClick={props.closedModal}>Cancel</Button>
      <Button variant="primary" onClick={props.click}>Continue</Button>
      </div>
    </div>
  )
}

export default checkoutSummary;