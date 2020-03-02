import * as actionType from './actionType';
import axios from '../../axios';

export const purchaseBurgerSuccess = (orderId, orderData) => {
  return {
    type: actionType.PURCHASE_BURGER_SUCCESS,
    orderId: orderId,
    orderData: orderData,
  };
};

export const purchaseBurgerFailed = error => {
  return {
    type: actionType.PURCHASE_BURGER_FAILED,
    error: error,
  };
};

export const purchaseBurderStart = orderData => {
  console.log('data in action' + orderData);
  return dispatch => {
     axios
      .post('customers/customers-info', orderData)
       .then(response => {
         console.log(response);
        dispatch(purchaseBurgerSuccess(response.data.result, orderData));
      })
      .catch(error => {
        console.log(error);
        dispatch(purchaseBurgerFailed(error));
      });
  };
};
