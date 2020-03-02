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
 const setIngredients = (ings) => {
 return {
  type: actionType.SET_INGREDIENTS,
  ingredients: ings
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
       console.log(response);
       dispatch(setIngredients(response.data.result.ingredients))
     }).catch(error => {
      console.log('hiiii'+error);
       return dispatch => {
         dispatch(ingredientsFetchfailed(error));
       }
     });
 }
}