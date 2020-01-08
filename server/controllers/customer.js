const Users = require('../models/customer-model');
const sendResponse = require('../response/send-response');

const userDetails = new Users();

exports.getCustomers = (req, res, next) => {
  userDetails.getCustomerData((err, result) => {
    if (err) {
      sendResponse(res, err, 'Something went wrong', true);
    } else {
      sendResponse(res, result, 'data fetch successfully', false);
    }
  });
}

exports.setCustomers = (req, res, next) => {
  userDetails.setCustomerData(req,(err, result) => {
    if (err) {
      sendResponse(res, err, 'Something went wrong', true);
    } else {
      sendResponse(res, result, 'data fetch successfully', false);
    }
  });
}