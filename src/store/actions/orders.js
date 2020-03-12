import * as actionType from './actionType';
import axios from '../../axios';

// action for PURCHASE_BURGER_SUCCESS
export const purchaseBurgerSuccess = (orderId, orderData) => {
  return {
    type: actionType.PURCHASE_BURGER_SUCCESS,
    orderId: orderId,
    orderData: orderData,
  };
};

// action for PURCHASE_BURGER_FAILED
export const purchaseBurgerFailed = error => {
  return {
    type: actionType.PURCHASE_BURGER_FAILED,
    error: error,
  };
};

/**
 * @function purchaseBurderStart - function for store order details on server
 * @param {*} orderData - it contains customer details
 * @param {*} ingredientsDetails - it contains ingredient details
 * @param {*} totalPrice - it contains total price of burger
 */
export const purchaseBurderStart = (orderData, ingredientsDetails, totalPrice, user) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
  }
  const ingredients = {...ingredientsDetails}
  const data = { ...orderData, totalPrice, ingredients, user };
  purchaseInit();
  return dispatch => {
     axios
      .post('customers/customer-details', data,{headers:headers})
       .then(response => {
         console.log(response);
        dispatch(purchaseBurgerSuccess(response.data.result._id, response.data.result));
      })
      .catch(error => {
        console.log(error);
        dispatch(purchaseBurgerFailed(error));
      });
  };
};

// action for PURCHASE_INIT
export const purchaseInit = () => {
  return {
  type: actionType.PURCHASE_INIT
}
}
