import * as actionType from '../actions/actionType';

const initialState = {
 register: false,
 error: false
}


const  reducer = (state = initialState, action) =>{
 switch (action.type) {
   case actionType.USER_SIGN_UP_START:
   return {};
   case actionType.USER_SIGN_UP_SUCCESS:
   return {
    ...state,
    register: true,
    error: false
     };
   case actionType.USER_SIGN_UP_FAILED:
   return {
    ...state,
    register: false,
    error: true
     };
   default:
     return state
 }
}

export default reducer;