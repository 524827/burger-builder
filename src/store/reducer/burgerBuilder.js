import * as actionType from '../actions/actionType';
import {updateObject } from '../ulility';

const initialState = {
 ingredients: {
  salad: 0,
  cheese: 0,
  bacon: 0,
  meat: 0,
},
  totalPrice: 50,
  error: false
}

const INGREDIENT_PRICES = {
  salad: 5,
  cheese: 10,
  meat: 3,
  bacon: 7,
};

/**
 *@function addIngredients - function for add ingredinets in store
 * @param {*} state - state object
 * @param {*} action - action
 */
const addIngredients = (state,action) => {
  const newIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
  const updatedIngredients = updateObject(state.ingredients, newIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  }
  return updateObject(state, updatedState);
}

/**
 *@function removeIngredients - function for remove ingredinets in store
 * @param {*} state - state object
 * @param {*} action - action
 */
const removeIngredients = (state, action) => {
  const newIngs = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
      const updatedIngredient = updateObject(state.ingredients, newIngs);
      const updatedStat = {
        ingredients: updatedIngredient,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }
      return updateObject(state, updatedStat);
}

/**
 * @function setIngredients - function for set ingredients in store
 * @param {*} state - state object
 * @param {*} action - action
 */
const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    totalPrice: action.totalPrice,
    error: false
  });
}

/**
 * @function ingredientsFetchFailed - called when ingredinets fetch failed
 * @param {*} state - state object
 */
const ingredientsFetchFailed = (state) => {
  return updateObject(state, { error: true });
}

/**
 * @function reducer - reducer for store ingredients details in central store
 * @param {*} state - state which contains data
 * @param {*} action - actions
 */
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionType.ADD_INGREDIENT: return addIngredients(state, action);
    case actionType.REMOVE_INGREDIENT: return removeIngredients(state, action);
    case actionType.SET_INGREDIENTS: return setIngredients(state, action);
    case actionType.INGREDIENTS_FETCH_FAILED: return ingredientsFetchFailed(state);
    default:
      return state;
  }
}

export default reducer;