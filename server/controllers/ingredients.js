const Ingedients = require('../models/ingredients-model');
const sendResponse = require('../response/send-response');

const ingredientsDetails = new Ingedients();

// controller for get ingredient details from database
exports.getIngredients = (req, res, next) => {
 ingredientsDetails.getIngredientsDetails((err, result) => {
    if (err) {
      sendResponse(res, err, 'Something went wrong', true);
    } else {
      console.log(result);
      sendResponse(res, result, 'data fetch successfully', false);
    }
  });
}