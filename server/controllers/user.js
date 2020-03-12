const Users = require('../models/user-model');
const sendResponse = require('../response/send-response');

const userDetails = new Users();

/**
 * @function getLoginDetails - function for get user login details
 */
exports.getUserDetails = (req, res, next) => {
 const userCredentials = {
  email: req.body.email.value,
  password: req.body.password.value
 };
 console.log(userCredentials);
 userDetails.getLoginDetails(userCredentials,(error, response, message) => {
  if (error) {
   sendResponse(res, [], message, true);
  }
  else {
   sendResponse(res, response, message, false);
  }
 });
}

/**
 * @function setLoginDetails - function for register user details
 */
exports.setUserDetails = (req, res, next) => {
 const userCredentials = {
  email: req.body.email,
  password: req.body.password
 };
 console.log(userCredentials);
 userDetails.setLoginDetails(userCredentials,(error, response) => {
  if (error) {
   sendResponse(res, [], "Something went wrong", true);
  }
  else {
   sendResponse(res, response, "data fetch successfully", false);
  }
 });
}

/**
 * @function logoutUser - function for logout user from devices 
 */
exports.logoutUser = async (req, res, next) => {
 try {
   req.user.tokens = req.user.tokens.filter(token => {
   return token.token !== req.token;
  });
  await req.user.save();
  sendResponse(res, [],'Logout Successfully',false)
 }
 catch (e) {
  sendResponse(res, [],'Logout Failed',true)
 }
}