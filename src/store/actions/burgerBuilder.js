import * as actionType from './actionType'
import axios from '../../axios';

// action for add ingredients
export const addIngredient = (ingName) => {
 return {
  type: actionType.ADD_INGREDIENT,
  ingredientName: ingName
 }
}

// action for removed ingredients
export const removedIngredient = (ingName) => {
 return {
  type: actionType.REMOVE_INGREDIENT,
  ingredientName: ingName
 }
}

// function for set ingredients
 const setIngredients = (ings,totalPrice) => {
 return {
  type: actionType.SET_INGREDIENTS,
   ingredients: ings,
   totalPrice: totalPrice
 }
 }

 // function for handle error
const ingredientsFetchfailed = (error) => {
  return {
    type: actionType.INGREDIENTS_FETCH_FAILED,
    errorMsg: error.message
   }
 }

// action for initiate ingredients
export const initIngredients = () => {
   return dispatch => {
     axios.get('ingredients').then(response => {
       const totalPrice = response.data.result.total_price
       const ingredients = response.data.result.ingredients
       dispatch(setIngredients(ingredients,totalPrice))
     }).catch(error => {
      console.log('hiiii'+error);
       return dispatch => {
         dispatch(ingredientsFetchfailed(error));
       }
     });
 }
}