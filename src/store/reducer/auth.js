import * as actionType from '../actions/actionType';
import { updateObject } from '../ulility';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { isLogin: true, error: false, user } : {};

const reducer  = (state = initialState, action) =>{
  switch (action.type) {
    case actionType.USER_SIGN_IN_SUCCESS:
    return {
       ...state,
       isLogin: true,
        user:  action.user,
        error: false
      };
    case actionType.USER_SIGN_IN_FAILED:
    return {
     ...state,
     isLogin: false,
     error:true
      };
    case actionType.USER_LOGOUT:
    return {
     ...state,
     isLogin: false
      };
    default:
      return state
  }
}

export default reducer;