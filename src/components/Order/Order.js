import React from 'react';
import classes from './Order.css'
import { Card, Container} from 'react-bootstrap';

const order = (props) => {
  const ingredients = [];
  for (let key in props.ingredients) {
    ingredients.push({
      name: key,
      amount: props.ingredients[key]
    });
  }

  const ingredientsOutput = ingredients.map(ig => {
    return <span style={{ padding: '3px', margin: '0 5px', border: '1px solid #ccc'}} key={ig.name}>{ig.name}({ig.amount})</span>
  })

  return <Container className={classes.Order}>
    <Card className={classes.OrderCard}>
      <p><strong>Ingredients:</strong>{ingredientsOutput}</p>
      <h5><strong>Price:{props.price}</strong></h5>
    </Card>
        </Container>
}

export default order;
