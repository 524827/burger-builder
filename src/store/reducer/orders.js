import * as actionType from '../actions/actionType';
import { updateObject} from '../ulility';

// initial state
const initialState = {
 orderDetails: [],
  error: false,
  purchased: false
}

/**
 * @function purchaseBurgerSuccess - called when orderDeatails successfully store in database
 * @param {*} state - state object which contains data
 * @param {*} action - actions
 */
const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { orderId: action.orderId });
  const newOrderDetails = state.orderDetails.concat(newOrder);
  const updatedState = updateObject(state, { orderDetails: newOrderDetails });
  console.log(updatedState);
  const updatedOrders = updateObject(updatedState, { purchased: true });
  return updatedOrders;
}

/**
 * @function reducer - reducer for store order details in central store
 * @param {*} state - state object
 * @param {*} action - actions
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
    case actionType.PURCHASE_BURGER_FAILED: return updateObject(state, { error: true });
    case actionType.PURCHASE_INIT: return updateObject(state, { purchased: false });
    default: return state
   }
}
export default reducer;