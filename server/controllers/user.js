const Users = require('../models/user-model');
const sendResponse = require('../response/send-response');

const userDetails = new Users();

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