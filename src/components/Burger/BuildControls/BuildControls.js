import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese',type: 'cheese' },
  { label:'Meat',type:'meat'},
]
const buildControls = (props) => {
  return <div className={classes.BuildControls}>
    <p>Current Price:{props.currentPrice}</p>
    {controls.map(ctrl =>
      <BuildControl key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemove(ctrl.type)}
        disable= {props.disableInfo[ctrl.type]}
      />
    )}
    <button className={`btn btn-success ${classes.OrderButton}`}
      disabled={!props.purchasable} data-toggle="modal"
      data-target="#modalbox"
      onClick={props.purchaseHandler}>ORDER NOW</button>
  </div>
}

export default buildControls;