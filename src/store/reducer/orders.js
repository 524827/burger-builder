import * as actionType from '../actions/actionType';


const initialState = {
 orderDetails: [],
 error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

  case actionType.PURCHASE_BURGER_SUCCESS:
   const newOrder = {
    ...action.orderdata,
    orderId: action.orderId
   }
   return {
    ...state,
    orderDetails: state.orderDetails.concat(newOrder)
   };

  case actionType.PURCHASE_BURGER_FAILED:
   return {
    ...state,
    error: true
   };
  default:
   return state
 }
}
export default reducer;