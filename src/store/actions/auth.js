import * as actionType from './actionType'
import * as authService from '../../services/auth.service';



export const userLoginSuccess = (user) => {
 return {
   type: actionType.USER_SIGN_IN_SUCCESS,
   user: user
 }
}

export const userLoginFailed = (error) => {
 return {
  type: actionType.USER_SIGN_IN_FAILED,
  error: error
 }
}

export const userSignUpSuccess = () => {
 return {
  type: actionType.USER_SIGN_UP_SUCCESS,
 }
}

export const userSignUpFailed = (error) => {
 return {
  type: actionType.USER_SIGN_UP_FAILED,
  error: error
 }
}

export const userSignUpStart = (userData) => {
  return dispatch => {

    authService.registerUser(userData).then(response => {
      console.log(response);
      dispatch(userSignUpSuccess());
    }).catch(error => {
      dispatch(userSignUpFailed(error));
    });
  }
}

export const userLoginStart = (authCredenitals) => {
  return dispatch => {
    authService.login(authCredenitals).then(response => {
      let user = JSON.parse(localStorage.getItem('user'));
      dispatch(userLoginSuccess(user));
    }).catch(error => {
      dispatch(userLoginFailed(error));
    })
  }
}