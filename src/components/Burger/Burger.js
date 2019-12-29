import React, { Component } from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import PropTypes from 'prop-types';


class Burger extends Component{


  render() {
   /**
   * This function convert object into array based on number of ingredients present in object
   */
  let transformIngredients = Object.keys(this.props.ingredients).map(igKeys => {
    return [...Array(this.props.ingredients[igKeys])].map((_, i) => {
      return <BurgerIngredient key={igKeys + i} type={igKeys}/>
    })
  }).reduce((arr, el) => {
    return arr.concat(el);
  });

  // check if ingredient available in burger or not
  if (transformIngredients.length === 0) {
    transformIngredients = <p>please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
 }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default Burger;