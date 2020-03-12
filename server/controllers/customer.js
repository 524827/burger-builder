const Customers = require('../models/customer-model');
const sendResponse = require('../response/send-response');

const customerDetails = new Customers();

// controller for get order details from database
exports.getCustomers = (req, res, next) => {
  const user = req.query.user;
  customerDetails.getCustomerData(user,(err, result) => {
    if (err) {
      sendResponse(res, err, 'Something went wrong', true);
    } else {
      sendResponse(res, result, 'data fetch successfully', false);
    }
  });
};

// controller for save order details
exports.setCustomers = (req, res, next) => {
  customerDetails.setCustomerData(req, (err, result) => {
    if (err) {
      sendResponse(res, err, 'Something went wrong', true);
    } else {
      console.log(err);
      sendResponse(res, result, 'data fetch successfully', false);
    }
  });
};
